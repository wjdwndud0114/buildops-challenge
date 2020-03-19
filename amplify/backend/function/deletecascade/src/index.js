/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiBuildopsGraphQLAPIIdOutput = process.env.API_BUILDOPS_GRAPHQLAPIIDOUTPUT
var apiBuildopsGraphQLAPIEndpointOutput = process.env.API_BUILDOPS_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");

AWS.config.update({ region: process.env.REGION });
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, _, callback) => {
  // assume fieldName is always "deleteTABLENAME"
  const model = event.fieldName.replace("delete", "");
  const tableSuffix =
    "-" + process.env.API_BUILDOPS_GRAPHQLAPIIDOUTPUT + "-" + process.env.ENV;
  const deletedId = event.arguments.input.id;
  let keyName, indexName;

  switch (model) {
    case "Skill":
      keyName = "skillId";
      indexName = "skillOfEmployee";
      break;
    case "Employee":
      keyName = "employeeId";
      indexName = "employeeOfSkill";
      break;
    default:
      throw new Error("Unknown model: " + model);
  }

  try {
    const tasks = [
      query("EmployeeSkill" + tableSuffix, indexName, deletedId, keyName)
    ];
    if (model === "Employee") {
      tasks.push(
        query("Address" + tableSuffix, "ofEmployee", deletedId, keyName)
      );
    }

    const [esData, aData] = await Promise.all(tasks);

    await Promise.all([
      deleteItems(esData, "EmployeeSkill" + tableSuffix),
      deleteItems(aData ? aData : { Count: 0 }, "Address" + tableSuffix)
    ]);

    let payload = await dynamodb
      .delete({
        TableName: model + tableSuffix,
        Key: {
          id: deletedId
        },
        ReturnValues: "ALL_OLD"
      })
      .promise();

    callback(null, payload.Attributes);
  } catch (err) {
    console.log(err);
    callback(err);
    return;
  }
};

const query = (tableName, indexName, deletedId, keyName) =>
  dynamodb
    .query({
      TableName: tableName,
      IndexName: indexName,
      KeyConditionExpression: `${keyName} = :id`,
      ExpressionAttributeValues: {
        ":id": deletedId
      },
      ProjectionExpression: "id"
    })
    .promise();

const deleteItems = (data, tableName) => {
  if (data.Count === 0) return Promise.resolve();

  const items = data.Items.map(i => ({
    DeleteRequest: { Key: i }
  }));

  // 25 is max per batchwrite
  const tasks = [];
  for (let i = 0; i < data.Count; i += 25) {
    tasks.push(
      dynamodb
        .batchWrite({
          RequestItems: {
            [tableName]: items.slice(i, i + 24)
          }
        })
        .promise()
    );
  }
  return Promise.all(tasks);
};

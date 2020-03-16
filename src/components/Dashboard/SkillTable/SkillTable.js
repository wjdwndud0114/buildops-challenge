import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import * as mutations from "../../../graphql/mutations";

export default function SkillTable() {
  const testData = [{ id: "23452", name: "React" }];
  const [skillData, setSkillData] = useState(testData);

  useEffect(() => {
    const fetchSkillData = async () => {
      const result = await API.graphql(graphqlOperation(queries.listSkills));
      setSkillData(result.data.listSkills.items);
    };

    fetchSkillData();
  }, []);

  return (
    <MaterialTable
      title="Skills"
      data={skillData}
      columns={[{ title: "Skill Name", field: "name" }]}
      editable={{
        onRowAdd: ({ name }) =>
          API.graphql(
            graphqlOperation(mutations.createSkill, {
              input: { name }
            })
          ),
        onRowUpdate: ({ id, name }, oldData) =>
          API.graphql(
            graphqlOperation(mutations.updateSkill, {
              input: { id, name }
            })
          ),
        onRowDelete: ({ id }) =>
          API.graphql(
            graphqlOperation(mutations.deleteSkill, {
              input: { id }
            })
          )
      }}
    />
  );
}

import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../../graphql/queries";

export default function SkillTable() {
  const testData = [{ id: "23452", name: "React" }];
  const [skillData, setSkillData] = useState(testData);

  useEffect(() => {
    const fetchSkillData = async () => {
      const result = await API.graphql(graphqlOperation(queries.listSkills));
      setSkillData(result.data.listSkills.items);
      console.log(result);
    };

    fetchSkillData();
  }, []);

  return (
    <MaterialTable
      title="Skills"
      data={skillData}
      columns={[{ title: "Skill Name", field: "name" }]}
      editable={{
        onRowAdd: newData => null,
        onRowUpdate: (newData, oldData) => null,
        onRowDelete: oldData => null
      }}
    />
  );
}

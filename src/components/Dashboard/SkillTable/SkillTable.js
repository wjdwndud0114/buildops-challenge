import React, { useState } from "react";
import MaterialTable from "material-table";

export default function SkillTable() {
  const testData = [{ id: "23452", name: "React" }];
  const [skillData, setSkillData] = useState(testData);

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

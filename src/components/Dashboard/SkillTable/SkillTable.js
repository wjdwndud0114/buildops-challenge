import React from "react";
import MaterialTable from "material-table";

export default function SkillTable() {
  return (
    <MaterialTable
      columns={[{ title: "Skill Name", field: "name" }]}
      data={[{ name: "React" }]}
      title="Skills"
    />
  );
}

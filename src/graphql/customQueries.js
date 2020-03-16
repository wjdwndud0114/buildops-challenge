export const listEmployeesForTable = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        addresses {
          items {
            id
            employeeId
            line1
            line2
            city
            state
            zipcode
          }
          nextToken
        }
        skills {
          items {
            id
            skill {
              id
              name
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const listSkillsForTable = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        employees {
          items {
            id
            employee {
              id
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const getEmployeeForTable = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstname
      lastname
      addresses {
        items {
          id
          employeeId
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skill {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;

export const getSkillForTable = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      employees {
        items {
          id
          employee {
            id
          }
        }
        nextToken
      }
    }
  }
`;

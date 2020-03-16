/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
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
          employee {
            id
            firstname
            lastname
          }
        }
        nextToken
      }
      skills {
        items {
          id
          employeeId
          skillId
          employee {
            id
            firstname
            lastname
          }
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
export const listEmployees = /* GraphQL */ `
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
            employeeId
            skillId
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      employeeId
      line1
      line2
      city
      state
      zipcode
      employee {
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
            employeeId
            skillId
          }
          nextToken
        }
      }
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        employeeId
        line1
        line2
        city
        state
        zipcode
        employee {
          id
          firstname
          lastname
          addresses {
            nextToken
          }
          skills {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      employees {
        items {
          id
          employeeId
          skillId
          employee {
            id
            firstname
            lastname
          }
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
export const listSkills = /* GraphQL */ `
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
            employeeId
            skillId
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

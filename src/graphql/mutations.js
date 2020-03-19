/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createEmployeeSkill = /* GraphQL */ `
  mutation CreateEmployeeSkill(
    $input: CreateEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    createEmployeeSkill(input: $input, condition: $condition) {
      id
      employeeId
      skillId
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
      skill {
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
    }
  }
`;
export const updateEmployeeSkill = /* GraphQL */ `
  mutation UpdateEmployeeSkill(
    $input: UpdateEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    updateEmployeeSkill(input: $input, condition: $condition) {
      id
      employeeId
      skillId
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
      skill {
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
    }
  }
`;
export const deleteEmployeeSkill = /* GraphQL */ `
  mutation DeleteEmployeeSkill(
    $input: DeleteEmployeeSkillInput!
    $condition: ModelEmployeeSkillConditionInput
  ) {
    deleteEmployeeSkill(input: $input, condition: $condition) {
      id
      employeeId
      skillId
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
      skill {
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
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateEmployeeSkill = /* GraphQL */ `
  subscription OnCreateEmployeeSkill {
    onCreateEmployeeSkill {
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
export const onUpdateEmployeeSkill = /* GraphQL */ `
  subscription OnUpdateEmployeeSkill {
    onUpdateEmployeeSkill {
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
export const onDeleteEmployeeSkill = /* GraphQL */ `
  subscription OnDeleteEmployeeSkill {
    onDeleteEmployeeSkill {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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

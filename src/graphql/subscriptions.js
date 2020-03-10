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
        }
        nextToken
      }
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
  }
`;
export const onCreateEmployeeSkill = /* GraphQL */ `
  subscription OnCreateEmployeeSkill {
    onCreateEmployeeSkill {
      id
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
      skill {
        id
        name
        employees {
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
      skill {
        id
        name
        employees {
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
      skill {
        id
        name
        employees {
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
        }
        nextToken
      }
    }
  }
`;

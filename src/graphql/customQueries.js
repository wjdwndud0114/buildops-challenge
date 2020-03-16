export const listEmployeesFull = /* GraphQL */ `
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

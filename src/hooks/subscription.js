import { API, graphqlOperation } from "aws-amplify";

export function useSubscribeCUD({
  createSub,
  updateSub,
  deleteSub,
  createCallback,
  updateCallback,
  deleteCallback
}) {
  console.log("SUBSCRIBE CUD");
  const subscriptionList = [];
  subscriptionList.push(
    API.graphql(graphqlOperation(createSub)).subscribe({
      next: eventData => createCallback(eventData.value.data)
    })
  );

  subscriptionList.push(
    API.graphql(graphqlOperation(updateSub)).subscribe({
      next: eventData => updateCallback(eventData.value.data)
    })
  );

  subscriptionList.push(
    API.graphql(graphqlOperation(deleteSub)).subscribe({
      next: eventData => deleteCallback(eventData.value.data)
    })
  );
  return subscriptionList;
}

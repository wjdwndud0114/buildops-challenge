import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import loggerMiddleware from "./middleware/logger";
import rootReducer from "./redux/reducers";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./redux/reducers", () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}

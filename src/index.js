import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "./Store";
import "./index.module.scss";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
const client = new ApolloClient({
  uri: "https://72.arrowhitech.net/tn3/mixy_server/index.php?graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

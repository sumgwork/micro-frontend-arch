import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<Landing />, el);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el);
  }
}

// If we are running through container, export the mount
export { mount };

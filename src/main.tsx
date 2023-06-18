import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import useAuthorData from "./hooks/useAuthorData.tsx";

const Main: React.FC = () => {
  const data = useAuthorData();

  return (
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);

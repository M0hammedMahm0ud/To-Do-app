import { ToDo } from "./ToDo";
import { useState } from "react";
import ToDo2 from "./components/ToDo2";

function App() {
  const [app, setApp] = useState("");

  return (
    <>
      <h1>I Built two to do apps </h1>
      <button onClick={() => setApp("first")}>the first one</button>
      <button onClick={() => setApp("second")}>the second one</button>
      {app === "first" ? <ToDo /> : app === "second" ? <ToDo2 /> : null}
    </>
  );
}

export default App;

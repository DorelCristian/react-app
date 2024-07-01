/*import ListGroup from "./components/ListGroup";
function App()
{
  return <div><ListGroup></ListGroup></div>
}
export default App;*/
// src/App.tsx
import React from "react";
import CursaList from "./components/CursaList";

const App: React.FC = () => {
  return (
    <div className="App">
      <CursaList />
    </div>
  );
};

export default App;

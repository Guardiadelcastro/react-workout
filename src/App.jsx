import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return <div className="App"></div>;
}

export default App;

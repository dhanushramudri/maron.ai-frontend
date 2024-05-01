import "./App.css";

function App() {
  const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  console.log(PUBLISHABLE_KEY);
  return <div className="App">Maron.ai</div>;
}

export default App;

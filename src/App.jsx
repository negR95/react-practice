import "./App.css";
import Clock from "./Components/Clock/Clock";
import Counter from "./Components/Counter/Counter";
import ListItems from "./Components/ListItems/ListItems";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  return (
    <div>
      <Clock />
      <Counter />
      <ListItems />
      <LoginForm />
    </div>
  );
}

export default App;

import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Leatn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;

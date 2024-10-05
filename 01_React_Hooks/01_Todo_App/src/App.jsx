import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [uid, setUid] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    setItems([...items, input]);
    setInput("");
  };

  const handleUpdateTask = () => {
    setItems((prevItems) =>
      prevItems.map((item, index) => (index === uid ? input : item))
    );
    setInput("");
    setIsUpdating(false);
  };

  const handleDeleteItem = (i) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== i));
  };

  const handleEditItem = (i) => {
    setInput(items[i]);
    setUid(i);
    setIsUpdating(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold text-2xl text-gray-500 mb-4">Todo App</h1>
      <div className="flex justify-center mb-4">
        <input
          value={input}
          onChange={handleInput}
          className="p-2 border-solid border-2 border-purple-500 rounded-l-lg outline-purple-700 w-full md:w-1/2"
          type="text"
          placeholder="Enter your task"
        />
        <button
          onClick={isUpdating ? handleUpdateTask : handleAddTask}
          className={`border-solid border-2 p-2 rounded-r-lg ${
            isUpdating ? "border-blue-500 bg-blue-500" : "border-green-500 bg-green-500"
          }`}
        >
          {isUpdating ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="tasklist">
        <ul className="m-auto text-left w-full md:w-1/2">
          {items.map((item, i) => (
            <div className="flex items-center mb-2" key={i}>
              <li className="border-solid border-2 border-purple-500 p-2 w-full rounded-l-lg">
                {item}
              </li>
              <div className="flex">
                <button
                  onClick={() => handleEditItem(i)}
                  className="bg-blue-400 p-2 border-solid border-2 border-blue-400"
                  type="button"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteItem(i)}
                  className="rounded-r-lg bg-red-400 border-solid border-2 border-red-500 p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { TaskCard } from "./components/TaskCard";
import { penalties } from "./penalties";
import { RefreshCw, RefreshCcw } from "lucide-react";

/**
 * Math.floor(Math.random() * penalties.length)
 */

const getRandomPenalty = () => {
  const index = Math.floor(Math.random() * penalties.length);
  return penalties[index];
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState(""); // our input value
  const [penaltyTask, setPenaltyTask] = useState(getRandomPenalty()); // set the default value when the page loads
  const [spinRefresh, setSpinRefresh] = useState(false);

  function handleTaskSubmit(e) {
    e.preventDefault();

    const newTasks = {
      taskTitle: inputValue,
      createdAt: Date.now(),
      expAmount: 10,
    };

    const newArray = [...tasks, newTasks];
    setTasks(newArray);
  }

  function removeTask(createdAt) {
    const remainingTasks = tasks.filter((task) => createdAt !== task.createdAt);
    setTasks(remainingTasks);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl">Tasks</h2>
      <div className="flex gap-4">
        <h4>{penaltyTask}</h4>
        <RefreshCw
          onClick={() => {
            setPenaltyTask(getRandomPenalty());
            setSpinRefresh(true);
          }}
          onTransitionEnd={() => setSpinRefresh(false)}
          className={`transition-transform duration-500 ease-in-out cursor-pointer ${
            spinRefresh ? "rotate-180" : "-rotate-180"
          }`}
        />
      </div>
      <form onSubmit={(e) => handleTaskSubmit(e)}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded-xl"
          placeholder="Enter your tasks here"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="flex flex-col gap-4 my-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.createdAt}
            taskObj={task}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

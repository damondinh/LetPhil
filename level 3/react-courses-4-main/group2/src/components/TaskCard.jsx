import React, { useEffect, useState } from "react";

export const TaskCard = ({ taskObj, removeTask }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className="flex">
      <div
        className={`flex flex-col justify-center items-center border-2 p-2 text-left rounded-xl ${
          isDone ? "bg-green-900" : ""
        }`}
      >
        <p>{taskObj.taskTitle}</p>
        <div className="flex gap-2">
          {"" + isDone}
          <button onClick={() => setIsDone(!isDone)}>✅</button>
          <button onClick={() => removeTask(taskObj.createdAt)}>❌</button>
        </div>
      </div>
      <div>{taskObj.createdAt}</div>
    </div>
  );
};

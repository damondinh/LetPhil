import { useState } from "react";

function Fitness() {
  const [calorieCount, setCalorieCount] = useState(0);

  return (
    <>
      <h1>Calorie count: {calorieCount}</h1>
      <h2>Pushups</h2>
      <button onClick={() => setCalorieCount(calorieCount + 1)}>
        Increase Count
      </button>
    </>
  );
}

export default Fitness;

/**
 * Hooks, useState, useEffect | Optional: useRef, useMemo
 * Props, passing props storing them in state
 * Array Methods: map, reduce, filter
 * Components - seperate them into pages, components
 * Rendering, Re-Rendering (rerenders happen only on initial load and state being udpated)
 ------------------------------------------------------------------------------------------
 * Global State => Redux, Zustand, Context Api
 * Routing => React Router, Layouts, Links,
 * Tailwind - Faster way to do css
 * Todo Application - basic crud app
 */

/**
 * Backend
 * Basic Express Server
 * Routing
 * Controllers
 * Middleware
 * Connecting Database
 * Databasing Language (SQL,MySQL) | ORM(Prisma, Sequalize, etc)
 * MVC Pattern (Services, Repositories)
 * Request, Response
 * --------------------------------------------------------------
 * Authentication Routes (JWT, Bcrypt)
 */

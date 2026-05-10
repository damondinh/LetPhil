# Futuristic Async JavaScript — 3 Mini Projects

You’re building **3 usable mini-apps** to learn async fundamentals in a way that feels real.

## What you’ll practice overall

- **Synchronous vs Asynchronous**: why your `console.log()` runs first, but UI updates happen later
- **Timers**
  - `setTimeout()` + `clearTimeout()` (scheduled one-time steps)
  - `setInterval()` + `clearInterval()` (repeat every second)
- **Promises**
  - Creating a Promise that **resolves** or **rejects**
  - Handling success/failure with **.then() / .catch()**
  - Rewriting with **async/await** + **try/catch**
- **UI Updates**
  - changing `textContent`
  - adding/removing CSS classes (status pills, active/done steps, loading states)

## Project 1 — Coffee Order Status Tracker (setTimeout)

**Goal:** click “Place Order” and watch the timeline go **Pending → Brewing → Ready**.

### Concepts

- synchronous logs vs async updates
- **chaining timeouts** (or multiple scheduled timeouts)
- updating DOM text + classes
- optional: cancel order with **clearTimeout**

---

## Project 2 — Focus Sprint Timer (setInterval)

**Goal:** a usable mini pomodoro timer with Start / Pause / Reset and a progress bar.

### Concepts

- `setInterval` tick every second
- `clearInterval` stopping cleanly
- time formatting `mm:ss`
- progress bar math (percentage)

---

## Project 3 — Mystery Box Reward Loader (Promises + then/catch + async/await)

**Goal:** click to open a box — it “loads” a reward with suspense, and sometimes fails on purpose.

### Concepts

- creating a Promise that resolves/rejects after a delay
- `.then() / .catch()` flow
- rewrite same logic with `async/await`
- `try/catch` error handling
- loading / success / error UI states

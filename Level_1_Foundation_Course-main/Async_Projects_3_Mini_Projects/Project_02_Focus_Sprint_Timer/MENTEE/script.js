/*
===========================================================
PROJECT 2 — Focus Sprint Timer (setInterval)
===========================================================

🎯 WHAT YOU ARE BUILDING
A usable mini "pomodoro-style" timer with:
- big timer display (mm:ss)
- Start / Pause / Reset
- progress bar that fills up as time passes
- "Sprint Complete" message when done

-----------------------------------------------------------
STEP 1 — Grab DOM elements (IDs already exist)
Use document.getElementById(...) to select:

Inputs:
- minutesInput
- secondsInput

Buttons:
- startBtn
- pauseBtn
- resetBtn

UI:
- timeDisplay
- statusText
- progressBarFill

-----------------------------------------------------------
STEP 2 — Create state variables
You need to store:
- intervalId (the id returned by setInterval)
- totalSeconds (full sprint length in seconds)
- remainingSeconds (countdown value)
- isRunning (boolean, optional but helps prevent duplicate intervals)

-----------------------------------------------------------
STEP 3 — Helper functions
A) readInputSeconds()
   - read the inputs
   - convert to a single number (mins*60 + secs)
   - validate > 0 (if not, show warning in statusText)

B) formatTime(seconds)
   - convert seconds into a string "mm:ss"
   - use Math.floor + %
   - padStart for 2 digits

C) render()
   - update timeDisplay.textContent using formatTime(remainingSeconds)
   - update progress bar width:
     progress = (timePassed / totalSeconds) * 100
     width should clamp between 0 and 100

D) stopInterval()
   - if intervalId exists: clearInterval(intervalId)
   - set intervalId back to null
   - set isRunning to false

-----------------------------------------------------------
STEP 4 — Start button behavior
When user clicks Start:
1) If already running, do nothing
2) If remainingSeconds is 0, load a new sprint from inputs
3) Disable Start, enable Pause
4) statusText = "Running..."
5) setInterval every 1000ms:
   - remainingSeconds -= 1
   - render()
   - if remainingSeconds <= 0:
     - stopInterval()
     - statusText = "✅ Sprint Complete!"
     - enable Start, disable Pause

-----------------------------------------------------------
STEP 5 — Pause button behavior
Pause should stop the interval but keep remainingSeconds:
- stopInterval()
- statusText = "Paused"
- enable Start, disable Pause

-----------------------------------------------------------
STEP 6 — Reset button behavior
Reset should:
- stopInterval()
- load inputs into totalSeconds + remainingSeconds
- render()
- statusText = "Idle — set a sprint and press Start"
- enable Start, disable Pause

-----------------------------------------------------------
✅ TEST YOUR APP
- Set 0:10 and press Start → should finish and show complete
- Pause mid-way → time stops
- Start again → continues from remaining time
- Reset → returns to input time
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE

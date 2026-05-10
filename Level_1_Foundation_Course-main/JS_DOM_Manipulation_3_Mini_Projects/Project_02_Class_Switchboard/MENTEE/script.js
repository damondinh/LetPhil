// 🎛️ Class Switchboard —
// LESSON TARGETS:
// - Selecting elements (querySelector)
// - Modifying elements (textContent)
// - Adding/removing classes (classList)
// - Temporary class using setTimeout
//
// GOAL:
// Buttons control ONE box:
// - Toggle Highlight: adds/removes a class
// - Shake: adds a class briefly, then removes it
// - Reset: removes classes and resets text

// --------------------------------------------
// STEP 1 — Select the elements you will control
// --------------------------------------------
// Select and store variables for:
// 1) #highlightBtn
// 2) #shakeBtn
// 3) #resetBtn
// 4) #messageBox
// 5) #statusText
//
// Then console.log each one.

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 2 — Toggle highlight class
// --------------------------------------------
// On highlightBtn click:
// 1) toggle the class "highlight" on messageBox
// 2) if messageBox HAS the class "highlight":
//      statusText.textContent = "highlight ON"
//    else:
//      statusText.textContent = "highlight OFF"
//
// Hint: messageBox.classList.contains("highlight")

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 3 — Shake the box (temporary class)
// --------------------------------------------
// On shakeBtn click:
// 1) add class "shake" to messageBox
// 2) statusText.textContent = "shaking..."
// 3) after 350ms remove class "shake"
// 4) after removing: statusText.textContent = "done shaking"

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 4 — Reset everything
// --------------------------------------------
// On resetBtn click:
// 1) remove class "highlight"
// 2) remove class "shake" (just in case)
// 3) statusText.textContent = "reset complete"

// ✅ WRITE YOUR CODE UNDER THIS LINE

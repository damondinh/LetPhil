// 📝 Glow Notes —
// LESSON TARGETS:
// - Selecting elements (getElementById, querySelector, querySelectorAll)
// - Modifying elements (textContent)
// - Creating / adding / removing elements (createElement, appendChild, remove)
// - Event delegation (one listener on the parent <ul>)
// - BONUS: classList (flash effect)
//
// GOAL:
// When the user types a note and clicks "Add Note":
// - A new <li> note appears
// - It has the note text + a Remove button
// - Clicking Remove deletes that note

// --------------------------------------------
// STEP 1 — Select important elements
// --------------------------------------------
// Select and store these DOM elements:
// 1) input with id "noteInput" (use getElementById)
// 2) button with id "addBtn" (use querySelector)
// 3) ul with id "noteList" (use querySelector)
//
// Then console.log all 3 variables to prove your selectors worked.

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 2 — Create a function that builds ONE note <li>
// --------------------------------------------
// Create a function: createNoteElement(noteText)
//
// Inside the function:
// 1) create an <li> and give it class "note"
// 2) create a <p> with class "noteText" and set p.textContent = noteText
// 3) create a <button> with classes "btn", "danger", "removeBtn"
// 4) set button.textContent = "Remove"
// 5) append p + button into the li
// 6) return the li

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 3 — Add click behavior to "Add Note"
// --------------------------------------------
// Add a click event listener to the Add button.
//
// When clicked:
// 1) read the input value (string)
// 2) if the input is empty (""), do nothing (return)
// 3) build a new <li> using createNoteElement(...)
// 4) append the new <li> into the noteList
// 5) clear the input (input.value = "")
// 6) console.log("Added note:", text)

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 4 — Remove notes (event delegation)
// --------------------------------------------
// We attach ONE click listener to the parent <ul> (#noteList).
// This works even for notes created later.
//
// On noteList click:
// 1) check if the clicked element has class "removeBtn"
//    (event.target.classList.contains("removeBtn"))
// 2) if yes, remove the closest <li> (event.target.closest("li").remove())
// 3) console.log("Removed a note")

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 5 — BONUS: Add a "flash" class when adding
// --------------------------------------------
// When a new note is added:
// 1) add class "flash" to the new li
// 2) remove it after 300ms using setTimeout
//
// (CSS already exists for .flash)

// ✅ WRITE YOUR CODE UNDER THIS LINE

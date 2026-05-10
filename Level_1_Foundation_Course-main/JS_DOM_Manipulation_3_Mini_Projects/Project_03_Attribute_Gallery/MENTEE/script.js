// 🖼️ Attribute Gallery —
// LESSON TARGETS:
// - Selecting elements (querySelector, querySelectorAll)
// - Creating / adding / removing elements (createElement, appendChild, remove)
// - Modifying attributes (setAttribute, getAttribute, removeAttribute)
// - Event delegation (one listener on #gallery)
//
// GOAL:
// 1) "Add Image" creates a new image card (thumb)
// 2) Each card has:
//    - an <img> with src + alt
//    - a Set Alt button
//    - a Remove button
//    - a data-id attribute on the card
// 3) Clicking "Set Alt" updates the image's alt attribute
// 4) Clicking "Remove" removes that specific card
// 5) "Clear All" removes every card

// --------------------------------------------
// STEP 1 — Select the main elements
// --------------------------------------------
// Select:
// 1) #imgUrlInput
// 2) #addImageBtn
// 3) #clearBtn
// 4) #gallery
//
// Then console.log them.

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 2 — Build a function that creates ONE thumb card
// --------------------------------------------
// Create a function: createThumb(url, idNumber)
//
// Inside:
// 1) create a div.thumb
// 2) set attribute data-id to idNumber (string)
// 3) create an <img>
//    - set src to the url
//    - set alt to "User image " + idNumber
// 4) create button "Set Alt" with classes: "btn" + "setAltBtn"
// 5) create button "Remove" with classes: "btn" + "removeThumbBtn"
// 6) append img + buttons into the thumb
// 7) return the thumb

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 3 — Add Image button: create + append
// --------------------------------------------
// We need an id counter so each new thumb gets a unique data-id.
//
// 1) create a variable nextId starting at 3
//    (because index.html already has data-id 1 and 2)
// 2) on addImageBtn click:
//    - read input url
//    - if empty, do nothing
//    - create a thumb using createThumb(url, nextId)
//    - append it to #gallery
//    - increment nextId
//    - clear the input

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 4 — Set Alt + Remove buttons (event delegation)
// --------------------------------------------
// Because thumbs can be added later, use ONE click listener on #gallery.
//
// On gallery click:
// A) If clicked .setAltBtn:
//    1) find closest .thumb
//    2) find the img inside it
//    3) read data-id using getAttribute
//    4) set img alt to: "Gallery image #" + thatId
//    5) console.log the new alt
//
// B) If clicked .removeThumbBtn:
//    1) find closest .thumb
//    2) remove it

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 5 — Clear All (practice option)
// --------------------------------------------
// On clearBtn click:
// 1) select all .thumb inside #gallery
// 2) remove each one with a loop (forEach)

// ✅ WRITE YOUR CODE UNDER THIS LINE

// --------------------------------------------
// STEP 6 — BONUS: querySelectorAll practice on load
// --------------------------------------------
// Right after page load:
// 1) select all existing .thumb elements
// 2) console.log how many you found
// 3) for each thumb, log its data-id

// ✅ WRITE YOUR CODE UNDER THIS LINE

//  Step 1: Create an empty array to store songs.
// Each song will be an object with { title, artist, mood, link }
//  Declare a variable named "playlist" and set it to an empty array
// 🧪 Console log to confirm the playlist is initialized as an empty array
let playlist = [];
//console.log(playlist);

//  Step 2: Get references to all the DOM elements (HTML elements we interact with)
//  Use document.getElementById() to store references to:
// - title input        → id="title"
// - artist input       → id="artist"
// - link input         → id="link"
// - mood dropdown      → id="mood"
// - form               → id="songForm"
// - playlist container → id="playlist"
// - filter dropdown    → id="filterMood"
// - shuffle button     → id="shuffleBtn"
// - dark mode button   → id="toggleModeBtn"
//  Console log to confirm all DOM elements were successfully selected
const titleInput = document.getElementById('title');
const artistInput = document.getElementById('artist');
const linkInput = document.getElementById('link');
const form = document.getElementById('songForm');
const playlistContainer = document.getElementById('playlist');
const filterDropdown = document.getElementById('filterMood');
const shuffleButton = document.getElementById('shuffleBtn');
const darkModeButton = document.getElementById('toggleModeBtn');
// console.log(titleInput);

// Step 3: Function to load the playlist from localStorage
//  Define a function called loadPlaylist()
// Inside the function:
// - Use localStorage.getItem("customPlaylist") to get the saved data
// - If there is data, parse it using JSON.parse()
// - Then update the playlist array with the parsed data
//  Console log to show the playlist loaded from localStorage
//  Console log to show that no playlist data was found (if none exists)
function loadPlaylist() {
  const savedPlaylist = localStorage.getItem("customPlaylist");
  if (savedPlaylist) {
    playlist = JSON.parse(saved);
    console.log(playlist);
  }
  else {
    console.log("No playlist found in local storage");
  }
}
loadPlaylist();
console.log(playlist);

//  Step 4: Function to save the playlist into localStorage
//  Define a function called savePlaylist()
// Inside the function:
// - Use JSON.stringify() to convert the playlist array to a string
// - Use localStorage.setItem() to save it with the key "customPlaylist"
//  Console log to confirm playlist was saved to localStorage
function savePlaylist() {
  localStorage.setItem("customPlaylist", JSON.stringify(playlist));
  console.log("Playlist saved to local storage")
}

//  Step 5: Function to render the songs onto the screen
//  Define a function called renderPlaylist(songsToRender)
// Inside the function:
// - First, clear the playlist container using innerHTML = ""
// - Use forEach to loop through each song and do the following:

//  1. Create a new div using document.createElement("div")
//  2. Give it a class of "song-card" using classList.add()
//  3. Set its innerHTML using a template literal:
/*
  <strong>${song.title}</strong><br>
  <em>Artist:</em> ${song.artist}<br>
  <em>Mood:</em> ${song.mood}<br>
  <a href="${song.link}" target="_blank">🎧 Listen</a><br>
  <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
*/

// 🔹 4. Append the new div to the playlist container
// 🧪 Console log to show which songs are being rendered

// 🧹 Then, after the forEach loop:
// - Use document.querySelectorAll(".delete-btn") to get all delete buttons
// - Loop through them and add a click event listener to each:
//    → Get the song index from data-index
//    → Remove the song from the playlist array using splice()
//    → Save and re-render the playlist again
// 🧪 Console log to confirm a song was deleted and show its index
function renderPlaylist(songsToRender) {
  playlistContainer.innerHTML = "";
  
  songsToRender.forEach((song, index) => {
    let songCard = document.createElement("div");
    songCard.classList.add("song-card");

    songCard.innerHTML = `
                    <strong>${song.title}</strong><br>
                    <em>Artist:</em> ${song.artist}<br>
                    <em>Mood:</em> ${song.mood}<br>
                    <a href="${song.link}" target="_blank">🎧 Listen</a><br>
                    <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
                  `;
    playlistContainer.appendChild(songCard);
  })
  
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      playlist.splice(index, 1);
      savePlaylist();
      renderPlaylist(playlist);
    });
  });
}

// ➕ Step 6: Function to handle adding a new song
// 👉 Define a function called addSong(e)
// Inside the function:
// - Use e.preventDefault() to stop the form from refreshing
// - Create a new object with title, artist, mood, and link
// - Push it into the playlist array
// - Save the playlist
// - Call renderPlaylist(playlist)
// - Use songForm.reset() to clear the form
// 🧪 Console log to confirm a new song was added

// 🎯 Step 7: Filter playlist by mood
// 👉 Define a function called filterPlaylist()
// Inside the function:
// - Get the selected value from filterMoodSelect
// - If it’s "all", call renderPlaylist(playlist)
// - Otherwise, use .filter() to get only songs that match the mood
// - Then call renderPlaylist(filtered)
// 🧪 Console log to show which mood was selected for filtering
// 🧪 Console log to show filtered results

// 🔀 Step 8: Shuffle the playlist using Fisher-Yates algorithm
// 👉 Define a function called shufflePlaylist()
// Inside the function:
// - Loop from the end of the array to the beginning (i = length - 1; i > 0; i--)
// - Create a random index j: Math.floor(Math.random() * (i + 1))
// - Swap playlist[i] and playlist[j] using destructuring
// - After the loop, save and render the playlist again
// 🧪 Console log to confirm the playlist was shuffled

// 🌙 Step 9: Toggle between Dark Mode and Light Mode
// 👉 Define a function called toggleDarkMode()
// Inside the function:
// - Use classList.toggle("dark") on the body
// - Use contains("dark") to check if dark mode is active
// - Update toggle button text accordingly ("Light Mode" or "Dark Mode")
// - Save the theme preference in localStorage (key = "theme")
// 🧪 Console log to confirm dark mode toggle state

// 💡 Step 10: Load the saved theme from localStorage
// 👉 Define a function called loadTheme()
// Inside the function:
// - Use getItem("theme") from localStorage
// - If it’s "dark", add the "dark" class to body and update toggle button text
// 🧪 Console log to confirm dark theme was loaded
// 🧪 Console log to confirm light/default theme

// 🎯 Step 11: Add event listeners to buttons and form
// 👉 Add the following event listeners:
// - songForm "submit" → addSong
// - filterMoodSelect "change" → filterPlaylist
// - shuffleBtn "click" → shufflePlaylist
// - toggleModeBtn "click" → toggleDarkMode
// 🧪 Console log to confirm all event listeners were attached

// 🚀 Step 12: Initialize the app
// 👉 Call the following functions:
// - loadPlaylist()
// - renderPlaylist(playlist)
// - loadTheme()
// 🧪 Console log to confirm the app has been initialized

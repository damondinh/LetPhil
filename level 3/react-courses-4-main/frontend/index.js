const username = document.getElementById("username-input").value;
const password = document.getElementById("password").value;

const options = {
  headers: {
    method: "POST"
  },
  body: {
    username: username,
    password: password
  }
}

async function logUserIn() {
  const user = await fetch("http://localhost:3000/login", options)
}
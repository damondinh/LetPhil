// =============================================================
// Mini Project — Contact Card
// =============================================================

/*
STEP 1 — Create these DOM references (exact names):
  - const form = document.getElementById("contactForm")
  - const contactsList = document.getElementById("contacts")
  - const status = document.getElementById("status")
  - const clearBtn = document.getElementById("clearBtn")
*/
const form = document.getElementById("contactForm");
const contactList = document.getElementById("contacts");
const status = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");

document.getElementById("firstName").value = "Damon";
document.getElementById("lastName").value = "nguyen";
document.getElementById("email").value = "abc@xyz.com";
document.getElementById("phone").value = "123";
/*
STEP 2 — Write a helper function named createContactCard(dataObject)
  - Function name: createContactCard
  - Parameter: an object with keys { first, last, email, phone, fav }
  - Returns: a <div> element with class "contact" (the card)

  Inside createContactCard:
    STEP 2A — Compute initials (variable name: initials)
    STEP 2B — Create the outer <div> (variable name: card)
    STEP 2C — Fill card content with these classes:
        - avatar
        - contact-body
        - name
        - meta
        - badge (only if fav is true)
    STEP 2D — return card
*/
function createContactCard({first, last, email, phone, fav}) {
  const initials = (first ? first[0] : "").toUpperCase() + (last ? last[0] : "").toUpperCase();

  // outer card
  const card = document.createElement("div");
  card.className = "contact";

  // avatar (initials)
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = initials;
  card.appendChild(avatar);

  // contact body
  const body = document.createElement("div");
  body.className = "contact-body";

  const nameDiv = document.createElement("div");
  nameDiv.className = "name";
  nameDiv.textContent = `${first} ${last}`.trim();

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.textContent = `${email} ${phone ? '• ' + phone : ''}`.trim();

  body.appendChild(nameDiv);
  body.appendChild(meta);
  card.appendChild(body);

  // badge when favorite
  if (fav) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "★";
    card.appendChild(badge);
  }

  return card;
}
/*
STEP 3 — Write a helper function named showToast()
  - Function name: showToast
  - Action: unhides #status, then hides it after 2000ms
*/
function showToast() {
  document.getElementById("status").style.visibility = "visible";

  setTimeout(() => {
    document.getElementById("status").style.visibility = "hidden";
  }, 2000);
}
/*
STEP 4 — Write a helper function named removeEmptyState()
  - Function name: removeEmptyState
  - Action: if an element with class ".empty" exists inside #contacts, remove it
*/
function removeEmptyState() {
  let emptyElements = contactList.querySelectorAll(".empty");
  emptyElements.forEach((emptyState) => {
    // remove the empty placeholder itself
    emptyState.remove();
  });
}
/*
STEP 5 — Write a helper function named restoreEmptyState()
  - Function name: restoreEmptyState
  - Action: replace the innerHTML of #contacts with the default empty-state block
*/
function restoreEmptyState() {
  // simple empty state placeholder
  contactList.innerHTML = '<li class="empty">No contacts yet - add your first one!</li>';
  
}
/*
STEP 6 — Add a "submit" listener on form that runs an inline function
  - Read inputs into exact variable names:
      first, last, email, phone, fav
  - Build a card with createContactCard({ first, last, email, phone, fav })
  - Call removeEmptyState(), then append the new card to contactsList
  - Call showToast(), then reset the form
*/
form.addEventListener("submit", (event) => {
  // prevent real submit/reload so appended card stays visible
  event.preventDefault();

  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let fav = document.getElementById("fav").checked;

  let newContact = createContactCard({first, last, email, phone, fav});

  removeEmptyState();

  contactList.appendChild(newContact);

  showToast();

  form.reset();
});


/*
STEP 7 — Add a "click" listener on clearBtn
  - When clicked, call restoreEmptyState()
*/
clearBtn.addEventListener("click", () => {
  restoreEmptyState();
})
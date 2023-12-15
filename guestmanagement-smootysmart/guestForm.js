// 65130500032,Noppakrit,Nitichaisatit
// import { createGuestList } from "./data/guestdata.js";
// import { GuestManagement } from "./lib/GuestManagement.js";
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList();
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList;

  // 1. register event for searching and adding
  function registerEventHandling() {
    const search = document.getElementById("search-input");
    search.addEventListener("keyup", searchGuest);

    const addG = document.getElementById("add-guest-btn");
    addG.addEventListener("click", addGuest);
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {

    const displayArea = document.getElementById("display-area");
    const createDiv = document.createElement("div");
    const nameSpan = document.createElement("span");
    const removeSpan = document.createElement("span");

    createDiv.appendChild(nameSpan);
    nameSpan.textContent = `${guestItem.firstname} ${guestItem.lastname}`;
    createDiv.appendChild(removeSpan);
    removeSpan.setAttribute("class", "remove-icon");
    removeSpan.setAttribute(
      "id",
      `${guestItem.firstname}-${guestItem.lastname}`
    );
    removeSpan.setAttribute("style", "cursor:pointer;color:red");
    removeSpan.textContent = "[X]";
    removeSpan.addEventListener("click", removeGuest);

    displayArea.appendChild(createDiv);
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayArea = document.getElementById("display-area");
    displayArea.innerHTML = "";
    guestResult.forEach((guest) => {
      displayGuest(guest);
    });
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const searchG = guests.searchGuests(event.target.value);
    displayGuests(searchG);
  }
  // 5. Function to add a new guest
  function addGuest() {
    const firstname = document.getElementById("firstname-input");
    const lastname = document.getElementById("lastname-input");
    if (firstname.value && lastname.value) {
      const newG = guests.addNewGuest(firstname.value, lastname.value);
      displayGuest(newG[newG.length - 1]);
      firstname.value = "";
      lastname.value = "";
    }
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const id = event.target.id.split("-");
    const name = { firstname: id[0], lastname: id[1] };
    guests.removeGuest(name);
    // displayGuests(guestList.getAllGuests());

    //GUY
    // const name = event.target.getAttribute("id").split("-");
    // guests.removeGuest({
    //   firstname: name[0],
    //   lastname: name[1],
    // });
    event.target.parentElement.remove();
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  };
}
module.exports = guestForm
// export { guestForm };
// const { registerEventHandling, displayGuests } = guestForm();
// registerEventHandling();
// displayGuests(guestList.getAllGuests());

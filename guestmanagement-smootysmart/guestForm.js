// 65130500032,Noppakrit,Nitichaisatit
import { createGuestList } from './data/guestdata.js'
import { GuestManagement } from './lib/GuestManagement.js'
// const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const search = document.getElementById('search-input')
    search.addEventListener('keyup', () => {
      searchGuest(search.value);
    })

    const addG = document.getElementById('add-guest-btn')
    addG.addEventListener('click', addGuest);

  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) { 
    const displayArea = document.getElementById('display-area');

    Array.of(guests).forEach(()=>{
      let createDiv = document.createElement('div')
      let createSpan1 = document.createElement('span')
      if(!guestItem){
        createSpan1.innerText = `${guestItem.firstName} ${guestItem.lastName}`
        createDiv.appendChild(createSpan1);
        createSpan1.innerHTML = `<span class="remove-icon" id="${guestItem.firstname}-${guestItem.lastname}" style="cursor:pointer;color:red">[X]</span>`
        createDiv.append(createSpan1)
        displayArea.appendChild(createDiv);
      }
    })
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) { 
    const inDiv = document.getElementById('display-area');
    inDiv.innerText = '';
    Array.of(guestList).forEach(() => {
      displayGuest(guestResult)
    });
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) { 
    if(guests.searchGuests(event)){
      displayGuests(event)
    }
  }
  // 5. Function to add a new guest
  function addGuest() {
    const firstname = document.getElementById('firstname-input')
    const lastname = document.getElementById('lastname-input')

    if (firstname.value && lastname.value) {
      guests.addNewGuest(firstname,lastname)
      displayGuest(firstname)
      firstname.value = '';
      lastname.value = '';
    }

  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    guests = new GuestManagement()
    guests.removeGuest(event)
    
   }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())

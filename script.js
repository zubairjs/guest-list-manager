const guests = [];

function addGuest() {
  const guestNameInput = document.getElementById('guest-name');
  const guestName = guestNameInput.value;
  const guestMessage = document.getElementById('guest-message');
  const guestList = document.getElementById('guest-list');

  if (guestName.trim() === '') {
    guestMessage.textContent = 'Please enter a guest name!';
    return;
  }
  guests.push(guestName);
  guestList.innerHTML = '';
  for (const guest of guests) {
    guestList.innerHTML += `<li>${guest}</li>`;
  }
  guestMessage.textContent = `${guestName} was added to the guest list!`;
  guestNameInput.value = '';
}

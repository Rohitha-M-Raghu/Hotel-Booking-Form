let bookings = [];

function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const checkIn = document.getElementById("check-in").value;
  const address = document.getElementById("address").value;
  const identityCard = document.getElementById("identity-card").value;
  const numGuests = document.getElementById("num-guests").value;
  const roomType = document.getElementById("room-type").value;

  // Validation rules
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+91)?\d{10}$/;

  // Perform validations
  if (!name.match(nameRegex)) {
    alert("Please enter a valid name");
    return;
  }

  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!phone.match(phoneRegex)) {
    alert("Please enter a valid phone number");
    return;
  }

  // Create a new booking object
  const booking = {
    name: name,
    email: email,
    phone: phone,
    checkIn: checkIn,
    address: address,
    identityCard: identityCard,
    numGuests: numGuests,
    roomType: roomType
  };

  // Add the booking to the in-memory object
  bookings.push(booking);

  // Reset the form
  document.getElementById("booking-form").reset();

  // Update the data list UI
  renderDataList();
}

function renderDataList() {
  const dataList = document.getElementById("booking-list");
  dataList.innerHTML = ""; // Clear existing content

  // Loop through the bookings and create list items
  for (let i = 0; i < bookings.length; i++) {
    const booking = bookings[i];
    const listItem = document.createElement("p");
    listItem.textContent = `Name: ${booking.name}  Email: ${booking.email} Phone: ${booking.phone}`;
    dataList.appendChild(listItem);
  }
}

function deleteAllBookings() {
  bookings = []; // Clear all bookings
  renderDataList();
}
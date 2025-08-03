function submitBooking(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  localStorage.setItem('name', name);
  localStorage.setItem('destination', destination);
  localStorage.setItem('date', date);

  window.location.href = 'confirm.html';
}

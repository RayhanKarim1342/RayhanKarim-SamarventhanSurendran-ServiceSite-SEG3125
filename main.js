var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, { offset: [0, 170] });
});


const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

function updateCalendar() {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const totalDays = lastDayOfMonth.getDate();
  const firstDayIndex = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
  const lastDayIndex = lastDayOfMonth.getDay() === 0 ? 6 : lastDayOfMonth.getDay() - 1;

  const monthYearString = currentDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });
  monthYearElement.textContent = monthYearString;

  let datesHTML = '';
  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const isToday = date.toDateString() === new Date().toDateString();
    datesHTML += `<div class="date ${isToday ? 'active' : ''}">${i}</div>`;
  }
  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  }

  datesElement.innerHTML = datesHTML;
}
prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});
updateCalendar();


const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
const timeInput = document.getElementById('timeInput');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const descriptionInput = document.getElementById('descriptionInput');

let selectedDate = null;
datesElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('date') && !e.target.classList.contains('inactive')) {
    const previouslySelected = datesElement.querySelector('.date.selected');
    if (previouslySelected) previouslySelected.classList.remove('selected');
    e.target.classList.add('selected');

    const day = parseInt(e.target.textContent, 10);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    selectedDate = new Date(year, month, day);

    checkFormValidity();
  }
});

[timeInput, nameInput, phoneInput, emailInput, descriptionInput].forEach(input => {
  input.addEventListener('input', checkFormValidity);
});

function checkFormValidity() {
  const timeFilled = timeInput.value.trim() !== '';
  const nameFilled = nameInput.value.trim() !== '';
  const phoneFilled = phoneInput.value.trim() !== '';
  const emailFilled = emailInput.value.trim() !== '';
  const descriptionFilled = descriptionInput.value.trim() !== '';
  const dateSelected = selectedDate !== null;

  if (timeFilled && nameFilled && phoneFilled && emailFilled && descriptionFilled && dateSelected) {
    bookAppointmentBtn.disabled = false;
  } else {
    bookAppointmentBtn.disabled = true;
  }
}

bookAppointmentBtn.addEventListener('click', () => {

  const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
  confirmationModal.show();

  resetForm();
});

function resetForm() {
  timeInput.value = '';
  nameInput.value = '';
  phoneInput.value = '';
  emailInput.value = '';
  descriptionInput.value = '';

  const selectedDateDiv = datesElement.querySelector('.date.selected');
  if (selectedDateDiv) selectedDateDiv.classList.remove('selected');

  selectedDate = null;
  bookAppointmentBtn.disabled = true;
}
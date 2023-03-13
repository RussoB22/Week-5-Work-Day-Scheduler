// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const saveBtn = document.getElementsByClassName('saveBtn');
const dayHourUl = document.getElementById('dayHourUl');
const currentDay = document.getElementById('currentDay');

function updateCurrentDay() {
  const now = dayjs();
  currentDay.innerHTML = now.format('YYYY-MM-DD HH:mm:ss');
}

setInterval(updateCurrentDay, 1000);

for (let i = 0; i < 24; i++) {
  const li = document.createElement('li');
  li.setAttribute('id', `hour-${i+1}`);
  li.classList.add('row', 'time-block');
  li.innerHTML = `
  <div class="col-2 col-md-1 hour text-center py-3">Hour ${i+1}</div>
  <textarea class="col-8 col-md-10 description" rows="3"></textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  `;
  dayHourUl.appendChild(li);
  
}

now = dayjs()
let currentHour = now.hour();
console.log(currentHour)
dayHourUl.querySelectorAll('li').forEach(li => {
  const clockhr = parseInt(li.id.split('-')[1]);
  console.log(clockhr)
  if (currentHour > clockhr) {
    li.classList.add('late');
    li.classList.remove('present');
    li.classList.remove('future');
  } else if (currentHour == clockhr) {
    li.classList.add('present');
    li.classList.remove('late');
    li.classList.remove('future');
  } else {
    li.classList.add('future');
    li.classList.remove('late');
    li.classList.remove('present');
  }
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  saveBtn.addEventListener('click', )

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

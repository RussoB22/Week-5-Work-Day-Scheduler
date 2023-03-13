$(function () {
  const dayHourUl = document.getElementById('dayHourUl');
  const currentDay = document.getElementById('currentDay');
  now = dayjs()
  let currentHour = now.hour();
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
    const textarea = li.querySelector('.description');
    const saveBtn = li.querySelector('.saveBtn');
    saveBtn.addEventListener('click', () => {
      const value = textarea.value;
      localStorage.setItem(`hour-${i+1}`, value);
    });
    const savedValue = localStorage.getItem(`hour-${i+1}`);
    if (savedValue) {
      textarea.value = savedValue;
    }
  }
  dayHourUl.querySelectorAll('li').forEach(li => {
    const clockhr = parseInt(li.id.split('-')[1]);
    if (currentHour > clockhr) {
      li.classList.add('past');
      li.classList.remove('present');
      li.classList.remove('future');
    } else if (currentHour == clockhr) {
      li.classList.add('present');
      li.classList.remove('past');
      li.classList.remove('future');
    } else {
      li.classList.add('future');
      li.classList.remove('past');
      li.classList.remove('present');
    }
  });
});

var monthData = [
  {
    month: 'January',
    days: 31
  },
  {
    month: 'Febrary',
    days: 28
  },
  {
    month: 'March',
    days: 31,
  },
  {
    month: 'April',
    days: 30
  },
  {
    month: 'May',
    days: 31
  },
  {
    month: 'June',
    days: 30
  },
  {
    month: 'July',
    days: 31
  },
  {
    month: 'August',
    days: 31
  },
  {
    month: 'September',
    days: 30
  },
  {
    month: 'October',
    days: 31
  },
  {
    month: 'November',
    days: 30
  },
  {
    month: 'December',
    days: 31
  }
];

$('.date').on('click', function(event) {
  $('.clicked').removeClass('clicked');
  $(this).addClass('clicked');
});

$('.arrow-left').on('click', moveMonthDown);

$('.arrow-right').on('click', moveMonthUp);

function moveMonthUp() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  currentMonth = months.indexOf($('.month').text());
  if (currentMonth === 11) {
    moveYearUp();
    $('.month').text('January');
  } else {
    currentMonth++;
    $('.month').text(months[currentMonth]);
  }
}

function moveMonthDown() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  currentMonth = months.indexOf($('.month').text());
  if (currentMonth === 0) {
    moveYearDown();
    $('.month').text('December');
  } else {
    currentMonth--;
    $('.month').text(months[currentMonth]);
  }
}

function moveYearUp() {
  currentYear = Number($('.year').text());
  currentYear++;
  $('.year').text(currentYear);
}

function moveYearDown() {
  currentYear = Number($('.year').text());
  currentYear--;
  $('.year').text(currentYear);
}

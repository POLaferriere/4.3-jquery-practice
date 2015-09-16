var monthData = [
  {
    month: 'January',
    days: 31
  },
  {
    month: 'February',
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
  transferLasttWeekToFirst();
  populateDates();
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
  transferFirstWeekToLast();
  populateDates();
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

/*
Want to populate cells with dates
*/
function populateDates() {
  var monthDaysNumber = monthData[findWithAttr(monthData, 'month', $('.month').text())].days;
  for (i = 1; i < monthDaysNumber + 1; i++){
    $('.date-' + String(i+findLastDay())).text(i);
  }
}

function findWithAttr(array, attr, value) {
   for(var i = 0; i < array.length; i += 1) {
       if(array[i][attr] === value) {
           return i;
       }
   }
}

function transferFirstWeekToLast() {
  for (var i =1; i < 8; i++) {
    $('.last-week-' + String(i)).text($('.first-week-' + String(i)).text());
    if (Number($('.last-week-' + String(i)).text()) < 15) {
      $('li.last-week-' + String(i)).addClass('.shadowed');
    } else {
      $('li.last-week-' + String(i)).removeClass('.shadowed');
    }
  }
}

function transferLasttWeekToFirst() {
  for (var i =1; i < 8; i++) {
    $('.first-week-' + String(i)).text($('.last-week-' + String(i)).text());
    if (Number($('.first-week-' + String(i)).text()) > 15) {
      $('li.first-week-' + String(i)).addClass('shadowed');
    } else {
        $('li.last-week-' + String(i)).removeClass('.shadowed');
    }
  }
}

//Gives the number of the date with the last day from the last month
function findLastDay() {
  var lastDay = createCurrentMonthArray().indexOf(String(findLastMonthDays()));
  if (lastDay > 15){
    return 0;
  } else {
  return lastDay+1;
}
}


//Gives the number of days from the last month
function findLastMonthDays() {
  // debugger;
  var currentMonth = $('.month').text();
  if (currentMonth === 'January') {
    return 31;
  } else {
    return monthData[(findWithAttr(monthData, 'month', $('.month').text()))-1].days;
  }
}

function createCurrentMonthArray() {
  var currentMonthArray = [];
  for (var i = 0; i < 35; i++) {
    currentMonthArray[i] = $('.date-' + String(i+1)).text();
  }
  return currentMonthArray;
}

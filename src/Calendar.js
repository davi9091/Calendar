'use strict';

class Calendar {
  constructor() {
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.daysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  }

  static createNewElement(element, className) {
    let e = document.createElement(element);
    e.classList.add(className);
    return e;
  }

  monthData(month, year) {
    return {
      year: year,
      month: month,
      monthDaysCount: function () {
        return new Date(this.year, this.month + 1, 0).getDate();
      },
      weekDay: function (day) {
        let dayNum = new Date(this.year, this.month, day).getDay();
        return dayNum === 0 ? 6 : dayNum - 1;
        // Translating from american system to international
      }
    };
  }

  getMonthName(month) {
    return this.monthNames[month];
  }

  createMonthTableHead() {
    let thead = Calendar.createNewElement('thead', 'calendar-header');
    let tr = Calendar.createNewElement('tr', 'calendar-row');

    for (var i in this.daysShort) {
      tr.innerHTML += '<th>' + this.daysShort[i] + '</th>';
    }

    thead.appendChild(tr);
    return thead;
  }

  distributeDays(monthData, tbody) {
    var day = 1;
    var dayCount = monthData.monthDaysCount();

    console.log(dayCount);

    while (day <= dayCount) {
      let weekRow = document.createElement('tr');

      for (var i = 0; i < 7; ++i) {
        if ((monthData.weekDay(day) === i) && (day <= dayCount)) {
          weekRow.innerHTML += '<td>' + day + '</td>';
          ++day;
        }
        else weekRow.innerHTML += '<td></td>';
      }
      tbody.appendChild(weekRow);
    }

    console.log('while exited!');
  }

  createMonthTableBody(monthData) {
    let tbody = Calendar.createNewElement('tbody', 'calendar-body');
    this.distributeDays(monthData, tbody);

    return tbody;
  }

  createMonthTableWrap(monthData) {
    let div = Calendar.createNewElement('div', 'calendar-month');
    let table = Calendar.createNewElement('table', 'calendar-table');

    table.appendChild(this.createMonthTableHead());
    table.appendChild(this.createMonthTableBody(monthData));

    div.appendChild(table);

    return div;
  }

  parseInputData(id, month, year) {
    this.startMonth = month > 11 || month === undefined ? this.currentMonth : month;
    this.startMonthsYear = year < 1970 || year === undefined ? this.currentYear : year;
    this.containerId = id;
  }

  renderCalendar(id, month, year) {
    this.parseInputData(id, month, year);
    let monthData = this.monthData(this.startMonth, this.startMonthsYear);
    let calendarContainer = document.getElementById(this.containerId);

    calendarContainer.appendChild(this.createMonthTableWrap(monthData));
  }
}

let calendar = new Calendar();
calendar.renderCalendar('calendar-main',undefined,undefined);
console.log('hello1');
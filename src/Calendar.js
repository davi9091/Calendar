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

  getMonthData(month, year) {
    return {
      year: year,
      month: month,
      monthDaysCount: function () {
        return new Date(this.year, this.month + 1, 0);
      },
      weekDay: function (day) {
        let dayNum = new Date(this.year, this.month, day);
        return dayNum.getDay();
      }
    };
  }
}
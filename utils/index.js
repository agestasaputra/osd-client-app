function getDayOfWeek(date) {
  const jsDate = new Date(date)
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return days[jsDate.getDay()]
}

function getMonth(date) {
  const jsDate = new Date(date)
  const fullMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'October',
    'November',
    'December',
  ]
  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Juni',
    'Juli',
    'Agst',
    'Okt',
    'Nov',
    'Des',
  ]
  return {
    fullMonth: fullMonths[jsDate.getMonth()],
    shortMonth: shortMonths[jsDate.getMonth()],
  }
}

export { getDayOfWeek, getMonth }

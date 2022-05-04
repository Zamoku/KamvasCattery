function weeklyWage(band, weeklyHours) {

  var arrayWeeklyHours = weeklyHours.split(',');
  var sum = 0;

  for (var i = 0; i < arrayWeeklyHours.length; i++) {
    //var weeklyHours = arrayWeeklyHours[i]
    weeklyHours = arrayWeeklyHours[i]

    // console.log(arrayWeeklyHours.length)
    if (arrayWeeklyHours.length == 7) {
      var total = sum += Number(weeklyHours)
    }
    else {
      return "missing day"
    }
    if (band == 'A') {
      var overall = total * 23
    }
    else if (band == 'B') {
      overall = total * 37
    }
    else if (band == 'C') {
      overall = total * 51
    }
    else {
      return 0
    }

  }
  return overall

};

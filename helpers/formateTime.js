export default (time) => {
    var objDay = new Date(time),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objDay.getDay()],
	domEnder = function() { var a = objDay; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = timeFormated + ( objDay.getDate() < 10) ? '0' + objDay.getDate() + domEnder : objDay.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objDay.getMonth()],
	curYear = objDay.getFullYear(),
	curHour = objDay.getHours() > 12 ? objDay.getHours() - 12 : (objDay.getHours() < 10 ? "0" + objDay.getHours() : objDay.getHours()),
	curMinute = objDay.getMinutes() < 10 ? "0" + objDay.getMinutes() : objDay.getMinutes(),
	curSeconds = objDay.getSeconds() < 10 ? "0" + objDay.getSeconds() : objDay.getSeconds(),
	curMeridiem = objDay.getHours() > 12 ? "PM" : "AM";
    var timeFormated = dayOfWeek + ", " + dayOfMonth + " of " + curMonth + ", " + curYear + " AT " + curHour + ":" + curMinute + "." + curSeconds + curMeridiem;
    return timeFormated;
  };
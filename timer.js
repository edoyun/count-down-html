var dday = new Date("March 14, 2022, 14:00:00").getTime();

setInterval(function () {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.floor(gap / (1000 * 60 * 60 * 24));
  var hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("count").innerText = `ㅇㅇ까지 ${day}일 ${
    hour < 10 ? `0${hour}` : hour
  }시간 ${min < 10 ? `0${min}` : min}분 ${
    sec < 10 ? `0${sec}` : sec
  }초 남았습니다.`;
}, 1000);

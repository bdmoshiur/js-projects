function dclock() {
  let date = new Date();
  
  let hour = date.getHours();
  let mini = date.getMinutes();
  let sec = date.getSeconds();
  let tFormat = "AM";

  if ( hour === 0 ) {
    hour = 12;
  }

  if ( hour > 12 ) {
    hour = hour - 12;
    tFormat = "PM";
  }

  hour = hour < 10 ? '0' + hour : hour;
  mini = mini < 10 ? '0' + mini : mini;
  sec = sec < 10 ? '0' + sec : sec;

  let fTime = `${hour}:${mini}:${sec}`

  document.querySelector('#time').innerHTML = fTime;
  document.querySelector('small').innerHTML = tFormat;

  setInterval(dclock, 1000);
}

dclock();
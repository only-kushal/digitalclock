let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];


let hours=document.getElementById("hrs");
let minutes=document.getElementById("min");
let seconds=document.getElementById("sec");
let ampm=document.getElementById("am-pm");
let date=document.getElementById("dat");
let month=document.getElementById("mon");
let day=document.getElementById("day");
let year=document.getElementById("year");
setInterval(() => {
  let time=new Date
  hours.innerHTML=time.getHours()<10?"0"+time.getHours():time.getHours();
  minutes.innerHTML=time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();
  seconds.innerHTML=time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds();
  ampm.innerHTML=time.getHours()>=12?"PM":"AM";
  date.innerHTML=time.getDate();
  month.innerText=months[time.getMonth()];
  year.innerHTML=time.getFullYear();
  day.innerHTML=days[time.getDay()];
}, 1000);
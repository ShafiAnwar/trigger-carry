//var dt = new Date();
//document.getElementById('date-time').innerHTML = dt;
var d = new Date();
var n = d.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second:'2-digit',
  
});
document.getElementById("date-time").innerHTML = n;
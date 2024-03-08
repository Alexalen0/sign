let linewid = document.getElementById("linewid")
let canv = document.getElementById("myCanvas");

function onloadclr() {
    let canv1 = document.getElementById("myCanvas");
    let ctx1 = canv1.getContext("2d");
    ctx1.fillStyle = "white";
    ctx1.fillRect(0, 0, 800, 500);
    // ctx1.lineWidht = "2000";
    // ctx1.strokeStyle = "red";
    // ctx1.rect(0, 0, 800, 500);
    // ctx1.stroke();
  
  }
  window.onload = onloadclr;
  
  let x = 0
  let y = 0
  
  canv.onmousedown = function(e) {
    x = e.offsetX;
    y = e.offsetY;
  
  }
  
  let z = 5;
  
  function inc() {
    z++
    linewid.innerText = z
  }
  function dec() {
    if (z < 2) { return z }
    else {
      z--
      linewid.innerText = z
    }
  }
  
  // var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// document.getElementById("myCanvas").addEventListener('mousemove', function(e) {
//   circle_gen(e)
//   // console.log(document.getElementById("myCanvas").onmousemove)
//   // if (document.getElementById("myCanvas").onmousemove != null) {
//   //   circle_gen(e);
//   // }
// });

  canv.addEventListener('mousemove', function(e) {
    if (e.buttons == 1) {
      e.preventDefault();
  
  
      circle_gen(e, z)
      let x1 = e.offsetX
      let y1 = e.offsetY
      // let x = 0, y = 0;
      line_bw(x, y, x1, y1, z)
      console.log("x: " + x + " y: " + y)
      console.log("x1: " + x1 + " y1: " + y1)
      x = x1;
      y = y1;
    }
  });
  
  // canv.addEventListener('mouseup', function(e) {
  //   console.log(canv.onmouseup)
  // });
  
  var download = function() {
    var link = document.createElement('a');
    link.download = 'filename.jpeg';
    link.href = document.getElementById('myCanvas').toDataURL()
    link.click();
  }
  
  function line_bw(x, y, x1, y1, z) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    // let x = e.clientX
    // let y = e.clientY
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = z * 2;
    ctx.stroke();
  }
  
  
  // const canvas = document.getElementById("myCanvas");
  // const ctx = canvas.getContext("2d");
  
  // ctx.fillStyle = "#FF0000";
  // ctx.fillRect(0, 0, 150, 75);
  
  function circle_gen(e, z) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let x = e.offsetX
    let y = e.offsetY
    ctx.beginPath();
    ctx.arc(x, y, z, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
  }
  
  
  function clear1() {
    let canv1 = document.getElementById("myCanvas");
    let ctx1 = canv1.getContext("2d");
    ctx1.fillStyle = "white";
    ctx1.fillRect(0, 0, 800, 500);
  }
  
  // function getCursorPosition(canvas, event) {
  //   const rect = canvas.getBoundingClientRect()
  //   const x = event.clientX - rect.left
  //   const y = event.clientY - rect.top
  //   console.log("x: " + x + " y: " + y)
  // }
  
  // const canvas = document.querySelector('canvas')
  // canvas.addEventListener('mousedown', function(e) {
  //   getCursorPosition(canvas, e)
  // })
  
  
  
  
  
  // canv.addEventListener('mousemove', function(e) {
  
  //   if (e.buttons == 1) {
  //     e.preventDefault();
  //     circle_gen(e)
  //     let x1 = e.clientX
  //     let y1 = e.clientY
  //     let x = 0, y = 0;
  //     line_bw(x, y, x1, y1)
  //     console.log("x: " + x + " y: " + y)
  //     console.log("x1: " + x1 + " y1: " + y1)
  //     x = x1;
  //     y = y1;
  
  
  //   }
  // });
  
  
  
  
  // var canvas = document.getElementById("mycanvas");
  // var img = canvas.toDataURL("image/png");
  // document.write('<img src="' + img + '"/>');
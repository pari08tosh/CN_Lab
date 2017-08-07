$(function() {
  var arr = [];
  var binaryString = "";
  $('#submitBtn').click(function() {
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j<5; j++) {
        var x = 1<<(4-j);
        if (arr[i] & x) {
          binaryString += '1';
        } else {
          binaryString += '0';
        }
      }
    }
    $('.barray').append("<h4>" + binaryString + "</h4>");
    draw(binaryString);
  });
  $('#addBtn').click(function(){
    var numArray = ($("#inputString").val()).split(" ");
    for(var ii = 0;ii < numArray.length; ii++) {
      arr.push(numArray[ii]);
    }
    $('.array').append("<span>" + $("#inputString").val() + "</span>");
    $("#inputString").val("");
  });
});

//For NRZ Encoding
function draw(inputString) {
  var canvas = document.getElementById('myCanvasNRZ');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(10, 100);
    var x = inputString.length;
    for(var i=1; i<=x; i++) {
      if(inputString[i-1]=='0') {
        ctx.lineTo(10+(i-1)*60, 100);
        ctx.lineTo(10+i*60, 100);
      } else {
        ctx.lineTo(10+(i-1)*60, 40);
        ctx.lineTo(10+(i)*60, 40);
      }
    }
    ctx.lineTo(10+(i-1)*60, 100);
    ctx.stroke();
  }

  //For RZ Encoding
  canvas = document.getElementById('myCanvasRZ');
  if (canvas.getContext) {
    var ctx1 = canvas.getContext('2d');
    ctx1.beginPath();
    ctx1.moveTo(10, 100);
    var x1 = inputString.length;
    for(var i1=1; i1<=x1; i1++) {
      if(inputString[i1-1]=='0') {
        ctx1.lineTo(10+(i1-1)*60, 100);
        ctx1.lineTo(10+i1*60, 100);
      } else {
        ctx1.lineTo(10+(i1-1)*60, 40);
        ctx1.lineTo(10+(i1)*60-30, 40);
        ctx1.lineTo(10+(i1)*60-30, 100);
        ctx1.lineTo(10+(i1)*60,100);
      }
    }
    ctx1.lineTo(10+(i1-1)*60, 100);
    ctx1.stroke();
  }

  // For GE Thomas Manchester Encoding
  canvas = document.getElementById('myCanvasMan');
  if (canvas.getContext) {
    var ctx2 = canvas.getContext('2d');
    ctx2.setLineDash([5, 3]);
    ctx2.beginPath();
    ctx2.moveTo(0, 100);
    ctx2.lineTo(1300,100);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.setLineDash([]);
    ctx2.moveTo(10, 100);
    var x2 = inputString.length;
    for(var i2=1; i2<=x2; i2++) {
      if(inputString[i2-1]=='0') {
        ctx2.lineTo(10+(i2-1)*60, 160);
        ctx2.lineTo(10+i2*60-30, 160);
        ctx2.lineTo(10+i2*60-30, 40);
        ctx2.lineTo(10+i2*60, 40);
      } else {
        ctx2.lineTo(10+(i2-1)*60, 40);
        ctx2.lineTo(10+(i2)*60-30, 40);
        ctx2.lineTo(10+(i2)*60-30, 160);
        ctx2.lineTo(10+(i2)*60,160);
      }
    }
    ctx2.lineTo(10+(i2-1)*60, 100);
    ctx2.stroke();
  }
  // For GE Thomas Manchester Encoding
  canvas = document.getElementById('myCanvasDiffMan');
  if (canvas.getContext) {
    var ctx3 = canvas.getContext('2d');
    ctx3.setLineDash([5, 3]);
    ctx3.beginPath();
    ctx3.moveTo(0, 100);
    ctx3.lineTo(1300,100);
    ctx3.stroke();
    ctx3.beginPath();
    ctx3.setLineDash([]);
    ctx3.moveTo(10, 100);
    var x3 = inputString.length;
    if(inputString[0]=='0') {
      ctx3.lineTo(10+(0)*60, 160);
      ctx3.lineTo(10+1*60-30, 160);
      ctx3.lineTo(10+1*60-30, 40);
      ctx3.lineTo(10+1*60, 40);
    } else {
      ctx3.lineTo(10+(0)*60, 40);
      ctx3.lineTo(10+(1)*60-30, 40);
      ctx3.lineTo(10+1*60-30, 160);
      ctx3.lineTo(10+(1)*60,160);
    }
    for(var i3=2; i3<=x3; i3++) {
      if(inputString[i3-1] === inputString[i3-2]) {
        ctx3.lineTo(10+(i3-1)*60, 160);
        ctx3.lineTo(10+i3*60-30, 160);
        ctx3.lineTo(10+i3*60-30, 40);
        ctx3.lineTo(10+i3*60, 40);
      } else {
        ctx3.lineTo(10+(i3-1)*60, 40);
        ctx3.lineTo(10+(i3)*60-30, 40);
        ctx3.lineTo(10+(i3)*60-30, 160);
        ctx3.lineTo(10+(i3)*60,160);
      }
    }
    ctx3.lineTo(10+(i3-1)*60, 100);
    ctx3.stroke();
  }
}

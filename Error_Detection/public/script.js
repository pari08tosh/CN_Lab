//jshint esversion:6, node: true
$(() => {

});

function paritycheck1d() {

  var data = {
    parityString: $('#parityString').val(),
    parityBit: $('#parityBit').val(),
  };

  $.post( "/check1dParity", data)
  .done(function(res) {
    if (res.success) {
      $(".parityResult1d").html(`
        <h4>Result</h4>
        <h5 style="color: green;">${res.msg}</h5>`);
    } else {
      $(".parityResult1d").html(`
        <h4>Result</h4>
        <h5 style="color:  red;">${res.msg}</h5>`);
    }
  });

}

function paritycheck2d() {

  var data = {
    parityString: $('#parityString2d').val(),
    parityBit: $('#parityBit2d').val(),
  };

  $.post( "/check2dParity", data)
  .done(function(res) {
    if (res.success) {
      $(".parityResult2d").html(`
        <h4>Result</h4>
        <h5 style="color: green;">${res.msg}</h5>`);
    } else {
      $(".parityResult2d").html(`
        <h4>Result</h4>
        <h5 style="color:  red;">${res.msg}</h5>`);
    }
  });

}

function paritycheckChecksum() {

  var data = {
    parityString: $('#parityStringChecksum').val(),
    parityBit: $('#parityBitChecksum').val(),
  };

  $.post( "/checkChecksumParity", data)
  .done(function(res) {
    if (res.success) {
      $(".parityResultChecksum").html(`
        <h4>Result</h4>
        <h5 style="color: green;">${res.msg}</h5>`);
    } else {
      $(".parityResultChecksum").html(`
        <h4>Result</h4>
        <h5 style="color:  red;">${res.msg}</h5>`);
    }
  });

}

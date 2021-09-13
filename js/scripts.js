// whatwedo toggle functionality
$(document).ready(function () {
  $("#design").click(function () {
    $("#designimg").toggle();
    $("#designdesc").toggle();
  });
});

$(document).ready(function () {
  $("#dev").click(function () {
    $("#devimg").toggle();
    $("#development").toggle();
  });
});

$(document).ready(function () {
  $("#management").click(function () {
    $("#productimg").toggle();
    $("#product").toggle();
  });
});

//    Portfolio Show/Hide functionality
$(document).ready(function () {
  $("#work4")
    .mouseover(function () {
      $("#overlay1").show();
    })
    .mouseout(function () {
      $("#overlay1").hide();
    });
});

$(document).ready(function () {
  $("#work3")
    .mouseover(function () {
      $("#overlay2").show();
    })
    .mouseout(function () {
      $("#overlay2").hide();
    });
});

$(document).ready(function () {
  $("#work2")
    .mouseover(function () {
      $("#overlay3").show();
    })
    .mouseout(function () {
      $("#overlay3").hide();
    });
});

$(document).ready(function () {
  $("#work1")
    .mouseover(function () {
      $("#overlay4").show();
    })
    .mouseout(function () {
      $("#overlay4").hide();
    });
});

$(document).ready(function () {
  $("#work5")
    .mouseover(function () {
      $("#overlay5").show();
    })
    .mouseout(function () {
      $("#overlay5").hide();
    });
});

$(document).ready(function () {
  $("#work6")
    .mouseover(function () {
      $("#overlay6").show();
    })
    .mouseout(function () {
      $("#overlay6").hide();
    });
});

$(document).ready(function () {
  $("#work7")
    .mouseover(function () {
      $("#overlay7").show();
    })
    .mouseout(function () {
      $("#overlay7").hide();
    });
});

$(document).ready(function () {
  $("#work8")
    .mouseover(function () {
      $("#overlay8").show();
    })
    .mouseout(function () {
      $("#overlay8").hide();
    });
});

// User form functionality
$(document).ready(function () {
  $("form#formsubmit").submit(function (event) {
    event.preventDefault();
    var name = $("input#name1").val();
    var email = $("input#name2").val();
    var message = $("textarea#comment").val();
    if ($("input#name1").val() && $("input#name2").val()) {
      alert(
        name +
          ",We have received your message. Thanks for your honest feedback.:)"
      );
    } else {
      alert("Please enter a valid email and name!");
    }
  });
});

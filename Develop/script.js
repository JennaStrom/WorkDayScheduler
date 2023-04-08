// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, text)
  })
  
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1])
    var currentHour = dayjs().hour();
    console.log(currentHour);
    if (currentHour === hour) {
      $(this).addClass("present");
    } else if (currentHour < hour) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else if (currentHour > hour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
  })
  
  for (var i = 9; i < 18; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }
  
  var now = dayjs().format("dddd, MMMM D")
  //console.log(now)
  $('#currentDay').text(now)
});

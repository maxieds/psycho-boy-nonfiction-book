function checkInputs() {
  $('input, select').each(function() {
    // check if the input has any value (if we've typed into it)
    if ($(this).val().length > 0) {
      $(this).addClass('used');
    } else {
      $(this).removeClass('used');
    }
  });
}

$('input, select').on("change keyup blur input focusout focus", function() {
  checkInputs();
});

$( document ).ajaxComplete(function(event,request, settings) {
  var ajaxResponse = JSON.parse(request.responseText);
  if(ajaxResponse["SignupId"] > 1) {
    var signup_follow = $("#follow_person_" + ajaxResponse["SignupId"]);
    if (signup_follow) {
      var postAction = signup_follow.find('.post');
      var deleteAction = signup_follow.find('.delete');
      if(postAction.hasClass('show')) {
        postAction.removeClass('show').addClass('hidden');
        deleteAction.removeClass('hidden').addClass('show');
      } else {
        postAction.removeClass('hidden').addClass('show');
        deleteAction.removeClass('show').addClass('hidden');
      }
    }
  }
});
checkInputs();
setTimeout(checkInputs(), 1000);

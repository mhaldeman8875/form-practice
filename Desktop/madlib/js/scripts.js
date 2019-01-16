$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var statementInput = $("input#statement").val();


    $(".statement").text(statementInput.toUpperCase());
    $("#response").show();

    event.preventDefault();
  });
});

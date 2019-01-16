$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var animalInput = $("input#animal").val();
    var substanceInput = $("input#substance").val();
    var verb1Input = $("input#verb1").val();
    var place1Input = $("input#place1").val();
    var verb2Input = $("input#verb2").val();

    $(".animal").text(animalInput);
    $(".substance").text(substanceInput);
    $(".verb1").text(verb1Input);
    $(".place1").text(place1Input);
    $(".verb2").text(verb2Input);

    $("#story").show();

    event.preventDefault();
  });

});

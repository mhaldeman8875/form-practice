$(document).ready(function() {
  $("#formOne").submit(function(event) {
    alert("this is the start of the function");
    var name = $("input#name").val();
    var address = $("input#address").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();

    $(".name").text(name);
    $(".address").text(address);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);

    event.preventDefault();
    $("#receipt").show();
  });
});

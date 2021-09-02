$(function() {
    var pixel_size = 10;
    var cells = 50;

    $("#plus").click(function() {
        pixel_size++;
        $("td").css({"width": pixel_size, "height": pixel_size});
        $("#art").css({"width": pixel_size * cells + "px", "height": pixel_size * cells + "px"});
    });
    $("#minus").click(function() {
        pixel_size--;
        $("td").css({"width": pixel_size, "height": pixel_size});
        $("#art").css({"width": pixel_size * cells + "px", "height": pixel_size * cells + "px"});
    });
    $("#bg").change(function() {
        var color = $(this).val()
        $(".c").css({"background": color});
    });
});
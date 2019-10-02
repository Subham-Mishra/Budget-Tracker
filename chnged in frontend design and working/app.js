var t;
var x;
var z;
var y;
$(".val1").click(function () {
    x = $("#budget").val();
    if (x == '') { alert("YOU MUST ENTER SOMETHING"); }
    else {
        console.log(x);
        z = x;
    }
    $(".d1").text(x);
    $(".d2").text(x);
    $(".left").text(x);
    $("#budget").val('');
});




$(".val3").click(function () {
    y = $("#spent").val();
    t = $("#item").val();
    if (y == '' || t == '') { alert("ALL FILEDS ARE MANDATORY"); }
    else {
        console.log(z);
        console.log(y);
        console.log(t);
        $("#item").val('');
        $("#spent").val('');
        if (y <= z) {
            add(t, y);
           z=update(y, z);
        }
        else {
            alert("INSUFFICIENT BALANCE");
        }
    }

});

function add(t, y) {
    $("#main").append(`<li class="list-group-item d-flex justify-content-between align-items-center">
   ${t}
   <span class="badge badge-primary badge-pill">${y}</span>
</li>`)
}

function update(y, z) {
    z = z - y;
    $(".left").text(z);
    return z;

}

$(".clear").click(function () {
    $("#main").find("*").remove();
    $(".left").text(x);
    z=x;
});

$(".reset").click(function(){
x=0;
alert("enter you budget again");
$(".left").text(x);
$(".d1").text(x);
$(".d2").text(x);
$("#main").find("*").remove();
});


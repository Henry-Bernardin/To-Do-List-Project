// Check off specific todos by Clicking 
$("li").click(function(){
 $(this).toggleClass("completed");
    });

//Clicking X will remove the todo
$("span").click(function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); 
    })
    event.stopPropagation(); //stops the click listener from setting off the parent listeners
})
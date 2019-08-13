// Check off specific todos by Clicking 
$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
    });

//Clicking X will remove the todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); 
    })
    event.stopPropagation(); //stops the click listener from setting off the parent listeners
})

//Grabbing new todo text from input 
$("input[type = 'text']").keypress(function() {
    if (event.which === 13) {
       let todoText = $(this).val(); 
       $(this).val(""); //Clears out input field after text is saved to todoText variable
       //Create a new li and append it to the ul
       $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
})
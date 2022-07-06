$(function () {

    // click event handler
    $("#getText").click(function(){
        // display the text and not inner html.
        console.log($("p").text())
    })

    $("#getInnerHtml").click(function(){

        // displays the inner html 
        console.log($("p").html())
    })

    $("#btnFullName").click(function(){

        // Reading values from the text box.
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        console.log(firstName,lastName)
    })


  
    $("#btnSetFirstNameAndLastName").click(function(){

          // Write values to the text box
        $("#firstName").val("Machine");
        $("#lastName").val("Gun");

    })


    $("#btnReplaceParagrah").click(function(){

       //replace the html element itself.
        
        $("p").replaceWith("<h1> Hello Indranil!!!</h1>");

  })

    })
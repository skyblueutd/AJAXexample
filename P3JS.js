$(document).ready(function(){
    $("input").click(function(event){
        $.ajax({
            url:"books.xml",
            dataType:"xml",
            success:function(data){
                alert("file is loaded");
                $(data).find("book").each(function(){
                    var category = $(this).attr("category");
                    var title = $(this).find("title").text();
                    var year = $(this).find("year").text();
                    var price = $(this).find("price").text();
//                    var author = $(this).find("author").text();
                    var authors = "";

                    var authorlenght = $(this).find("author").length;

                    if (authorlenght == 1){
                        authors = $(this).find("author").text();
                    }
                    else(
                        $(this).find("author").each(function(){
                            if(authorlenght == 1)(
                                authors = authors + $(this).text()
                            )
                            else(
                                authors = authors + $(this).text()+","
                            )
                            authorlenght--;
                        })
                    )


                    var text = "<tr> <td>" +title+"</td> <td>" + authors + "</td> <td>" + category + "</td> <td>" + year + "</td> <td>" + price + "</td></tr>";
                    $("#booklist tr:last").after(text);



                });
            },
            error: function(){ alert("Error Loading File"); }
        });
    });
})
$(".prod-container").on("click", "button", function(event) { 
  event.preventDefault(); 
  const id = $(this).data("id");
  console.log(id)
   $.ajax({ 
           method: "POST", 
           url: "/wishlist", 
           data: {id: id},
   }).then(function(response) {
     console.log(response)
   })
});

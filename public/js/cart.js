// const { Products } = require('../../models');


//converts the form to a format that can be processed (ref product.handlbars)
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};
//what values go where??

$(".prod-container").on("click", "button", function(event) { 
  event.preventDefault(); 
  const id = $(this).data("id")
  console.log(id);
  // var $form = $(this).closest(".BuyForm"); 
  //  $.ajax({ 
  //          type: "POST", 
  //          url: "/cart", 
  //          data: $form.serializeObject(),
  //  })
});

//
  // Example POST method implementation:
// async function postData(data = {}) {
//     // Default options are marked with *
//     const response = await fetch(data, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
//   postData('', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });

  
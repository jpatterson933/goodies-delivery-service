//--------COMMENTED OUT UNTIL FIGURE OUT A BETTER WAY TO HAVE IT POP UP----------//

// const ofAge = $("#of-age");
// const notOfAge = $("#not-of-age");
// const modal = $(".overlay");
// const ageCheck = () => {
//     //this is our click event for our modal and what is ran when it appears.
//     ofAge.on("click", function(event) {
//         event.preventDefault();
//         localStorage.setItem("yes", "Twenty One")
//         modal.hide();
//     })
//     notOfAge.on("click", function() {
//         localStorage.setItem("no", "Not Twenty One")
//     })
//     const ageCheck = localStorage.getItem("yes");
//     const ageCheck2 = localStorage.getItem("no");
//     if (ageCheck) {
//         modal.hide()
//     } else if (ageCheck2) {
//         modal.show();
//     }
// }
// ageCheck();
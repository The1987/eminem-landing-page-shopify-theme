// Offer Box and Indicators / Buttons //

const offer = document.getElementById("message-container-id");
const left_button = document.getElementById("left-offer-button");
const right_button = document.getElementById("right-offer-button");
const close_button = document.getElementById("close-button");

left_button.addEventListener("click", (event) => {
    // console.log("left button clicked!");
    offer.style.display = "flex";
});

right_button.addEventListener("click", (event) => {
    // console.log("right button clicked!")
    offer.style.display = "flex";
});

close_button.addEventListener("click", (event) => {
    // console.log("closee button clicked!")
    offer.style.display = "none";
});
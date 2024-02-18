
// Add an event listener to the "Show Travel" button
document.getElementById("showTravelButton").addEventListener("click", showChosenRide);

function showChosenRide() {
    let radioBtns= document.querySelectorAll("input[name='selectRow']");
    let result;
    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener("change", finds)
    })
}
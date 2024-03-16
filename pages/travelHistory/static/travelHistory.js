let selectedTravelData;
// document.getElementById("showTravelButton").addEventListener("click", checkRadio);
let systemMessageHistPage= document.getElementById("systemMessageHistPage");
// const radio= document.querySelectorAll('selectRow');

function displayError(){
systemMessageHistPage.classList.add("open-error");
    setTimeout(function () {
        systemMessageHistPage.classList.remove("open-error");
    }, 4000);
}
function checkRadio(){
    let selectedOption = document.querySelector('input[name="selectRow"]:checked');
    if (selectedOption) {
        const userName = document.getElementById("showTravelButton").getAttribute("value");

        // Store the selected trip data
        selectedTravelData = {
            _id: selectedOption.value,
            date: selectedOption.parentNode.nextElementSibling.innerText,
            time: selectedOption.parentNode.nextElementSibling.nextElementSibling.innerText,
            source: selectedOption.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            destination: selectedOption.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            max: selectedOption.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            driver: selectedOption.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            price: selectedOption.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            id: ""

        };
        if(selectedTravelData.driver != 'Me'){
            selectedTravelData.id = `${selectedTravelData.driver}_${selectedTravelData.date.toString()}_${selectedTravelData.time.toString()}`
        } else {
            selectedTravelData.id=`${userName}_${selectedTravelData.date.toString()}_${selectedTravelData.time.toString()}`
        }
        console.log("id to show:"+selectedTravelData.id );
        selectedOption.checked = false;
        const id=selectedTravelData.id
         fetch('/showTravel/' + id)
            .then(response => {
                    window.location.href = '/showTravel' + id
            })
            .catch(error => console.error('Error show travel:', error));
    } else {
        console.log("No selected option");
        displayError()
    }
}
                // window.location.href = '/showTravel' + selectedTripData.id

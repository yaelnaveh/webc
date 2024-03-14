console.log('hii2');
import { setError, setSuccess, doesNotContainNumbers, containsOnlyEnglishLetters, checkCity, checkStreet} from '../../static/js/common.js';
// import { setSuccess } from './signUp.js';
const tripForm = document.querySelector('#tripForm');
const citySource = document.querySelector('#citySource');
const streetSource = document.querySelector('#streetSource');
const numberSource = document.querySelector('#numberSource');
const cityDestination = document.querySelector('#cityDestination');
const streetDestination = document.querySelector('#streetDestination');
const numberDestination = document.querySelector('#numberDestination');
const dateTrip = document.querySelector('#dateTrip');
const timeTrip = document.querySelector('#timeTrip');
const numOfPlc = document.querySelector('#numOfPlc');
const price = document.querySelector('#price');

//////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to city input
    citySource.addEventListener('input', function() {
        // Enable or disable street and house number based on whether city is filled
        if (citySource.value.trim() !== '') {
            streetSource.disabled = false;
            numberSource.disabled = false;

        } else {
            streetSource.disabled = false;
            numberSource.disabled = false;
            streetSource.value = '';
            numberSource.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to city input
    cityDestination.addEventListener('input', function() {
        // Enable or disable street and house number based on whether city is filled
        if (cityDestination.value.trim() !== '') {
            streetDestination.disabled = false;
            numberDestination.disabled = false;

        } else {
            streetDestination.disabled = false;
            numberDestination.disabled = false;
            streetDestination.value = '';
            numberDestination.value = '';
        }
    });
});

tripForm.addEventListener('submit', e => {
     e.preventDefault(); // Prevent default form submission behavior

    // Validate inputs
    let isValidTrip = false;
    isValidTrip= validateTripInputs();
    console.log('isValidTrip=' + isValidTrip)
    // If all inputs are valid, submit the form
    if (isValidTrip) {
        tripForm.submit();
    }
});

const validateTripInputs = () => {
    console.log('validateTripInputs')
    const citySourceValue = citySource.value.trim();
    const streetSourceValue = streetSource.value.trim();
    const numberSourceValue = numberSource.value.trim();
    const cityDestinationValue = cityDestination.value.trim();
    const streetDestinationValue = streetDestination.value.trim();
    const numberDestinationValue = numberDestination.value.trim();
    const dateTripValue = dateTrip.value.trim();
    const timeTripValue = timeTrip.value.trim();
    const numOfPlcValue = numOfPlc.value.trim();
    const priceValue = price.value.trim();
    const today = formatDate(new Date());
    console.log(today);
    // let isValid = true;

    // citySource
    if (citySourceValue === '') {
        setError(citySource, 'City is required!');
        return false;
    } else if(!checkCity(citySourceValue, citySource)){
            return false;
    }
    console.log('after city validateTripInputs'+ today)
    if (streetSourceValue && !checkStreet(streetSourceValue)){
        return false;
    }
    if (cityDestinationValue === '') {
        setError(cityDestination, 'City is required!');
        return false;
    } else if(!checkCity(cityDestinationValue, cityDestination)){
        return false;
    }
    if (streetDestinationValue && !checkStreet(streetDestinationValue)){
        return false;
    }
    console.log('today='+today+',dateTripValue='+dateTripValue+'cond@@@@@@@@@@@@@@@@@2='+ toString(dateTripValue)<=toString(today));
    if((dateTripValue && dateTripValue<=today) || !dateTripValue){
        setError(dateTrip, 'Future date is required!');
        return false;
    }
    setSuccess(dateTrip);
    if(!timeTripValue){
        setError(timeTrip, 'Time is required!');
        return false;
    }
    setSuccess(timeTrip);
    if(!numOfPlcValue){
        setError(numOfPlc, 'Number required!');
        return false;
    }
    setSuccess(numOfPlc);
    if(!priceValue){
        setError(price, 'price required!');
        return false;
    }
    setSuccess(price);
    return true;
};

function formatDate(date) {
    // Extract year, month, and date from the date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');

    // Return the formatted date string in the format YYYY-MM-DD
    return `${year}-${month}-${day}`;
}
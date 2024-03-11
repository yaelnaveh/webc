console.log('hii2');
import { setError, setSuccess, doesNotContainNumbers, containsOnlyEnglishLetters, checkCity, checkStreet, checkNumber } from '../../static/js/common.js';
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
    // Validate form inputs
    const isValid = validateTripInputs();

    // Prevent default form submission if inputs are invalid
    if (!isValid) {
        e.preventDefault();
    }
});

const validateTripInputs = () => {
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

    let isValid = true;

    // citySource
    if (citySourceValue === '') {
        setError(citySource, 'City is required!');
        isValid = false;
    } else {
        checkCity(citySourceValue, citySource);
    }

    // Other input validations...

    return isValid;
};

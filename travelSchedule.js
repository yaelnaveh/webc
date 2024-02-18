// Add an event listener to the "Register" button
// document.getElementById("registerButton").addEventListener("click", registerForRide);


const popup = document.getElementById("popup");
const systemMessage= document.getElementById("systemMessage"); //doesn't work yet...
var sourceSearchBar= document.getElementById("sourceSearch");
var destinationSearchBar= document.getElementById("destinationSearch");
var dateSearchBar= document.getElementById("dateSearch");
var tbody= document.getElementById("tbody");
var originalTableData= tbody.innerHTML;

sourceSearchBar.addEventListener('input', Search)
destinationSearchBar.addEventListener('input', Search)
dateSearchBar.addEventListener('input', Search)
//search function
function Search(){
    tbody.innerHTML= originalTableData;
    let rows= tbody.children //all the tr tags

    if(sourceSearchBar.value.length<1 && destinationSearchBar.value.length<1 && !dateSearchBar.value )
        return;

        let filteredRows= '';
        let searchSourceText = sourceSearchBar.value.toLowerCase();
        let searchDestinationText = destinationSearchBar.value.toLowerCase();
        let searchDate= dateFixer(dateSearchBar.value);

        for (let i=0; i< rows.length; i++){
            const currentSourceRowText = rows[i].children[3].innerText.toLowerCase();
            const currentDestinationRowText = rows[i].children[4].innerText.toLowerCase();
            const currentDateRow= rows[i].children[1].innerText.toString();

             if(sourceSearchBar.value.length>0 && destinationSearchBar.value.length>0 && dateSearchBar.value){
                if(currentSourceRowText.startsWith(searchSourceText) &&
                    currentDestinationRowText.startsWith(searchDestinationText) &&
                    (currentDateRow == searchDate)){
                    console.log(currentDateRow)
                filteredRows+= rows[i].outerHTML; //current tr
                }
            }
            else if(sourceSearchBar.value.length>0 && destinationSearchBar.value.length>0 && !dateSearchBar.value){
                if(currentSourceRowText.startsWith(searchSourceText) && currentDestinationRowText.startsWith(searchDestinationText)){
                filteredRows+= rows[i].outerHTML; //current tr
                }
            }
            else if(sourceSearchBar.value.length>0 && destinationSearchBar.value.length<1 && !dateSearchBar.value){
                if(currentSourceRowText.startsWith(searchSourceText)){
                    filteredRows+= rows[i].outerHTML; //current tr
                }
            }
            else if(sourceSearchBar.value.length>0 && destinationSearchBar.value.length<1 && dateSearchBar.value){
                if(currentSourceRowText.startsWith(searchSourceText)&&
                    (currentDateRow == searchDate)){
                    filteredRows+= rows[i].outerHTML; //current tr
                }
            }
             else if(destinationSearchBar.value.length>0 &&
                     sourceSearchBar.value.length<1 &&
                     !dateSearchBar.value){
                if(currentDestinationRowText.startsWith(searchDestinationText)){
                    filteredRows+= rows[i].outerHTML; //current tr
                }
            }
             else if(destinationSearchBar.value.length>0 &&
                     sourceSearchBar.value.length<1 &&
                     dateSearchBar.value){
                if(currentDestinationRowText.startsWith(searchDestinationText)&&
                    (currentDateRow == searchDate)){
                    filteredRows+= rows[i].outerHTML; //current tr
                }
            }
             else if(destinationSearchBar.value.length<1 &&
                     sourceSearchBar.value.length<1 &&
                     dateSearchBar.value){
                 if(currentDateRow == searchDate){
                    filteredRows+= rows[i].outerHTML; //current tr
                }
             }

        }
        tbody.innerHTML= filteredRows;
}

function dateFixer(dateAsYYYYMMDD) {
  const aYear = dateAsYYYYMMDD.slice(2, 4); //work only for year>2000!
  const aMonth = dateAsYYYYMMDD.slice(5, 7);
  const aDay = dateAsYYYYMMDD.slice(8, 10);
  console.log(`${aDay}.${aMonth}.${aYear}`)////
  return `${aDay}.${aMonth}.${aYear}`
}
function openPopup(){
popup.classList.add("open-popup");
}
function closePopup(){
popup.classList.remove("open-popup");
}


function registerForRide() {
    // Find the selected radio button
    var selectedOption = document.querySelector('input[name="selectRow"]:checked');
    //var->const (?)
    if (selectedOption) {
        selectedOption.checked = false;
        openPopup()
    } else {
        // Inform the user to select an option
        // displayMessage("Please select a ride option before submitting.", "error");
        document.getElementById('systemMessage').className = 'error';
        systemMessage.textContent = "Please select a ride option before submitting.";
    }
}




// document.addEventListener("DOMContentLoaded", () => {
//    const sourceTableColumn=
//        // document.getElementById("sourceSearch")
//    document.querySelectorAll(".search-input".forEach(inputField => {
//        const tableRows = inputField.closest("table").querySelectorAll("tbody tr")
//    }))
// });

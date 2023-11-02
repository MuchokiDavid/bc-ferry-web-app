document.addEventListener("DOMContentLoaded",()=>{
    let departureDropdown = document.querySelector("#departure")
    let destinationDropdown = document.querySelector("#destination")
    const viewButton = document.getElementById('viewButton');
    let ApiUrl= 'https://www.bcferriesapi.ca/api/';
    
    //fetch data from API
    async function wholeSchedule(){
        departureDropdown.addEventListener('change', function() {
            // Get the selected value from the departure dropdown
            const selectedDeparture = departureDropdown.value;
        });
        destinationDropdown.addEventListener('change', function() {
            // Get the selected value from the destination dropdown
            const selectedDestination = destinationDropdown.value;
        });
        await fetch(ApiUrl)
        .then(response=>response.json())
        .then(data=> {
            // for(let index= 0; index<=data.schedule.length; index++){
            //     const scheduleUl= document.getElementById("scheduleUl")
            //     const schedule= document.createElement("li")
            //     schedule.className = "scheduleLi"
            //     schedule.innerHTML= `
            //     <p>Schedule from ${data.schedule[index].}</p>
            //     `
            // };
        })
        .catch(error => console.error("Unable to fetch", error));
    }
    
    function buttonEvent(){
        viewButton.addEventListener("click", wholeSchedule())
    }

    buttonEvent();
})
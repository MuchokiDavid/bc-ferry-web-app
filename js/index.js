document.addEventListener("DOMContentLoaded",()=>{
    let departureDropdown = document.querySelector("#departure")
    let arrivalDropdown = document.querySelector("#destination")
    const viewButton = document.getElementById('viewButton');
    let ApiUrl= 'https://www.bcferriesapi.ca/api/';
    
    //fetch data from API
    async function wholeSchedule(){
        fetch(ApiUrl)
        .then(response => response.json())
        .then(data => {
            //console.log(data);

            departureDropdown.addEventListener("change", function(){
            let departureValue= departureDropdown.value;
            arrivalDropdown.addEventListener("change", ()=> {
                let arrivalValue = arrivalDropdown.value;
                const divList = document.createElement("div")
                const itemsDiv = document.querySelector("#scheduleUl")
                divList.className= "destinationList"
                divList.innerHTML= `
                <p>Time travel from: ${data.schedule[departureValue][arrivalValue].sailings[1].time} </p>
                `
                itemsDiv.appendChild(divList)
            })
            // console.log(departureValue)
            
            })
            
            
        })
        .catch(error => console.error('Error:', error));
    }
    
    function buttonEvent(){
        viewButton.addEventListener("click", wholeSchedule())
    }

    buttonEvent();
})
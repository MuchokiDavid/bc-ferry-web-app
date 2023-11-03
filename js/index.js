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
            try {
                // window.location.reload();
                departureDropdown.addEventListener("change", function(){
                let departureValue= departureDropdown.value;
                arrivalDropdown.addEventListener("change", ()=> {
                    // if(divList){
                    //     itemsDiv.removeChild(divList)
                    // }
                        let arrivalValue = arrivalDropdown.value;
                        
                        viewButton.addEventListener("click", ()=>{
                            if (departureValue !== arrivalValue) {
                                const divList = document.createElement("div")
                                const itemsDiv = document.querySelector("#scheduleUl")
                                divList.className= "destinationList"
                                divList.innerHTML= `
                                <table class="tblRoute">
                                    <tr>
                                        <th>Departure Station</th>
                                        <th>Arrival Station</th>
                                        <th>Departure Time</th>
                                        <th>Arrival Time</th>
                                        <th>Vessel Name</th>
                                        <th>Fill</th>
                                        <th>Cancelled Status</th>
                                    </tr>
                                    <tr>
                                        <td>${departureValue}</td>
                                        <td>${arrivalValue}</td>
                                        <td>${data.schedule[departureValue][arrivalValue].sailings[1].time} </td>
                                        <td>${data.schedule[departureValue][arrivalValue].sailings[1].arrivalTime} </td>
                                        <td>${data.schedule[departureValue][arrivalValue].sailings[1].vasselName} </td>
                                        <td>${data.schedule[departureValue][arrivalValue].sailings[1].fill} </td>
                                        <td>${data.schedule[departureValue][arrivalValue].sailings[1].isCancelled} </td>
                                    </tr>
                                    
                                </table>
                                `
                                itemsDiv.appendChild(divList)
                            }
                            else{
                                alert ("Choose another route")
                                window.location.reload()
                            }
                            

                        })
                    
                    
                    })
                // console.log(departureValue)
                })
            } 
            catch (error) {
                Alert ("Data not found")
            }
        })
        .catch(error => console.error('Error:', error));
    }
    wholeSchedule()
})
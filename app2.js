const pilotageBtn = document.querySelector('#pilotage_btn');
let pilotageTable = document.querySelector('#pilotage_table');
let pilotageId = 0;


pilotageBtn.addEventListener('click',()=>{
    let vesselType = document.querySelector('#vessel_type').value;
    let vesselGrt = document.querySelector('#vessel_grt').value;
    let multiplierVessel = (Math.floor(vesselGrt/1000));
    let vesselPilotageAmount;
    pilotageId++

    let tr = document.createElement('tr');


    if(vesselType === 'container'){
        if(vesselGrt < 501){
            vesselPilotageAmount = 70;
        } else if(vesselGrt <1001){
            vesselPilotageAmount = 140;
        } else{
            if(vesselGrt%1000 === 0){
                vesselPilotageAmount = 140 + ((multiplierVessel - 1) * 60);
            } else{
                vesselPilotageAmount = 140 + (multiplierVessel * 60);
            }          
        }
    }else if(vesselType === 'transit'){
        if(vesselGrt < 500){
            vesselPilotageAmount = 50;
        } else if(vesselGrt < 1001){
            vesselPilotageAmount = 100;
        } else{
            if(vesselGrt%1000 === 0){
                vesselPilotageAmount = 100 + ((multiplierVessel - 1) * 40);
            } else{
                vesselPilotageAmount = 100 + (multiplierVessel * 40);
            } 
        }
    } else{
        if(vesselGrt < 500){
            vesselPilotageAmount = 85;
        } else if(vesselGrt < 1001){
            vesselPilotageAmount = 170;
        } else{
            if(vesselGrt%1000 === 0){
                vesselPilotageAmount = 170 + ((multiplierVessel - 1) * 70);
            } else{
                vesselPilotageAmount = 170 + (multiplierVessel * 70);
            } 
        }
    }


    pilotageTable.appendChild(tr);

    tr.innerHTML += `
    <tr>
      <th scope="row">${pilotageId}</th>
      <td>${vesselType}</td>
      <td>${vesselGrt}</td>
      <td>${vesselPilotageAmount}</td>
    </tr>`
    

})




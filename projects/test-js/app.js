import axios from "axios";



async function saveAirlines(){
    let url = await axios.get(`https://www.kayak.com/h/mobileapis/directory/airlines/`);
    let data = url.data;
    var count = 0
    for(var i=0; i < data.length; i++){
        if(data[i]['alliance'] === 'ST'){
            count += 1;
            console.log(count)
            console.log(data[i])
        }
        
    }
    // if(data[4]['alliance'] === 'none'){
    //     console.log('não tem nada')
    // }
}

saveAirlines()
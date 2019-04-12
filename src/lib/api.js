import axios from 'axios';

export function postMenu(order){
    // order[i] 대신 넘기는 방법은? 혹은 order에서 배열때는 방법 
    return axios.post('http://localhost:8000/shoppinglist/', order[0])  
    .then(function(response){
        console.log(response);
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error);
    })


    
}
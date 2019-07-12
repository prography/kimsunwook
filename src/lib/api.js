import axios from 'axios';

export function postMenu(order_total_data){
    order_total_data.order = JSON.stringify(order_total_data.order)
    console.log(order_total_data)
    // order[i] 대신 넘기는 방법은? 혹은 order에서 배열때는 방법 
    return axios.post('http://localhost:8000/shoppinglist/', order_total_data)  
    .then(function(response){
        console.log(response);
        console.log(response.data)
    })
    .catch(function(error){
        console.log(order_total_data)
        console.log(error);
    })

}

// export function postToken(auth){
    
//     return axios.post('http://localhost:8000/rest-auth/kakao/',token)
//     .then(function(response){
//         console.log(response)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
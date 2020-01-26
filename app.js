const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const CityList = document.querySelector('.cityList')

const cities = []; 
let typedCity = []; 
const fetchData = async ()=> { 
    await fetch(endpoint)
    .then((response) => { 
        return response.json()
    }).then((data)=> cities.push(...data))
    
    
}




const handleInput = (e) => { 
    const txt = e.target.value;
    const capitalLetters = txt.charAt(0).toUpperCase() + txt.substring(1);                                                                                                                                                                                                                                                              
    
    typedCity = cities.filter(item => item.city.includes(capitalLetters)); 
    
}




const  handleData =  () => { 
    let right = [...typedCity]; 
    right =  right.map(item => `<li class="city">${item.city}</li>`).toString().split(',').join("")
    CityList.innerHTML = right
    
}





document.querySelector('.searchCity').addEventListener('input', handleInput)
document.querySelector('.searchCity').addEventListener('keyup', handleData)



fetchData()
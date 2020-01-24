const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = []; 

const fetchData = async ()=> { 
   await fetch(endpoint)
    .then((response) => { 
        return response.json()
    }).then((data)=> cities.push(...data))

    handleData()
}




const  handleData =() => { 


}


const handleInput = (e) => { 
const txt = e.target.value
const capitalLetters = txt.charAt(0).toUpperCase() + txt.substring(1); 

const filterCities = cities.filter(item => item.city.includes(capital)) 
console.log(filterCities)
}


document.querySelector('.searchCity').addEventListener('input', handleInput)
fetchData()



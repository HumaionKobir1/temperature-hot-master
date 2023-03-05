// Don't show your API key on your js file

const api_key = "03ae4abf42b430d844e6a6af34c65557";

const loadTemerature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperture(data);
}

const displayTemperture = data => {
    setInnerTextById('temp', data.main.temp)
    setInnerTextById('condition', data.weather[0].main);
    setInnerTextById('city', data.name);
}

const setInnerTextById = (id, text) => {
    const tempreture = document.getElementById(id);
    tempreture.innerText = text;
}

const searchBtn = () => {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemerature(city);
}

loadTemerature('dhaka');


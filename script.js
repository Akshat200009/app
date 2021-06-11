function getData() {
  var input = document.getElementById('city')

  let city = input.value.trim()

  if (city === '') return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3745668dccd1ede7b219e4260a7e6bc`).then(data => data.json())
  .then(data => {
    display(data)
  })
}

function display(data) {

  let html = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
  <h4>Weather : <span>${data.weather[0].description.toUpperCase()}</span></h4>
  <h5>Location : <span>${data.name}, ${data.sys.country.toUpperCase()}</span></h5>
  <h6>Temperature : <span>${(data.main.temp - 273.15).toFixed(2)} &#8451;</span></h6>
  <h6>Real-Feels : <span>${(data.main.feels_like - 273.15).toFixed(2)} &#8451;</span></h6>
  <h6>Air Pressure : <span>${data.main.pressure} hPa</span></h6>
  <h6>Wind Speed : <span>${data.wind.speed}Km/h</span></h6>
  <h6>Humidity : <span>${data.main.humidity}</span></h6>
  <h6>Clouds : <span>${data.clouds.all}</span></h6>
  <h6>Visibility : <span>${data.visibility} m</span></h6>`


  document.getElementById('data').innerHTML = html
}
document.getElementById("botonLondres").addEventListener("click", () => {

  const weatherAPIlondres = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3e23da879f54f2f8cb69fb9774008bb0';
 

  fetch(weatherAPIlondres)
      .then((response) => response.json())
      .then((data) => {

        console.log(data);

        let londresDescripcion = data.weather[0].description.toUpperCase();
        document.getElementById("londresDescripcion").innerHTML = "En Londres hoy: " + londresDescripcion;

        let temperaturaMaxLondres = data.main.temp_max;
        document.getElementById("temperaturaMaxLondres").innerHTML = "Temperatura máxima: " + temperaturaMaxLondres;

        let temperaturaMinLondres = data.main.temp_min;
        document.getElementById("temperaturaMinLondres").innerHTML = "Temperatura mínima: " + temperaturaMinLondres;


    })

  .catch((err) => console.log(err));

});

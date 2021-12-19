const key="9d50450a48809637b4862bdcb125927d";

async function GetApi(city) {
     // getting response and storing it into variable
     var response="";
     if(city=="2643743" || city=="5128581")
     {
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+ city + "&appid="+ key);
     }
     else if(city=="2988507")
     {
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+ city + "&lang=fr&appid="+ key );
     }
     else if(city=="1273294")
     {
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+ city + "&lang=hi&appid=" + key );
     }
     else if(city=="1850147")
     {
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+ city + "&lang=ja&appid=" + key );
     }
    
     // Storing data in form of JSON
     var data = await response.json();
     console.log(data);
     display(data);
}

function display(data){
    const {name} =data;
    const {description} = data.weather[0];
    const {temp, humidity, temp_max, temp_min} =data.main;
    // console.log(name, description, temp, humidity, temp_max, temp_min)
   // document.querySelector('.City').id = name;
    document.querySelector(".City").innerText = name;
    document.querySelector(".Description").innerText ="Weather: " + description;
    document.querySelector(".Humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".Temp").innerText = "Temperature: " + (temp + 273.15).toFixed(2) +" K"; 
    document.querySelector(".Temp_min").innerText = "Minimum Temperature: " + (temp_min + 273.15).toFixed(2) + " K"; 
    document.querySelector(".Temp_max").innerText = "Maximum Temperature: " + (temp_max + 273.15).toFixed(2) + " K"; 
}



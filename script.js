var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((value)=>foo(value)).catch((error)=>console.log(error));

function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-lg-4">
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header" style="text-align:center;background-color:black" id="countryname">${value[i].name}</div>
        <div class="card-body">
        <img src="${value[i].flag}" class="card-img-top">
        <h6 class="card-title" style="text-align:center">Capital:${value[i].capital}</h6>
        <h6 class="card-title" style="text-align:center">Region:${value[i].region}</h6>
        <h6 class="card-title" style="text-align:center">Country code:${value[i].alpha3Code}</h6> 
        <h6 class="card-title" style="text-align:center">LatLng:${value[i].latlng}</h6>
        <button type="button" class="btn btn-primary" onclick=bar()>Click for Weather</button>  
  </div>
  </div>
</div>`;
    document.body.append(container);
    }
}
function bar(){
    var weather=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value[i].name}&appid=094c3719107dc3b88183ab25db619942`);
    weather.then((data1)=>data1.json()).then((value1)=>value1[i].main.temp);
    button.innerHTML=`${value[i].main.temp}`;
}
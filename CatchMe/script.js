//zaladowanie mapy
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
            lat: 52.237049, 
            lng: 21.017532
        },
      zoom: 10
    });
}

// sciaganie geolokalizacji
navigator.geolocation.getCurrentPosition(zgodaNaLok,brakZgodyNaLok,{enableHighAccuracy:true});

let pinezka ;
function zgodaNaLok(position){
    alert(" wspolrzedne geograficzne (szer,dl) : " + position.coords.latitude + " " + position.coords.longitude);
    
    let dlugoscGeo =  position.coords.longitude;
    let szerokoscGeo = position.coords.latitude; 
    //ustawianie środka
    map.setCenter({
        lng: dlugoscGeo,
        lat: szerokoscGeo
    })
   let blabla = {lng: dlugoscGeo , lat: szerokoscGeo}
    
    pinezka = new google.maps.Marker({
        position:blabla,
        icon: "img/pawprint.png",
        map: map,
        title: "Your localisation"
    });
}

function brakZgodyNaLok() {
  alert("brak zgody na pobranie lokalizacji");
  pinezka = new google.maps.Marker({
    position: {lat: 52.237049, lng: 21.017532},
    icon: "img/pawprint.png",
    map: map,
    title:"hejkaaa"
  })
}

let arrowDown = false;
let arrowUp = false;
let arrowLeft = false;
let arrowRight = false; 
window.addEventListener("keydown", function(e){
  switch (e.key){
    case "ArrowUp": 
    arrowUp = true;
    break;
    case "ArrowDown": 
    arrowDown = true;
    break;
    case "ArrowLeft": 
    arrowLeft = true;
    break;
    case "ArrowRight":
    arrowRight = true;
    break;
   }
})

window.addEventListener("keyup", function(e){
  switch (e.key){
    case "ArrowUp": 
    arrowUp = false;
    break;
    case "ArrowDown": 
    arrowDown = false;
    break;
    case "ArrowLeft": 
    arrowLeft = false;
    break;
    case "ArrowRight":
    arrowRight = false;
    break;
  }
})

setInterval(function(){
  if(pinezka == undefined) return;

  let szerokoscGeograficzna = pinezka.position.lat();
  let dlugoscGeograficzna = pinezka.position.lng();
  


  if(arrowDown){
    szerokoscGeograficzna -= 0.001
  }
  if(arrowUp){
    szerokoscGeograficzna += 0.001
  }
  if(arrowLeft){
    dlugoscGeograficzna -= 0.001
  }

  if(arrowRight){
    dlugoscGeograficzna += 0.001
  }
  
  map.panTo(new google.maps.LatLng(szerokoscGeograficzna,dlugoscGeograficzna));
  pinezka.setPosition(new google.maps.LatLng(szerokoscGeograficzna,dlugoscGeograficzna));
  
}, 40)


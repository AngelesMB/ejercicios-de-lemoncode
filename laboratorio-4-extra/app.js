// Función precio habitación
var getRoomTypePrice = () => {
  var roomType = document.getElementById("room-type").value;
  var roomTypePrice = 0;
  if (roomType === "standard") {
    roomTypePrice = 100;
  } else if (roomType === "junior-suite") {
    roomTypePrice = 120;
  } else if (roomType === "suite") {
    roomTypePrice = 150;
  }
  return roomTypePrice;
};

// Función uso del spa
var getSpa = () => {
  var roomTypePrice = getRoomTypePrice();
  var spaCheck = document.getElementById("spa").checked;
  if ((spaCheck == true)) {
    roomTypePrice += 20;
  } else if ((spaCheck == false)) {
    roomTypePrice = roomTypePrice;
  }
  return roomTypePrice;
};
// Función tamaño habitación
var getRoomSize = () => {
  var roomSize = document.getElementById("room-size").value;
  var roomTypePrice = getSpa();  
  var roomTypePriceSize = 0;
  if (roomSize === "individual") {
    roomTypePriceSize = roomTypePrice * 0.75;
  } else if (roomSize === "doble") {
    roomTypePriceSize = roomTypePrice;
  } else if (roomSize === "triple") {
    roomTypePriceSize = roomTypePrice * 1.25;
  }
  return roomTypePriceSize;
};
// // Función número de noches
var getNightCount = () => {
  var nightCount = document.getElementById("night-count").value;
  return nightCount;
};
// // Función parking
var getParkingCount = () => {
  var parkingNumber = document.getElementById("parking-count").value;
  var parkingCount = 0;
  if ((parkingNumber == 0)) {
    parkingCount = 0;
  } else {
    parkingCount = parkingNumber * 10;
  }
  return parkingCount;
};

// Función calcular total
var showTotal = () => { 
    var roomTypePriceSize = getRoomSize();
    var nightCount = getNightCount();
    var parkingCount = getParkingCount();

    var roomSize = document.getElementById("room-size").value;

    // ALERTA número de noches vacío
    if (nightCount == 0|| nightCount == undefined || isNaN(nightCount)){
    document.getElementById("result").innerText = "RESERVA MÍNIMA UNA NOCHE";
    // ALERTA tamaño habitación vacío
    } else if (roomSize === "placeholder"){
    document.getElementById("result").innerText = "DEBES ELEGIR TAMAÑO";
    // Todos los campos obligatorios completos, suma del total
    } else {
    var total = (roomTypePriceSize*nightCount)+parkingCount;  
    document.getElementById("result").innerText = "Total:" + total;
    return total;
    }
};

// Registro de funciones
document.getElementById("room-type").addEventListener("change", getRoomTypePrice);
document.getElementById("spa").addEventListener("change", getSpa);
document.getElementById("room-size").addEventListener("change", getRoomSize);
document.getElementById("night-count").addEventListener("change", getNightCount);
document.getElementById("parking-count").addEventListener("change", getParkingCount);

// Sin el botón de calcular
document.getElementById("room-type").addEventListener("change", showTotal);
document.getElementById("spa").addEventListener("change", showTotal);
document.getElementById("room-size").addEventListener("change", showTotal);
document.getElementById("night-count").addEventListener("change", showTotal);
document.getElementById("parking-count").addEventListener("change", showTotal);

// Con el botón de calcular
// document.getElementById("button").addEventListener("click", showTotal);
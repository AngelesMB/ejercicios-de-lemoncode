var hoteles = {
    Marion: {
        name: "Marion",
        location: "Madrid",
        img: "https://cdn.pixabay.com/photo/2015/11/10/18/13/steamboat-inn-1037483_960_720.jpg",
    },
    "Gran Vía": {
        name: "Gran Vía",
        location: "Sevilla",
        img: "https://cdn.pixabay.com/photo/2018/10/21/23/13/architecture-3764122_960_720.jpg",
    }
};

var preguntaHotel = prompt("Indique el nombre del hotel a reseñar: Marion o Gran Vía");

document.getElementById("hotel-description-name").innerHTML = "Hotel " + hoteles[preguntaHotel]["name"];
document.getElementById("hotel-description-location").innerHTML = hoteles[preguntaHotel]["location"];
document.getElementById("hotel-img").src = hoteles[preguntaHotel]["img"];

var stars = {
    "1": "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    "2": "<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    "3": "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
    "4": "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
    "5": "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>",
};

var preguntaRating = prompt("Introduzca su puntuación del 1 al 5");

document.getElementById("hotel-rating-stars").innerHTML = stars[preguntaRating];

var preguntaCheckbox = confirm("Indique si desea que su reseña sea anónima");

document.getElementById("hotel-rating-checkbox").checked = preguntaCheckbox;
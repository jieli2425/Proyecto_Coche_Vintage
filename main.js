// Array con los datos de cada coche
let coches = [
    {
        nombre: "Ford Mustang", año: 1990,combustible: "Gasolina",km: "16.900",localidad: "Sevilla",precio: "45.000€",image: "./img/ford-mustang.jpg"
    },
    {
        nombre: "Chevrolet Camaro", año: 1970, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/chevrolet-camaro.jpg"
    },
    {
        nombre: "Audi S8", año: 2000, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/Audi-S8.jpg"
    },
    {
        nombre: "Mercedes Sedan", año: 1980, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/mercedes-sedan.jpg"
    },
    {
        nombre: "Nissan H250", año: 1988, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/Nissan-H250.jpg"
    },
    {
        nombre: "Lamborghini Miura", año: 1966, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/lamborghini-miura.jpg"
    },
    {
        nombre: "Porche 911", año: 1972, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/Porche-911.jpg"
    },
    {
        nombre: "Seat Toledo", año: 1999, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/Seat-Toledo.jpg"
    },
    {
        nombre: "Dodge Challenger", año: 1970, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/dodge-challenger.jpg"
    },
    {
        nombre: "Volkswagen GTE", año: 1977, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/Volkswagen-GTE.jpg"
    },
    {
        nombre: "Renault 18", año: 1978, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/renault-18.jpg"
    },
    {
        nombre: "Toyota Supra", año: 1985, combustible: "Gasolina", km: "65,000 km", localidad: "Madrid", precio: "50.000€", image: "./img/toyota-supra.jpg"
    },
];

// Selecciona el contenedor donde se añadirán las cartas
const cocheCartasContainer = document.getElementById("coche-cartas");

// Función para generar las cartas de coches
function generarCoches() {
    coches.forEach(coche => {
        // Crea el contenedor de las tarjetas
        const cocheCarta = document.createElement("div");
        cocheCarta.classList.add("coche-carta");

        // Imagen del coche
        const cocheImagen = document.createElement("img");
        cocheImagen.src = coche.image;
        cocheImagen.alt = `Imagen de ${coche.nombre}`;
        cocheImagen.classList.add("coche-img");

        // Título con el nombre del coche
        const cocheTitulo = document.createElement("h3");
        cocheTitulo.textContent = coche.nombre;

        // Precio debajo de la imagen
        const cochePrecio = document.createElement("p");
        cochePrecio.innerHTML = `<strong>Precio:</strong> ${coche.precio}`;

        // Detalles en el formato solicitado
        const cocheDetalles = document.createElement("p");
        cocheDetalles.innerHTML = `${coche.año} | ${coche.combustible} | ${coche.km} | ${coche.localidad}`;

        // Botón de "Contactar"
        const botonContacto = document.createElement("a");
        botonContacto.href = "./contacto.html";
        botonContacto.classList.add("contacto-button");
        botonContacto.textContent = "Contactar";

        // Contenedor de botones
        const cartaBotones = document.createElement("div");
        cartaBotones.classList.add("carta-botones");
        cartaBotones.appendChild(botonContacto);

        // Añadir elementos a la tarjeta
        cocheCarta.appendChild(cocheImagen);
        cocheCarta.appendChild(cocheTitulo);
        cocheCarta.appendChild(cochePrecio);
        cocheCarta.appendChild(cocheDetalles);
        cocheCarta.appendChild(cartaBotones);

        // Añadir la tarjeta al contenedor principal
        cocheCartasContainer.appendChild(cocheCarta);
    });
}

// Llamar a la función para generar las cartas
generarCoches();

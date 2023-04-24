const apiTotal = 'https://digimon-api.vercel.app/api/digimon/'
const apiNombre = 'https://digimon-api.vercel.app/api/digimon/name'
const apiNivel = "https://digimon-api.vercel.app/api/digimon/level/"

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  });


function obtenerDigimon(){

    let nombre = document.getElementById("busqueda").value
    fetch(`${apiNombre}/${nombre}`)
    .then(Response => Response.json())
    .then( data => {
        if(data.length > 0){
        document.getElementById("card-img").src= data[0]['img'];
        document.getElementById("card-titulo").innerHTML = data[0]['name'];
        document.getElementById("card-texto").innerHTML = data[0]['level'];

        myModal.show()
        }
        else{
            alert("No se encontró el Digimon ingresado")
        }
    })
    
        
};

function MostrarTodos(nivel){

    let api =""
    switch(nivel) {
        case "Champion":
            api = `${apiNivel}Champion`
          break;
        case "Fresh":
          api = `${apiNivel}Fresh`
          break;
        case "Todos":
            api = apiTotal
          break;
        case "In Training":
            api = `${apiNivel}In%20Training`
            break;
        case "rookie":
            api = `${apiNivel}rookie`
            break;
        case "Ultimate":
            api = `${apiNivel}ultimate`
            break;
        case "Armor":
            api = `${apiNivel}armor`
            break;
        case "Mega":
            api = `${apiNivel}mega`
            break;
        default:
            api = apiTotal
      }
      
    fetch(api)
    .then(Response => Response.json())
    .then( data => {
    let contenedor = document.getElementById("contenedor")
    let contenido = ""
    for (let i = 0; i < data.length; i++) {
         contenido += `
         <div>
         <div class="card">
          <img src="${data[i]['img']}" alt="${data[i]['name']}"/>
          <h5 class="card-title">${data[i]['name']}</h5>
          <p class="card-text">${data[i]['level']}</p>
            </div>
        </div>
            `
        }
    contenedor.innerHTML = contenido
})
};

MostrarTodos("Todos")

const propiedades_alquiler = [
  {
    title: "Apartamento de 2 habitaciones en el centro de la ciudad (Alquiler)",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    address: "123 Main Street, Anytown, CA 91234",
    bedrooms: 2,
    bathrooms: 2,
    price: 2000,
    smoking: false,
    pets: false,
  },
  {
    title: "Apartamento luminoso con vista al mar (Alquiler)",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    address: "456 Ocean Avenue, Seaside Town, CA 56789",
    bedrooms: 3,
    bathrooms: 3,
    price: 2500,
    smoking: false,
    pets: true,
  },
  {
    title: "Condominio moderno en zona residencial (Alquiler)",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    description:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    address: "789 Quiet Lane, Suburbia, CA 34567",
    bedrooms: 3,
    bathrooms: 2,
    price: 2200,
    smoking: false,
    pets: true,
  },
  {
    title: "Apartamento espacioso con terraza (Alquiler)",
    src: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Este apartamento de lujo cuenta con una amplia terraza con vistas panorámicas",
    address: "567 Skyview Road, Hilltop City, CA 78901",
    bedrooms: 4,
    bathrooms: 3,
    price: 3000,
    smoking: true,
    pets: false,
  },
  {
    title: "Loft moderno en el corazón artístico (Alquiler)",
    src: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1000&q=60",
    description:
      "Este loft de diseño contemporáneo se encuentra en el corazón del distrito artístico",
    address: "890 Creative Avenue, Artsy Town, CA 12345",
    bedrooms: 2,
    bathrooms: 2,
    price: 1800,
    smoking: false,
    pets: false,
  },
];
  
const mostrarPropiedadesAlquiler = (_alquiler, elementoHtml) => {
const elemento = document.getElementById(elementoHtml);

const propiedadesPorMostrarAlquiler = [];

for (let alquiler of propiedades_alquiler) {
    propiedadesPorMostrarAlquiler.push(alquiler)
}

propiedadesPorMostrarAlquiler.forEach((alquiler) => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card">
      <img src="${alquiler.src}" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">${alquiler.title}</h5>
        <p class="card-text">${alquiler.description}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${alquiler.address}</p>
        <p>
        <i class="fas fa-bed"></i>
        ${alquiler.bedrooms} Habitaciones |
        <i class="fas fa-bath"></i>
        ${alquiler.bathrooms} Baños
        </p>
        <p>
        <i class="fas fa-dollar-sign"></i> ${alquiler.price}
        </p>
        <p class="${alquiler.smoking ? "text-success" : "text-danger"}">
        <i class="fas ${alquiler.smoking ? "fa-smoking" : "fa-smoking-ban"}"></i>
        ${alquiler.smoking ? "Está permitido fumar" : "No esta permitido fumar"}
        </p>
        <p class="${alquiler.pets ? "text-success" : "text-danger"}">
        <i class="fas ${alquiler.pets ? "fa-paw" : "fa-ban"} "></i>
        ${alquiler.pets ? "Mascotas Permitidas" : "No se permite mascotas"}
        </p>
      </div>
    </div>`;
    elemento.appendChild(card);
  })
};

mostrarPropiedadesAlquiler(propiedades_alquiler, "todasPropiedadesAlquiler");

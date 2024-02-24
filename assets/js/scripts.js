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
  
const propiedades_venta = [
  {
    title: "Apartamento de lujo en zona exclusiva (Venta)",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    description:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    address: "123 Luxury Lane, Prestige Suburb, CA 45678",
    bedrooms: 4,
    bathrooms: 4,
    price: 5000,
    smoking: false,
    pets: false,
  },
  {
    title: "Apartamento acogedor en la montaña (Venta)",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    description:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    address: "789 Mountain Road, Summit Peaks, CA 23456",
    bedrooms: 2,
    bathrooms: 1,
    price: 1200,
    smoking: true,
    pets: true,
  },
  {
    title: "Penthouse de lujo con terraza panorámica (Venta)",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    description:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares y acabados de alta calidad",
    address: "567 Skyline Avenue, Skyview City, CA 56789",
    bedrooms: 3,
    bathrooms: 3,
    price: 4500,
    smoking: false,
    pets: false,
  },
  {
    title: "Apartamento moderno en el distrito financiero (Venta)",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    description:
      "Este apartamento de diseño moderno está ubicado en el centro del distrito financiero",
    address: "890 Financial Avenue, Downtown City, CA 78901",
    bedrooms: 2,
    bathrooms: 2,
    price: 2800,
    smoking: false,
    pets: true,
  },
  {
    title: "Loft industrial con estilo urbano (Venta)",
    src: "https://images.unsplash.com/photo-1628611225249-6c3c7c689552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    description: "Este loft industrial ofrece un estilo urbano único",
    address: "101 Urban Street, Urbanville, CA 34567",
    bedrooms: 1,
    bathrooms: 1,
    price: 1600,
    smoking: true,
    pets: false,
  },
];

const mostrarPropiedades = (propiedades, elementoHtml) => {
  const elemento = document.getElementById(elementoHtml);

  const propiedadesPorMostrar = [];

  for (let i = 0; i < 3; i++) {
    if (i < propiedades.length) {
      propiedadesPorMostrar.push(propiedades[i]);
    }
  }

  propiedadesPorMostrar.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
    <div class="card">
      <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad.title}</h5>
        <p class="card-text">${propiedad.description}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
        <p>
          <i class="fas fa-bed"></i>
          ${propiedad.bedrooms} Habitaciones |
          <i class="fas fa-bath"></i>
          ${propiedad.bathrooms} Baños
        </p>
        <p>
          <i class="fas fa-dollar-sign"></i> ${propiedad.price}
        </p>
        <p class="${propiedad.smoking ? "text-success" : "text-danger"}">
          <i class="fas ${propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"}"></i>
          ${propiedad.smoking ? "Está permitido fumar" : "No esta permitido fumar"}
        </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"} "></i>
          ${propiedad.pets ? "Mascotas Permitidas" : "No se permite mascotas"}
        </p>
      </div>
    </div>`;
    elemento.appendChild(card);
  });
};

mostrarPropiedades(propiedades_alquiler, "propiedadesAlquiler");
mostrarPropiedades(propiedades_venta, "propiedadesVenta");

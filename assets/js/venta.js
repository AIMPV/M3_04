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
    src: "https://images.hola.com/imagenes/decoracion/20200415164991/decoracion-interiores-apartamento-moderno-reformado-am/0-807-928/apartamento-15t-t.jpg",
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

const mostrarPropiedadesVenta = (venta, elementoHtml) => {
  const elemento = document.getElementById(elementoHtml);
  
  const propiedadesPorMostrarVenta = [];
  
  for (let venta of propiedades_venta) {
      propiedadesPorMostrarVenta.push(venta)
  }
  
  propiedadesPorMostrarVenta.forEach((venta) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card">
        <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento"/>
        <div class="card-body">
          <h5 class="card-title">${venta.title}</h5>
          <p class="card-text">${venta.description}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${venta.address}</p>
          <p>
          <i class="fas fa-bed"></i>
          ${venta.bedrooms} Habitaciones |
          <i class="fas fa-bath"></i>
          ${venta.bathrooms} Baños
          </p>
          <p>
          <i class="fas fa-dollar-sign"></i> ${venta.price}
          </p>
          <p class="${venta.smoking ? "text-success" : "text-danger"}">
          <i class="fas ${venta.smoking ? "fa-smoking" : "fa-smoking-ban"}"></i>
          ${venta.smoking ? "Está permitido fumar" : "No esta permitido fumar"}
          </p>
          <p class="${venta.pets ? "text-success" : "text-danger"}">
          <i class="fas ${venta.pets ? "fa-paw" : "fa-ban"} "></i>
          ${venta.pets ? "Mascotas Permitidas" : "No se permite mascotas"}
          </p>
        </div>
      </div>`;
      elemento.appendChild(card);
    })
  };
  
  mostrarPropiedadesVenta(propiedades_venta, "todasPropiedadesVenta");
  
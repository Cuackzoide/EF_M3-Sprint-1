const recetasDulces = [
  {
    id: 1,
    nombre: "Trufas de Chocolate Clásicas",
    descripcion: "Deliciosas bolitas de chocolate y nata.",
    ingredientes: ["Chocolate negro", "Nata para montar", "Cacao en polvo"],
    tiempo: 15,
    imagen:
      "https://www.pequerecetas.com/wp-content/uploads/2011/12/trufas-de-chocolate-receta.jpg",
  },
  {
    id: 2,
    nombre: "Manzanas Asadas con Canela",
    descripcion: "Postre caliente, saludable y reconfortante.",
    ingredientes: ["Manzanas", "Azúcar", "Miel", "Canela en polvo", "Agua"],
    tiempo: 5,
    imagen:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQsGZrQE3bvx16MSLcDVQ6QC3vSLDdU-uZCuWEByrSycyFceKfJ-1S5q5YuIuSKzX9IU_5dsaMLZzaibuQDFpobAupuiRTevI_yLkYoegy1ZzWhTmg",
  },
  {
    id: 3,
    nombre: "Mousse de Limón Rápido",
    descripcion: "Postre cremoso, ácido y refrescante.",
    ingredientes: ["Leche condensada", "Jugo de limón", "Galletas María"],
    tiempo: 10,
    imagen:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSTpqLwDsDRZllL86CIdfCSrvg_wIDf3Tryu6HkBmo1V_-4Azgvs0T0W4y6X_hcDAj9KogrtwOA9W2cO_RVtc4AH0saH7Qfm0Va_yP_MfeYyYqPK1I",
  },
  {
    id: 4,
    nombre: "Galletas de Mantequilla",
    descripcion: "Clásicas, crujientes y perfectas para decorar.",
    ingredientes: ["Mantequilla", "Harina", "Azúcar glass", "Huevo"],
    tiempo: 20,
    imagen:
      "https://www.annarecetasfaciles.com/files/galletas-de-mantequilla-clasicas-3-815x458.jpg",
  },
  {
    id: 5,
    nombre: "Flan de Huevo Casero",
    descripcion: "Un clásico suave y con caramelo.",
    ingredientes: ["Huevos", "Leche", "Azúcar", "Vainilla"],
    tiempo: 15,
    imagen:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWlAstyHjoNCPS5dcTSabk2U-n7h_gBJBeboKdTE-gStFCmUIFEuh3-7YSt-lPWDSWSXgnm51QEoTmp134qMHE3IZZVIP6mga5uSbAzrjHJccNyHQ",
  },
  {
    id: 6,
    nombre: "Pudín de Chía con Fruta",
    descripcion: "Opción saludable, ideal para desayuno o postre.",
    ingredientes: ["Semillas de chía", "Leche", "Miel", "Fresas"],
    tiempo: 5,
    imagen:
      "https://proveg.com/es/wp-content/uploads/sites/2/2020/02/Pudding-chi%CC%81a-pla%CC%81tano-y-frutos-rojos.png",
  },
  {
    id: 7,
    nombre: "Brownie de Taza",
    descripcion: "Postre de chocolate individual en microondas.",
    ingredientes: ["Harina", "Cacao en polvo", "Azúcar", "Leche", "Aceite"],
    tiempo: 5,
    imagen:
      "https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/58a593592dc738994cef51ac598b71f3.webp?itok=a8sAJQNG",
  },
  {
    id: 8,
    nombre: "Tostadas Francesas",
    descripcion: "Pan remojado y frito, con azúcar y canela.",
    ingredientes: ["Pan de molde", "Leche", "Huevos", "Azúcar", "Canela"],
    tiempo: 10,
    imagen: "https://i.blogs.es/77be0c/tostada_francesa/1366_2000.jpg",
  },
  {
    id: 9,
    nombre: "Bizcocho de Yogur Básico",
    descripcion: "Un bizcocho simple, la receta del vasito.",
    ingredientes: ["Yogur natural", "Harina", "Huevos", "Azúcar", "Aceite"],
    tiempo: 15,
    imagen:
      "https://www.annarecetasfaciles.com/files/bizcocho-de-yogur1-815x458.jpg",
  },
  {
    id: 10,
    nombre: "Gelatina de Leche",
    descripcion: "Postre fresco y colorido a base de leche y gelatina.",
    ingredientes: [
      "Leche",
      "Azúcar",
      "Gelatina sin sabor",
      "Gelatinas de sabores",
    ],
    tiempo: 20,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgILmr3QMu1QDial0s-GoF8pkVJ4Hpm3B5j4UCiu6kdB0jtUrf1MQCSxCIqfuk",
  },
  {
    id: 11,
    nombre: "Banana Split",
    descripcion: "Versión rápida del clásico postre helado.",
    ingredientes: [
      "Plátanos",
      "Helado de vainilla",
      "Crema batida",
      "Salsa de chocolate",
    ],
    tiempo: 5,
    imagen:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSdDtbPcRjkYbj4XdNaM6AUo8qEMVdNd6m1cNxTWOw5syRx_UUPlIMhC_y2o3fPXS6ZjcUUBwjuGJt1duVPsiotKNd_Qg6mxc0pu1nn-6_OLFM9qzA",
  },
  {
    id: 12,
    nombre: "Fudge de Chocolate",
    descripcion: "Dulce blando, denso y muy fácil de hacer.",
    ingredientes: ["Chocolate negro", "Leche condensada", "Mantequilla"],
    tiempo: 10,
    imagen:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSX3_v92LQTKse9tOy-8DThrZjAwpyy_VMoGIIvwnkaR0JkkslM83XAO1jBpQy-VmAV8SVP6SaBm1rVxUbSrfN-KyYFB6Otgh83MM6MRkifL2h7Hp0",
  },
  {
    id: 13,
    nombre: "Arroz con Leche",
    descripcion: "Clásico postre cremoso con canela y limón.",
    ingredientes: ["Arroz", "Leche entera", "Azúcar", "Canela", "Limón"],
    tiempo: 10,
    imagen:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSMXQczereWgeuHU5UtesnLRvDjFN60kSD2afN1JmAhd33hqILzlVBFP5V1Ucbl5O3ELepfHLaIXGYsHSZ9uhGLiLNumXTg6M_4e7tHtL0paXDdt5g",
  },
  {
    id: 14,
    nombre: "Cheesecake sin Horno",
    descripcion: "Tarta fría de queso y galletas.",
    ingredientes: ["Galletas María", "Mantequilla", "Queso crema"],
    tiempo: 15,
    imagen:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5R3RPnu6ZYS9eNnWhWIl3S0neEExghNV0wGLrXois-JjJvWzIt-Tlw5WvY_WF",
  },
  {
    id: 15,
    nombre: "Tiramisú Rápido",
    descripcion: "Versión individual del postre italiano.",
    ingredientes: ["Queso mascarpone", "Azúcar", "Café", "Bizcochos", "Cacao"],
    tiempo: 10,
    imagen:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkYdyocmMb3Dv2k7Anasb_rfCjOVrL-gC2UjYTz6-OX815lQMB6XkxKtjql2bX",
  },
];
function showProducts(productsArray, elementHTML, callback) {
  elementHTML.innerHTML = "";
  productsArray.forEach((product) => {
    elementHTML.innerHTML += callback(product);
  });
}

function timeCategorizer(productsArray) {
  const categorias = [];
  productsArray.forEach((product) => {
    if (!categorias.includes(product.tiempo)) {
      categorias.push(product.tiempo);
    }
  });
  return categorias.sort((a, b) => a - b);
}

const recipeContainer = document.getElementById("recipe-container");
showProducts(recetasDulces, recipeContainer, (el) => {
  return ` <article class="col">
      <div class="card h-100">
        <img
          src="${el.imagen}"
          class="card-img-top img-fit"
          alt="${el.nombre}"
          loading="lazy"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">${el.descripcion}</p>
          <button class="btn btn-primary mt-auto">
            Ver receta
          </button>
        </div>
      </div>
    </article>`;
});

const navTabs = document.querySelector(".nav-tabs");
const categorias = timeCategorizer(recetasDulces);
showProducts(categorias, navTabs, (el) => {
  return `<li class="nav-item" role="presentation">
    <a class="nav-link" href="#" data-target="${el}">${el}</a>
  </li>`;
});

navTabs.addEventListener("click", (e) => {
  e.preventDefault();
  showProducts(recetasDulces, recipeContainer, (el) => {
    if (e.target.dataset.target == el.tiempo) {
      return ` <article class="col">
      <div class="card h-100">
        <img
          src="${el.imagen}"
          class="card-img-top img-fit"
          alt="${el.nombre}"
          loading="lazy"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">${el.descripcion}</p>
          <button class="btn btn-primary mt-auto">
            Ver receta
          </button>
        </div>
      </div>
    </article>`;
    }
    return "";
  });
});

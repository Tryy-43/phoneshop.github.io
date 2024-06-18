const menuProduct = [
  {
    category: "samsung",
    title: "S 24 Ultra",
    priceOn: "1599$",
    priceOff: "1699$",
    imgsrc: "img/s24ultra.png",
  },

  {
    category: "samsung",
    title: "S 23 Ultra",
    priceOn: "1299$",
    priceOff: "1399$",
    imgsrc: "img/s23ultraBlack.png",
  },
  {
    category: "samsung",
    title: "S 22 Ultra",
    priceOn: "1199$",
    priceOff: "1299$",
    imgsrc: "img/s22ultra.png",
  },
  {
    category: "samsung",
    title: "Z Fold 5",
    priceOn: "1499$",
    priceOff: "1599$",
    imgsrc: "img/fold5.png",
  },

  {
    category: "samsung",
    title: "Z Fold 4",
    priceOn: "1399$",
    priceOff: "1499$",
    imgsrc: "img/fold4.png",
  },
  {
    category: "samsung",
    title: "Z Flip 4",
    priceOn: "1299$",
    priceOff: "1399$",
    imgsrc: "img/flip4.png",
  },
  {
    category: "iphone",
    title: "iphone 15",
    priceOn: "1399$",
    priceOff: "1499$",
    imgsrc: "img/iphone14.png",
  },
  {
    category: "iphone",
    title: "iphone 14 Pro Max",
    priceOn: "1299$",
    priceOff: "1399$",
    imgsrc: "img/iphone14max.png",
  },
  {
    category: "iphone",
    title: "iphone 13 Pro Max",
    priceOn: "1199$",
    priceOff: "1299$",
    imgsrc: "img/iphone13max.png",
  },
  {
    category: "iphone",
    title: "iphone 12 Pro Max",
    priceOn: "1099$",
    priceOff: "1199$",
    imgsrc: "img/iphone12max.png",
  },
  {
    category: "iphone",
    title: "iphone SE",
    priceOn: "Unknow",
    priceOff: "0000$",
    imgsrc: "img/iphonse.png",
  },
  {
    category: "iphone",
    title: "iphone 4",
    priceOn: "Unknow$",
    priceOff: "0000$",
    imgsrc: "img/iphon4.png",
  },
  {
    category: "Pixel",
    title: "Pixel 8 Pro",
    priceOn: "1399$",
    priceOff: "1499$",
    imgsrc: "img/pixel8pro.png",
  },
  {
    category: "pixel",
    title: "Pixel 8 a",
    priceOn: "1199$",
    priceOff: "1299$",
    imgsrc: "img/pixel8a.png",
  },
  {
    category: "pixel",
    title: "Pixel 7 Pro",
    priceOn: "1299$",
    priceOff: "1399$",
    imgsrc: "img/pixel7pro.png",
  },
  {
    category: "pixel",
    title: "Pixel 7 a",
    priceOn: "1099$",
    priceOff: "1199$",
    imgsrc: "img/pixel7a.png",
  },
  {
    category: "pixel",
    title: "Pixel 6 a",
    priceOn: "999$",
    priceOff: "1099$",
    imgsrc: "img/pixel6a.png",
  },
  {
    category: "oppo",
    title: "Reno 10 Pro 5G",
    priceOn: "1099$",
    priceOff: "1199$",
    imgsrc: "img/reno.png",
  },
  {
    category: "oppo",
    title: "Reno 8 Pro",
    priceOn: "399$",
    priceOff: "499$",
    imgsrc: "img/reno8pro.png",
  },
  {
    category: "oppo",
    title: "Find Flip 3 ",
    priceOn: "1099$",
    priceOff: "1199$",
    imgsrc: "img/find3flip.png",
  },
  {
    category: "oppo",
    title: "Find 3",
    priceOn: "1299$",
    priceOff: "1399$",
    imgsrc: "img/find3.png",
  },
];

const menuWrapper = document.querySelector(".post-product");
window.addEventListener("DOMContentLoaded", () => {
  const showingProduct = menuProduct
    .map((p) => {
      return `<div class="item-wrapper">
            <img class="img-product" src="${p.imgsrc}" alt="${p.title}" />
            <h3 class="name-product">${p.title}</h3>
            <div class="price-product">
              <p class="on">${p.priceOn}</p>
              <p class="off">${p.priceOff}<span class="strike"></span></p>
            </div>
            <input class="btn-buy" type="button" value="Buy" />
          </div>`;
    })
    .join("");
  menuWrapper.innerHTML = showingProduct;
});
const btnList = document.querySelectorAll(".list-item-product");
const btnContainer = document.querySelector(".list-group");
btnContainer.addEventListener("click", (e) => {
  // const btnTarget = e.target.classList.contains("list-item-product");
  const btnId = e.target.dataset.id;
  btnList.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active-product");
      e.target.classList.add("active-product");
    }
  });
});
btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnd = e.currentTarget.dataset.id;
    const filterMenu = menuProduct.filter((item) => {
      return item.category == btnd;
    });
    const display = filterMenu
      .map((p) => {
        return `<div class="item-wrapper">
      <img class="img-product" src="${p.imgsrc}" alt="${p.title}" />
      <h3 class="name-product">${p.title}</h3>
      <div class="price-product">
        <p class="on">${p.priceOn}</p>
        <p class="off">${p.priceOff}<span class="strike"></span></p>
      </div>
      <input class="btn-buy" type="button" value="Buy" />
    </div>`;
      })
      .join("");
    if (btnd == "all") {
      menuWrapper.innerHTML = menuProduct
        .map((p) => {
          return `<div class="item-wrapper">
        <img class="img-product" src="${p.imgsrc}" alt="${p.title}" />
        <h3 class="name-product">${p.title}</h3>
        <div class="price-product">
          <p class="on">${p.priceOn}</p>
          <p class="off">${p.priceOff}<span class="strike"></span></p>
        </div>
        <input class="btn-buy" type="button" value="Buy" />
      </div>`;
        })
        .join("");
    } else {
      menuWrapper.innerHTML = display;
    }
  });
});

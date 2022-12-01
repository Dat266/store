const color = document.querySelectorAll(".color");
const cart = document.querySelector(".main--sub2");
const imageEl = document.querySelector(".image");
const cart5 = document.querySelector(".sub5--cart");
const cart6 = document.querySelector(".sub6--item");
const cart7 = document.querySelector(".main--sub7");

const listCart = [
    {
        background: "#D3FBD9",
        img: "s.jpg",
        desc: "Vonna Neva Walnut Sandalye Chair",
        price: "195,13",
        color: [
            "#7CB93E",
            "#33ABC6",
            "#1CCD8D",
            "#3F65EA",
            "#F64A69",
            "#A635EC",
            "#F9A85D",
        ],
    },
    {
        background: "#FFE4BD",
        img: "Rectangle 19.jpg",
        desc: "Wood lamp, Floor Lamp, Lambader, Decorative",
        price: "458,43",
        color: ["#7CB93E", "#3F65EA", "#F64A69", "#A635EC", "#F9A85D"],
    },
    {
        background: "#D9ABFD",
        img: "d.jpg",
        desc: "NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple",
        price: "789,67",
        color: ["#3F65EA", "#F64A69", "#A635EC"],
    },
    {
        background: "#FDF0AB",
        img: "Rectangle 19.jpg",
        desc: "Lace Punch Needle Pillow Covers with invisible zipper,16*16 inches",
        price: "43,23",
        color: ["#7CB93E", "#3F65EA", "#F64A69", "#A635EC", "#F9A85D"],
    },
];

const listCart2 = [
    {
        background: "#D3FBD9",
        img: "s.jpg",
        desc: "Vonna Neva Walnut Sandalye Chair",
        price: "195,13",
        color: [
            "#7CB93E",
            "#33ABC6",
            "#1CCD8D",
            "#3F65EA",
            "#F64A69",
            "#A635EC",
            "#F9A85D",
        ],
    },
    {
        background: "#FFE4BD",
        img: "Rectangle 19.jpg",
        desc: "Wood lamp, Floor Lamp, Lambader, Decorative",
        price: "458,43",
        color: ["#7CB93E", "#3F65EA", "#F64A69", "#A635EC", "#F9A85D"],
    },
    {
        background: "#D9ABFD",
        img: "d.jpg",
        desc: "NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple",
        price: "789,67",
        color: ["#3F65EA", "#F64A69", "#A635EC"],
    },
];

const listImg = [
    {
        img: "Rectangle 25.jpg",
        name: "Craft Kits",
    },
    {
        img: "2.jpg",
        name: "Throw Pillows",
    },
    {
        img: "3.jpg",
        name: "Natural Glass",
    },
    {
        img: "4.jpg",
        name: "Self-care",
    },
    {
        img: "5.jpg",
        name: "Gift Ideas",
    },
    {
        img: "6.jpg",
        name: "Wall Decor",
    },
    {
        img: "7.jpg",
        name: "Wedding",
    },
    {
        img: "8.jpg",
        name: "Life Style",
    },
];

const lists5 = [
    {
        img: "c1.jpg",
        title: "Distressed Tote Leather Bag Leather Bag",
        price: "216,27",
        name: "Modern Farmhouse",
    },
    {
        img: "c2.jpg",
        title: "Womens Cognac Leather Elastic Straps",
        price: "195,13",
        name: "Eclectic Decor",
    },
    {
        img: "c3.jpg",
        title: "Distressed Tote Leather Bag Leather Bag",
        price: "216,27",
        name: "Polka Boho Decor",
    },
    {
        img: "c4.jpg",
        title: "High Top Canvas Shoes",
        price: "341,02",
        name: "Minimalist Style",
    },
    {
        img: "c5.jpg",
        title: "Rose Gold Moissanite Vintage Wedding Ring Set",
        price: "3.344,13",
        name: "Anniversary Gift",
    },
    {
        img: "c6.jpg",
        title: "Blue Topaz Bangle 24K Gold Plated Handmade",
        price: "789,09 ",
        name: "Wedding Gifts",
    },
];

const renderColor = (lists) => {
    const htmls = lists
        .map((item) => {
            return `
        <div style=" 
        margin-right: 10px;
        margin-top: 15px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
         background-color: ${item}
        "></div>
        `;
        })
        .join("");
    return htmls;
};

const cartProduct = (lists) => {
    const htmls = lists
        .map((item) => {
            console.log(item.img);
            return `
        
        <div class="cart" style="background-color: ${item.background}">
            <div class="heart">
                <img src="./image/Vector 15.jpg" alt="image" />
            </div>
            <div class="img">
                <img src="./image/${item.img}" alt="image" width="200" />
            </div>
            <h4>Colors</h4>
            <div class="color">${renderColor(item.color)}</div>
            <p>${item.desc}</p>
            <span class="price">${item.price}$</span>
        </div>
        
        `;
        })
        .join(" ");
    return htmls;
};

const renderImg = (lists) => {
    const htmls = lists.map((el) => {
        return `
      <div class="sub--image">
      <img
      src="./image/${el.img}"
      alt="image"
      class="img--item"
  />
  <span>${el.name}</span>
      </div>
        `;
    });
    return htmls.join(" ");
};

const renderCart5 = (lists) => {
    const htmls = lists.map((el) => {
        return `
        <div class="cart--item">
        <img
            src="./image/Vector 15.jpg"
            alt="image"
            class="sub5--heart"
        />

        <img src="./image/${el.img}" alt="" width="120" />
        <p>${el.title}</p>
        <p>${el.price}$</p>
       <div class="cart--name">
       <h4>${el.name}</h4>
       <hr/>
       </div>
    </div>
        `;
    });
    return htmls.join(" ");
};

cart.innerHTML = cartProduct(listCart);

imageEl.innerHTML = renderImg(listImg);

cart5.innerHTML = renderCart5(lists5);

cart6.innerHTML = cartProduct(listCart2);

cart7.innerHTML = renderImg(listImg);

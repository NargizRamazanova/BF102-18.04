// let arr = [
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         title: "Lorem ipsum ",
//         desc: "Lorem ipsum dolor sit amet.",
//         link: "facebook.com"
//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         title: "Lorem ",
//         desc: "Lorem ipsum dolor sit amet.",
//         link: "facebook.com"
//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         title: "Lorem ipsum dolor ",
//         desc: "Lorem ipsum dolor sit amet.",
//         link: "facebook.com"
//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         title: "Lorem ipsum dolor ",
//         desc: "Lorem ipsum dolor sit amet.",
//         link: "facebook.com"
//     },

// ]

// const body = document.querySelector("body")
// body.classList.add("pt-5");
// let container = document.createElement("div");
// container.classList.add("container");
// body.append(container);


// let Div = document.createElement("div");
// Div.classList.add("mb-4");
// Div.style.backgroundColor = "black";
// Div.style.height = "360px";
// container.appendChild(Div);

// let row = document.createElement("div");
// row.classList.add("row");
// container.append(row)


// arr.forEach(element => {
//     let col4 = document.createElement("div")
//     col4.classList.add("col-3");

//     let img = document.createElement("img");
//     img.setAttribute("src" , element.img)
//     img.style.width = "100%"

//     let title = document.createElement("h4");
//     title.innerText = element.title;

//     let desc = document.createElement("p");
//     desc.innerText = element.desc;

//     let link = document.createElement("a");
//     link.setAttribute("href" , element.link);
//     link.innerText = "read more";

//     col4.append(img,title,desc,link);
//     row.append(col4);

// });


// let data = [
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Fancy Product",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: false,
//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Special Item",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: true,

//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Sale Item",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: false,

//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: false,

//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Sale Item",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: true,

//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Fancy Product",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: false,

//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: false,
//     },
//     {
//         img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Special Item",
//         price: "$40.00 - $80.00",
//         details: "https://startbootstrap.com/previews/shop-homepage",
//         isOnSale: true,

//     },

// ]


// const container = document.createElement("div")
// container.classList.add("container")
// container.classList.add("pt-5")
// document.querySelector("body").appendChild(container)

// const row = document.createElement("div")
// row.classList.add("row")
// container.appendChild(row)


// data.forEach(element => {
//     let col= document.createElement("div")
//     col.classList.add("col-3")
//     col.classList.add("mb-3")

//     let card = document.createElement("div")
//     card.classList.add("card")
//     card.style.position = "relative"

//     if(element.isOnSale){
//         const badge =document.createElement("span")
//         badge.classList.add("badge")
//         badge.classList.add("bg-dark")
//         badge.innerText = "Sale"
//         badge.style.position = "absolute"
//         badge.style.top = "10px"
//         badge.style.right = "10px"
//         card.append(badge)

//     }

//     let image = document.createElement("img")
//     image.classList.add("card-img-top")
//     image.setAttribute("src", element.img)

//     let cardBody = document.createElement("div")
//     cardBody.classList.add("card-body")

//     let heading = document.createElement("h5")
//     heading.classList.add("card-title")
//     heading.innerText = element.name

//     let price = document.createElement("p")
//     price.classList.add("card-text")
//     price.innerText = element.price

//     let btn = document.createElement("a")
//     btn.classList.add("btn-primary")
//     btn.setAttribute("href", element.details)

//     cardBody.append(heading, price, btn)
//     card.append(image, cardBody)
//     col.append(card)
//     row.append(col)
// })




// Uch input yaradirsiz ve bir button. Inputlarla fullName, email ve age goturursuz.
// Button-a click olunanda bu melumatlarla bir user yaradirsiz.
// User bir obyektir ve butun userler array de saxlanilir.
// User-lerin siyahi ashagidan listin ichinde gorunur

const users = []

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const ageInput = document.querySelector("#age")
const btn = document.querySelector("button")
const ul = document.querySelector("ul")


btn.addEventListener("click", function(){
    const li = document.createElement("li");
    let newUser = {
        name: nameInput.value,
        email: emailInput.value,
        age: ageInput.value
    }
    users.push(newUser)
    li.innerText = `Name: ${nameInput.value}, Email:${emailInput.value}, Age: ${ageInput.value}`
    ul.append(li)
    nameInput.value="";
    emailInput.value="";
    ageInput.value=0;
    console.log(users)
})











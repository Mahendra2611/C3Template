
let final = JSON.parse(localStorage.getItem("purchase"));


final.map(function(el){

    let container = document.getElementById("purchased_vouchers");

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.img;

    let p1 = document.createElement("p");
    p1.innerText = el.name;

    let p2 = document.createElement("p");
    p2.innerText = el.price;

    div.append(img,p1,p2);

    container.append(div);

})

let amount = JSON.parse(localStorage.getItem("user")) || [];

let bal = document.getElementById("wallet_balance")

// let arr = [];

// console.log(amount);

// bal.innerText  = amount;
// bal.innerText = amount;
// console.log(bal.innerText);
let bag = [];
amount.forEach(function(el){

   

    bag.push(el.wallet)

});

let x = bag.reduce(function(sum,el){
    return sum+(Number(el))
},0)

bal.innerText = x;







let pur = JSON.parse(localStorage.getItem("purchase")) || [];

let getList = async ()=>{

    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`


    try{
        let res = await fetch(url);

    let data  = await res.json();
    // let x = data.vouchers;
    // console.log('data:', data)

    appendData(data[0].vouchers);
    }
    catch(err){
        console.log('err:', err)

    }

}


let appendData = (data)=>{
    
    data.forEach((el,i)=>{

        let container = document.getElementById("voucher_list");


        let p1 = document.createElement("p");
        p1.innerText = el.name;

        let img = document.createElement("img");
        img.src = el.image;

        let p2 = document.createElement("p");
        p2.innerText = (el.price);

        let btn = document.createElement("button");
        btn.innerText = "Buy Now";
        btn.setAttribute("class","buy_voucher");
        btn.addEventListener("click",()=>{
             purchase(el);
        })

        let div = document.createElement("div");
        div.setAttribute("class","voucher");


        div.append(img,p1,p2,btn)

        container.append(div);






    })
}

let purchase = (el)=>{
    let obj = {
        img:el.image,
        name:el.name,
        price:(el.price),
    }

    pur.push(obj);

    localStorage.setItem("purchase",JSON.stringify(pur));


}
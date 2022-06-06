var arr= JSON.parse(localStorage.getItem("user")) || [];




let submit = ()=>{

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let add = document.getElementById("address").value;
    let wallet = document.getElementById("amount").value;

    let obj = {
        name:name,
        email:email,
        add:add,
        wallet:wallet,
    }

    arr.push(obj);

    localStorage.setItem("user",JSON.stringify(arr));

    name="";
    email="";
    add = "";
    wallet = "";
}

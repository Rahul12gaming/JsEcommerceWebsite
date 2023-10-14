const Toogle = () => {
    const btn = document.getElementById('menu');
    const navbar = document.getElementById("navbar");
    btn.addEventListener("click", function () {
        document.getElementById("navbar").classList.add("active");
    })
}
const Toogle2 = () => {
    const btn2 = document.getElementById('cancel');

    btn2.addEventListener("click", function () {
     
        document.getElementById("navbar").classList.remove("active");
    })
}
const product = (text,amount) => {
    localStorage.setItem("imglink", text);
    localStorage.setItem("price",amount)
    window.location.href = './singleProduct.html';
    document.getElementById('product1').src = localStorage.getItem("imglink")
   

}
function setSingleProduct() {
    
    document.getElementById("mainImg").src = localStorage.getItem("imglink")
    document.getElementById("priceTag").innerHTML = localStorage.getItem("price")
}





let cartData =  JSON.parse(localStorage.getItem("cart")) ||[];

function addToCart(id,price) {
    
    
    
    let searcItem = id;
    let search = cartData.find((x) => x.img === searcItem);
    
    if (search == undefined) {
        cartData.push({
            img: searcItem,
            item: 1,
            amount:price
        })
       
       
    }
    else {
        search.item += 1;
    }
    
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.href='./cart.html'
    console.log(cartData)
}
let cont = document.getElementById("shopping");
let total=0;
let toatlItems=0;
let cont2=document.getElementById("emptycart");
function add() {
  
    // if(cartData.length===0)
    // {
    //     document.getElementById("emptyCart").classList.toggle="active"
    // }
    
    document.getElementById("shopping").innerHTML = cartData.map((x) => {
        // toatl=+x.amount*item;
        // console.log(toatl);
        const {item,img,amount}=x;
        console.log()
        total+=x.amount.slice(1)*x.item;
        toatlItems+=x.item;
        localStorage.setItem("items",toatlItems);
        localStorage.setItem("orderPrice",total);
     
        return (

            `<tr>
                <td ><i onclick="remove('${img}')"  class="far fa-times-circle"></i></i></td>
                
                    <td><img src=${img} alt=""></td>
                    <td>Tshirt</td>
                    <td>${amount}</td>
                    <td>${item}</td>
            </tr>`
        )
    })

}

  
   
function remove(id)
{
    cartData=cartData.filter((x)=>
        x.img!==id
    )
    
    localStorage.setItem("cart",JSON.stringify(cartData));
    add();
    console.log(cartData);
    
}
function removeAll()
{

    localStorage.removeItem("cart")
    window.location.href="./cart.html";
}
function checkout()
{
    if(cartData.length!==0)
    {
        window.location.href='./checkout.html'
    }
    else
    {
        alert("Your Cart is Empty")
    }
}
function setOrderSummary()
{
    document.getElementById("prices").innerHTML=localStorage.getItem("orderPrice");
    document.getElementById("items").innerHTML=localStorage.getItem("items");
}
function deliver()
{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const address=document.getElementById("address").value;
    if(!name || !phone || !email || !address)
    {
        alert("Please Fill The Details To Proceed")
    }
    else if(phone.length>10 || phone.length<10)
    {
        alert("Please Enter a Valid Phone Number")
    }
   
    else
    {
        window.location.href="./Ordered.html"
         name=" "
    }
    console.log(name);
    
}
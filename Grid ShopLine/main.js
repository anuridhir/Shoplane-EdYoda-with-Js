
function navSlide() {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".navbar");

  burger.addEventListener("click", function() {
    nav.classList.toggle("navbar");
    burger.classList.toggle("toggle");
  });
}
navSlide();

// let clothingCards = document.getElementById("clothingCards");
// let  accessoriesCards = document.getElementById("accessoriesCards");



// let  productList = [
//   {
//     "id": "1",
//     "name": "Men Navy Blue Solid Sweatshirt",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
//     "isAccessory": false,
//     "brand": "United Colors of Benetton",
//     "price": 2599
//   },
//   {
//     "id": "2",
//     "name": "Men Black MAMGP T7 Sweat Sporty Jacket",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
//     "isAccessory": false,
//     "brand": "Puma",
//     "price": 7999
//   },
//   {
//     "id": "3",
//     "name": "Men Black Action Parkview Lifestyle Shoes",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
//     "isAccessory": false,
//     "brand": "Hush Puppies",
//     "price": 6999
//   },
//   {
//     "id": "4",
//     "name": "Women Black Solid Lightweight Leather Jacket",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg", 
//    "isAccessory": false,
//     "brand": "BARESKIN",
//     "price": 9999
//   },
//   {
//     "id": "5",
//     "name": "Women Blue Solid Shirt Dress",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
//      "isAccessory": false,
//     "brand": "SASSAFRAS",
//     "price": 5200
//   },
//   {
//     "id": "6",
//     "name": "Unisex Silver-Toned Series 3 Smart Watch",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
//     "isAccessory": true,
//     "brand": "Apple",
//     "price": 31999
//   },
//   {
//     "id": "7",
//     "name": "Unisex Black & Green Reflex 2.0 Smart Band",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
//     "isAccessory": true,
//     "brand": "Fastrack",
//     "price": 1999
//   },
//   {
//     "id": "8",
//     "name": "Unisex Black Galaxy Fit Fitness Band",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
//     "isAccessory": true,
//     "brand": "Samsung",
//     "price": 9990
//   },
//   {
//     "id": "9",
//     "name": "Gear IconX Black Cord-free Fitness Earbuds",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
//     "isAccessory": true,
//     "brand": "Samsung",
//     "price": 13990
//   },
//   {
//     "id": "10",
//     "name": "White 2nd Gen AirPods with Charging Case",
//     "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
//     "isAccessory": true,
//     "brand": "Apple",
//     "price": 14999
//   }
// ];

// function createCard (id, name, preview, brand, price, isAccessory ){
//   if (isAccessory == false){
//     for (let i=0; i<=length.productList; i++){
//       document.write(clothingCards)
//   }
// }else{
//   document.write(accessoriesCards)
// }
// let code = `
// <div class="card">
//   <img src="${preview}" alt="" class="img">
//   <div class="cardtext">
//     <h2 class="name">${name}</h3>
//     <h3 class="brand">${brand}</h4>
//       <h5 class="price">${price}</h5>
//   </div>
// </div>
// `
// clothingCards.innerHTML += code;
// }

// createCard (productList);

const data =
[
{
  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",

  title: "Men Navy Blue Solid Sweatshirt",

  category: "United Colors of Benetton",

  price: "Rs &nbsp; 2599" },




{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",

  title: "Men Black MAMGP T7 Sweat Sporty Jacket",

  category: "Puma",

  price: "Rs &nbsp; 7999" },



{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",

  title: "Men Black Action Parkview Lifestyle Shoes",

  category: "Hush Puppies",

  price: "Rs &nbsp; 6999" },



{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",

  title: "Women Black Solid Lightweight Leather Jacket",

  category: "BARESKIN",

  price: "Rs &nbsp; 9999" },


{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",

  title: "Women Blue Solid Shirt Dress",

  category: "SASSAFRAS",

  price: "Rs &nbsp; 5200" }];





data.forEach((element, i) => {



  // const productFolder = document.querySelector(".product-sec");

  const menFolder = document.getElementById("mens");


  const products = document.createElement("div");

  products.classList = "product-block";



  const productCode = `



                <img src="${data[i].Image}"
                    alt="">


                <div class="product-details">

                    <h4>${data[i].title}</h4>

                    <p>${data[i].category}</p>

                    <h3>${data[i].price}</h3>


            

`;


  products.innerHTML += productCode;

  menFolder.appendChild(products);


});






// For Accesories





const data2 = [

{
  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
  title: "Unisex Silver-Toned Series 3 Smart Watch",
  category: "Apple",
  price: "Rs &nbsp; 31999" },


{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
  title: "Unisex Black & Green Reflex 2.0 Smart Band",
  category: "Fastrack",
  price: "Rs &nbsp; 1999" },



{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
  title: "Unisex Black Galaxy Fit Fitness Band",
  category: "Samsung",
  price: "Rs &nbsp; 9990" },



{

  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
  category: "Apple",
  price: "Rs &nbsp; 31999" },



{


  Image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
  title: "White 2nd Gen AirPods with Charging Case",
  category: "Apple",
  price: "Rs &nbsp; 14999" }];

















data2.forEach((element, i) => {






  const womenblock = document.getElementById("womens");

  const cardDiv = document.createElement("div");

  cardDiv.classList = "product-block";


  const proCode = `

 

                <img src="${data2[i].Image}"
                alt="">


                <div class="product-details">

                        <h4>${data2[i].title}</h4>

                        <p>${data2[i].category}</p>

                        <h3>${data2[i].price}</h3>


                </div>







`;


  cardDiv.innerHTML += proCode;

  womenblock.appendChild(cardDiv);



});
// just an example of making an array
var array = ["word", 5, 7, "a", "anything", true];

//how to index an array
array[4];
console.log(array[4]);

//gets you the length of the array 
array.length;
console.log(array.length);

// add new element at the end of array
array[array.length] = "newOne";
console.log(array);

let topsIndex = -1;

var tops = [
    "https://i.stack.imgur.com/Vkq2a.png",
    "https://media.karousell.com/media/photos/products/2018/10/05/guess_rexford_stripe_tee_1538726738_7504e6d30" ,
    "https://workingperson.com/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/p/c/pc61wht-portcof_01.jpg" ,
    "https://di2ponv0v5otw.cloudfront.net/posts/2019/01/27/5c4e1f0b7386bc43d5843bb0/m_5c4e1f104ab633c76ea17587.jpg",
    "http://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0610.jpg", 
   "http://www.kaigo-system.com/images/Ralph/e-Bar-Red-Bl-Ralph-Lauren-Slanted-Bar-Men121.jpg", 
    "https://www.hypexchange.co/wp-content/uploads/2018/02/Supreme-Scarface-Split-Tee-Heather-Grey_1-1300x1300.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81hlagQSGOL._UX522_.jpg" 
    ]
function changeTops() {
    var select = document.querySelector("#tops");
    if (topsIndex == 7) {
        topsIndex = 0;
        select.src = tops[topsIndex];
    }
    else {
        topsIndex++;
        select.src = tops[topsIndex];
    }

}

let pantsIndex = -1;
var pants = [
    <img src="https://ae01.alicdn.com/kf/HTB1oWh1XOzxK1Rjy1zkq6yHrVXaS/New-Joggers-Pants-men-Jordan-letter-print-hip-hop-Keep-warm-winter-Sweatpants-Pantalon-Homme-Trousers.jpg" height="180" width="180">
    <img src="https://images-na.ssl-images-amazon.com/images/I/81DFpbuSVwL._UX385_.jpg" height="180" width="180">
    <img src="https://images-na.ssl-images-amazon.com/images/I/61o9Pg3WoBL._UX385_.jpg" height="180" width="180">
    <img src="https://cdn.shopify.com/s/files/1/2329/0393/products/1_MEN_S_GYM_SHORTS_OZ_GYM_WEAR_EMBRACE_PAIN_GREY_1024x1024@2x.jpg?v=1560416512" height="180" width="180">
    <img src="https://gloimg.twkcdn.com/td/pdm-product-pic/Clothing/2018/06/09/source-img/20180609193304_69163.jpg" height="180" width="180">
    <img src="https://5.imimg.com/data5/FY/MN/MY-6841714/black-jeans-500x500.jpeg" height="180" width="180">
    <img src="https://www.brother2brother.co.uk/images/kappa-red-black-slim-fit-sweatpants-p14354-36454_image.jpg" height="180" width="180">
]
function changePants() {
    var select = document.querySelector("#pants");
    if (pantsIndex == 7) {
        pantsIndex = 0;
        select.src = pants[pantsIndex];
    }
    else {
        pantsIndex++;
        select.src = pants[pantsIndex];
    }
}

let jacketsIndex = -1;
var jackets = [
    "https://i.stack.imgur.com/Vkq2a.png",
    "photos/women/c/stella-mccartney-distressed-denim-jacket-care-instructions-machine-wash-at-30-degre-2372-500x500-removebg-preview.png",
    "photos/women/c/eng_pl_Champion-Reverse-Weave-Script-Logo-Crewneck-Sweatshirt-Light-Grey-212576-EM004-5856_1-removebg-preview.png",
    "photos/women/c/cotton_screen_printing_detailing_women_s_sweatshirt_olorblocked_in_black_and_pink_by_fusion-1_3-removebg-preview.png",
    "photos/women/c/15397651803202820193_thumbnail_600x799-removebg-preview.png",
    "photos/women/c/Varsity-Striped-Drawstring-Hooded-sweatshirt-yellow-Striped-Varsity-Print-Crop-Hoodie-Preppy-Pullovers-Girls-busos-para-removebg-preview.png",
    "photos/women/c/Black-ACDMUY1469-137-removebg-preview.png",
    "photos/women/c/images-removebg-preview.png"
]
function changeJackets() {
    var select = document.querySelector("#jackets");
    if (jacketsIndex == 7) {
        jacketsIndex = 0;
        select.src = jackets[jacketsIndex];
    }
    else {
        jacketsIndex++;
        select.src = jackets[jacketsIndex];
    }
}

let dressesIndex = -1;
var dresses = [
    "https://i.stack.imgur.com/Vkq2a.png",
    "photos/women/d/61sh3Xx-1RL-removebg-preview.png",
    "photos/women/d/BerryGo-Bow-ruched-tube-top-jumpsuit-romper-women-Casual-high-waist-short-overalls-Summer-chic-streatwear-removebg-preview.png",
    "photos/women/d/61DDbu-QyGL-removebg-preview.png",
    "photos/women/d/new-summer-cotton-bodycon-dresses-cool-printing-removebg-preview.png",
    "photos/women/d/1ce70f84-daf0-4953-a247-8c4312ca515c_1-removebg-preview.png",
    "photos/women/d/a047ac2e-5dee-48e7-bbc3-0dd1d77bfcfc_1-removebg-preview.png",
    "photos/women/d/product-image-932281828_1024x1024-removebg-preview.png"
]
function changeDresses() {
    var select = document.querySelector("#dresses");
    if (dressesIndex == 7) {
        dressesIndex = 0;
        select.src = dresses[dressesIndex];
    }
    else {
        dressesIndex++;
        select.src = dresses[dressesIndex];
    }
}

let shoesIndex = -1;
var shoes = [
    "https://i.stack.imgur.com/Vkq2a.png",
    "photos/women/e/2745VTR_6000_detail-removebg-preview.png",
    "photos/women/e/Cute-Dog-Cartoon-Women-Slides-2018-Fashion-Pu-Leather-Beach-Shoes-Women-Flat-Heels-Flip-Flops_aa85a328-20c7-4950-9786-48a033f47cf5-removebg-preview.png",
    "photos/women/e/D3HY28-HERO-removebg-preview.png",
    "photos/women/e/EYEBWW-HERO-removebg-preview.png",
    "photos/women/e/m_563a31b6bcd4a7102f000d24-removebg-preview.png",
    "photos/women/e/s-l300-removebg-preview.png",
    "photos/women/e/s-l640-removebg-preview.png"

]
function changeShoes() {
    var select = document.querySelector("#shoes");
    if (shoesIndex == 7) {
        shoesIndex = 0;
        select.src = shoes[shoesIndex];
    }
    else {
        shoesIndex++;
        select.src = shoes[shoesIndex];
    }
}

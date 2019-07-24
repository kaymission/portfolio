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
    
    "photos/men/b/81hlagQSGOL-removebg-preview.png",
    "photos/men/b/e-Bar-Red-Bl-Ralph-Lauren-Slanted-Bar-Men121-removebg-preview.png",
    "photos/men/b/guess_rexford_stripe_tee_1538726738_7504e6d30-removebg-preview.png",
    "photos/men/b/img_0610-removebg-preview.png",
    "photos/men/b/m_5c4e1f104ab633c76ea17587-removebg-preview.png",
    "photos/men/b/pc61wht-portcof_01-removebg-preview.png",
    "photos/men/b/Supreme-Scarface-Split-Tee-Heather-Grey_1-1300x1300-removebg-preview.png",
   ]
function changeTops() {
    var select = document.querySelector("#tops");
    if (topsIndex == 6) {
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
    
    "photos/men/a/1_MEN_S_GYM_SHORTS_OZ_GYM_WEAR_EMBRACE_PAIN_GREY_1024x1024_2x-removebg-preview.png",
    "photos/men/a/61o9Pg3WoBL-removebg-preview.png",
    "photos/men/a/81DFpbuSVwL-removebg-preview.png",
    "photos/men/a/20180609193304_69163-removebg-preview.png",
    "photos/men/a/black-jeans-500x500-removebg-preview.png",
    "photos/men/a/kappa-red-black-slim-fit-sweatpants-p14354-36454_image-removebg-preview.png",
    "photos/men/a/New-Joggers-Pants-men-Jordan-letter-print-hip-hop-Keep-warm-winter-Sweatpants-Pantalon-Homme-Trousers-removebg-preview.png",
 ]
function changePants() {
    var select = document.querySelector("#pants");
    if (pantsIndex == 6) {
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
   
    "photos/men/c/534184dbd2d9e5b05bb075ef9eb90ee1--zip-up-hoodies-mens-sweatshirts-removebg-preview.png",
    "photos/men/c/35585820_fr-removebg-preview.png",
    "photos/men/c/1533811230-66487600-removebg-preview.png",
    "photos/men/c/Mens-Plain-Red-Zip-Sweatshirt-Hoodie-removebg-preview.png",
    "photos/men/c/modernhmhoodiechaitea-chai-tea-removebg-preview.png",
    "photos/men/c/PBY_073L_262881-removebg-preview.png",
    "photos/men/c/Sauce-Hoodie-removebg-preview.png",
]
function changeJackets() {
    var select = document.querySelector("#jackets");
    if (jacketsIndex == 6) {
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
   
    "photos/men/d/08-07-2019_nike_airforce107_white_315122-111_mb_1-removebg-preview.png",
    "photos/men/d/26520_0-removebg-preview.png",
    "photos/men/d/414575_016-removebg-preview.png",
    "photos/men/d/images-removebg-preview.png",
    "photos/men/d/Mens_Air_Jordan_13_Newest_Mid_Black_White_Shoes-removebg-preview.png",
    "photos/men/d/nike-555088-013-ws-a-removebg-preview.png",
    "photos/men/d/nike-aj1285-602-al-a-removebg-preview.png",
  ]
function changeDresses() {
    var select = document.querySelector("#dresses");
    if (dressesIndex == 6) {
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
    
    "photos/men/e/3cfd97e0-e517-4ba4-b12a-56a98247291d-removebg-preview.png",
    "photos/men/e/554788-removebg-preview.png",
    "photos/men/e/1020176_3Q_PDP-removebg-preview.png",
    "photos/men/e/11030235_Flame_main_01-removebg-preview.png",
    "photos/men/e/hy-581-003a-021-removebg-preview.png",
    "photos/men/e/Minimalist-Brand-Cap-Men-Beanie-Winter-Hats-For-Women-Knitted-Bonnet-Mens-Beanies-Cotton-7-colors_0d3dcaac-fca0-40d5-8c7c-ba09c2ebbae7-removebg-preview.png",
    "photos/men/e/s-l300-removebg-preview.png",
]
function changeShoes() {
    var select = document.querySelector("#shoes");
    if (shoesIndex == 6) {
        shoesIndex = 0;
        select.src = shoes[shoesIndex];
    }
    else {
        shoesIndex++;
        select.src = shoes[shoesIndex];
    }
}

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
    
    
    "photos/women/b/1502315367113393269-removebg-preview.png",
    "photos/women/b/Hardwood_Flava_Red_Blk_large-removebg-preview.png",
    "photos/women/b/c9050d2160642155a1425982aca588b4-removebg-preview.png",
    "photos/women/b/GUEST_672bfdd0-4ad0-4620-bf54-1a83cbe75ca8-removebg-preview.png",
    "photos/women/b/images-removebg-preview.png",
    "photos/women/b/thrasher-skate-mag-t-shirt-grey-1-removebg-preview.png"
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
    
    
    "photos/women/a/dedc26101d4e4545090fdc029361ea2d-removebg-preview.png",
    "photos/women/a/product-image-184205671-removebg-preview.png",
    "photos/women/a/2017-Women-Fashion-Denim-Skinny-Ripped-Pants-High-Waist-Stretch-Hole-Boyfriend-Jeans-For-Women-removebg-preview.png",
    "photos/women/a/ac8bc9c7371ad3101bbb204a7205bb65-removebg-preview.png",
    "photos/women/a/ripped-denim-jeans-women-s-distressed-loose-fit-light-blue-pants-13210663059--248-500x500_0-removebg-preview.png",
    "photos/women/a/2018-Fashion-Chain-Military-Camouflage-pants-women-Army-black-high-waist-loose-Camo-Pants-Trousers-Street-removebg-preview.png"
]
function changePants() {
    var select = document.querySelector("#pants");
    if (pantsIndex == 5) {
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
  
   
    "photos/women/c/eng_pl_Champion-Reverse-Weave-Script-Logo-Crewneck-Sweatshirt-Light-Grey-212576-EM004-5856_1-removebg-preview.png",
    "photos/women/c/cotton_screen_printing_detailing_women_s_sweatshirt_olorblocked_in_black_and_pink_by_fusion-1_3-removebg-preview.png",
    "photos/women/c/15397651803202820193_thumbnail_600x799-removebg-preview.png",
    "photos/women/c/Varsity-Striped-Drawstring-Hooded-sweatshirt-yellow-Striped-Varsity-Print-Crop-Hoodie-Preppy-Pullovers-Girls-busos-para-removebg-preview.png",
    "photos/women/c/Black-ACDMUY1469-137-removebg-preview.png",
    "photos/women/c/images-removebg-preview.png"
]
function changeJackets() {
    var select = document.querySelector("#jackets");
    if (jacketsIndex == 5) {
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
    
    
    "photos/women/d/BerryGo-Bow-ruched-tube-top-jumpsuit-romper-women-Casual-high-waist-short-overalls-Summer-chic-streatwear-removebg-preview.png",
    "photos/women/d/61DDbu-QyGL-removebg-preview.png",
    "photos/women/d/new-summer-cotton-bodycon-dresses-cool-printing-removebg-preview.png",
    "photos/women/d/1ce70f84-daf0-4953-a247-8c4312ca515c_1-removebg-preview.png",
    "photos/women/d/a047ac2e-5dee-48e7-bbc3-0dd1d77bfcfc_1-removebg-preview.png",
    "photos/women/d/product-image-932281828_1024x1024-removebg-preview.png"
]
function changeDresses() {
    var select = document.querySelector("#dresses");
    if (dressesIndex == 5) {
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
    
    
    "photos/women/e/Cute-Dog-Cartoon-Women-Slides-2018-Fashion-Pu-Leather-Beach-Shoes-Women-Flat-Heels-Flip-Flops_aa85a328-20c7-4950-9786-48a033f47cf5-removebg-preview.png",
    "photos/women/e/D3HY28-HERO-removebg-preview.png",
    "photos/women/e/EYEBWW-HERO-removebg-preview.png",
    "photos/women/e/m_563a31b6bcd4a7102f000d24-removebg-preview.png",
    "photos/women/e/s-l300-removebg-preview.png",
    "photos/women/e/s-l640-removebg-preview.png"

]
function changeShoes() {
    var select = document.querySelector("#shoes");
    if (shoesIndex == 5) {
        shoesIndex = 0;
        select.src = shoes[shoesIndex];
    }
    else {
        shoesIndex++;
        select.src = shoes[shoesIndex];
    }
}

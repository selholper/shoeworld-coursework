function redirectToProduct(productId) {
    window.location.href = 'sproduct.html?id=' + productId;
}

let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");
let shoesType = document.getElementById("shoesType");
let shoesName = document.getElementById("shoesName");
let shoesCost = document.getElementById("shoesCost")
let shoesDesc = document.getElementById("shoesDesc")

smallImg[0].onclick = function() {
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src;
}

function getProductFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('id');
    return product;
}

const productId = getProductFromUrl();

switch (productId) {
    case '1':
        mainImg.src = "img/products/shoes1.png";
        smallImg[0].src = "img/products/shoes1.png";
        smallImg[1].src = "img/products/shoes1_1.png";
        smallImg[2].src = "img/products/shoes1_2.png";
        smallImg[3].src = "img/products/shoes1_3.png";
        shoesType.textContent = "Кроссовки / Спортивный стиль";
        shoesName.textContent = "Nike Velocity V2016";
        shoesCost.textContent = "12881.08₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '2':
        mainImg.src = "img/products/shoes2.png";
        smallImg[0].src = "img/products/shoes2.png";
        smallImg[1].src = "img/products/shoes2.png";
        smallImg[2].src = "img/products/shoes2.png";
        smallImg[3].src = "img/products/shoes2.png";
        shoesType.textContent = "Ботинки / Спортивный стиль";
        shoesName.textContent = "Nike SkyRush 2018";
        shoesCost.textContent = "7517.11₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '3':
        mainImg.src = "img/products/shoes3.png";
        smallImg[0].src = "img/products/shoes3.png";
        smallImg[1].src = "img/products/shoes3.png";
        smallImg[2].src = "img/products/shoes3.png";
        smallImg[3].src = "img/products/shoes3.png";
        shoesType.textContent = "Кроссовки / Спортивный стиль";
        shoesName.textContent = "Nike AeroMax 2017";
        shoesCost.textContent = "23411.47₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '4':
        mainImg.src = "img/products/shoes4.png";
        smallImg[0].src = "img/products/shoes4.png";
        smallImg[1].src = "img/products/shoes4.png";
        smallImg[2].src = "img/products/shoes4.png";
        smallImg[3].src = "img/products/shoes4.png";
        shoesType.textContent = "Ботинки / Спортивный стиль";
        shoesName.textContent = "Puma EchoForce 2021";
        shoesCost.textContent = "15674.29₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '5':
        mainImg.src = "img/products/shoes5.png";
        smallImg[0].src = "img/products/shoes5.png";
        smallImg[1].src = "img/products/shoes5.png";
        smallImg[2].src = "img/products/shoes5.png";
        smallImg[3].src = "img/products/shoes5.png";
        shoesType.textContent = "Полуботинки / Спортивный стиль";
        shoesName.textContent = "Nike Terrain Trek 2022";
        shoesCost.textContent = "20745.73₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '6':
        mainImg.src = "img/products/shoes6.png";
        smallImg[0].src = "img/products/shoes6.png";
        smallImg[1].src = "img/products/shoes6.png";
        smallImg[2].src = "img/products/shoes6.png";
        smallImg[3].src = "img/products/shoes6.png";
        shoesType.textContent = "Ботинки / Классика";
        shoesName.textContent = "Nike AeroMax 2023";
        shoesCost.textContent = "16041.98₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '7':
        mainImg.src = "img/products/shoes7.png";
        smallImg[0].src = "img/products/shoes7.png";
        smallImg[1].src = "img/products/shoes7.png";
        smallImg[2].src = "img/products/shoes7.png";
        smallImg[3].src = "img/products/shoes7.png";
        shoesType.textContent = "Ботинки / Повседневный стиль";
        shoesName.textContent = "Adidas SpeedWave 2020";
        shoesCost.textContent = "23644.27₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '8':
        mainImg.src = "img/products/shoes8.png";
        smallImg[0].src = "img/products/shoes8.png";
        smallImg[1].src = "img/products/shoes8.png";
        smallImg[2].src = "img/products/shoes8.png";
        smallImg[3].src = "img/products/shoes8.png";
        shoesType.textContent = "Кроссовки / Повседневный стиль";
        shoesName.textContent = "Nike AeroSurge 2021";
        shoesCost.textContent = "22071.71₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '9':
        mainImg.src = "img/products/shoes9.png";
        smallImg[0].src = "img/products/shoes9.png";
        smallImg[1].src = "img/products/shoes9.png";
        smallImg[2].src = "img/products/shoes9.png";
        smallImg[3].src = "img/products/shoes9.png";
        shoesType.textContent = "Шлёпки / Повседневный стиль";
        shoesName.textContent = "Nike PulseFlow 2020";
        shoesCost.textContent = "11408.84₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '10':
        mainImg.src = "img/products/shoes10.png";
        smallImg[0].src = "img/products/shoes10.png";
        smallImg[1].src = "img/products/shoes10.png";
        smallImg[2].src = "img/products/shoes10.png";
        smallImg[3].src = "img/products/shoes10.png";
        shoesType.textContent = "Туфли / Спортивный стиль";
        shoesName.textContent = "Nike Terrain Trek '22";
        shoesCost.textContent = "17051.33₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '11':
        mainImg.src = "img/products/shoes11.png";
        smallImg[0].src = "img/products/shoes11.png";
        smallImg[1].src = "img/products/shoes11.png";
        smallImg[2].src = "img/products/shoes11.png";
        smallImg[3].src = "img/products/shoes11.png";
        shoesType.textContent = "Туфли / Спортивный стиль";
        shoesName.textContent = "Nike AgileFit '16";
        shoesCost.textContent = "14324.77₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '12':
        mainImg.src = "img/products/shoes12.png";
        smallImg[0].src = "img/products/shoes12.png";
        smallImg[1].src = "img/products/shoes12.png";
        smallImg[2].src = "img/products/shoes12.png";
        smallImg[3].src = "img/products/shoes12.png";
        shoesType.textContent = "Туфли / Спортивный стиль";
        shoesName.textContent = "Nike Quantum Shift '20";
        shoesCost.textContent = "10077.97₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '13':
        mainImg.src = "img/products/shoes13.png";
        smallImg[0].src = "img/products/shoes13.png";
        smallImg[1].src = "img/products/shoes13.png";
        smallImg[2].src = "img/products/shoes13.png";
        smallImg[3].src = "img/products/shoes13.png";
        shoesType.textContent = "Ботинки / Спортивный стиль";
        shoesName.textContent = "Adidas Zenith Stride '23";
        shoesCost.textContent = "19106.78₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '14':
        mainImg.src = "img/products/shoes14.png";
        smallImg[0].src = "img/products/shoes14.png";
        smallImg[1].src = "img/products/shoes14.png";
        smallImg[2].src = "img/products/shoes14.png";
        smallImg[3].src = "img/products/shoes14.png";
        shoesType.textContent = "Ботинки / Спортивный стиль";
        shoesName.textContent = "Adidas SwiftStrike Pro '22";
        shoesCost.textContent = "19540.41₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '15':
        mainImg.src = "img/products/shoes15.png";
        smallImg[0].src = "img/products/shoes15.png";
        smallImg[1].src = "img/products/shoes15.png";
        smallImg[2].src = "img/products/shoes15.png";
        smallImg[3].src = "img/products/shoes15.png";
        shoesType.textContent = "Ботинки / Спортивный стиль";
        shoesName.textContent = "New Balance BlazeRush '17";
        shoesCost.textContent = "11708.07₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '16':
        mainImg.src = "img/products/shoes16.jpg";
        smallImg[0].src = "img/products/shoes16.jpg";
        smallImg[1].src = "img/products/shoes16.jpg";
        smallImg[2].src = "img/products/shoes16.jpg";
        smallImg[3].src = "img/products/shoes16.jpg";
        shoesType.textContent = "Кроссовки / Повседневный стиль";
        shoesName.textContent = "Convers SwiftStrike Pro '22";
        shoesCost.textContent = "6025.62₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '17':
        mainImg.src = "img/products/shoes17.webp";
        smallImg[0].src = "img/products/shoes17.webp";
        smallImg[1].src = "img/products/shoes17.webp";
        smallImg[2].src = "img/products/shoes17.webp";
        smallImg[3].src = "img/products/shoes17.webp";
        shoesType.textContent = "Кроссовки / Повседневный стиль";
        shoesName.textContent = "New Balance Infinity Sprint '19";
        shoesCost.textContent = "17764.63₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    case '18':
        mainImg.src = "img/products/shoes18.webp";
        smallImg[0].src = "img/products/shoes18.webp";
        smallImg[1].src = "img/products/shoes18.webp";
        smallImg[2].src = "img/products/shoes18.webp";
        smallImg[3].src = "img/products/shoes18.webp";
        shoesType.textContent = "Кроссовки / Повседневный стиль";
        shoesName.textContent = "New Balance EnergyStrike '20";
        shoesCost.textContent = "10952.95₽";
        shoesDesc.textContent = shoesName.textContent +
        " - легкие, стильные и удобные кроссовки с улучшенной " + 
        "амортизацией, вентилируемым верхом и прочной подошвой для отличного сцепления. " +
        "Идеальны для спорта и повседневной активности.";
        break;
    default:
        break;
}

document.getElementById('addToCart').addEventListener('click', function() {
    let selectedSize = document.getElementById('sizeSelect').value;
    if (!isNaN(selectedSize) && selectedSize !== "Выберите размер") {
        window.location.href = 'cart.html';
    } else {
        alert('Пожалуйста, выберите размер');
    }
});
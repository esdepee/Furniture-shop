const image = document.getElementById('productImage');
const product = document.getElementById('productName');
const price = document.getElementById('productPrice');
const description = document.getElementById('productDescription');
// const varnish = document.getElementById();



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let foo = getParameterByName('product');

console.log(foo);


let apiRequest = new XMLHttpRequest();

console.log(product);

apiRequest.open('GET', 'http://localhost:3000/api/furniture');
apiRequest.send();

 function a() {
  apiRequest.onreadystatechange = (a) => {
    if (apiRequest.readyState === 4) {
      // if (apiRequest.status === 404) {
      //   return alert('Server not running');
      // }
      const response = JSON.parse(apiRequest.response);
      const apiObject = response[foo];



      console.log(apiObject);

      description.innerHTML = "<p>"+ apiObject.description +"</p>";
      product.innerHTML = "<span>" + apiObject.name + "</span>"
      image.innerHTML = "<img src=" + apiObject.imageUrl +">"
      price.innerHTML = "<span>" + apiObject.price / 1000 + "0" + "</span>"

      //todo : varnish + dropdown, impliment or remove Quantity

    }
  }
}

document.onload = a();


// var parser = new DOMParser();
// var doc = parser.parseFromString(stringContainingXMLSource, "http://localhost:3000/api/furniture");



function displayProduct(productx) {
  let itemId = document.getElementById(productx);

  switch (expression) {
    case product1:

      break;
    case product2:

      break;
    case product3:

      break;
    case product4:

      break;
    case product5:

      break;
    default:
      console.log('Product doenst exist!');
  }
}

function() { 
  var priceText = document.querySelector('tr.order-total');
  var regex = /([0-9.,]+)/;  
  //crea variable expresión regular
  
  if (regex.test(priceText.innerText)) {
  return parseFloat(priceText.innerText.match(regex)[0].replace(/,/g, ''));
    //esto elimina las comas, puntos y los decimales. 
    //y regresa el campo de texto como un número, 
    //listo para ser presentado en Analytics
  }
} 
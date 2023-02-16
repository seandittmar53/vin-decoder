// Import stylesheets
import './style.css';
const api_uuid = 'd6c4a436-5f1f-40a0-8184-7d3db09a8431'
const btnGo = document.getElementById('btnGo')
const btnSample = document.getElementById('btnSample')
btnGo.addEventListener('click',btnGo_click)
btnSample.addEventListener('click',btnSample_click)

function btnGo_click() {
  const vin = document.getElementById('txtVin').value
  if (vin !== '') {
    
    const request = new XMLHttpRequest()

    request.open('GET', `https://faceted-catalog-api-us1.sophio.com/api/v1/${api_uuid}/catalog-2/vin/${vin}`)
    
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const txtResponse = document.getElementById('txtResponse')
        txtResponse.value = this.responseText
      }
    };
    
    request.send();

  }
}

function btnSample_click() {
  document.getElementById('txtVin').value = 'WP0CA2991XS656083'
}
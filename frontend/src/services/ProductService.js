import axios from 'axios';

export function getProduct() {
  return axios.get('http://127.0.0.1:8000/product/')
    .then(response => response.data)
}

export function deleteProduct(product_id) {
  return axios.delete('http://127.0.0.1:8000/product/' + product_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addProduct(product){
  return axios.post('http://127.0.0.1:8000/product/', {
    product_id:null,
    nom:product.FirstName.value,
    prix_unitaire:product.LastName.value,
    quantite:product.RegistrationNo.value,

  })
    .then(response=>response.data)
}
export function updateProduct(product_id, product) {
  return axios.put('http://127.0.0.1:8000/product/' + product_id + '/', {
    nom:product.nom.value,
    prix_unitaire:product.prix_unitaire.value,
    quantite:product.quantite.value,
  })
   .then(response => response.data)
}
export function searchProduct(searchTerm) {
  return axios.get(`http://127.0.0.1:8000/product/search?name=${searchTerm}`)
    .then(response => response.data);
}





async function loadProducts() {
    let res = await fetch("http://localhost:5000/api/products");
    let data = await res.json();
    console.log(data); 
}
loadProducts();
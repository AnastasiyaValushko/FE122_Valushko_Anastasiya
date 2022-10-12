async function getApiData(){
    let resp = await fetch('https://fakestoreapi.com/products');
    return await resp.json();
}

export { getApiData };
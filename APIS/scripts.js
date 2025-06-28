const url = `https://dummyjson.com/products/`

async function chamarAPI(id) {
    const grl = await fetch(url)
    if(grl.status === 200) {
        const obj = await grl.json()
        console.log(obj)
    }
}

chamarAPI()
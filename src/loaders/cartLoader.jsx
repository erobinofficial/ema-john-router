import { getShoppingCart } from "../utilities/fakedb";

export const cartLoader = async ()=>{
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // console.log(products);

    //get cart products
    const savedCart = getShoppingCart();
    const storedCart = [];
    console.log(storedCart);
    // console.log('this is cart', savedCart);
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
        }
    }

    return {products, storedCart};

}
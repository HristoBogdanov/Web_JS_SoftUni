function solve(currentStock, orderedProducts){
    const products={};
    for(let i=0;i<currentStock.length;i++)
    {
        if(i%2==0){
            products[currentStock[i]]=0;
        }
        else{
            products[currentStock[i-1]]+=Number(currentStock[i]);
        }
    }
    for(let i=0;i<orderedProducts.length;i++)
    {
        if(i%2==0){
            let newProductName=orderedProducts[i];
            let newProductQuantity=orderedProducts[i+1];
            if(!products.hasOwnProperty(newProductName)){
                products[newProductName]=0;
            }
            products[newProductName]+=Number(newProductQuantity);
        }
        
    }
    Object.entries(products).forEach(([name,qunatity])=>{
        console.log(`${name} -> ${qunatity}`)
    });
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);
function PrintTownsInfo(input){
const cities=input.map(city=>{
        const[name,latitude,longitude]=city.split(" | ");
        return {town:name,
            latitude:Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        };
    },{}).forEach(element => {
        console.log(element);
    });
}

PrintTownsInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
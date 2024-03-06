function solve(input){
    const parkingLot=[];
    input.forEach(command => {
        const splitted=command.split(", ");
        const direction=splitted[0];
        const carNumber=splitted[1];


        if(direction==="IN"){
            parkingLot.push(carNumber);
        }
        if(direction==="OUT"){
            const carIndex=parkingLot.indexOf(carNumber)
            if(carIndex!==-1){
                parkingLot.splice(carIndex,1);
            }
        }
    });
    if(parkingLot.length===0){
        console.log("Parking Lot is Empty");
    }
    else{
        parkingLot.sort().forEach(car=>{
            console.log(car);
        });
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);
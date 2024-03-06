function solve(input){
    const numberOfRiders=input.shift();
    const ridersData=input.splice(0,numberOfRiders);
    const commands=input;


    const riders={};

    ridersData.forEach(rider=>{
        const data=rider.split("|");
        let riderName=data[0];
        riders[riderName]={
            fuelCapacity: Number(data[1]),
            position:Number(data[2]),
        }
    });



    commands.forEach(command=>{
        const data=command.split(" - ");
        const commandName=data[0];

        switch(commandName){
            case "StopForFuel":
                const rider=data[1];
                const minimulFuel=Number(data[2]);
                const changedPosition=Number(data[3]);

                if(riders[rider].fuelCapacity<minimulFuel){
                    riders[rider].position=changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                }
                else{
                    console.log(`${rider} does not need to stop for fuel!`)
                }
            break;
            case "Overtaking":
                const riderOne=data[1];
                const riderTwo=data[2];

                if(riders[riderOne].position<riders[riderTwo].position){
                    let pom=riders[riderOne].position;
                    riders[riderOne].position=riders[riderTwo].position;
                    riders[riderTwo].position=pom;
                    console.log(`${riderOne} overtook ${riderTwo}!`)
                }
            break;
            case "EngineFail":
                const riderEngine=data[1];
                const lapsLeft=Number(data[2]);

                delete riders[riderEngine];
                console.log(`${riderEngine} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            break;
            case "Finish":
                return;
            break;
        }
    })


    Object.entries(riders).forEach(([riderName,riderInfo])=>{
        console.log(riderName);
        console.log(`  Final position: ${riders[riderName].position}`);
    })
}


solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);
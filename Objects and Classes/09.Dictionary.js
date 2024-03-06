function solve(input){

    // input.forEach(element => {
    //     element=JSON.parse(element);
    //     console.log(element);
    // });

    let dictionary=input.reduce((acc,curr)=>{
        curr=JSON.parse(curr);
        let term=Object.keys(curr)[0];
        let description=curr[Object.keys(curr)[0]];
        acc[term]=description;
        return acc;
    },{});

    // Object.keys(dictionary).sort();

    for(const key of Object.keys(dictionary).sort()){
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }

    // for (const [key, value] of Object.entries(dictionary)) {
    //     console.log(`Term: ${key} => Definition: ${value}`);
    // }
}

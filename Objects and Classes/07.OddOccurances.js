function solve(input){
    const splitted=input.split(" ");
    // splitted.forEach(word => {
    //     word=word.toLowerCase();
    //     console.log(word);
    // });
    const wordOccurances=splitted.map(word=>{
        return word.toLowerCase();
    }).reduce((acc,curr)=>{
        if(!acc.hasOwnProperty(curr)){
            acc[curr]=0;
        }
        acc[curr]++;
        return acc;
    },{})
    
    let result="";
    for(const [key,value] of Object.entries(wordOccurances)){
        if(value%2===1){
            result+=`${key} `;
        }
    }
    console.log(result);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
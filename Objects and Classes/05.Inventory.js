function solve(input){
    const heroes=[];
    input.forEach((hero)=>{
        const splitted=hero.split(" / ");
        const heroName=splitted[0];
        const heroLevel=Number(splitted[1]);
        const items=splitted[2];

        heroes.push({
            name: heroName,
            level:heroLevel,
            items:items
        })
    });

    function levelSort(a,b){
        if(a.level>b.level){
            return 1;
        }
        if(a.level<b.level){
            return -1;
        }
        return 0;
    }

    heroes.sort(levelSort);
    heroes.forEach((hero)=>{
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
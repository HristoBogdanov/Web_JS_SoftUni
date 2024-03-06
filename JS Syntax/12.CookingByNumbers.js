function NumberOperations(number, ...operations)
{
    for(let i=0;i<operations.length;i++)
    {
        switch(operations[i])
        {
            case "chop":
                number=Math.floor(number/2);
                console.log(number);
                break;
            case "dice":
                number=Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number+=1;
                console.log(number);
                break;
            case "bake":
                number*=3;
                console.log(number);
                break;
            case "fillet":
                number-=0.2*number;
                console.log(number);
                break;
        }
    }
}

function PrintLoadingBar(percentage)
{
    const loadingBar=[];
    let numbersCompleted=percentage/10;
    let numbersLeft=10-numbersCompleted;

    for(let i=0;i<numbersCompleted;i++)
    {
        loadingBar.push("%")
    }
    for(let i=0;i<numbersLeft;i++)
    {
        loadingBar.push(".")
    }

    if(percentage===100)
    {
        console.log("100% Complete!");
    }
    else
    {
    console.log(`${percentage}% [${loadingBar.join("")}]`);
    console.log("Still loading...")
    }

}
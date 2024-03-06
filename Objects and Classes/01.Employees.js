function PrintEmployeesInformation(input)
{
    const employess=input.reduce((acc,curr)=>{
        acc[curr]=curr.length;
        return acc;
    },{})

    Object.entries(employess).forEach(([name,number])=>{
        console.log(`Name: ${name} -- Personal Number: ${number}`)
    });
}

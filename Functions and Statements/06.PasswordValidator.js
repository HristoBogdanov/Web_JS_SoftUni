function PrintPasswordStatus(password)
{
    function CheckLength(){
        return (password.length<6 || password.length>10);
    }
    function CheckConsistancy(){
        const regex = /^[a-zA-Z0-9]+$/;
        return (!regex.test(password));
    }
    function CheckDigitsCount(){
        const regex = /\d.*\d/;
        return (!regex.test(password));
    }

    if(CheckLength(password)){
        console.log("Password must be between 6 and 10 characters");
    }
    if(CheckConsistancy(password))
    {
        console.log("Password must consist only of letters and digits");
    }
    if(CheckDigitsCount(password)){
        console.log("Password must have at least 2 digits");
    }
    if(!CheckLength(password) && !CheckConsistancy(password) && !CheckDigitsCount(password)){
        console.log("Password is valid");
    }
}

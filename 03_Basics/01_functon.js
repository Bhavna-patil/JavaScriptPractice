function  loogedIn(userName) {
    if(!undefined)
        return `${userName} just logged in !`
    return "Enter userName"
}

// rest operator :- ...(rest operator/spred operator) 
// ... work as a spred operator when we use it on iterable to spred value
// ... work as a rest operator as a function parameter to accept multiple arguments which strore all arguments in an array

function calculateCartPrice(...allCart)
{
    return allCart // it is an array which store all arguments
}

console.log(calculateCartPrice(200,900,78));

const user = {
    name : "bhavna",
    price : 900
}

function handleUser(anyObject){

    console.log(`User name is ${anyObject.name} & Price is ${anyObject.price}` );
    
}

handleUser(user)
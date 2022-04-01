///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(price,acc,curr, wholeArray){
    return console.log(price + curr)
})



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (carTotal, couponValue, tax) => {
    return (carTotal + 0.06) - couponValue 
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

Cart = ['Name', 'Address', 'Email', 'Phone number', 'Credit card', 'Order Information]
I chose these properties because as a restaurant you need to know who is ordering which order, so you need their name, if its takeout you would need
their address and phone number in case their is trouble finding the house and email to confirm their order. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const Cart = {
Name: 'Joe Turner',

Address: '180 Landing Ave',

Email: 'joet@aol.com',

Phone: 918-222-2233,

Credit: 400303030292,

Order: 'Fried chicken wings'
}
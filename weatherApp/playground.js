//  object shorthand property
const name = 'Jesh venkatesh';
const place = 'Rajahmundry';
const user = {
    name,
    place,
    country : "India"
}
console.log(user);
//Object destructuring
const product = {
    label : 'Red notebook',
    price : 5,
    stock : 201,
    salePrice : undefined,
    rating : 4.5
}
    // const { label, stock } = product
    // console.log(label,stock);
// const { label : productLabel, stock, rating = 5 } = product
// console.log(productLabel,stock, rating);
const transaction = (type, {label, stock} ) => {
    // label = 7
    console.log(type,label,stock)
}
transaction('order',product);
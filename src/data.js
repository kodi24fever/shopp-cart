

let createRandomNumber = () => {
    return Math.ceil(Math.random() * (500000 - 100000));
};


const products = [
    {id: 1, item: "lambo", description: "Very Nice Car", price: createRandomNumber()},
    {id: 2, item: "porshe", description: "Another Type of Nice Car", price: createRandomNumber()},
    {id: 3, item: "porshe", description: "Type of Nice Car", price: createRandomNumber()},
    {id: 4, item: "porshe", description: "Another Nice Car", price: createRandomNumber()},
    {id: 5, item: "porshe", description: "Nice Car", price: createRandomNumber()}
]





export default products;
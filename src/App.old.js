import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Provider } from './store/appContext';

import './index.css';

//Other imports
import Mach1 from './assets/machine-1.png';
import Mach2 from './assets/machine-2.png';
import Mach3 from './assets/machine-3.png';

//import views
import Home from './views/home/home';

import Products from './components/products/products';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      total: 0,
      totalInCart: 0,
      // products will be the regular data of products
      products:[
        {
            id:1,
            path: Mach1,
            name:"EM-1010", 
            type:"Starter Embroidery Machine", 
            needle: 10, 
            head: "Single-Head", 
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            deal:5000,
            price:7500,
            cartPrice: 5000,
            startingCount: 1
        },
        {
            id:2, 
            path: Mach2,
            name:"TC-1551", 
            type:"Commercial Embroidery Machine", 
            needle: 10, 
            head: "Single-Head", 
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            deal:6000,
            price:7500,
            cartPrice: 6000,
            startingCount: 1
        },
        {
            id:3, 
            path: Mach3,
            name:"MT-1501", 
            type:"Commercial Embroidery Machine", 
            needle: 10, 
            head: "Single-Head", 
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            deal:8000,
            price:7500,
            cartPrice: 8000,
            startingCount: 1
        }],
        // Initial cart
        cart: []
      };


    // Actions can be passed to child components also we can fetch endpoints here ;)


    this.actions = {
      // Add price of products to cart
      "handleSum": (index) => {
            const productIndex = index;
            let newProducts = [...this.state.cart]
            let count = newProducts[productIndex].startingCount + 1;
            let totalInCart = this.state.totalInCart;


            console.log(totalInCart);

            //adding to total
            let newTotal = this.state.total;
  
            const deal = newProducts[productIndex].deal;
            let newDeal = deal * count;
  
            newProducts[productIndex] = {...newProducts[productIndex], 
                startingCount: count,
                cartPrice: newDeal
            }
  
            this.setState({
              cart: newProducts,
              total: newTotal + deal,
              totalInCart: totalInCart + 1
            });
  
            //this.actions.handleTotal(productIndex);
        },
        // Decreases price of products from cart
      "handleDecrement": (index) => {
            const productIndex = index
            let newProducts = [...this.state.cart]
            let count = newProducts[productIndex].startingCount - 1;
            let totalInCart = this.state.totalInCart;

            let newTotal = this.state.total;
            
            const deal = newProducts[productIndex].deal;
            let newDeal = deal * count;
    
            if(count == 1){
                newProducts[productIndex] = {...newProducts[productIndex], 
                    startingCount: count,
                    cartPrice: newDeal
                }
                this.setState({
                    cart: newProducts,
                    total: newTotal - deal,
                    totalInCart: totalInCart - 1
                });
            }else if(count == 0){
                newProducts[productIndex] = {...newProducts[productIndex], 
                    startingCount: 0,
                    cartPrice: 0,
                    totalInCart: totalInCart - 1
                }
                this.setState({
                    cart: newProducts,
                    total: newTotal - deal,
                    totalInCart: totalInCart - 1
                });


                //this functionality removes item from cart when startingCoutn variable goes 0
                let deleteCartProduct = newProducts.filter((product) => product.startingCount !== 0);
                this.setState({
                  cart: deleteCartProduct,
                  totalInCart: totalInCart - 1
                });
                //********************************************************************************* */

            }else if(count > 1){
                newProducts[productIndex] = {...newProducts[productIndex], 
                    startingCount: count,
                    cartPrice: newDeal
                }
                this.setState({
                    cart: newProducts,
                    total: newTotal - deal,
                    totalInCart: totalInCart - 1
                });
            }
        },
        // handle the total for checkout
        /*"handleTotal": () => {
          let total = this.state.total;
          let newProducts = [...this.state.cart]
          let newTotalPrice = newProducts.map((product) => product.cartPrice)
  
          total = newTotalPrice.reduce(function(a,b){
              return a+b;
          },0)
          this.setState({
              total: total
          });
      },*/
      // Add item to cat from products
      "addCart": (id) => {
        const productIndex = this.state.products.findIndex(product => product.id == id);
        let newProducts = this.state.products[productIndex];
        const deal = this.state.products[productIndex].deal;
        let totalInCart = this.state.totalInCart;

        let newTotal = this.state.total;
        //this variable tells if item exists in cart not adding same product to cart twice
        let isItemInCart = false;

        this.state.cart.forEach((item) => {if(newProducts.id == item.id){ isItemInCart = true}});

        let addCart = this.state.cart;

        if (!isItemInCart) {
          addCart.push(newProducts)
            this.setState({
              cart: addCart,
              total: newTotal + deal,
              totalInCart: totalInCart + 1
            });
        } else {
          const cartItemIndex = this.state.cart.findIndex(product => product.id == id);
          this.actions.handleSum(cartItemIndex)
        }
      }
    };
  }

  render () {
    return (
      <React.Fragment>
        <Provider value={{state:this.state, actions:this.actions}}>
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<Products/>}/>
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    )
  }



  
}

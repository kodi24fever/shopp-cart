import create from 'zustand';

//Other imports
import Mach1 from './../assets/machine-1.png';
import Mach2 from './../assets/machine-2.png';
import Mach3 from './../assets/machine-3.png';

const store = create((set,get) => ({
    total: 0,
    totalInCart: 0,
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
        cart: [],

        //actions
        handleSum: (index) => {
            const productIndex = index;
            let newProducts = [...get().cart]
            let count = newProducts[productIndex].startingCount + 1;
            let totalInCart = get().totalInCart;

            //adding to total
            let newTotal = get().total;
  
            const deal = newProducts[productIndex].deal;
            let newDeal = deal * count;
  
            newProducts[productIndex] = {...newProducts[productIndex], 
                startingCount: count,
                cartPrice: newDeal
            }
  
            set(state => ({
              cart: newProducts,
              total: newTotal + deal,
              totalInCart: totalInCart + 1
            }));
  
            //this.actions.handleTotal(productIndex);
        },
        handleDecrement: (index) => {
            const productIndex = index
            let newProducts = [...get().cart]
            let count = newProducts[productIndex].startingCount - 1;
            let totalInCart = get().totalInCart;

            let newTotal = get().total;
            
            const deal = newProducts[productIndex].deal;
            let newDeal = deal * count;
    
            if(count == 1){
                newProducts[productIndex] = {...newProducts[productIndex], 
                    startingCount: count,
                    cartPrice: newDeal
                }
                set(state => ({
                    cart: newProducts,
                    total: newTotal - deal,
                    totalInCart: totalInCart - 1
                }));
            }else if(count == 0){
                newProducts[productIndex] = {...newProducts[productIndex], 
                    startingCount: 0,
                    cartPrice: 0,
                    totalInCart: totalInCart - 1
                }
                set(state => ({
                    cart: newProducts,
                    total: newTotal - deal,
                    totalInCart: totalInCart - 1
                }));


                //this functionality removes item from cart when startingCoutn variable goes 0
                let deleteCartProduct = newProducts.filter((product) => product.startingCount !== 0);
                set(state => ({
                  cart: deleteCartProduct,
                  totalInCart: totalInCart - 1
                }));

            }else if(count > 1){
                newProducts[productIndex] = {...newProducts[productIndex], 
                    startingCount: count,
                    cartPrice: newDeal
                }
                set(state => ({
                    cart: newProducts,
                    total: newTotal - deal,
                    totalInCart: totalInCart - 1
                }));
            }
        },
        addCart: (id) => {
            const productIndex = get().products.findIndex(product => product.id == id);

            let newProducts = get().products[productIndex];
            const deal = get().products[productIndex].deal;
            let totalInCart = get().totalInCart;
        
            let newTotal = get().total;
            //this variable tells if item exists in cart not adding same product to cart twice
            let isItemInCart = false;
        
            get().cart.forEach((item) => {if(newProducts.id == item.id){ isItemInCart = true}});
        
            let addCart = get().cart;
        
            if (!isItemInCart) {
            addCart.push(newProducts)
            set(state => ({
                cart: addCart,
                total: newTotal + deal,
                totalInCart: totalInCart + 1
                }));
            } else {
            const cartItemIndex = get().cart.findIndex(product => product.id == id);
            get().handleSum(cartItemIndex)
            }
          }
}))

export default store;
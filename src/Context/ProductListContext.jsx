import React,{createContext, useEffect, useReducer} from "react";

const ProductListContext = createContext()
const productsStrapi = [
  {"id":1,
  "name":"Elysia",
  "description":"Compartimiento magnético en la parte delantera y trasera. Mantiene las cosas guardadas por separado. Tiene un bolsillo frontal y trasero con cierre para mayor almacenamiento",
  "price":1996,
  "stock":5,
  "img":"https://i.postimg.cc/mg326v7K/Elysia.jpg"
  },
  {"id":2,
  "name":"Amiel vino",
  "description":"Bolso con amplio espacio interno para llevar todo lo que necesites. Este bolso con asa ajustable es ideal para viaje. Te brinda comodidad y facilidad para portar. ",
  "price":2300,
  "stock":5,
  "img":"https://i.postimg.cc/GmDs3gGj/vino.jpg"
  },
  {"id":3,
  "name":"Gabbie Rosa",
  "description":"Bolsa mediana con color llamativo ideal para salidas especiales. Con compartimientos laterales. Complemento perfecto para tu outfit favorito. ",
  "price":1800,
  "stock":4,
  "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuT1KYnmR5a-eJYA7i9z8bU-6WNAqyhclyQ&usqp=CAU"
  },
  {"id":4,
  "name":"Sabian Cross Body",
  "description":"Una mini bolsa con grandes posibilidades. Bolsocruzado diario adaptable a una pequeña cartera y tu teléfono.Hecho de nailon para resistencia al agua. ",
  "price":865,
  "stock":5,
  "img":
  "https://i.postimg.cc/JzVL8sPF/Whats-App-Image-2021-11-17-at-7-14-34-PM-15.jpg"
  },
  {"id":5,
  "name":"Art",
  "description":"Bolso Art cuenta con múltiples bolsillosyesquinas ajustables para cambiar su forma y así obtengasunestilo diferente de acuerdo a tu día.",
  "price":2340,
  "stock":3,
  "img": 
  "https://i.postimg.cc/dt12F95W/Art.jpg"
  },
  {"id":6,
  "name":"Asseni",
  "description":"Esta mini bolsa es la solución mábonitaypráctica para llevar tus cosas contigdurante el día o lanoche.Se adapta a tu carterateléfono y algunos elementosesencialesadicionalecomo un paraguas pequeño.",
  "price":2072,
  "stock":5,
  "img":"https://i.postimg.cc/ZYLWQhHp/Whats-App-Image-2021-11-17-at-7-14-34-PM-12.jpg"
  }
]
const initialState = {
  products: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_PRODUCTS":
      return{
        ...state,
        products: action.payload  
      }
    default:
      return state;
  }
}

const ProductListProvider = ({children}) =>{
    
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( ()=>{
      const payload = productsStrapi
      dispatch ({type:"ADD_PRODUCTS",payload})
  },[])
  
  const data = {state}

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  )
}

export {ProductListProvider}
export default ProductListContext
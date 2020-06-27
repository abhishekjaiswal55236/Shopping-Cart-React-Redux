import { ADD_TO_CART , ADD_QUANTITY , SUB_QUANTITY
        , REMOVE_ITEM  ,ADD_SHIPPING ,SUB_SHIPPING} from '../actions/action-types/cart-actions'

export const addToCart = (id) => {
  return {
    type : ADD_TO_CART,
    id
  }
}

export const removeItem = (id) => {
    return {
      type : REMOVE_ITEM,
      id
    }
}

export const IncreaseQuan = id => {
  return {
    type : ADD_QUANTITY ,
    id
  }
}

export const DecreaseQuan = id => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

export const addShipping = () =>{
  return {
    type : ADD_SHIPPING
  }
}

export const subShipping = () =>{
  return {
    type : SUB_SHIPPING
  }
}

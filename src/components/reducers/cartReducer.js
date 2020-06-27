import item1 from '../../images/item1.jpeg'
import item2 from '../../images/item2.jpeg'
import item3 from '../../images/item3.jpeg'
import item4 from '../../images/item4.jpg'
import { ADD_TO_CART , ADD_QUANTITY , SUB_QUANTITY
        , REMOVE_ITEM ,ADD_SHIPPING ,SUB_SHIPPING } from '../actions/action-types/cart-actions'


const initialState = {
  items: [
    { id :1 , name : "rock guitar" , desc : "can be used for rock and ascoustic music",item : item1,price : 110},
    { id :2 , name : "ascoustic guitar" , desc : "can be used for rock and ascoustic music",item : item2 , price : 120},
    { id :3 , name : "electric guitar" , desc : "can be used for rock and ascoustic music",item : item3 , price : 120},
    { id :4 , name : "plainzz guitar" , desc : "can be used for rock and ascoustic music",item : item4 , price: 10000}

  ],
  addedItems : [],
  total : 0
}



const cartReducer = (state = initialState, action) => {

      if( action.type === ADD_TO_CART )
      {
          //check if the item already exist in the added items
          let addedItem = state.items.find(item => item.id === action.id)

          let existeditem = state.addedItems.find(item => item.id === action.id)
          if(existeditem)
          {
              addedItem.quantity += 1
              return {
                  ...state ,
                  total : state.total + addedItem.price
              }
          }
          else{
              addedItem.quantity =1
              let newtotal = state.total + addedItem.price
              return {
                  ...state ,
                  addedItems: [...state.addedItems , addedItem],
                  total : newtotal
              }
          }
      }
      else if(action.type === REMOVE_ITEM)
      {
          let this_item = state.addedItems.find((item) => item.id === action.id)
          let new_addeditems = state.addedItems.filter((item) => item.id != action.id)
          let new_total = state.total - (this_item.quantity * this_item.price)
          return {
              ...state ,
              addedItems : new_addeditems,
              total : new_total
          }
      }
      else if(action.type === ADD_QUANTITY)
      {
          let this_item = state.addedItems.find((item) => item.id === action.id)
          this_item.quantity +=1
          let new_total = state.total + this_item.price
          return {
              ...state,
              total : new_total
          }
      }
      else if(action.type === SUB_QUANTITY)
      {
          let this_item = state.addedItems.find((item) => item.id === action.id)
          if(this_item.quantity === 1)
          {
              let new_addeditems = state.addedItems.filter((item) => item.id != action.id)
              let new_total = state.total - (this_item.quantity * this_item.price)
              return {
                  ...state ,
                  addedItems : new_addeditems,
                  total : new_total
              }
          }
          else
          {
              this_item.quantity -=1
              let new_total = state.total - this_item.price
              return  {
                  ...state,
                  total : new_total
              }
          }
      }
      else if(action.type === ADD_SHIPPING)
      {

          return {
              ...state ,
              total : state.total + 6
          }
      }
      else if(action.type ===  SUB_SHIPPING){
          return{
              ...state,
              total : state.total - 6
          }
      }

      else{
          return state
      }

}

export default cartReducer;

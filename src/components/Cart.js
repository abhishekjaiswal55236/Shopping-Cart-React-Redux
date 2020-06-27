import React, { Component } from 'react'

import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeItem ,IncreaseQuan , DecreaseQuan } from './actions/cartActions'


class Cart extends Component {

    handleRemove(id){
        this.props.handleRemove(id)
    }
    handleIncQuan(id){
        this.props.handleIncQuan(id)
    }
    handleDecQuan(id){
        this.props.handleDecQuan(id)
    }
    render ()
    {
        let addedItems = this.props.items.length ?
        (
        this.props.items.map((item) => {
            return(
              <div class="card promoting-card">


                    <div class="card-body d-flex flex-row">




                      <div>


                        <h4 class="card-title font-weight-bold mb-2">{item.name}</h4>

                        <p class="card-text"><i class="far fa-clock pr-2"></i>07/24/2018</p>

                      </div>

                    </div>

                    <div class="view overlay">
                      <img class="card-img-top rounded-0" src={item.item} alt="Card image cap"/>
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <div> price : -> {item.price} </div>
                    <div> quantity ->  {item.quantity} </div>
                    <button className = "btn btn-danger right" onClick={() => {this.handleRemove(item.id)}}/>
                    <button className="btn btn-primary " onClick={() => {this.handleIncQuan(item.id)}}>Add More</button>
                    <button className="btn btn-primary right" onClick={()=>{this.handleDecQuan(item.id)}}>Dec Quantity</button>
                  </div>
            )
          }
        )
        )  : (
          <p> Nothing </p>
        )
        return (
            <div className="container">
              <h2> Your total bill is -> {this.props.total} </h2>
                <h5> You Have Ordered</h5>
                <ul className = "container">
                    {addedItems}
                </ul>
                <Link to="/Recipe" > CheckOut </Link>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        items : state.addedItems,
        total : state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleRemove: (id) => {dispatch(removeItem(id))},
        handleIncQuan : (id) => {dispatch(IncreaseQuan(id))},
        handleDecQuan : (id) => {dispatch(DecreaseQuan(id))}

    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Cart);

import React , { Component } from 'react';
import {connect} from 'react-redux';
import { addToCart } from './actions/cartActions';
import '../css/home.css'
import Navbar from './Navbar.js';


const mapStateToProps = state => {
    return {
        items : state.items
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (id) => {dispatch(addToCart(id))}
  }
}

class Home extends Component {

    handleClick = id => {
      this.props.addToCart(id);
    }


    render(){
        let itemList = this.props.items.map(item => {
            return (

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


                      <div class="card-body">

                        <div class="collapse-content">


                          <p class="card-text collapse" id="collapseContent">{item.desc}</p>

                          <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent"></a>
                          <i class="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></i>
                          <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>
                          <button className="btn btn-primary" onClick = {() => {this.handleClick(item.id)}}>add</button>

                        </div>

                      </div>
                      <div> price : -> {item.price} </div>


                    </div>
            )
        })

        return (

          <div className = "container">
            <h3 className="certer">Items</h3>
            <div className="box">
              {itemList}
            </div>
          </div>
        )
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Home);

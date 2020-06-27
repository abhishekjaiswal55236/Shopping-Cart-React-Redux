import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { addShipping , subShipping } from './actions/cartActions'



class Recipe extends Component {

    handleChecked = e =>
    {
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.subShipping();
        }
    }

    render()
    {
        return (
            <div className="container justify-content-center jumbotron">
                <div className="row">
                    <h5 className="text-center"> Shipping Charges </h5><br/>
                    <div className="form-check">
                    <input className = "checkbox"type="checkbox" onChange ={this.handleChecked}/>
                    </div>
                </div>
                    <h2>Your Total is : {this.props.total}</h2>
                    <Link  className = "btn btn-success"to="/final"> Make Payment </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        total : state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => {dispatch(addShipping())},
        subShipping : () => {dispatch(subShipping())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)

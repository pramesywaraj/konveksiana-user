import React, { Component } from 'react';
import { HashLink as Links } from 'react-router-hash-link';
import { history } from '../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';

// Component
import './card.css';
import { Link } from '@material-ui/core';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
});
  
class Card extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userId: '',
        }
    }

    componentDidMount() {
    if(localStorage.getItem('auth')) {
        const { dispatch } = this.props;
        dispatch(orderActions.getAllOrder());
        // history.push('/dashboard');
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({ loading: newProps.loading }); // remove the loading progress when logged in or fail to log in
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    index(i){
        return i+=1;
    }

    gotoDetail(data){
        let orderById = data;

        // eslint-disable-next-line no-unused-vars
        const { dispatch } = this.props;
        if(orderById) {
          dispatch(orderActions.getOrderById(orderById));
        }
    }

    formatPrice(value) {
        let val = (value/1)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    totalPrice(productPrice, shippingPrice){
        let total = parseInt(productPrice) + parseInt(shippingPrice);
        return this.formatPrice(total);
    }

    statusChecker(status){
        // let checkStatus = status;
        // if(checkStatus == "")
    }
    
    render(){
        const { orders } = this.props;
        return (
            <div className="dash-card">
                <h2 className="section-title">Dashboard</h2>

                {orders != null ? orders.map(
                        (order, index) => (
                            <div className="row item-section" key={order._id}>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    <p className="item-number">{index + 1}</p>
                                                </div>
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    {order.photoUrls[0] != null ?
                                                        <div className="img-size" style={{ backgroundImage: `url(${"https://endpoint.konveksiana.id/" + order.photoUrls[0]})`}}></div>
                                                    :
                                                        [
                                                            (order.photoUrls[1] != null ?
                                                                <div className="img-size" style={{ backgroundImage: `url(${"https://endpoint.konveksiana.id/" + order.photoUrls[1]})`}}></div>
                                                             :
                                                                [
                                                                    (order.photoUrls[2] != null ?
                                                                        <div className="img-size" style={{ backgroundImage: `url(${"https://endpoint.konveksiana.id/" + order.photoUrls[2]})`}}></div>
                                                                     :
                                                                        [
                                                                            (order.photoUrls[3] != null ?
                                                                                <div className="img-size" style={{ backgroundImage: `url(${"https://endpoint.konveksiana.id/" + order.photoUrls[3]})`}}></div>
                                                                             :
                                                                                <div className="img-size" style={{ backgroundImage: `url(${"/logo-konveksiana-square.svg"})`}}></div>
                                                                            )      
                                                                        ]
                                                                    )                                                
                                                                ]
                                                            )                                                
                                                        ]
                                                    }
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                    <p className="item-name">{order.user.name}</p>
                                                    <p className="item-desc">{order.description}</p>
                                                    <p className="item-price">{order.color}</p>
                                                    <p className="item-price">Rp. {this.totalPrice(order.productPricePrediction, order.shippingPricePrediction)}</p>
                                                    <p className="item-unit">{order.quantity} pcs</p>
                                                </div>
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    <p className="item-status">Status:</p>
                                                    {order.status !== 0?
                                                        <p className="item-tracker">{this.statusChecker(order.status)}</p>
                                                        :
                                                        <p className="item-tracker">Fresh</p>
                                                    }
                                                    <button className="detail-btn" onClick={() => this.gotoDetail(order)}>
                                                        <span>Detail</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                    :
                    <h3>Tidak Ada Pesanan</h3>
                }
            </div>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { orders } = state.orderPage;
    return {
        orders
    };
}

const connectedCardPage = withRouter(connect(mapStateToProps, '', '', {
    pure: false
}) (withStyles(styles)(Card)));

export { connectedCardPage as Card };

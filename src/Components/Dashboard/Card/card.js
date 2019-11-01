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

    gotoDetail(){
        // navigate with data react --> Check Stack Overflow
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        this.props.router.push({
            pathname: '/products/product-detail',
            state: {
              id: 7,
              color: 'green'
            }
          })
    }

    render(){
        const { orders } = this.props;
        return (
            <div className="dash-card">
                <h2 className="section-title">Dashboard</h2>

                {orders != null ? orders.map(
                        (order, index) => (
                            <div className="row item-section">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    <p className="item-number">{index + 1}</p>
                                                </div>
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    <div className="img-size" style={{ backgroundImage: `url(${"https://endpoint.konveksiana.id/" + order.photoUrls[0]})`}}></div>
                                                    {/* <img className="img-size" src={"https://endpoint.konveksiana.id/" + order.photourls} alt=""/> */}
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                    <p className="item-name">{order.user.name}</p>
                                                    <p className="item-desc">{order.description}</p>
                                                    <p className="item-price">{order.color}</p>
                                                    <p className="item-price">{order.productPrice}</p>
                                                    <p className="item-unit">{order.quantity} pcs</p>
                                                </div>
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    <p className="item-status">Status:</p>
                                                    <p className="item-tracker">Fresh</p>
                                                    <Links className="detail-btn" to="/products/product-detail">
                                                        <span>Detail</span>
                                                    </Links>
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

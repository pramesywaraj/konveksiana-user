/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import moment from 'moment';
import { HashLink as Links } from 'react-router-hash-link';
import { history } from '../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';


// Component
import './productcard.css';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
});

class ProductCard extends Component {

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

    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        const { orders } = this.props;
        return (
            <div className="product-list">
                <h2 className="section-title">Product List</h2>
                <div className="row mt-3">

                {orders != null ? orders.map(
                        order => (
                            <div className="col-4">
                                <div className="card text-center mb-5">
                                    <div className="card-body">
                                        <img className="card-img-top" src="/assets/portfolio/portfolio-1.jpg" alt="Card image cap" />
                                        <h5 className="card-title mt-3">{order.user.name}</h5>
                                        <p className="card-text">{order.description}</p>
                                        <p>Status : &nbsp;
                                            <span className="card-status">Fresh</span>
                                        </p>
                                        <Links className="btn btn-primary btn-sm" to="/products/product-detail">Detail</Links>
                                    </div>
                                    <div className="card-footer text-left text-muted">
                                        <p>Tanggal Pemesanan : &nbsp; 
                                            <span className="card-date">
                                                { moment(order.createdAt).format('DD MMMM YYYY') }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                    :
                    <h3>Tidak Ada Pesanan</h3>
                }
                </div>
            </div>
        );
    }
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { orders } = state.orderPage;
    return {
        orders
    };
}

const connectedProductCardPage = withRouter(connect(mapStateToProps, '', '', {
    pure: false
}) (withStyles(styles)(ProductCard)));

export { connectedProductCardPage as ProductCard };

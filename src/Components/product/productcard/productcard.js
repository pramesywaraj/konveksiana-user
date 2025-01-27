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
    if(sessionStorage.getItem('auth')) {
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

    gotoDetail(data){
        let orderById = data;

        // eslint-disable-next-line no-unused-vars
        const { dispatch } = this.props;
        if(orderById) {
          dispatch(orderActions.getOrderById(orderById));
        }
    }

    checkStatus(status){
        let statusChecker = status;
        return statusChecker;
    }

    render(){
        const { orders } = this.props;
        return (
            <div className="product-list">
                <h2 className="section-title">Product List</h2>
                <div className="row mt-3">

                {orders != null ? orders.map(
                        order => (
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={order._id}>
                                <div className="card text-center mb-5">
                                    <div className="card-body" key={order._id}>
                                        {order.photoUrls[0] != null ?
                                            <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + order.photoUrls[0]} alt="Card image cap" />
                                        :
                                            [
                                                (order.photoUrls[1] != null ?
                                                    <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + order.photoUrls[0]} alt="Card image cap" />
                                                :
                                                    [
                                                        (order.photoUrls[2] != null ?
                                                            <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + order.photoUrls[0]} alt="Card image cap" />
                                                        :
                                                            [
                                                                (order.photoUrls[3] != null ?
                                                                    <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + order.photoUrls[0]} alt="Card image cap" />
                                                                :
                                                                    <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                                                )      
                                                            ]
                                                        )                                                
                                                    ]
                                                )                                                
                                            ]
                                        }
                                        <h5 className="card-title mt-3">{order.user.name}</h5>
                                        <p className="card-text">{order.description}</p>
                                        <p>Status : &nbsp; <br/>
                                            {
                                                (order.status.isDone === true && order.status.isPaidOff === true)? 
                                                <span key={order._id}><strong>Lunas</strong></span>                                             
                                            : 
                                                [
                                                    (order.status.isDone === true)? 
                                                    <span key={order._id}><strong>Pesanan Telah Selesai, Harap untuk Melunasi Pembayaran</strong></span>
                                                    :
                                                    [
                                                        (order.status.isOnProcess === true)? 
                                                        <span key={order._id}><strong>Pesanan Sedang Dalam Proses Pengerjaan</strong></span>
                                                        :
                                                        [
                                                            (order.status.isPending === true)? 
                                                            <span key={order._id}><strong>Pesanan Sedang Menunggu Konfirmasi</strong></span>
                                                            :
                                                            [
                                                                (order.status.isReject === true)?
                                                                <span key={order._id}><strong>Pesanan Ditolak, Harap hubungi Admin untuk Mengetahui Alasannya</strong></span>
                                                                :
                                                            <span key={order._id}><strong>Tidak Ada Status Pesanan</strong></span>
                                                            ]
                                                        ]
                                                    ]         
                                                ]
                                            }
                                        </p>
                                        <button className="btn btn-product btn-sm" onClick={() => this.gotoDetail(order)}>
                                            <span>Detail</span>
                                        </button>                                        
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

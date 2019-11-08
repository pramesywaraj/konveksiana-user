/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import moment from 'moment';
import { history } from '../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';

// Component
import './productdetail.css';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
});

class ProductDetail extends Component {

    // componentDidMount() {
    //     if(localStorage.getItem('auth')) {
    //         const { ordersData } = this.props;
    //         // let orderDatabyId = ordersData;
    //     }
    // }
    
    change(data){
        console.log("Check ID : ", data);
    }

    formatPrice(value) {
        let val = (value/1)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    render(){
        const { ordersData } = this.props;
        return (
            <div className="product-detail-list">
                <h2 className="section-title">Product Detail</h2>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <p className="section-sub-title">Tampak Depan</p>
                                        {ordersData.photoUrls[0] != null?
                                            <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersData.photoUrls[0]} alt="Card image cap" />
                                            :
                                            <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                        }
                                    </div>
                                    <div className="col">
                                        <p className="section-sub-title">Tampak Belakang</p>
                                        {ordersData.photoUrls[1] != null?
                                            <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersData.photoUrls[1]} alt="Card image cap" />
                                            :
                                            <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                        }
                                    </div>
                                    <div className="col">
                                        <p className="section-sub-title">Tampak Kiri</p>
                                        {ordersData.photoUrls[2] != null?
                                            <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersData.photoUrls[2]} alt="Card image cap" />
                                            :
                                            <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                        }
                                    </div>
                                    <div className="col">
                                        <p className="section-sub-title">Tampak Kanan</p>
                                        {ordersData.photoUrls[3] != null?
                                            <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersData.photoUrls[3]} alt="Card image cap" />
                                            :
                                            <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                        }
                                    </div>
                                </div>

                                <p className="section-sub-title text-left mt-5">Description :</p>
                                <div className="row">
                                    <div className="col-3">
                                        <p className="text-left">Tanggal Pemesanan</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-left">: <span className="card-date">{ moment(ordersData.createdAt).format('DD MMMM YYYY') }</span></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <p className="text-left">Status</p>
                                    </div>
                                    <div className="col-4">
                                        {ordersData.orderStep.length !== 0?
                                            <p className="text-left">: <span className="card-status">{ordersData.orderStep[0]}</span></p>
                                            :
                                            <p className="text-left">: <span className="card-status">Fresh</span></p>
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Nama</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left">: {ordersData.user.name}</p>
                                            </div>
                                        </div>                                
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Kategori Produk</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left">: Armor</p>
                                            </div>
                                        </div>                                
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Jenis Material</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left">: {ordersData.material.name}</p>
                                            </div>
                                        </div>                                
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Warna</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left">: {ordersData.color}</p>
                                            </div>
                                        </div>                                
                                    </div>

                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Address</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left card-unit">: {ordersData.detailAddress}, {ordersData.city}</p>
                                            </div>
                                        </div>                                
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Jumlah Unit (pcs)</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left card-unit">: {ordersData.quantity}</p>
                                            </div>
                                        </div>                                
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Harga Pengiriman</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left card-price">: Rp. {this.formatPrice(ordersData.shippingPrice)}</p>
                                            </div>
                                        </div>                                
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="text-left">Harga Produk</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="text-left card-price">: Rp. {this.formatPrice(ordersData.productPrice)}</p>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

ProductDetail.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { ordersData } = state.orderPage;
    return {
        ordersData
    };
}

const connectedProductDetailPage = withRouter(connect(mapStateToProps, '', '', {
    pure: false
}) (withStyles(styles)(ProductDetail)));

export { connectedProductDetailPage as ProductDetail };
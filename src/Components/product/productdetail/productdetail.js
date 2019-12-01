/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import moment from 'moment';
import { MDBContainer, MDBNavbarBrand, MDBRow, MDBCol  } from 'mdbreact';
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

    totalPrice(productPrice, shippingPrice){
        let total = parseInt(productPrice) + parseInt(shippingPrice);
        return this.formatPrice(total);
    }
    
    checkStatus(status){
        
    }

    render(){
        // const { ordersData } = this.props;
        let ordersDataById = JSON.parse(localStorage.getItem('getOrderById'));
        // let ordersDataByIdTable = localStorage.getItem('getOrderByIdTable');

        return (
            <div className="product-detail-list">
                <h2 className="section-title">Product Detail</h2>
                <MDBContainer>
                    <div className="card order-summary">
                        <MDBNavbarBrand className="logo">
                            <div className="row text-center">
                                <div className="img-size" style={{ backgroundImage: `url(${"/logo-konveksiana.svg"})`}}></div>
                            </div>
                        </MDBNavbarBrand>

                        <MDBRow>
                            <MDBCol xs="6" sm="6" md="3">
                                <p className="text-upload">Gambar</p>
                                {
                                    ordersDataById.photoUrls[0] != null?
                                    <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[0]} alt="Card image cap" />
                                    :
                                    <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                }
                            </MDBCol>
                            <MDBCol xs="6" sm="6" md="3">
                                <p className="text-upload">&nbsp;</p>
                                {
                                    ordersDataById.photoUrls[1] != null?
                                    <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[1]} alt="Card image cap" />
                                    :
                                    <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                }
                            </MDBCol>
                            <MDBCol xs="6" sm="6" md="3">
                                <p className="text-upload">&nbsp;</p>
                                {
                                    ordersDataById.photoUrls[2] != null?
                                    <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[2]} alt="Card image cap" />
                                    :
                                    <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                }
                            </MDBCol>
                            <MDBCol xs="6" sm="6" md="3">
                                <p className="text-upload">&nbsp;</p>
                                {
                                    ordersDataById.photoUrls[3] != null?
                                    <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[3]} alt="Card image cap" />
                                    :
                                    <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                }
                            </MDBCol>
                        </MDBRow>

                        <p className="text-upload mt-5">Rincian Pemesan</p>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Nama Pemesan</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.user.name}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Nomor Telepon</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.phoneNumber}</strong></p>
                            </MDBCol>
                        </MDBRow>

                        <p className="text-upload mt-5">Order Detail</p>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Kategori Produk</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.material.product.category.name}, {ordersDataById.material.product.name}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Jenis Material</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.material.name}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Warna</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.color}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Jumlah Pesanan (pcs)</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.quantity} pcs</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Catatan</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.description}</strong></p>
                            </MDBCol>
                        </MDBRow>

                        <p className="text-upload mt-5">Detail Ekspedisi</p>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Alamat Lengkap</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.detailAddress}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Kurir Pengiriman</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p>: <strong>{ordersDataById.courier.toUpperCase()}</strong></p>
                            </MDBCol>
                        </MDBRow>

                        <p className="text-upload mt-5">Jumlah Perkiraan</p>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Berat</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p className="price">: <strong>{ordersDataById.weightPrediction} gram</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Harga Produksi</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p className="price">: <strong>Rp. {this.formatPrice(ordersDataById.productPricePrediction)}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p>Harga Pengiriman</p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p className="price">: <strong>Rp. {this.formatPrice(ordersDataById.shippingPricePrediction)}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="4">
                            <p><strong>Harga Total</strong></p>
                            </MDBCol>
                            <MDBCol sm="12" md="8">
                            <p className="price">: <strong>Rp. {this.totalPrice(ordersDataById.productPricePrediction, ordersDataById.shippingPricePrediction)}</strong></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="12" md="12">
                            <small><strong>Catatan</strong>: Semua pemesanan dikirim melalui alamat <i>Jl. Raya Dramaga no.143, Dramaga, Bogor, Jawa Barat</i></small>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBContainer>
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
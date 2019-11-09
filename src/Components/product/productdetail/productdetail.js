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
        let ordersDataById = JSON.parse(localStorage.getItem('getOrderById'));
        let ordersDataByIdTable = localStorage.getItem('getOrderByIdTable');

        return (
            <div className="product-detail-list">
                <h2 className="section-title">Product Detail</h2>
                <div className="row mt-3">
                    <div className="col">
                        {
                            typeof(ordersDataByIdTable) == "object"?
                            <div className="card text-center mb-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Depan</p>
                                            {
                                                ordersDataByIdTable.photoUrls[0] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataByIdTable.photoUrls[0]} alt="Card image cap" />
                                                :
                                                <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                            }
                                        </div>
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Belakang</p>
                                            {ordersDataByIdTable.photoUrls[1] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataByIdTable.photoUrls[1]} alt="Card image cap" />
                                                :
                                                <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                            }
                                        </div>
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Kiri</p>
                                            {ordersDataByIdTable.photoUrls[2] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataByIdTable.photoUrls[2]} alt="Card image cap" />
                                                :
                                                <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                            }
                                        </div>
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Kanan</p>
                                            {ordersDataByIdTable.photoUrls[3] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataByIdTable.photoUrls[3]} alt="Card image cap" />
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
                                            <p className="text-left">: <span className="card-date">{ moment(ordersDataByIdTable.createdAt).format('DD MMMM YYYY') }</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="text-left">Status</p>
                                        </div>
                                        <div className="col-4">
                                            {ordersDataByIdTable.orderStep.length !== 0?
                                                <p className="text-left">: <span className="card-status">{ordersDataByIdTable.orderStep[0]}</span></p>
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
                                                    <p className="text-left">: {ordersDataByIdTable.user.name}</p>
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
                                                    <p className="text-left">: {ordersDataByIdTable.material.name}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Warna</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left">: {ordersDataByIdTable.color}</p>
                                                </div>
                                            </div>                                
                                        </div>

                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Address</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-unit">: {ordersDataByIdTable.detailAddress}, {ordersDataByIdTable.city}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Jumlah Unit (pcs)</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-unit">: {ordersDataByIdTable.quantity}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Harga Pengiriman</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-price">: Rp. {this.formatPrice(ordersDataByIdTable.shippingPrice)}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Harga Produk</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-price">: Rp. {this.formatPrice(ordersDataByIdTable.productPrice)}</p>
                                                </div>
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="card text-center mb-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Depan</p>
                                            {
                                                ordersDataById.photoUrls[0] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[0]} alt="Card image cap" />
                                                :
                                                <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                            }
                                        </div>
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Belakang</p>
                                            {ordersDataById.photoUrls[1] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[1]} alt="Card image cap" />
                                                :
                                                <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                            }
                                        </div>
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Kiri</p>
                                            {ordersDataById.photoUrls[2] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[2]} alt="Card image cap" />
                                                :
                                                <img className="card-img-top" src="/logo-konveksiana-square.svg" alt="Card image cap" />
                                            }
                                        </div>
                                        <div className="col">
                                            <p className="section-sub-title">Tampak Kanan</p>
                                            {ordersDataById.photoUrls[3] != null?
                                                <img className="card-img-top" src={"https://endpoint.konveksiana.id/" + ordersDataById.photoUrls[3]} alt="Card image cap" />
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
                                            <p className="text-left">: <span className="card-date">{ moment(ordersDataById.createdAt).format('DD MMMM YYYY') }</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="text-left">Status</p>
                                        </div>
                                        <div className="col-4">
                                            {ordersDataById.orderStep.length !== 0?
                                                <p className="text-left">: <span className="card-status">{ordersDataById.orderStep[0]}</span></p>
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
                                                    <p className="text-left">: {ordersDataById.user.name}</p>
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
                                                    <p className="text-left">: {ordersDataById.material.name}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Warna</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left">: {ordersDataById.color}</p>
                                                </div>
                                            </div>                                
                                        </div>

                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Address</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-unit">: {ordersDataById.detailAddress}, {ordersDataById.city}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Jumlah Unit (pcs)</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-unit">: {ordersDataById.quantity}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Harga Pengiriman</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-price">: Rp. {this.formatPrice(ordersDataById.shippingPrice)}</p>
                                                </div>
                                            </div>                                
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="text-left">Harga Produk</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-left card-price">: Rp. {this.formatPrice(ordersDataById.productPrice)}</p>
                                                </div>
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
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
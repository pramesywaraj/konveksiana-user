/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
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

    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        // let productdetail = this.props.trabalhos.filter( t => t.id == this.props.params.id)[0];
        return (
            <div className="product-detail-list">
                <h2 className="section-title">Product Detail</h2>
                <div className="row mt-3">
                    <div className="card text-center mb-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <p className="section-sub-title">Tampak Depan</p>
                                    <img className="card-img-top" src="/assets/portfolio/portfolio-1.jpg" alt="Card image cap" />
                                </div>
                                <div className="col">
                                    <p className="section-sub-title">Tampak Belakang</p>
                                    <img className="card-img-top" src="/assets/portfolio/portfolio-2.jpg" alt="Card image cap" />
                                </div>
                                <div className="col">
                                    <p className="section-sub-title">Tampak Kiri</p>
                                    <img className="card-img-top" src="/assets/portfolio/portfolio-3.jpg" alt="Card image cap" />
                                </div>
                                <div className="col">
                                    <p className="section-sub-title">Tampak Kanan</p>
                                    <img className="card-img-top" src="/assets/portfolio/portfolio-4.jpg" alt="Card image cap" />
                                </div>
                            </div>

                            <p className="section-sub-title text-left mt-5">Description :</p>
                            <div className="row">
                                <div className="col-3">
                                    <p className="text-left">Tanggal Pemesanan</p>
                                </div>
                                <div className="col-4">
                                    <p className="text-left">: <span className="card-date">12 Januari 2019</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <p className="text-left">Status</p>
                                </div>
                                <div className="col-4">
                                    <p className="text-left">: <span className="card-status">Fresh</span></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="text-left">Nama</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-left">: Blade of Armor</p>
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
                                            <p className="text-left">Jenis Bahan</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-left">: Mithril</p>
                                        </div>
                                    </div>                                
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="text-left">Jenis Sablon</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-left">: Print</p>
                                        </div>
                                    </div>                                
                                </div>

                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="text-left">Jumlah Unit (pcs)</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-left card-unit">: 200</p>
                                        </div>
                                    </div>                                
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="text-left">Harga</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-left card-price">: Rp. 48.000.000</p>
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
    const { orders } = state.orderPage;
    return {
        orders
    };
}

const connectedProductDetailPage = withRouter(connect(mapStateToProps, '', '', {
    pure: false
}) (withStyles(styles)(ProductDetail)));

export { connectedProductDetailPage as ProductDetail };
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';

// Component
import './productcard.css';

class ProductCard extends Component {

    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        return (
            <div className="product-list">
                <h2 className="section-title">Product List</h2>
                <div className="row mt-3">
                    <div className="col-4">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <img className="card-img-top" src="/assets/portfolio/portfolio-1.jpg" alt="Card image cap" />
                                <h5 className="card-title mt-3">Blade of Armor</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel quibusdam nemo aperiam libero perspiciatis fuga dolorum. Et tempora veniam tenetur tempore fuga a nulla, aut, ullam odit placeat ut?</p>
                                <p>Status : &nbsp;
                                    <span className="card-status">Fresh</span>
                                </p>
                                <a href="/products/product-detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                            <div className="card-footer text-left text-muted">
                                <p>Tanggal Pemesanan : &nbsp; 
                                    <span className="card-date">12 Januari 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <img className="card-img-top" src="/assets/portfolio/portfolio-2.jpg" alt="Card image cap" />
                                <h5 className="card-title mt-3">Anti Cuiras</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel quibusdam nemo aperiam libero perspiciatis fuga dolorum. Et tempora veniam tenetur tempore fuga a nulla, aut, ullam odit placeat ut?</p>
                                <p>Status : &nbsp;
                                    <span className="card-status">Pemotongan</span>
                                </p>
                                <a href="/products/product-detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                            <div className="card-footer text-left text-muted">
                                <p>Tanggal Pemesanan : &nbsp; 
                                    <span className="card-date">12 Januari 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <img className="card-img-top" src="/assets/portfolio/portfolio-3.jpg" alt="Card image cap" />
                                <h5 className="card-title mt-3">Oracle</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel quibusdam nemo aperiam libero perspiciatis fuga dolorum. Et tempora veniam tenetur tempore fuga a nulla, aut, ullam odit placeat ut?</p>
                                <p>Status : &nbsp;
                                    <span className="card-status">Penyediaan Barang</span>
                                </p>
                                <a href="/products/product-detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                            <div className="card-footer text-left text-muted">
                                <p>Tanggal Pemesanan : &nbsp; 
                                    <span className="card-date">12 Januari 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <img className="card-img-top" src="/assets/portfolio/portfolio-4.jpg" alt="Card image cap" />
                                <h5 className="card-title mt-3">Brute Armor</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel quibusdam nemo aperiam libero perspiciatis fuga dolorum. Et tempora veniam tenetur tempore fuga a nulla, aut, ullam odit placeat ut?</p>
                                <p>Status : &nbsp;
                                    <span className="card-status">Draft</span>
                                </p>
                                <a href="/products/product-detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                            <div className="card-footer text-left text-muted">
                                <p>Tanggal Pemesanan : &nbsp; 
                                    <span className="card-date">12 Januari 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <img className="card-img-top" src="/assets/portfolio/portfolio-5.jpg" alt="Card image cap" />
                                <h5 className="card-title mt-3">Curse Helmet</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel quibusdam nemo aperiam libero perspiciatis fuga dolorum. Et tempora veniam tenetur tempore fuga a nulla, aut, ullam odit placeat ut?</p>
                                <p>Status : &nbsp;
                                    <span className="card-status">Pemaketan</span>
                                </p>
                                <a href="/products/product-detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                            <div className="card-footer text-left text-muted">
                                <p>Tanggal Pemesanan : &nbsp; 
                                    <span className="card-date">12 Januari 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center mb-5">
                            <div className="card-body">
                                <img className="card-img-top" src="/assets/portfolio/portfolio-6.jpg" alt="Card image cap" />
                                <h5 className="card-title mt-3">Dominance Ice</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel quibusdam nemo aperiam libero perspiciatis fuga dolorum. Et tempora veniam tenetur tempore fuga a nulla, aut, ullam odit placeat ut?</p>
                                <p>Status : &nbsp;
                                    <span className="card-status">Terkirim</span>
                                </p>
                                <a href="/products/product-detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                            <div className="card-footer text-left text-muted">
                                <p>Tanggal Pemesanan : &nbsp; 
                                    <span className="card-date">12 Januari 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductCard;
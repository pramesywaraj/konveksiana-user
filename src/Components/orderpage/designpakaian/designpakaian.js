import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon  } from 'mdbreact';
import { history } from '../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';

// Import
import './designpakaian.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

// let materials = [];

class Designpakaian extends Component {
  constructor(props) {
    let user = JSON.parse(localStorage.user);
    super(props);

    this.state = {
      userId: '',
      userName: user.name,
      userEmail: user.email,
      userPhone: user.name,
      userAddress: user.email,
      form:{
        category: '',
        materialType: '',
        color: '',
        description: '',
        totalOrder: 0,
        itemPrice: 0,
        shippingPrice: 0,
        weightPrediction: 0,
        province: '',
        city: '',      
        detailAddress: '',
        frontDesign: [],
        front: [],
        backDesign: [],
        back: [],
        leftDesign: [],
        left: [],
        rightDesign: [],
        right: [],
        courier: '',
      }
    }
  }

  componentDidMount() {
    if(localStorage.getItem('auth')) {
        const { dispatch } = this.props;
        dispatch(orderActions.getAllMaterial());
        dispatch(orderActions.getAllCategory());
        dispatch(orderActions.getAllProvince());
        // history.push('/dashboard');
      }
  }

  componentWillReceiveProps(newProps){
      this.setState({ loading: newProps.loading }); // remove the loading progress when logged in or fail to log in
  }

  handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
  };

  createOrder = (e) => {
      this.setState({ loading : true });
      let user = JSON.parse(localStorage.user);

      let data = {
        orderImage: [this.state.form.front, this.state.form.back, this.state.form.left, this.state.form.right],
        userId: user._id,
        materialId: this.state.form.materialType,
        color: this.state.form.color,
        description: this.state.form.description,
        quantity: this.state.form.totalOrder,
        productPricePrediction: this.state.form.itemPrice,
        city: this.state.form.city,
        detailAddress: this.state.form.detailAddress,
      }
      console.log("Test Data : ", data.orderImage)

      // eslint-disable-next-line no-unused-vars
      const { dispatch } = this.props;
      if(data) {
        // console.log("My Data Lengkap : ", data)
        dispatch(orderActions.createOrder(data));
      }
  }

  frontDesign = e => {
    var front = e.target.files[0];
    var reader = new FileReader();
    localStorage.frontDesign = reader.readAsDataURL(front);
    reader.addEventListener(
      "load",
      () => {
        this.setState(state => ({
          ...state,
          form: {
            ...state.form,
            frontDesign: [reader.result],
            front: front
          }
        }));
      },
      false
    );
    document.getElementsByClassName("img-preview-front")[0].style.display = "block";
    document.getElementsByClassName("img-preview-front")[1].style.display = "block";
  };

  backDesign = (e) =>{
    var back = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(back);
    reader.addEventListener(
      "load",
      () => {
        this.setState(state => ({
          ...state,
          form: {
            ...state.form,
            backDesign: [reader.result],
            back: back
          }
        }));
      },
      false
    );
    document.getElementsByClassName("img-preview-back")[0].style.display = "block";
    document.getElementsByClassName("img-preview-back")[1].style.display = "block";
  }

  leftDesign = (e) =>{
    var left = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(left);
    reader.addEventListener(
      "load",
      () => {
        this.setState(state => ({
          ...state,
          form: {
            ...state.form,
            leftDesign: [reader.result],
            left: left
          }
        }));
      },
      false
    );
    document.getElementsByClassName("img-preview-left")[0].style.display = "block";
    document.getElementsByClassName("img-preview-left")[1].style.display = "block";
  }

  rightDesign = (e) =>{
    var right = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(right);
    reader.addEventListener(
      "load",
      () => {
        this.setState(state => ({
          ...state,
          form: {
            ...state.form,
            rightDesign: [reader.result],
            right: right
          }
        }));
      },
      false
    );
    document.getElementsByClassName("img-preview-right")[0].style.display = "block";
    document.getElementsByClassName("img-preview-right")[1].style.display = "block";
  }

  totalOrderData = (e) =>{
    localStorage.totalOrder = e.target.value;
    var type = e.target.value;
    var material = localStorage.priceMargin;
    var totalOrder = localStorage.totalOrder;
    var itemPrice = material * totalOrder;
    var shippingPrice = material * totalOrder;
    var weightPrediction = material * totalOrder;
    localStorage.price = itemPrice;
    localStorage.shippingPrice = shippingPrice;
    localStorage.weightPrediction = weightPrediction;
    console.log(type, " was selected as Convection Type");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        totalOrder: localStorage.totalOrder,
        itemPrice: itemPrice,
        shippingPrice: shippingPrice,
        weightPrediction: weightPrediction,
        }
      }
    )
  )}

  descriptionData = (e) =>{
    var description = e.target.value;
    localStorage.description = e.target.value;
    console.log(description, " was selected as Convection Type");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        description: localStorage.description,
        }
      }
    )
  )}

  categoryData = (e) => {
    localStorage['category'] = e.target.value;
    localStorage['categoryName'] = e.target.name;
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        category: localStorage.category,
        }
      }
    )
  )}

  colorData = (e) => {
    var color = e.target.value;
    localStorage.color = color.toLowerCase();
    console.log(color.toLowerCase(), " was selected as Screen Printing");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        color: localStorage.color
        }
      }
    )
  )}

  materialData = (e) => {
    // var materialType = e.target.value;
    let [id, priceMargin] = e.target.value.split(",");
    localStorage['material'] = id;
    localStorage['materialName'] = e.target.name;
    localStorage['priceMargin'] = priceMargin;
    console.log("Price Margin : ", priceMargin)
    var material = localStorage.priceMargin;
    var totalOrder = localStorage.totalOrder;
    var itemPrice = material * totalOrder;
    var shippingPrice = material * 0.05;
    var weightPrediction = totalOrder / 250;
    localStorage.price = itemPrice;
    localStorage.shippingPrice = shippingPrice;
    localStorage.weightPrediction = weightPrediction;

    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        materialType: localStorage.material,
        itemPrice: localStorage.price,
        shippingPrice: localStorage.shippingPrice,
        weightPrediction: localStorage.weightPrediction,
        }
      }
    )
  )}

  provinceData = (e) => {
    var province = e.target.value;
    localStorage.province = e.target.value;
    localStorage.provinceName = e.target.name;

    // eslint-disable-next-line no-unused-vars
    const { dispatch } = this.props;
    if(localStorage.province) {
      dispatch(orderActions.getAllCity(localStorage.province));
    }

  console.log(province, " was selected as Destination province");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        province: localStorage.province
        }
      }
    )
  )}

  cityData = (e) => {
    var city = e.target.value;
    localStorage.city = city;
    console.log(city, " was selected as Destination City");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        city: localStorage.city
        }
      }
    )
  )}

  courierData = (e) => {
    var courier = e.target.value;
    localStorage.courier = courier;
    console.log(courier, " was selected as Courier");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        courier: localStorage.courier
        }
      }
    )
  )}

  detailAddressData = (e) => {
    var detailAddress = e.target.value;
    localStorage.detailAddress = detailAddress;
    console.log(detailAddress, " was selected as Destination Address");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        detailAddress: localStorage.detailAddress
        }
      }
    )
  )}

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  inserttoCart = () => {
    history.push('/cart');
  }

  render(){
  const { categories, materials, provinces, cities } = this.props;

  return (
    <div className="design-pakaian">
      <MDBContainer>
        <div className="title">
          <h1>Desain Pakaian Kamu</h1>
          <h4>Pilih jenis pakaian serta jumlah yang kamu pesan, kemudian upload gambar pada tiap sisi yang kamu inginkan</h4>
        </div>

        <ul className="nav nav-tabs mt-5" id="order-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="order-desain-tab" data-toggle="tab" href="#order-desain" role="tab" aria-controls="order-desain"
              aria-selected="true"><strong>Step 1 - Order Desain</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="order-detail-tab" data-toggle="tab" href="#order-detail" role="tab" aria-controls="order-detail"
              aria-selected="false"><strong>Step 2 - Order Detail</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="ekspedisi-detail-tab" data-toggle="tab" href="#ekspedisi-detail" role="tab" aria-controls="ekspedisi-detail"
              aria-selected="false"><strong>Step 3 - Ekspedisi Detail</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="rincian-pemesanan-tab" data-toggle="tab" href="#rincian-pemesanan" role="tab" aria-controls="rincian-pemesanan"
              aria-selected="false"><strong>Step 4 - Rincian Pemesanan</strong></a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="order-desain" role="tabpanel" aria-labelledby="order-desain-tab">

            <p className="h5 text-center mb-4 sub-title">Order Desain</p>
            <MDBRow className="design-pakaian-form">
              <MDBCol sm="12" md="3">
                <label className="text-upload">Gambar</label>
                <input type="file" name="front" onChange={this.frontDesign}/>
                <img className="img-fluid img-preview-front" src={this.state.form.frontDesign} alt="front-design"/>
              </MDBCol>

              <MDBCol sm="12" md="3">
                <p className="text-upload">Gambar</p>
                <input type="file" name="back" onChange={this.backDesign}/>
                <img className="img-fluid img-preview-back" src={this.state.form.backDesign} alt="back-design"/>
              </MDBCol>

              <MDBCol sm="12" md="3">
                <p className="text-upload">Gambar</p>
                <input type="file" name="left" onChange={this.leftDesign}/>
                <img className="img-fluid img-preview-left" src={this.state.form.leftDesign} alt="left-design"/>
              </MDBCol>

              <MDBCol sm="12" md="3">
                <p className="text-upload">Gambar</p>
                <input type="file" name="right" onChange={this.rightDesign}/>
                <img className="img-fluid img-preview-right" src={this.state.form.rightDesign} alt="right-design"/>
              </MDBCol>
            </MDBRow>

          </div>

          <div className="tab-pane fade" id="order-detail" role="tabpanel" aria-labelledby="order-detail-tab">

            <p className="h5 text-center mb-4 sub-title">Order Detail</p>
            <MDBRow className="design-pakaian-form">
              <MDBCol sm="12" md="6">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Kategori Produk
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={this.categoryData}>
                      {categories != null ? categories.map(
                              category => (
                                  <MDBDropdownItem key={category._id} name={category.name} value={category._id}>
                                    {category.name}
                                  </MDBDropdownItem>
                              )
                          )
                          :
                          <MDBDropdownItem value="-">Tidak Ada Kategori</MDBDropdownItem>
                        }
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <div className="grey-text">
                    <MDBInput
                      label="Jenis Barang"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value= {localStorage.categoryName || ' '}
                      disabled
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Material (Bahan)
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={this.materialData}>
                      {materials != null ? materials.map(
                            material => (
                                <MDBDropdownItem key={material._id} name={material.name} value={material._id + "," + material.priceMargin}>
                                  {material.name}
                                </MDBDropdownItem>
                            )
                        )
                        :
                        <MDBDropdownItem value="-">Tidak Ada Material</MDBDropdownItem>
                      }
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <div className="grey-text">
                    <MDBInput
                      label="Jenis Bahan"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value= {localStorage.materialName || ' '}
                      disabled
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Pilih Warna"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value= {localStorage.color || ' '}
                      onChange={this.colorData}
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Jumlah Pesanan"
                      group
                      type="number"
                      min="1"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value={localStorage.totalOrder || ' '}
                      onChange={this.totalOrderData}
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="12">
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Catatan"
                      group
                      type="textarea"
                      min="1"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value={localStorage.description || ' '}
                      onChange={this.descriptionData}
                    />
                  </div>
                </form>
                <p>Contoh: Ukuran L (Lengan Pendek) = 18pcs, L (Lengan Panjang) = 6 pcs, XL = 12 pcs</p>
              </MDBCol>
            </MDBRow>

          </div>
          
          <div className="tab-pane fade" id="ekspedisi-detail" role="tabpanel" aria-labelledby="ekspedisi-detail-tab">

            <p className="h5 text-center mb-4 sub-title">Detail Ekspedisi</p>
            <MDBRow className="design-pakaian-form">
              <MDBCol sm="12" md="6">
                <form>
                <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Provinsi
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={this.provinceData}>
                        {provinces != null ? provinces.map(
                                province => (
                                    <MDBDropdownItem key={province.province_id} name={province.province} value={province.province_id}>
                                    {province.province}
                                    </MDBDropdownItem>
                                )
                            )
                            :
                            <MDBDropdownItem value="-">Tidak Ada Provinsi</MDBDropdownItem>
                        }
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <div className="grey-text">
                    <MDBInput
                      label="Provinsi"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value= {localStorage.provinceName || ''}
                      onChange={this.provinceData}
                      disabled
                    />
                  </div>              
                </form>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Kota
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={this.cityData}>
                      {cities != null ? cities.map(
                            city => (
                                <MDBDropdownItem key={city.city_id} name={city.city_name} value={city.city_id}>
                                {city.city_name}
                                </MDBDropdownItem>
                            )
                          )
                          :
                          <MDBDropdownItem value="-">Tidak Ada Kota</MDBDropdownItem>
                      }
                  </MDBDropdownMenu>
                  </MDBDropdown>

                  <div className="grey-text">
                    <MDBInput
                      label="Kota"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value= {localStorage.city || ''}
                      onChange={this.cityData}
                      disabled
                    />
                  </div>              
                </form>
              </MDBCol>

              <MDBCol sm="12" md="12">
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Alamat Lengkap"
                      group
                      type="textarea"
                      min="1"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value={localStorage.detailAddress || ' '}
                      onChange={this.detailAddressData}
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="12">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Kurir
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic onClick={this.courierData}>
                      <MDBDropdownItem value="JNE">JNE</MDBDropdownItem>
                      <MDBDropdownItem value="Tiki">Tiki</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <div className="grey-text">
                    <MDBInput
                      label="Pilih Kurir"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      success="Benar"
                      value= {localStorage.courier || ''}
                      onChange={this.courierData}
                      disabled
                    />
                  </div>              
                </form>
              </MDBCol>
            </MDBRow>

          </div>

          <div className="tab-pane fade" id="rincian-pemesanan" role="tabpanel" aria-labelledby="rincian-pemesanan-tab">

            <p className="h5 text-center mb-4 sub-title">Rincian Pesanan</p>
            <div className="card order-summary">
              <MDBRow>
                <MDBCol sm="12" md="3">
                  <p className="text-upload">Gambar</p>
                  <img className="img-fluid img-preview-front" src={this.state.form.frontDesign} alt="front-design"/>
                </MDBCol>
                <MDBCol sm="12" md="3">
                  <p className="text-upload">&nbsp;</p>
                  <img className="img-fluid img-preview-back" src={this.state.form.backDesign} alt="left-design"/>
                </MDBCol>
                <MDBCol sm="12" md="3">
                  <p className="text-upload">&nbsp;</p>
                  <img className="img-fluid img-preview-left" src={this.state.form.leftDesign} alt="left-design"/>
                </MDBCol>
                <MDBCol sm="12" md="3">
                  <p className="text-upload">&nbsp;</p>
                  <img className="img-fluid img-preview-right" src={this.state.form.rightDesign} alt="left-design"/>
                </MDBCol>
              </MDBRow>

              <p className="text-upload mt-5">Rincian Pemesan</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Nama Pemesan</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{this.state.userName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Email Pemesan</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{this.state.userEmail}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Nomor Telepon</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{this.state.userPhone}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Alamat Pemesan</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{this.state.userAddress}</strong></p>
                </MDBCol>
              </MDBRow>

              <p className="text-upload mt-5">Order Detail</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Kategori Produk</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.categoryName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Jenis Material</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.materialName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Warna</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.color}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Jumlah Pesanan (pcs)</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.totalOrder}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Catatan</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.description}</strong></p>
                </MDBCol>
              </MDBRow>

              <p className="text-upload mt-5">Detail Ekspedisi</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Provinsi</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.province}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Kota</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.city}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Alamat Lengkap</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{localStorage.detailAddress}</strong></p>
                </MDBCol>
              </MDBRow>

              <p className="text-upload mt-5">Jumlah Perkiraan</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Berat</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p className="price">: <strong>{localStorage.weightPrediction} gram</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Harga Produksi</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p className="price">: <strong>Rp. {this.formatPrice(localStorage.price)}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Harga Pengiriman</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p className="price">: <strong>Rp. {this.formatPrice(localStorage.shippingPrice)}</strong></p>
                </MDBCol>
              </MDBRow>
            </div>

            <MDBRow>
              <div className="btn-center">
                <div className="py-4 mt-3">
                  <button className="konveksiana-btn" onClick ={this.createOrder}>
                  <MDBIcon fas="true" icon="paper-plane" className="mr-2" />
                    <span>Pesan</span>
                  </button>
                </div>
              </div>
            </MDBRow>
          </div>
        </div>

      </MDBContainer>
    </div>
    );
  }
};

Designpakaian.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { categories, materials, provinces, cities } = state.orderPage;
  return {
      categories,
      materials,
      provinces,
      cities
  };
}

const connectedDesignpakaianPage = withRouter(connect(mapStateToProps, '', '', {
  pure: false
}) (withStyles(styles)(Designpakaian)));

export { connectedDesignpakaianPage as Designpakaian };
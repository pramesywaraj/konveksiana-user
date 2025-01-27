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
    super(props);

    this.state = {
      userId: '',
      userName: '',
      userEmail: '',
      userPhone: '',
      userAddress: '',
      form:{
        category: '',
        product: '',
        materialType: '',
        color: '',
        description: '',
        totalOrder: 0,
        itemPrice: 0,
        shippingPrice: 0,
        weightPrediction: 0,
        province: '',
        city: '',  
        district: '',    
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
        service: ''
      }
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(orderActions.getAllCategory());
    dispatch(orderActions.getAllMaterial());
    dispatch(orderActions.getAllProvince());
    // history.push('/dashboard');

    let user = JSON.parse(sessionStorage.getItem('user'));
    if(user) {
      this.setState(state => ({
          ...state,
          userName: user.name,
          userEmail: user.email,
          userPhone: user.phoneNumber,
          userAddress: user.address,    
          form: {
            ...state.form,
            }
          }
        )
      )  
    }
  }

  componentWillReceiveProps(newProps){
      this.setState({ loading: newProps.loading }); // remove the loading progress when logged in or fail to log in
  }

  handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
  };

  createOrder = (e) => {

    if(sessionStorage.courier){
      this.setState({ loading : true });

      if(sessionStorage.auth){
        if(this.state.form.front && this.state.form.materialType && this.state.form.color && this.state.form.description && this.state.form.totalOrder && this.state.form.district && this.state.form.detailAddress && this.state.form.courier && this.state.form.shippingPrice){
          let user = JSON.parse(sessionStorage.user);

          let data = {
            orderImage: [this.state.form.front, this.state.form.back, this.state.form.left, this.state.form.right],
            userId: user._id,
            materialId: this.state.form.materialType,
            color: this.state.form.color,
            description: this.state.form.description,
            quantity: this.state.form.totalOrder,
            productPricePrediction: this.state.form.itemPrice,
            city: this.state.form.district,
            detailAddress: this.state.form.detailAddress,
            courier: this.state.form.courier,
            phoneNumber: user.phoneNumber,
            shippingPricePrediction: this.state.form.shippingPrice,
            weightPrediction: this.state.form.weightPrediction
          }
    
          // eslint-disable-next-line no-unused-vars
          const { dispatch } = this.props;
          if(data) {
              // console.log("My Data Lengkap : ", data)
              dispatch(orderActions.createOrder(data));
              setTimeout(function(){ 
                window.location.href = '/finish-order';
              }, 3000);
          }    
        }
        else{
          alert("Harap untuk Mengisi Ulang Lembar Pemesanan atau Melengkapi Data Pemesanan Terlebih Dahulu")
        }
      }

      else{
        alert("Harap Login Terlebih Dahulu untuk Melakukan Pemesanan")
        history.push('/login');
      }
    }

    else{
      alert("Harap Melengkapi semua Data terlebih dahulu")
    }

  }

  frontDesign = e => {
    var front = e.target.files[0];
    var reader = new FileReader();
    sessionStorage.frontDesign = reader.readAsDataURL(front);
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

  descriptionData = (e) =>{
    sessionStorage.description = e.target.value;
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        description: sessionStorage.description,
        }
      }
    )
  )}

  colorData = (e) => {
    var color = e.target.value;
    sessionStorage.color = color.toUpperCase();
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        color: sessionStorage.color
        }
      }
    )
  )}

  categoryData = (e) => {
    sessionStorage['category'] = e.target.value;
    sessionStorage['categoryName'] = e.target.name;

    sessionStorage['product'] = '';
    sessionStorage['productName'] = '';
    sessionStorage['material'] = '';
    sessionStorage['materialName'] = '';
    sessionStorage['priceMargin'] = 0;
    sessionStorage['weight'] = 0;


    // eslint-disable-next-line no-unused-vars
    const { dispatch } = this.props;
    if(sessionStorage.category) {
      dispatch(orderActions.getAllProduct(sessionStorage.category));
    }
    
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        category: sessionStorage.category,
        }
      }
    )
  )}

  productData = (e) => {

    if(sessionStorage.category){
      sessionStorage['product'] = e.target.value;
      sessionStorage['productName'] = e.target.name;

      sessionStorage['material'] = '';
      sessionStorage['materialName'] = '';
      sessionStorage['priceMargin'] = 0;
      sessionStorage['weight'] = 0;

      // eslint-disable-next-line no-unused-vars
      const { dispatch } = this.props;
      if(sessionStorage.product) {
        dispatch(orderActions.getAllMaterial(sessionStorage.product));
      }
  
      this.setState(state => ({
        ...state,
        form: {
          ...state.form,
          product: sessionStorage.product,
          }
        }
      )
    )}

    else{
      alert("Harap Memilih Kategori terlebih dahulu")
    }
  }

  materialData = (e) => {

    if(sessionStorage.product){
      // var materialType = e.target.value;
      let [id, priceMargin, weight] = e.target.value.split(",");
      sessionStorage['material'] = id;
      sessionStorage['materialName'] = e.target.name;
      sessionStorage['priceMargin'] = priceMargin;
      sessionStorage['weight'] = weight;

      var material = sessionStorage.priceMargin;
      if(sessionStorage.totalOrder){
        var totalOrder = sessionStorage.totalOrder;
      }
      else{
        var totalOrder = 1;
      }

      var itemPrice = (material * totalOrder) - ((material * totalOrder)*
      (Math.min(10, Math.floor(totalOrder / 12))) / 100);
      var weightPrediction = weight * totalOrder;
      sessionStorage.price = itemPrice;
      sessionStorage.weightPrediction = weightPrediction;

      this.setState(state => ({
        ...state,
        form: {
          ...state.form,
          materialType: sessionStorage.material,
          itemPrice: sessionStorage.price,
          weightPrediction: sessionStorage.weightPrediction,
          }
        }
      )
    )}
    else{
      alert("Harap Memilih Produk terlebih dahulu")
    }
}

  totalOrderData = (e) =>{
    sessionStorage.totalOrder = e.target.value;
    var material = sessionStorage.priceMargin;
    var totalOrder = e.target.value;

    if(sessionStorage.weightPrediction){
      var weight = sessionStorage.weight;
    }
    else{
      var weight = 1;
    }

    var itemPrice = (material * totalOrder) - ((material * totalOrder)*
    (Math.min(10, Math.floor(totalOrder / 12))) / 100);
    var weightPrediction = weight * totalOrder;
    sessionStorage.price = itemPrice;
    sessionStorage.weightPrediction = weightPrediction;
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        totalOrder: sessionStorage.totalOrder,
        itemPrice: itemPrice,
        weightPrediction: weightPrediction,
        }
      }
    )
  )}

  provinceData = (e) => {
    sessionStorage.province = e.target.value;
    sessionStorage.provinceName = e.target.name;

    sessionStorage.city = '';
    sessionStorage.cityId = '';
    sessionStorage.district = '';
    sessionStorage.districtName = '';
    sessionStorage.courier = '';
    sessionStorage.courierName = '';
    sessionStorage.shippingPrice = '';
    sessionStorage.serviceName = '';
    sessionStorage.estimatedShippingTime = '';

    // eslint-disable-next-line no-unused-vars
    const { dispatch } = this.props;
    if(sessionStorage.province) {
      dispatch(orderActions.getAllCity(sessionStorage.province));
    }

      this.setState(state => ({
        ...state,
        form: {
          ...state.form,
          province: sessionStorage.province
          }
        }
      )
    )
  }

  cityData = (e) => {
    let [cityName, postalCode] = e.target.name.split(",");
    var city = e.target.value;
    sessionStorage.city = cityName + ", " + postalCode;
    sessionStorage.cityId = city;

    sessionStorage.district = '';
    sessionStorage.districtName = '';
    sessionStorage.courier = '';
    sessionStorage.courierName = '';
    sessionStorage.shippingPrice = '';
    sessionStorage.serviceName = '';
    sessionStorage.estimatedShippingTime = '';

    // eslint-disable-next-line no-unused-vars
    const { dispatch } = this.props;
    if(sessionStorage.cityId) {
      dispatch(orderActions.getAllDistrict(sessionStorage.cityId));
    }
    
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        city: city
        }
      }
    )
  )}

  districtData = (e) => {
    var district = e.target.value;
    sessionStorage.district = district;
    sessionStorage.districtName = e.target.name;

    sessionStorage.courier = '';
    sessionStorage.courierName = '';
    sessionStorage.shippingPrice = '';
    sessionStorage.serviceName = '';
    sessionStorage.estimatedShippingTime = '';

    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        district: sessionStorage.district
        }
      }
    )
  )}

  courierData = (e) => {

    // eslint-disable-next-line no-unused-vars
    const { dispatch } = this.props;
    if(sessionStorage.district && sessionStorage.material && sessionStorage.totalOrder) {
      var courier = e.target.value;
      var courierName = e.target.name;
      sessionStorage.courier = courier;
      sessionStorage.courierName = courierName;

      sessionStorage.shippingPrice = '';
      sessionStorage.serviceName = '';
      sessionStorage.estimatedShippingTime = '';
  
      dispatch(orderActions.getShipmentFee());

      this.setState(state => ({
        ...state,
        form: {
          ...state.form,
          courier: sessionStorage.courier,
          }
        }
      )
    )}
    else{
      alert("Harap untuk melengkapi data pada tahap 1, 2, dan 3 terlebih dahulu")
    }
  }

  serviceData = (e) => {
    let [value, etd] = e.target.value.split(",");
    var shippingPrice = value;
    var serviceName = e.target.name;
    var estimatedShippingTime = etd + " Hari";
    sessionStorage.shippingPrice = shippingPrice;
    sessionStorage.serviceName = serviceName;
    sessionStorage.estimatedShippingTime = estimatedShippingTime;

    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        shippingPrice: sessionStorage.shippingPrice,
        service: sessionStorage.serviceName
        }
      }
    ))
  }

  detailAddressData = (e) => {
    if(sessionStorage.districtName && sessionStorage.city && sessionStorage.provinceName){
      var detailAddress = e.target.value;
      sessionStorage.detailAddress = detailAddress;
      this.setState(state => ({
        ...state,
        form: {
          ...state.form,
          detailAddress: sessionStorage.detailAddress + ", " + sessionStorage.districtName + ", " +  sessionStorage.city + ", " + sessionStorage.provinceName
          }
        }
      )
    )}
    else{
      alert("Harap Mengisi Provinsi, Kota, dan Kecamatan Terlebih dahulu")
    }
  }

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  formatWeight(value){
    let val = value;
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  totalPrice(productPrice, shippingPrice){
    let total = parseInt(productPrice) + parseInt(shippingPrice);
    return this.formatPrice(total);
  }

  inserttoCart = () => {
    history.push('/cart');
  }

  render(){
  const { categories, products, materials, provinces, cities, districts, shipmentFees } = this.props;

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
              <MDBCol sm="12" md="6">
                <p className="text-upload">Gambar</p>
                <input type="file" name="front" onChange={this.frontDesign}/>
                <img className="img-fluid img-preview-front" src={this.state.form.frontDesign} alt="front-design"/>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <p className="text-upload">Gambar</p>
                <input type="file" name="back" onChange={this.backDesign}/>
                <img className="img-fluid img-preview-back" src={this.state.form.backDesign} alt="back-design"/>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <p className="text-upload">Gambar</p>
                <input type="file" name="left" onChange={this.leftDesign}/>
                <img className="img-fluid img-preview-left" src={this.state.form.leftDesign} alt="left-design"/>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <p className="text-upload">Gambar</p>
                <input type="file" name="right" onChange={this.rightDesign}/>
                <img className="img-fluid img-preview-right" src={this.state.form.rightDesign} alt="right-design"/>
              </MDBCol>
            </MDBRow>

          </div>

          <div className="tab-pane fade" id="order-detail" role="tabpanel" aria-labelledby="order-detail-tab">

            <p className="h5 text-center mb-4 sub-title">Order Detail</p>
            <MDBRow className="design-pakaian-form">
              <MDBCol sm="12" md="4">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Jenis Kategori
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.categoryData}>
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
                      label="Jenis Kategori Barang"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      value= {sessionStorage.categoryName || ' '}
                      disabled
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="4">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Jenis Produk
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.productData}>
                      {products != null ? products.map(
                              product => (
                                  <MDBDropdownItem key={product._id} name={product.name} value={product._id}>
                                    {product.name}
                                  </MDBDropdownItem>
                              )
                          )
                          :
                          <MDBDropdownItem value="-">Tidak Ada Produk</MDBDropdownItem>
                        }
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <div className="grey-text">
                    <MDBInput
                      label="Jenis Produk"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      value= {sessionStorage.productName || ' '}
                      disabled
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="4">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Material (Bahan)
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.materialData}>
                      {materials != null ? materials.map(
                            material => (
                                <MDBDropdownItem key={material._id} name={material.name} value={material._id + "," + material.priceMargin + "," + material.weight}>
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
                      value= {sessionStorage.materialName || ' '}
                      disabled
                    />
                  </div>
                </form>
              </MDBCol>

              <MDBCol sm="12" md="6">
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Input Warna"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      value= {sessionStorage.color || ' '}
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
                      value={sessionStorage.totalOrder || ' '}
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
                      value={sessionStorage.description || ' '}
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
              <MDBCol sm="12" md="4">
                <form>
                <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Provinsi
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.provinceData}>
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
                      value= {sessionStorage.provinceName || ''}
                      onChange={this.provinceData}
                      disabled
                    />
                  </div>              
                </form>
              </MDBCol>

              <MDBCol sm="12" md="4">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Kota
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.cityData}>
                      {cities != null ? cities.map(
                            city => (
                                <MDBDropdownItem key={city.city_id} name={city.city_name + ", " + city.postal_code} value={city.city_id}>
                                {city.city_name}, {city.postal_code}
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
                      value= {sessionStorage.city || ''}
                      onChange={this.cityData}
                      disabled
                    />
                  </div>              
                </form>
              </MDBCol>

              <MDBCol sm="12" md="4">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Kecamatan
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.districtData}>
                      {districts != null ? districts.map(
                        district => (
                                <MDBDropdownItem key={district.subdistrict_id} name={district.subdistrict_name} value={district.subdistrict_id}>
                                {district.subdistrict_name}
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
                      label="Kecamatan"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      value= {sessionStorage.districtName || ''}
                      onChange={this.districtData}
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
                      value={sessionStorage.detailAddress || ' '}
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
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.courierData}>
                      <MDBDropdownItem name="RPX Holding (RPX)"  value="rpx">RPX Holding (RPX)</MDBDropdownItem>
                      <MDBDropdownItem name="Citra Van Titipan Kilat (TIKI)" value="tiki">Citra Van Titipan Kilat (TIKI)</MDBDropdownItem>
                      <MDBDropdownItem name="Eka Sari Lorena (ESL)" value="esl">Eka Sari Lorena (ESL)</MDBDropdownItem>
                      <MDBDropdownItem name="Jalur Nugraha Ekakurir (JNE)" value="jne">Jalur Nugraha Ekakurir (JNE)</MDBDropdownItem>
                      <MDBDropdownItem name="POS Indonesia (POS)" value="pos">POS Indonesia (POS)</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <div className="grey-text">
                    <MDBInput
                      label="Pilih Kurir"
                      group
                      type="text"
                      validate
                      error="Data yang dimasukan kurang tepat"
                      value= {sessionStorage.courierName || ''}
                      onChange={this.courierData}
                      disabled
                    />
                    </div> 
                </form>
              </MDBCol>

              <MDBCol sm="12" md="12">
                <form>
                  <MDBDropdown className="select-type">
                    <MDBDropdownToggle caret className="select-btn">
                      Pilih Jenis Pengiriman
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="konveksiana-dropdown" onClick={this.serviceData}>
                    {shipmentFees != null ? shipmentFees.map(
                      shipmentFee => (
                                <MDBDropdownItem key={shipmentFee.service} name={shipmentFee.description + "(" + shipmentFee.service + ")"} value={shipmentFee.cost[0].value + "," + shipmentFee.cost[0].etd}>
                                      {shipmentFee.description} ({shipmentFee.service}), {shipmentFee.cost[0].etd} Hari
                                </MDBDropdownItem>
                            )
                          )
                          :
                          <MDBDropdownItem value="-">Tidak Ada Jenis Pengiriman</MDBDropdownItem>
                      }
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <MDBRow>
                    <MDBCol sm="12" md="4">
                      <div className="grey-text">
                        <MDBInput
                          label="Jenis Pengiriman"
                          group
                          type="text"
                          validate
                          error="Data yang dimasukan kurang tepat"
                          value= {sessionStorage.serviceName || ''}
                          onChange={this.serviceData}
                          disabled
                        />
                      </div> 
                    </MDBCol>

                    <MDBCol sm="12" md="4">
                      <div className="grey-text">
                        <MDBInput
                          label="Perkiraan Waktu Pengiriman"
                          group
                          type="text"
                          validate
                          error="Data yang dimasukan kurang tepat"
                          value= {sessionStorage.estimatedShippingTime || ''}
                          onChange={this.serviceData}
                          disabled
                        />
                      </div> 
                    </MDBCol>

                    <MDBCol sm="12" md="4">
                      <div className="grey-text">
                        <MDBInput
                          label="Harga Pengiriman"
                          group
                          type="number"
                          validate
                          error="Data yang dimasukan kurang tepat"
                          value= { sessionStorage.shippingPrice || ''}
                          onChange={this.serviceData}
                          disabled
                        />
                      </div>                           
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCol>

            </MDBRow>

          </div>

          <div className="tab-pane fade" id="rincian-pemesanan" role="tabpanel" aria-labelledby="rincian-pemesanan-tab">

            <p className="h5 text-center mb-4 sub-title">Rincian Pesanan</p>
            <div className="card order-summary">
              <MDBRow>
                <MDBCol xs="6" sm="6" md="3">
                  <p className="text-upload">Gambar</p>
                  <img className="img-fluid img-preview-front" src={this.state.form.frontDesign} alt="front-design"/>
                </MDBCol>
                <MDBCol xs="6" sm="6" md="3">
                  <p className="text-upload">&nbsp;</p>
                  <img className="img-fluid img-preview-back" src={this.state.form.backDesign} alt="left-design"/>
                </MDBCol>
                <MDBCol xs="6" sm="6" md="3">
                  <p className="text-upload">&nbsp;</p>
                  <img className="img-fluid img-preview-left" src={this.state.form.leftDesign} alt="left-design"/>
                </MDBCol>
                <MDBCol xs="6" sm="6" md="3">
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

              <p className="text-upload mt-5">Order Detail</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Kategori Produk</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.categoryName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Jenis Material</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.materialName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Warna</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.color}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Jumlah Pesanan (pcs)</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.totalOrder}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Catatan</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.description}</strong></p>
                </MDBCol>
              </MDBRow>

              <p className="text-upload mt-5">Detail Ekspedisi</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Provinsi</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.provinceName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Kota</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.city}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Kecamatan</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.districtName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Alamat Lengkap</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.detailAddress}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Kurir Pengiriman</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.courierName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Jenis Pengiriman</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.serviceName}</strong></p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Estimasi Pengiriman</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p>: <strong>{sessionStorage.estimatedShippingTime}</strong></p>
                </MDBCol>
              </MDBRow>

              <p className="text-upload mt-5">Jumlah Perkiraan</p>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Berat</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  <p className="price">: 
                    {
                      sessionStorage.weightPrediction != null?
                      <strong>{this.formatWeight(sessionStorage.weightPrediction)} gram</strong>
                      :
                      <strong>0 gram</strong>
                    }
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Harga Produksi</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  {
                    sessionStorage.price != null?
                    <p className="price">: <strong>Rp. {this.formatPrice(sessionStorage.price)}</strong></p>
                    :
                    <strong>Rp. 0</strong>
                  }
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p>Harga Pengiriman</p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  {
                    sessionStorage.shippingPrice != null?
                    <p className="price">: <strong>Rp. {this.formatPrice(sessionStorage.shippingPrice)}</strong></p>
                    :
                    <strong>Rp. 0</strong>
                  }
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <p><strong>Harga Total</strong></p>
                </MDBCol>
                <MDBCol sm="12" md="8">
                  {
                    (sessionStorage.price && sessionStorage.shippingPrice) != null?
                    <p className="price">: <strong>Rp. {this.totalPrice(sessionStorage.price, sessionStorage.shippingPrice)}</strong></p>
                    :
                    <strong>Rp. 0</strong>
                  }
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="12">
                  <small><strong>Catatan</strong>: Semua pemesanan dikirim melalui alamat <i>Jl. Raya Dramaga no.143, Dramaga, Bogor, Jawa Barat</i></small>
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
  const { categories, products, materials, provinces, cities, districts, shipmentFees } = state.orderPage;
  return {
      categories,
      products,
      materials,
      provinces,
      cities,
      districts,
      shipmentFees
  };
}

const connectedDesignpakaianPage = withRouter(connect(mapStateToProps, '', '', {
  pure: false
}) (withStyles(styles)(Designpakaian)));

export { connectedDesignpakaianPage as Designpakaian };
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
      form:{
        category: '',
        materialType: '',
        color: '',
        description: '',
        totalOrder: 0,
        itemPrice: 0,
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
      }
    }
  }

  componentDidMount() {
    if(localStorage.getItem('auth')) {
        const { dispatch } = this.props;
        dispatch(orderActions.getAllMaterial());
        dispatch(orderActions.getAllCategory());
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
        // price: this.state.form.itemPrice,
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
  }

  totalOrderData = (e) =>{
    localStorage.totalOrder = e.target.value;
    var type = e.target.value;
    var material = 5000;
    var totalOrder = localStorage.totalOrder;
    var itemPrice = material * totalOrder;
    localStorage.price = itemPrice;
    console.log(itemPrice, " was Total Price");
    console.log(type, " was selected as Convection Type");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        totalOrder: localStorage.totalOrder,
        itemPrice: itemPrice,
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
    localStorage.color = color;
    console.log(color, " was selected as Screen Printing");
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
    localStorage['material'] = e.target.value;
    localStorage['materialName'] = e.target.name;
    var material = 5000;
    var totalOrder = localStorage.totalOrder;
    var itemPrice = material * totalOrder;
    localStorage.price = itemPrice;

    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        materialType: localStorage.material,
        }
      }
    )
  )}

  totalPriceData = (e) => {
    var material = 5000;
    var totalOrder = this.totalOrder;
    var itemPrice = material * totalOrder;
    console.log(itemPrice, " was Total Price");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        itemPrice: itemPrice,
        }
      }
    )
  )}

  provinceData = (e) => {
    var province = e.target.value;
    localStorage.province = province;
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

  inserttoCart = () => {
    history.push('/cart');
  }

  render(){
  const { categories, materials } = this.props;

  return (
    <div className="design-pakaian">
      <MDBContainer>
        <div className="title">
          <h1>Desain Pakaian Kamu</h1>
          <h4>Pilih jenis pakaian serta jumlah yang kamu pesan, kemudian upload gambar pada tiap sisi yang kamu inginkan</h4>
        </div>

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

        <p className="h5 text-center mb-4 sub-title">Order Detail</p>
        <MDBRow className="design-pakaian-form">
          <MDBCol sm="12" md="4">
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

          <MDBCol sm="12" md="4">
            <form>
              <MDBDropdown className="select-type">
                <MDBDropdownToggle caret className="select-btn">
                  Material (Bahan)
                </MDBDropdownToggle>
                <MDBDropdownMenu basic onClick={this.materialData}>
                  {materials != null ? materials.map(
                        material => (
                            <MDBDropdownItem key={material._id} name={material.name} value={material._id}>
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

          <MDBCol sm="12" md="4">
            <form>
              <MDBDropdown className="select-type">
                <MDBDropdownToggle caret className="select-btn">
                  Warna
                </MDBDropdownToggle>
                <MDBDropdownMenu basic onClick={this.colorData}>
                  <MDBDropdownItem value="Orange">Orange</MDBDropdownItem>
                  <MDBDropdownItem value="Biru">Biru</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <div className="grey-text">
                <MDBInput
                  label="Pilih Warna"
                  group
                  type="text"
                  validate
                  error="Data yang dimasukan kurang tepat"
                  success="Benar"
                  value= {localStorage.color || ' '}
                  disabled
                />
              </div>
            </form>
          </MDBCol>

          <MDBCol sm="12" md="3">
            <form>
            <MDBDropdown className="select-type">
                <MDBDropdownToggle caret className="select-btn">
                  Pilih Provinsi
                </MDBDropdownToggle>
                <MDBDropdownMenu basic onClick={this.provinceData}>
                  <MDBDropdownItem value="Jawa Barat">Jawa Barat</MDBDropdownItem>
                  <MDBDropdownItem value="Jawa Timur">Jawa Timur</MDBDropdownItem>
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
                  value= {localStorage.province || ''}
                  onChange={this.provinceData}
                />
              </div>              
            </form>
          </MDBCol>

          <MDBCol sm="12" md="3">
            <form>
              <MDBDropdown className="select-type">
                <MDBDropdownToggle caret className="select-btn">
                  Pilih Kota
                </MDBDropdownToggle>
                <MDBDropdownMenu basic onClick={this.cityData}>
                  <MDBDropdownItem value="Orange">Orange</MDBDropdownItem>
                  <MDBDropdownItem value="Biru">Biru</MDBDropdownItem>
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
                />
              </div>              
            </form>
          </MDBCol>

          <MDBCol sm="12" md="6">
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

          <MDBCol sm="12" md="6">
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Harga Pesanan Sementara"
                  group
                  type="number"
                  min="10000"
                  validate
                  error="Data yang dimasukan kurang tepat"
                  success="Benar"
                  value={localStorage.price || ' '}
                  onChange={this.totalOrderData || this.materialData}
                  disabled
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

          <div className="btn-center">
            <div className="py-4 mt-3">
              <button className="konveksiana-btn" onClick ={this.createOrder}>
              <MDBIcon fas="true" icon="shopping-cart" className="mr-2" />
                <span>Cek Ringkasan Pesanan</span>
              </button>
            </div>
          </div>

        </MDBRow>
      </MDBContainer>
    </div>
    );
  }
};

Designpakaian.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { categories, materials } = state.orderPage;
  return {
      categories,
      materials
  };
}

const connectedDesignpakaianPage = withRouter(connect(mapStateToProps, '', '', {
  pure: false
}) (withStyles(styles)(Designpakaian)));

export { connectedDesignpakaianPage as Designpakaian };
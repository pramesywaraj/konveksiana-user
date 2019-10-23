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

let user = JSON.parse(localStorage.user);

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

class Designpakaian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: user._id,
      form:{
        category: '',
        materialType: '',
        color: '',
        description: '',
        totalOrder: '',
        itemPrice: '',
        frontDesign: [],
        backDesign: [],
        leftDesign: [],
        rightDesign: [],
      }
    }
  }

  componentDidMount() {
    if(localStorage.getItem('auth')) {
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
      this.userId = this.state.userId;
      this.orderImage = [this.state.form.frontDesign, this.state.form.backDesign, this.state.form.leftDesign, this.state.form.rightDesign] ;
      this.userId = this.state.userId;
      this.materialId = this.state.form.materialType;
      this.color = this.state.form.color;
      this.description = this.state.form.description;
      this.quantity = this.state.form.totalOrder;
      this.price = this.state.form.itemPrice;

      // eslint-disable-next-line no-unused-vars
      const { orderImage, userId, categoryId, materialId, color, description, quantity, price } = this.state;
      // const { dispatch } = this.props;
      // console.log("My Data Gak Lengkap : ", this.state)
      if(this.state) {
        console.log("My Data Lengkap : ", this.state)
        // dispatch(orderActions.createOrder(orderImage, userId, categoryId, materialId, color, description, quantity, price));
      }
  }

  signup = (e) => {
      history.push('/sign-up');
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
            frontDesign: [reader.result]
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
            backDesign: [reader.result]
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
            leftDesign: [reader.result]
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
            rightDesign: [reader.result]
          }
        }));
      },
      false
    );
    document.getElementsByClassName("img-preview-right")[0].style.display = "block";
  }

  totalOrderData = (e) =>{
    var type = e.target.value;
    var material = 5000;
    var totalOrder = localStorage.totalOrder;
    var itemPrice = material * totalOrder;
    localStorage.totalOrder = e.target.value;
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
    var type = e.target.value;
    localStorage.category = e.target.value;
    console.log(type, " was selected as Convection Type");
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
    var materialType = e.target.value;
    var material = 5000;
    var totalOrder = localStorage.totalOrder;
    var itemPrice = material * totalOrder;
    localStorage.material = e.target.value;
    console.log(itemPrice, " was Total Price");
    console.log(materialType, " was selected as material");
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        materialType: localStorage.material,
        itemPrice: itemPrice,
        }
      }
    )
  )}

  totalPriceData = (e) => {
    var material = 5000;
    var totalOrder = 5;
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

  inserttoCart = () => {
    history.push('/cart');
  }

  render(){
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
            <label className="text-upload">Desain Tampak Depan</label>
            <input type="file" name="front" onChange={this.frontDesign}/>
            <img className="img-fluid img-preview-front" src={this.state.form.frontDesign} alt="front-design"/>
          </MDBCol>

          <MDBCol sm="12" md="3">
            <p className="text-upload">Desain Tampak Belakang</p>
            <input type="file" name="back" onChange={this.backDesign}/>
            <img className="img-fluid img-preview-back" src={this.state.form.backDesign} alt="back-design"/>
          </MDBCol>

          <MDBCol sm="12" md="3">
            <p className="text-upload">Desain Tampak Kiri</p>
            <input type="file" name="left" onChange={this.leftDesign}/>
            <img className="img-fluid img-preview-left" src={this.state.form.leftDesign} alt="left-design"/>
          </MDBCol>

          <MDBCol sm="12" md="3">
            <p className="text-upload">Desain Tampak Kanan</p>
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
                  <MDBDropdownItem value="Kaos">Kaos</MDBDropdownItem>
                  <MDBDropdownItem value="Seragam">Seragam</MDBDropdownItem>
                  <MDBDropdownItem value="Topi">Topi</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <div className="grey-text">
                <MDBInput
                  label="Jenis Barang"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value= {localStorage.category || ' '}
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
                  <MDBDropdownItem value="Cotton Combed 30S">Cotton Combed 30S</MDBDropdownItem>
                  <MDBDropdownItem value="Cotton Gold 30kg">Cotton Gold 30kg</MDBDropdownItem>
                  <MDBDropdownItem value="Chain">Chain</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <div className="grey-text">
                <MDBInput
                  label="Jenis Bahan"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value= {localStorage.material || ' '}
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
                  error="wrong"
                  success="right"
                  value= {localStorage.color || ' '}
                  disabled
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
                  error="wrong"
                  success="right"
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
                  label="Harga/pcs"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value= {this.state.form.itemPrice}
                  onChange={this.totalOrderData && this.materialData}
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
                  error="wrong"
                  success="right"
                  value={localStorage.description || ' '}
                  onChange={this.descriptionData}
                />
              </div>
            </form>
          </MDBCol>

          <div className="btn-center">
            <div className="py-4 mt-3">
              <button className="konveksiana-btn" onClick ={this.createOrder}>
              <MDBIcon fas icon="shopping-cart" className="mr-2" />
                <span>Masukan Keranjang</span>
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
  const { loggingIn, loading } = state.authentication;
  return {
      loggingIn,
      loading
  };
}

const connectedDesignpakaianPage = withRouter(connect(mapStateToProps, '', '', {
  pure: false
}) (withStyles(styles)(Designpakaian)));

export { connectedDesignpakaianPage as Designpakaian };
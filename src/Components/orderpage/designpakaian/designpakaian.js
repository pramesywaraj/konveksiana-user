import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon  } from 'mdbreact';
import { history } from '../../../Helpers/history';

// Import
import './designpakaian.css'

// API
import api from "../../../api/api";

class Designpakaian extends Component {
  state ={
    form:{
      category: null,
      totalOrder: null,
      materialType: null,
      product: null,
      itemPrice: null,
      size: null,
      totalPrice: null,
      frontDesign: [],
      backDesign: [],
      leftDesign: [],
      rightDesign: [],
    }
  }

  componentDidMount() {
    api.get(`dev/multipleImage`)
      .then(res => {
        console.log("Test Data : ", res.data);
      })
  }

  frontDesign = e => {
    var front = e.target.files[0];
    var reader = new FileReader();
    localStorage.frontDesign = reader.readAsDataURL(front);
    reader.addEventListener(
      "load",
      () => {
        this.setState(state => ({
          form: {
            ...state.form,
            frontDesign: [reader.result]
          }
        }));      },
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
          form: {
            ...state.form,
            backDesign: [reader.result]
          }
        }));      },
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
          form: {
            ...state.form,
            leftDesign: [reader.result]
          }
        }));      },
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
          form: {
            ...state.form,
            rightDesign: [reader.result]
          }
        }));      },
      false
    );
    document.getElementsByClassName("img-preview-right")[0].style.display = "block";
  }

  totalOrderData = (e) =>{
    var type = e.target.value;
    localStorage.totalOrder = e.target.value;
    console.log(type, " was selected as Convection Type");
    this.setState(
      {
        form:{
          category: localStorage.totalOrder,
        }
      }
    );
  }

  categoryData = (e) => {
    var type = e.target.value;
    localStorage.category = e.target.value;
    console.log(type, " was selected as Convection Type");
    this.setState(
      {
        form:{
          category: localStorage.category,
        }
      }
    );
  }

  productData = (e) => {
    var product = e.target.value;
    localStorage.product = product;
    console.log(product, " was selected as Screen Printing");
    this.setState(
      {
        form:{
          product: localStorage.product
        }
      }
    );
  }

  materialData = (e) => {
    var materialType = e.target.value;
    localStorage.material = e.target.value;
    console.log(materialType, " was selected as material");
    this.setState(
      {
        form:{
          materialType: localStorage.material,
        }
      }
    );
  }

  sizeData = (e) => {
    var type = e.target.value;
    console.log(type, " was selected as Size ");
    this.setState(
      {
        form:{
          size: e.target.value
        }
      }
    );
  }

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
                  Produk
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
                  Jenis Bahan
                </MDBDropdownToggle>
                <MDBDropdownMenu basic onClick={this.productData}>
                  <MDBDropdownItem value="Rubber">Rubber</MDBDropdownItem>
                  <MDBDropdownItem value="Ink">Ink</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <div className="grey-text">
                <MDBInput
                  label="Jenis Sablon"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value= {localStorage.product || ' '}
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
                  value= {localStorage.category && localStorage.material && localStorage.product? 'Rp 50.000,00' : ' '}
                  onChange
                  disabled
                />
              </div>              
            </form>
          </MDBCol>

          <div className="btn-center">
            <div className="py-4 mt-3">
              <button className="konveksiana-btn" onClick ={this.inserttoCart}>
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

export default Designpakaian;
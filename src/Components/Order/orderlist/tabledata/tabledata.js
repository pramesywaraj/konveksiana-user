import React, { Component } from 'react';
import moment from 'moment';
import MaterialTable from 'material-table';
import { history } from '../../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';

// Componenimport moment = require('moment');

import './tabledata.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

class Tabledata extends Component {
  constructor(props) {
    super(props);
    // const { orders } = this.props;

    this.state = {
      columns: [
        { title: 'Nama Pemesanan', field: 'user.name' },
        { title: 'Status', field: 'orderStep' },
        { title: 'Tanggal Dibuat', field: 'date' },
        { title: 'Material', field: 'material.name' },
        { title: 'Jumlah Pesanan (pcs)', field: 'quantity' },
        { title: 'Berat (Gram)', field: 'weightPrediction' },
        { title: 'Harga Total (Rp)', field: 'price' },
        { title: 'Alamat', field: 'detailAddress' },
        // { title: 'Action', field: 'btn' },
      ],
    }
  }

  componentDidMount() {
    if(localStorage.getItem('auth')) {
      const { dispatch } = this.props;
      dispatch(orderActions.getAllOrder());
      // history.push('/dashboard');
      }
  }

  componentWillReceiveProps(newProps){
      this.setState({ loading: newProps.loading }); // remove the loading progress when logged in or fail to log in
  }

  handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
  };

  change(data){
      console.log("Check ID : ", data);
  }

  formatPrice(value) {
      let val = (value/1)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  totalPrice(productPrice, shippingPrice){
    let total = parseInt(productPrice) + parseInt(shippingPrice);
    return "Rp. " + this.formatPrice(total);
  }

  gotoCreateOrder(){
    // eslint-disable-next-line no-unused-vars
    history.push('/order');
  }

  render(){
    const { orders } = this.props;

    for (let i = 0; i < orders.length; i++) {
      orders[i].date = moment(orders[i].createdAt).format("DD MMMM YYYY");
      orders[i].price = this.totalPrice(orders[i].productPricePrediction, orders[i].shippingPricePrediction)
    }

    return (
      <div className="tabledata-order">
          <div className="row item-section">
              <div className="col">
                  <div className="card">
                    <button className="detail-btn" onClick={() => this.gotoCreateOrder()}>
                        <span>Create New Order</span>
                    </button>
                    <div className="card-body">
                        <MaterialTable
                            title="Daftar Pesanan"
                            columns={this.state.columns}
                            key={orders._id}
                            data={orders}
                        />
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

Tabledata.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { orders } = state.orderPage;
  return {
      orders
  };
}

const connectedTableDataPage = withRouter(connect(mapStateToProps, '', '', {
  pure: false
}) (withStyles(styles)(Tabledata)));

export { connectedTableDataPage as Tabledata };

import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { history } from '../../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';

// Component
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

    this.state = {
      columns: [
        { title: 'Nama Pesanan', field: 'name' },
        { title: 'Status', field: 'status' },
        { title: 'Estimasi Pengerjaan (Hari)', field: 'estimate', type: 'numeric' },
        { title: 'Jumlah Pesanan (pcs)', field: 'unit', type: 'numeric' },
        { title: 'Harga (Rp)', field: 'price', type: 'numeric' },
      ],
      data: [
        {
          name: this.props.orders.color,
          status: 'Penyablonan',
          estimate: 8,
          unit: 36,
          price: '36.000.000',
        },
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

  render(){
    const { orders } = this.props;
    console.log("test console : ", orders)

    return (
      <div className="tabledata-order">
          <div className="row item-section">
              <div className="col">
                  <div className="card">
                      <div className="card-body">
                          <MaterialTable
                              title="Daftar Pesanan"
                              columns={this.state.columns}
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

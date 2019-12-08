import React, {Component} from 'react';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { history } from '../../../Helpers/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { orderActions } from '../../../Actions/orderActions';
import { withStyles } from '@material-ui/core/styles';


// Component
import './pesanan.css';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
});
  
class Pesanan extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          userId: '',
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(newProps){
        this.setState({ loading: newProps.loading }); // remove the loading progress when logged in or fail to log in
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    resiData = (e) =>{
        localStorage.resi = e.target.value;  
    }

    cekResi = (e) =>{
        e.preventDefault();
        let orderStatus = localStorage.resi
    
        // eslint-disable-next-line no-unused-vars
        const { dispatch } = this.props;
        if(orderStatus) {
          dispatch(orderActions.getOrderStatus(orderStatus));
        }
        document.getElementsByClassName("pesanan-card")[0].style.display = "block";    
    }

    render(){
        const { orderStatuses } = this.props;

        return (
            <div className="pesanan">
                <div className="container text-center">
                    <h3 className="h3-responsive">Cek Status Pesanan</h3>

                    <form>
                        <div>
                            <input type="text" name="resi" id="resi" placeholder="Masukkan Nomor Resi" onChange={this.resiData}/>
                            <br/>
                            <button type="submit" onClick={this.cekResi}>Cek Status</button>
                        </div>
                    </form>
                    <hr className="divider" />
                    <br />

                    <div className="pesanan-card">
                        {orderStatuses != null ? orderStatuses.map(
                            orderStatus => (
                                <div key={orderStatus._id} className="pesanan-container">
                                    <div className="row text-left">
                                        <div className="title col-4">
                                            <p>
                                                Nama Pemesan
                                            </p>            
                                        </div>
                                        <div className="col-1">
                                            <p>
                                                :
                                            </p>            
                                        </div>
                                        <div className="goods col-7">
                                            <p>
                                                {orderStatus.user.name}
                                            </p>            
                                        </div>
                                    </div>
                                    <div className="row text-left">
                                        <div className="title col-4">
                                            <p>
                                                Nama Orderan
                                            </p>            
                                        </div>
                                        <div className="col-1">
                                            <p>
                                                :
                                            </p>            
                                        </div>
                                        <div className="goods col-7">
                                            <p>
                                                {orderStatus.material.product.category.name} ({orderStatus.material.product.name}), {orderStatus.material.name}
                                            </p>            
                                        </div>
                                    </div>
                                    <div className="row text-left">
                                        <div className="title col-4">
                                            <p>
                                                Jumlah Pesanan (pcs)
                                            </p>            
                                        </div>
                                        <div className="col-1">
                                            <p>
                                                :
                                            </p>            
                                        </div>
                                        <div className="goods col-7">
                                            <p>
                                                {orderStatus.quantity} pcs
                                            </p>            
                                        </div>
                                    </div>
                                    <div className="row text-left">
                                        <div className="title col-4">
                                            <p>
                                                Keterangan
                                            </p>           
                                        </div>
                                        <div className="col-1">
                                            <p>
                                                :
                                            </p>            
                                        </div>
                                        <div className="goods col-7">
                                            <ol>
                                                {
                                                    orderStatus.orderStep != null ? orderStatus.orderStep.map(
                                                    (orderStep, index) => (
                                                        <li key={orderStep.step._id}><span>&nbsp;<strong>{orderStep.step.name}</strong><br/></span></li>
                                                        )
                                                    )
                                                : 
                                                    <li key={orderStatus._id}><span><strong>-</strong></span></li>
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="row text-left">
                                        <div className="title col-4">
                                            <p>
                                                Status Pengiriman
                                            </p>             
                                        </div>
                                        <div className="col-1">
                                            <p>
                                                :
                                            </p>            
                                        </div>
                                        <div className="goods col-7">
                                            <p>
                                                {
                                                    (orderStatus.status.isDone === true && orderStatus.status.isPaidOff === true)? 
                                                    <span key={orderStatus._id}>Lunas</span>                                             
                                                : 
                                                    [
                                                        (orderStatus.status.isDone === true)? 
                                                        <span key={orderStatus._id}>Pesanan Telah Selesai, Harap untuk Melunasi Pembayaran</span>
                                                        :
                                                        [
                                                            (orderStatus.status.isOnProcess === true)? 
                                                            <span key={orderStatus._id}>Pesanan Sedang Dalam Proses Pengerjaan</span>
                                                            :
                                                            [
                                                                (orderStatus.status.isPending === true)? 
                                                                <span key={orderStatus._id}>Pesanan Sedang Menunggu Konfirmasi</span>
                                                                :
                                                                [
                                                                    (orderStatus.status.isReject === true)?
                                                                    <span key={orderStatus._id}>Pesanan Ditolak, Harap hubungi Admin untuk Mengetahui Alasannya</span>
                                                                    :
                                                                    <span key={orderStatus._id}>Tidak Ada Status Pesanan</span>
                                                                ]
                                                            ]
                                                        ]         
                                                    ]
                                                }
                                            </p>            
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <span> Tidak Ada Jenis Pengiriman</span>
                        }
                    </div>
                </div>
            </div>
        );    
    }
}

Pesanan.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => {
    const { orderStatuses } = state.orderPage;
    return {
        orderStatuses
    };
  }
  
  const connectedPesananPage = withRouter(connect(mapStateToProps, '', '', {
    pure: false
  }) (withStyles(styles)(Pesanan)));
  
export { connectedPesananPage as Pesanan }
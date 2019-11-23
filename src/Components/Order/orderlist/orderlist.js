import React, {Component} from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

// Component
import './orderlist.css';
import { Tabledata } from './tabledata/tabledata';
// import Fresh from './fresh/fresh';
// import Stock from './stock/stock';
// import Cut from './cut/cut';
// import Print from './print/print';
// import Sew from './sew/sew';
// import Package from './package/package';

class OrderList extends Component {

    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
            activeItem: tab
            });
        }
    };

    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        return (
            <div className="order-list">
                <h2 className="section-title">Order Status</h2>
                <MDBContainer>
                    <Tabledata />
                </MDBContainer>
            </div>
        );
    }
};

export default OrderList;
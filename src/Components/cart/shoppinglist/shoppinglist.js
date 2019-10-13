import React, {Component} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol  } from 'mdbreact';

// Component
import './shoppinglist.css';

class Shoppinglist extends Component {
  data = {
    columns: [
      {
        label: 'No',
        field: 'no',
        sort: 'asc'
      },
      {
        label: 'Gambar',
        field: 'image',
        sort: 'asc'
      },
      {
        label: 'Nama',
        field: 'name',
        sort: 'asc'
      },
      {
        label: 'Kuantitas',
        field: 'quantity',
        sort: 'asc'
      },
    ],
    rows: [
      {
        'no': 1,
        'image': 'Gambar',
        'name': 'Kaos Chain Mail',
        'quantity': 12,
      },
      {
        'no': 2,
        'image': 'Gambar',
        'name': 'Topi Adamantium',
        'quantity': 3,
      },
      {
        'no': 3,
        'image': 'Gambar',
        'name': 'Sepatu Speed',
        'quantity': 6,
      }
    ]
  };

  change(data){
    console.log("Check ID : ", data);
  }

  render(){
    return (
        <div className="shopping-list">
          <MDBContainer>
            <h1 className="title">Daftar Pesanan Kamu</h1>
            <div className="cart-wrapper">
              <table>
                <tr>
                  <th>Nomor</th>
                  <th>Gambar</th>
                  <th>Nama Pesanan</th>
                  <th>Pemesan</th>
                  <th>Kuantitas</th>
                  <th>Harga</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-1.jpg"})`}}></div>
                  </td>
                  <td>Chainmail</td>
                  <td>Alfreds Futterkiste</td>
                  <td>
                    <input className="cart-quantity" type="number" min="1"/>
                  </td>
                  <td>Rp 5.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                  </td>
                  <td>Blade of Armor</td>
                  <td>Uranus</td>
                  <td>
                    <input className="cart-quantity" type="number" min="1"/>
                  </td>
                  <td>Rp 1.660</td>
                </tr>
              </table>
            </div>
          </MDBContainer>      
        </div>
    );
  }
};

export default Shoppinglist;
import React from 'react';
import MaterialTable from 'material-table';

// Component
import './tabledata.css';

function Tabledata() {
    const [state] = React.useState({
        columns: [
          { title: 'Status', field: 'status' },
          { title: 'Nama Pesanan', field: 'name' },
          { title: 'Estimasi Pengerjaan (Hari)', field: 'estimate', type: 'numeric' },
          { title: 'Jumlah Pesanan (pcs)', field: 'unit', type: 'numeric' },
          { title: 'Harga (Rp)', field: 'price', type: 'numeric' },
        ],
        data: [
          {
            status: 'Penyediaan Bahan',
            name: 'Blade of Armor',
            estimate: 12,
            unit: 24,
            price: '48.000.000',
          },
          {
            status: 'Penyablonan',
            name: 'Brute Armor',
            estimate: 8,
            unit: 36,
            price: '36.000.000',
          },
          {
            status: 'Pemaketan',
            name: 'Curse Helmet',
            estimate: 16,
            unit: 12,
            price: '18.000.000',
          },
          {
            status: 'Penjahitan',
            name: 'Oracle',
            estimate: 6,
            unit: 8,
            price: '16.000.000',
          },
          {
            status: 'Pengiriman',
            name: 'Though Boots',
            estimate: 4,
            unit: 12,
            price: '6.000.000',
          },
        ],
    });

    return (
        <div className="tabledata-order">
            <div className="row item-section">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <MaterialTable
                                title="Daftar Pesanan"
                                columns={state.columns}
                                data={state.data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabledata;

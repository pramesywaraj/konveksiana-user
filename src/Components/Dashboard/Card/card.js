import React from 'react';
import MaterialTable from 'material-table';

// Component
import './card.css';

function Card() {
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
    });

    return (
        <div className="dash-card">
            <h2 className="section-title">Dashboard</h2>
            <div className="row item-section">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex align-items-center">
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <p className="item-number">1</p>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-1.jpg"})`}}></div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <p className="item-name">Nama Barang</p>
                                    <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur odit omnis recusandae suscipit soluta ea voluptas distinctio maiores? Quisquam, necessitatibus aut est nihil iste illum placeat ea ab harum?</p>
                                    <p className="item-price">Rp. 20.000</p>
                                    <p className="item-unit">2 Lusin</p>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <p className="item-status">Status:</p>
                                    <p className="item-tracker">Penjahitan</p>
                                    <a className="detail-btn" href="#!">
                                        <span>Detail</span>
                                    </a>
                                </div>
                            </div>

                            {/* <MaterialTable
                                title="Editable Example"
                                columns={state.columns}
                                data={state.data}
                                editable={{
                                    onRowAdd: newData =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                        resolve();
                                        const data = [...state.data];
                                        data.push(newData);
                                        setState({ ...state, data });
                                        }, 600);
                                    }),
                                    onRowUpdate: (newData, oldData) =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                        resolve();
                                        const data = [...state.data];
                                        data[data.indexOf(oldData)] = newData;
                                        setState({ ...state, data });
                                        }, 600);
                                    }),
                                    onRowDelete: oldData =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                        resolve();
                                        const data = [...state.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        setState({ ...state, data });
                                        }, 600);
                                    }),
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row item-section">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex align-items-center">
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <p className="item-number">2</p>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <p className="item-name">Nama Barang</p>
                                    <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur odit omnis recusandae suscipit soluta ea voluptas distinctio maiores? Quisquam, necessitatibus aut est nihil iste illum placeat ea ab harum?</p>
                                    <p className="item-price">Rp. 20.000</p>
                                    <p className="item-unit">2 Lusin</p>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <p className="item-status">Status:</p>
                                    <p className="item-tracker">Penjahitan</p>
                                    <a className="detail-btn" href="#!">
                                        <span>Detail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row item-section">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex align-items-center">
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <p className="item-number">3</p>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-3.jpg"})`}}></div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <p className="item-name">Nama Barang</p>
                                    <p className="item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur odit omnis recusandae suscipit soluta ea voluptas distinctio maiores? Quisquam, necessitatibus aut est nihil iste illum placeat ea ab harum?</p>
                                    <p className="item-price">Rp. 20.000</p>
                                    <p className="item-unit">2 Lusin</p>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <p className="item-status">Status:</p>
                                    <p className="item-tracker">Penjahitan</p>
                                    <a className="detail-btn" href="#!">
                                        <span>Detail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

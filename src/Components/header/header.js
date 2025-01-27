import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact';
import { history } from '../../Helpers/history';

// Component
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  gotoCart = () => {
    history.push('/');
  }

  render() {
    return (
      <div>
        <header>
          <div className="desktop">
            <MDBNavbar className="konveksiana-upper-nav" light expand="xl" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand className="logo" href="/">
                  <div className="row text-center">
                    <div className="img-size" style={{ backgroundImage: `url(${"/logo-konveksiana.svg"})`}}></div>
                  </div>
                </MDBNavbarBrand>
              </MDBContainer>
            </MDBNavbar>            
          </div>

          <div className="mobile">
            <MDBNavbar className="konveksiana-upper-nav" light expand="xl" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand className="logo" href="/">
                  <div className="row">
                    <div className="img-size" style={{ backgroundImage: `url(${"/logo-konveksiana.svg"})`}}></div>
                  </div>
                </MDBNavbarBrand>
                {/* <MDBNavbarBrand href="/">
                  <strong>Logo Konveksiana</strong>
                </MDBNavbarBrand> */}

                <div className="toggler">
                  <MDBNavbarToggler className="toggle" onClick={this.onClick} />
                </div>

                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav className="nav-container">
                    <MDBNavItem>
                      <ScrollIntoView selector="#status">
                        <MDBNavLink className="text" to="/#status" >Cek Pesanan</MDBNavLink>
                      </ScrollIntoView>
                    </MDBNavItem>
                    <MDBNavItem>
                      <ScrollIntoView selector="#value">
                        <MDBNavLink className="text" to="/#value">Keunggulan</MDBNavLink>
                      </ScrollIntoView>
                    </MDBNavItem>
                    <MDBNavItem>
                      <ScrollIntoView selector="#about">
                        <MDBNavLink className="text" to="/#about">About</MDBNavLink>
                      </ScrollIntoView>
                    </MDBNavItem>
                    <MDBNavItem>
                      <ScrollIntoView selector="#portfolio">
                        <MDBNavLink className="text" to="/#portfolio">Portfolio</MDBNavLink>
                      </ScrollIntoView>
                    </MDBNavItem>
                    <MDBNavItem>
                      <ScrollIntoView selector="#contact">
                        <MDBNavLink className="text" to="/#contact">Kontak Kami</MDBNavLink>
                      </ScrollIntoView>
                    </MDBNavItem>
                    
                    <MDBNavItem>
                      <MDBNavLink className="text" to="/order"><strong>Pesan</strong></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      {
                        sessionStorage.auth?
                        <MDBNavLink className="text" to="/login"><strong>Dashboard</strong></MDBNavLink>
                        :
                        <MDBNavLink className="text" to="/login"><strong>Masuk</strong></MDBNavLink>
                      }
                    </MDBNavItem>
                    {/* <MDBNavItem>
                      <MDBNavLink className="text" to="/cart">
                      <strong>
                        <MDBIcon fas icon="shopping-cart" className="mr-2" />
                        Keranjang
                      </strong>
                    </MDBNavLink>
                    </MDBNavItem> */}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </div>

          <MDBNavbar className="konveksiana-nav" light expand="lg" fixed="top" scrolling>
            <MDBContainer>
              {/* <MDBNavbarBrand href="/">
                <strong>Logo Konveksiana</strong>
              </MDBNavbarBrand> */}
              <MDBNavbarToggler className="toggle" onClick={this.onClick} />

              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav className="nav-container">
                  <MDBNavItem>
                    <ScrollIntoView selector="#status">
                      <MDBNavLink className="text" to="/#status" >Cek Pesanan</MDBNavLink>
                    </ScrollIntoView>
                  </MDBNavItem>
                  <MDBNavItem>
                    <ScrollIntoView selector="#value">
                      <MDBNavLink className="text" to="/#value">Keunggulan</MDBNavLink>
                    </ScrollIntoView>
                  </MDBNavItem>
                  <MDBNavItem>
                    <ScrollIntoView selector="#about">
                      <MDBNavLink className="text" to="/#about">About</MDBNavLink>
                    </ScrollIntoView>
                  </MDBNavItem>
                  <MDBNavItem>
                    <ScrollIntoView selector="#portfolio">
                      <MDBNavLink className="text" to="/#portfolio">Portfolio</MDBNavLink>
                    </ScrollIntoView>
                  </MDBNavItem>
                  <MDBNavItem>
                    <ScrollIntoView selector="#contact">
                      <MDBNavLink className="text" to="/#contact">Kontak Kami</MDBNavLink>
                    </ScrollIntoView>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink className="text" to="/order"><strong>Pesan</strong></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    {
                      sessionStorage.auth?
                      <MDBNavLink className="text" to="/login"><strong>Dashboard</strong></MDBNavLink>
                      :
                      <MDBNavLink className="text" to="/login"><strong>Masuk</strong></MDBNavLink>
                    }
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    <MDBNavLink className="text" to="/cart">
                    <strong>
                      <MDBIcon fas icon="shopping-cart" className="mr-2" />
                      Keranjang
                    </strong>
                  </MDBNavLink>
                  </MDBNavItem> */}
                </MDBNavbarNav>
              </MDBCollapse>

            </MDBContainer>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Header;
import React from "react";
import { MDBContainer } from "mdbreact";
import './footer.css'

const Footer = () => {
  return (
    <footer className="konveksiana-footer">
      <div className="row">
        <div className="col">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p className="foot-title">Silahkan Hubungi Kami:</p>
            </MDBContainer>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <a target="__blank" href="line://home/public/main?id=konveksiana">
                <span className="icon">
                  <i className="fab fa-line"></i>
                </span> 
                <br/>
                <p>@konveksiana</p>
              </a>       
            </MDBContainer>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <a target="__blank" href="https://www.instagram.com/konveksiana.id/">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>       
                <br/> 
                <p>@konveksiana.id</p>
              </a>   
            </MDBContainer>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <a target="__blank" href="https://wa.me/+6287784656175">
                <span className="icon">
                  <i className="fab fa-whatsapp"></i>
                </span>      
                <br/>
                <p>0877-8465-6175</p>
              </a>       
            </MDBContainer>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p><em>Jl. Raya Dramaga no.144, Dramaga, Bogor, Jawa Barat</em></p>
            </MDBContainer>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a> modified by <a target="__blank" href="https://codepanda.id">codepanda.id</a></p>
            </MDBContainer>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
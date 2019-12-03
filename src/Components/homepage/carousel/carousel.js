import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";

const Carousel = () => {
  return (
    <div className="konveksiana-carousel">
        <MDBCarousel
        activeItem={1}
        length={8}
        showControls={true}
        showIndicators={true}
        className="carousel"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"                
                src="/assets/carousel/slide-1.jpg"
                alt="First slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-2.jpg"
                alt="Second slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-3.jpg"
                alt="Third slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-4.jpg"
                alt="Third slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-5.jpg"
                alt="Third slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-6.jpg"
                alt="Third slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-7.jpg"
                alt="Third slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="8">
            <MDBView>
              <img
                className="d-block w-100 img-carousel"
                src="/assets/carousel/slide-8.jpg"
                alt="Third slide"
                style={{marginTop: "10vh", maxWidth: "1920px", marginRight: "auto", marginLeft: "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Carousel;
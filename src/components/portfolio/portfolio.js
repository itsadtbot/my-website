import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
         // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
         // optional, default to 1.
    },
};




export default class Portfolio extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}
            
                    >

                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img src="images/portfolio/hooping.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Hula Hooping</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img src="images/portfolio/travel.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Hula Hooping</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img src="images/portfolio/art.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Hula Hooping</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="columns portfolio-item">
                            <div>
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img src="images/portfolio/volunteer.jpg"></img>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Hula Hooping</h5>
                                                {/* <p>Web Development</p> */}
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Carousel>
                </section>
            </React.Fragment>
        );
    }
}

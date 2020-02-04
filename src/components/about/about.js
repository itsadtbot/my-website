import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Emoji from 'a11y-react-emoji'
import ColourPsych from '../../projects/ColourPsych.pdf'
import Baking from '../../projects/Baking.pdf'
import GT from '../../projects/GroupTheory.jpg'
import quill from '../../projects/quill.jpg'
import dot from '../../projects/dot.jpg'
import decor from '../../projects/m-decor.jpg'
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
export default class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="https://secure.gravatar.com/avatar/c850f6e86af4253521f6cc9028257398" alt="Aditi Bhat's Profile Picture" />
                        </div>
                        <div class="nine columns main-col">

                            <h1>About Me</h1>

                            {/* <p>To be updated</p> */}
                            <br />
                            <hr />

                        </div>
                    </div>
                    <br />
                    <br />

                    {/* <div className="row">
                            <div className="twelve columns collapsed">
                                {/* portfolio-wrapper */}
                    {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf"> */}

                    {/* portfolio-wrapper */}
                    <Grid container direction="row"
                        justify="space-around"
                        alignItems="stretch"
                        flexGrow="1"
                        spacing={3}
                        className="Grid"
                        px={6}
                    >
                        {/* <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card className="item-wrap">
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image="images/portfolio/travel.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>


                                        {/* <a href="#modal-01" title> */}

                        {/* <h1>Heading Text</h1>
                                <p>Some Text</p> */}
                        {/* <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Travel</h5>
                                                {/* <p>Illustrration</p> */}
                        {/* </div>
                                        </div> */}
                        {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                        {/* </a> */}


                        {/* </CardContent>
                                </Card>
                            </div>
                        </Grid> */}



                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card>
                                    <CardContent>
                                        {/* <a href="#modal-01" title> */}
                                        <h2 className="card-title">TRAVEL
                                            <span>
                                                <Emoji symbol="🏕️" label="travel" />
                                            </span>
                                        </h2>

                                        <img alt="Aditi Bhat's picture of Roopkund" src="images/portfolio/travel.jpg" />
                                        <h3>    </h3>
                                        <h3 className="card-title">I have completed three Himalayan treks</h3>
                                        <li className="card-title"><a href="https://itsadtbot.wordpress.com/2016/07/07/my-first-high-altitude-trek-roopkund/" target="_blank">Roopkund</a> - 16,080 ft (2016)</li>
                                        <li className="card-title"><a href="https://itsadtbot.wordpress.com/2017/06/06/kuari-passed/" target="_blank">Kuari Pass</a> - 12,556 ft (2017)</li>
                                        <li className="card-title">Dayara Bugyal - 11,998 ft (2018) - One of my pictures of this trek was featured on <a href="http://www.natgeotraveller.in/dailyshot/winter-in-india/aditi-bhat/" target="_blank">National Geographic!</a></li>
                                        {/* <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Travel</h5>
                                                {/* <p>Illustrration</p> */}
                                        {/* </div>
                                        </div> */}
                                    </CardContent>
                                    {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                    {/* </a> */}
                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        {/* <a href="https://www.youtube.com/hoopsdontlie" target="_blank"><i className="fa fa-youtube" /></a> */}
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">

                                <Card>
                                    <CardContent>

                                        <h2 className="card-title">HULA HOOPING
                                            <span>
                                                <Emoji symbol="⭕" label="hooping" />
                                            </span>
                                        </h2>
                                        <img alt="Aditi Bhat Hoops Don't Lie" src="images/portfolio/hooping.jpg" />
                                        <h3>    </h3>
                                        <h3 className="card-title">I have been Hula Hooping since the age of 8. I have a Youtube Channel called <a href="https://www.youtube.com/hoopsdontlie" target="_blank">Hoops Don't Lie</a> which has videos with 6k+ views! They have been featured on Indian Television and on Hooping websites such as hooping.org.</h3>

                                        {/* <a href="https://www.youtube.com/hoopsdontlie" title target="_blank"> */}

                                        {/* <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>Hula Hooping</h5>
                                                        {/* <a href="https://www.youtube.com/hoopsdontlie"><i className="fa fa-youtube" /></a> */}
                                        {/* <p>Web Development</p> */}
                                        {/* </div> */}
                                        {/* </div> */}
                                        {/* <div className="link-icon"><i className="fa fa-youtube" /></div> */}
                                        {/* </a> */}

                                    </CardContent>

                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card>
                                    <CardContent>
                                        <h2 className="card-title">PSYCHOLOGY
                                            <span>
                                                <Emoji symbol="🧠" label="brain" />
                                            </span>
                                        </h2>
                                        {/* <a href="#modal-03" title> */}
                                        <img alt="Aditi Bhat Psychology" src="images/portfolio/psychology.jpg" />
                                        <h3 className="card-title">Blink by Malcolm Gladwell, Thinking Fast and Slow by Daniel Kahneman, Emotional Design by Don Norman, Lateral Thinking by Edward de Bono are some of my favourite books! I've written a couple of articles on topics such as the psychology of <a href={ColourPsych} title target="_blank">colour</a>, <a href="https://itsadtbot.wordpress.com/2016/08/01/my-cup-of-positivi-tea/" title target="_blank">positivity</a> and <a href="https://itsadtbot.wordpress.com/2016/06/13/the-psychology-of-popularity/" title target="_blank">popularity</a>. I've also written a poem on the concept of <a href="https://itsadtbot.wordpress.com/2016/06/11/mbti/" title target="_blank">MBTI</a>.</h3>
                                        {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                        {/* </a> */}
                                    </CardContent>
                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card>
                                    <CardContent>
                                        {/* <a href="#modal-04" title> */}
                                        <h2 className="card-title">BAKING
                                            <span>
                                                <Emoji symbol="🍪" label="cookie" />
                                            </span>
                                        </h2>
                                        <img alt="Aditi Bhat's cookies, brownies, cheesecakes" src="images/portfolio/baking.jpg" />
                                        <h3>Check out my cookies, brownies, cakes made for special occasions, blueberry cheesecakes and chocolate souffles <a href={Baking} title target="_blank">here!</a></h3>
                                        {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                        {/* </a> */}
                                    </CardContent>
                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card>
                                    <CardContent>
                                        <h2 className="card-title">VOLUNTEERING
                                            <span>
                                                <Emoji symbol="👣" label="volunteering" />
                                            </span>
                                        </h2>
                                        {/* <a href="#modal-05" title> */}
                                        <img alt="Aditi Bhat U&I Youth Development Program Samarthanam Trust" src="images/portfolio/volunteer2.jpg" />
                                        <h3>I have worked with four NGOs to positively impact underserved communities. The resume section has a detailed account of my work.</h3>
                                    </CardContent>
                                    {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                    {/* </a> */}
                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card >
                                    <CardContent>
                                        {/* <a href="#modal-06" title> */}
                                        <h2 className="card-title">POETRY
                                            <span>
                                                <Emoji symbol="✒️" label="pen" />
                                            </span>
                                        </h2>
                                        <img alt="Aditi Bhat MBTI Group Theory" src="images/portfolio/poetry.jpg" />
                                        <h3>Inspiration struck me most during my exams, <a href={GT} title target="_blank">this one</a> was right before my math exam!</h3>
                                        {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                        {/* </a> */}
                                    </CardContent>
                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card>
                                    <CardContent>
                                        {/* <a href="#modal-07" title> */}
                                        <h2 className="card-title">ART
                                            <span>
                                                <Emoji symbol="🎨" label="art" />
                                            </span>
                                        </h2>
                                        <img alt="Aditi Bhat Dot Art Painting Quilling" src="images/portfolio/art.jpg" />
                                        <h3>I like to dabble in different art forms such as <a href={quill} title target="_blank">quilling</a> and <a href={dot} title target="_blank">dot art painting</a>!</h3>
                                    </CardContent>
                                    {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                    {/* </a> */}
                                </Card>
                            </div> {/* item end */}
                        </Grid>
                        <Grid item lg={3}>
                            <div className="columns portfolio-item">
                                <Card>
                                    <CardContent>
                                    <h2 className="card-title">DECOR
                                            <span>
                                                <Emoji symbol="🎍" label="decor" />
                                            </span>
                                        </h2>
                                        {/* <a href="#modal-08" title> */}
                                        <img alt="Aditi Bhat Decor" src="images/portfolio/decor.jpg" />
                                       <h3><a href={decor} title target="_blank">Here</a> is what my apartment looked like during undergrad!</h3>
                                        {/* <div className="link-icon"><i className="icon-plus" /></div> */}
                                        {/* </a> */}
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        {/* item end */}
                        {/* </div> portfolio-wrapper end */}
                        {/* </div> twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-travel.jpg" alt="" />
                            <div className="description-box">
                                <h4>Travel</h4>
                                <p>To be updated</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                            </div>
                            <div className="link-box">
                                {/* <a href="http://www.behance.net">Details</a> */}
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        {/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-psychology.jpg" alt="" />
                            <div className="description-box">
                                <h4>Psychology</h4>
                                <p>To be updated</p>
                                <span className="categories"><i className="fa fa-tag" />Branding</span>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-baking.jpg" alt="" />
                            <div className="description-box">
                                <h4>Baking</h4>
                                <p>To be updated</p>
                                <span className="categories"><i className="fa fa-tag" />Photography</span>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-04 End */}
                        <div id="modal-05" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-volunteer.jpg" alt="" />
                            <div className="description-box">
                                <h4>Social Volunteering</h4>
                                <p>To be updated</p>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-05 End */}
                        <div id="modal-06" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-poetry.jpg" alt="" />
                            <div className="description-box">
                                <h4>Poetry</h4>
                                <p>To be updated</p>
                                <span className="categories"><i className="fa fa-tag" />Photography</span>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-06 End */}
                        <div id="modal-07" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-art.jpg" alt="" />
                            <div className="description-box">
                                <h4>Art</h4>
                                <p>To be updated</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-07 End */}
                        <div id="modal-08" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-decor.jpg" alt="" />
                            <div className="description-box">
                                <h4>Decor</h4>
                                <p>To be updated</p>
                                <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        {/* </div> row End */}
                    </Grid>
                    {/* </div> */}
                </section>
            </React.Fragment >
        );
    }
}
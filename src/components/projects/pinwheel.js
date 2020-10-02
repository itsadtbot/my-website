import React, { Component } from 'react';
class Pinwheel extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="blogs">
                    <img className="pinwheel" src="/images/portfolio/pinwheel/Logo-08.png" alt="Pinwheel Logo" />
                    <br/>
                    <h1>Pinwheel - Making Streets Safer for Women</h1>
                    {/* <br /> */}
                    <p>&emsp;&emsp;This project won my team the First Place at a Hackathon conducted for International Women's Day 2020. This was right before Coronavirus took over the world! I designed my first ever logo for this project too. There's definitely a long way to go, but this is a project that I'm proud of. Here are two other logo variations that I had come up with.</p>
                    <img className="pinwheel" src="/images/portfolio/pinwheel/Logo-02.png" alt="Pinwheel Logo" />
                    <br/>
                    <img className="pinwheel" src="/images/portfolio/pinwheel/Logo-05.png" alt="Pinwheel Logo" />
                    <br />
                    <p>&emsp;&emsp;In 2018, India was declared the most dangerous country in the world for women in a Thomson Reuters Foundation Survey. This survey took healthcare, discrimination, cultural traditions, sexual violence, non-sexual violence and human trafficking into consideration.
                    UN Women conducted a survey in partnership with the NGO Jagori and the Government of Delhi in 2010. The sample of 5,010 included 3,816 women, 944 men and 250 common witnesses above the age of 16. The report revealed that 67% of women faced incidents of sexual harassment two-five times a year. Nine of out every ten respondents had witnessed an event related to sexual harassment after dark and in the daytime. Nearly 70% of women resist harassment by confronting the perpetrator, asking bystanders for help and reaching out to their family and friends. Women have to bear the burden of ensuring their own safety by avoiding some areas, not venturing out after dark, deliberating over their garments and carrying safety pins and pepper spray.
                    Our solution, Pinwheel is an Android Application that aims to alleviate this problem. The Application derives its name from Japanese culture; the pinwheel represents childhood innocence, potential and spiritual freedom.</p>
                    <p>&emsp;&emsp;Pinwheel is designed to find the safest route between two points in a city. The available routes between two points are accessed using Google’s directions API. Based on this outcome, we compute a “safety score” of all the possible routes and recommend the route with the highest score. The process of calculating these safety scores involves parsing the JSON response given by the Directions API. Travel modes like driving, walking, bicycling and transit can be passed to the Directions API.</p>
                    {/* <br /> */}
                    <p>&emsp;&emsp;The total safety score of a route is calculated by computing a weighted mean of three factors - frequency of safe zones near a route, travel time and safety checks provided by the user.
                    All the attributes of safe zones near a route are compiled and assigned weights based on the safety they can offer and the time of the day. For example, a police station will have a higher weightage compared to a mall. Hence, it would be given a higher weightage in terms of safety. Using these weights and number of safety spots near a route, a weighted mean is calculated for safe zones along a route.
                    Each route has a travel time associated with it. Each route is assigned a weight based on travel time. The fastest route has the highest weight.
                    In order to make our solution flexible and human-centric, the application has a safety check. Through this, users can report incidents and provide authentic inputs on the safety of an area. Once these inputs are reviewed, they are used to calculate the mean safety check scores along a route.
                    A weighted mean of these three values is then computed where the time of day is also considered. For example, getting to your destination faster will be prudent to reduce risk at night. Hence, it will be assigned a greater weight. This weighted mean is the final safety score.</p>
                    <img className="pinwheel" src ="/images/portfolio/pinwheel/Flowchart.PNG" alt="Flowchart of Safety Scores"></img>
                    <p>&emsp;&emsp;Here are the screens we designed for the hackthon:</p>
                    <img className="pinwheelimg" src="/images/portfolio/pinwheel/Pinwheel-UI-Flowchart.jpg" alt="Pinwheel UI Screens"></img>
                </section>
            </React.Fragment>
        );
    }
}

export default Pinwheel;
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
class WFH extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="blogs">
                    <h1>GRE Resources!</h1>
                    <br />
                    <p>&emsp;&emsp;Hello! Here are some resources that helped me score a 330/340 in the GRE. I wil convert this into a full-fledged blog soon!</p>
                    <h2>1. Greg Mat</h2>
                    <p>&emsp;&emsp;<a href="https://www.gregmat.com" target="_blank">Greg Mat</a> is GOD. Go through his videos to understand how the exams works, and also for some excellent strategies on how to tackle verbal. He only solves official ETS questions in his videos. He also has a <a href="https://www.youtube.com/channel/UCktwzce9ncy_K78l1KBZkYQ" target="_blank">YouTube Channel!</a> His walkthrough videos are also extremely helpful. You can pause the video before he solves a question, solve it yourself and see how you can improve your approach.</p>
                    <h2>2. Word Power Made Easy - Norman Lewis</h2>
                    <p>&emsp;&emsp;This book will help you break down words and understand the meaning from the root of a word. A simple Google search should help you get the PDF version, although I would suggest ordering the physcial copy online, as it has exercises you can work on.</p>
                    <h2>3. Study Official ETS Material!</h2>
                    <p>&emsp;&emsp;They made the test, and no matter how much other test prep companies try to replicate it, it's not exactly the same! Use ETS Official guides, there are three of them. Once again, you should be able to find the PDFs on Google. I will try to post links here soon!</p>
                    <h2>4. Quant: Manhattan 5lb Book</h2>
                    <p>&emsp;&emsp;If you want to practice more apart from the official guides for quant, I found this book to be quite helpful.</p>
                    <h2>5. Magoosh Flashcards App</h2>
                    <p>&emsp;&emsp;Replace the Instagram icon on your homepage with the Magoosh Flashcards App, so that muscle memory will do the work for you and remind you to learn new words! The app itself is a gamified experience, which helped me learn words.</p>
                    <h2>6. Barron's 800 word Flashcards</h2>
                    <p>&emsp;&emsp;<a href="https://quizlet.com/8997815/barrons-800-essential-words-for-the-gre-flash-cards/">Link</a> to the flashcards</p>
                    <h2>7. YM Grad</h2>
                    <p>&emsp;&emsp;This was suggested during a live session conducted by Skill-X (IG: @skillxhq) where they hosted me! <a href="https://www.youtube.com/channel/UCUeocvBLLnLEcd9ibFH18dw" target="_blank"> Here</a> is the link to YM Grad.</p>
                    <h2>Tip: Take a lot of Mock exams!</h2>
                    <p>&emsp;&emsp;Simulate the exact environment in which you'll be taking the exam. And keep a journal or excel sheet of the sections you haven't performed well in, so that you can watch more videos on those and practice!</p>
                </section>
            </React.Fragment >
        );
    }
}

export default WFH;
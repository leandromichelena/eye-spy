import React from 'react';
import "../index.css";

// image import
import landingPageImg from '../images/landing-page-img.png';

function LandingPage() {

    return (
        <div className="container pb-5">
            <div className="d-flex pt-5 pb-5 align-items-center border-bottom border-dark">
                <div className="pe-5">
                    <img src={landingPageImg} alt="lake landscape" height={500} width={320} />
                </div>

                {/* webpage "introduction" */}
                <div className="">
                    <h2 className="">Welcome to Eye Spy!</h2>
                    {/* <br /> */}
                    {/* <br /> */}
                    <p className="fs-4 text"><em>Eye Spy Your Next Favorite Spot! </em>We are Your <em>Next Best Friend</em> for finding a new unique treasure. We'll help you find the next place you want to explore! </p>
                    <div className="container-fluid py-2 card mb-3 scrolling-wrapper">
                        {/* <h2 className="font-weight-light"></h2> */}
                        <div className="d-flex flex-row flex-nowrap row g-0">
                            {/* Static Reviews */}
                            <div className="card card-body"><p>Wow! I never thought I would find a site like this. I was able to find so many cool and unique places that were so close to home!</p>
                                <p> - Scott H.</p></div>
                            <div className="card card-body"><p>At first I thought it was such a weird webpage but it ended up being exactly what I was looking for! I can't even recommend it enough to anyone who likes being outdoors.</p>
                                <p>-Theodore M.</p></div>
                            <div className="card card-body"><p>I never thought anyone would think of an idea to find these unique gems. I'm always searching for these and a lot of them are just not what I'm looking for. This hits the nail on the head.</p>
                                <p>-Cleo P.</p></div>
                            {/* <div className="card card-body"><p>Eye Spy is a name that indeed matches. It's definitely got an eye for rare spots. I thought I was good, but they're even better.</p>
        <p>-John E.</p></div> */}
                            {/* <div className="card card-body"><p>I was never one to look online to find places to explore, that weren't so busy, but here we are.I found this site and now I can't stop checking back!</p>
        <p>-Cillia T.</p></div> */}
                            <div className="card card-body"><p>What a refreshing site. It matches what I was looking for but just the webpage was so pleasant and nice to look at. I wish I could keep looking. I love the feature being able to add our own suggestions onto the website too! I feel so engaged.</p>
                                <p>-Lilliana L.</p></div>

                        </div>
                    </div>

                </div>
            </div>

            {/* STILL NEED TO ADD IN RANDOM DESTINATIONS (WORK WITH BACKEND TEAM ON THIS) */}

            {/* Sign Up Section */}
            <div className="py-5 my-5 text-center landingPage-secondaryBg shadow-lg rounded d-flex justify-content-center flex-wrap">
                <h3 className="pb-3 col-6 subHeader-font border-bottom border-dark">Sign Up Today!</h3>
                <p>
                    Ever wanted to be apart of a big picture? A new exciting journey is just one click away! Join us today and help us help you make the best unique exploration website you can see!
                    <br></br>
                    Signing up lets you add places to your favorites, submit places to be added to our webpage, allows you to comment and like places, and many more! Sign up now!
                </p>
                <div className="">
                    <a
                        className="all-btns p-2 rounded text-decoration-none"
                        href="/signup"
                        role="button"
                    >
                        Sign Up!
                    </a>
                </div>
            </div>
            < br />
            < br />
        </div>
    )
}

export default LandingPage;
import "../index.css";

// image import
import landingPageImg from "../images/landing-page-img.png";

function LandingPage() {
  return (
    <main className="container pb-5" role="main">
      {/* Hero */}
      <section
        className="pt-5 pb-4 border-bottom border-dark"
        aria-labelledby="intro-heading"
      >
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-3">
            {/* Image column */}
            <img
              src={landingPageImg}
              alt="Scenic lake landscape with mountains"
              className="img-fluid rounded-4 shadow"
              sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 320px"
            />
          </div>

          {/* Introduction copy */}
          <div className="col-12 col-md-9">
            <h1 id="intro-heading" className="header-font mb-3">
              Welcome to Eye Spy
            </h1>
            <p className="fs-5">
              <em>Eye Spy your next favorite spot.</em> We’re your
              <em> best friend</em> for finding unique outdoor treasures.
              Discover new places to explore, curated by a community of
              adventure-seekers like you.
            </p>

            {/* Reviews */}
            <h2 id="reviews-heading" className="subHeader-font mb-2">
              What explorers say
            </h2>
            <section
              className="reviews-section mt-4"
              aria-labelledby="reviews-heading"
            >
              <ul className="review-list" role="list">
                <li>
                  <article
                    className="review-card"
                    aria-label="Review by Scott H."
                  >
                    <p>
                      "Wow! I never thought I would find a site like this. I
                      found so many cool and unique places close to home!"
                    </p>
                    <cite className="reviewer-name">— Scott H.</cite>
                  </article>
                </li>
                <li>
                  <article
                    className="review-card"
                    aria-label="Review by Theodore M."
                  >
                    <p>
                      "At first I thought it was a weird webpage, but it ended
                      up being exactly what I was looking for! I can't recommend
                      it enough to anyone who loves being outdoors."
                    </p>
                    <cite className="reviewer-name">— Theodore M.</cite>
                  </article>
                </li>
                <li>
                  <article
                    className="review-card"
                    aria-label="Review by Cleo P."
                  >
                    <p>
                      "I'm always searching for unique gems, and this hits the
                      nail on the head."
                    </p>
                    <cite className="reviewer-name">— Cleo P.</cite>
                  </article>
                </li>
                <li>
                  <article
                    className="review-card"
                    aria-label="Review by Lilliana L."
                  >
                    <p>
                      "Such a refreshing site. It matches what I was looking
                      for, and the experience is pleasant and engaging. I love
                      being able to add my own suggestions!"
                    </p>
                    <cite className="reviewer-name">— Lilliana L.</cite>
                  </article>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section
        className="py-5 my-5 text-center landingPage-secondaryBg shadow-lg rounded"
        aria-labelledby="signup-heading"
      >
        <div className="row justify-content-center g-3">
          <div className="col-12 col-lg-8">
            <h2
              id="signup-heading"
              className="pb-3 subHeader-font border-bottom border-dark"
            >
              Sign Up Today
            </h2>
            <p className="mt-3">
              Join a growing community shaping the best unique exploration
              website. Signing up lets you save favorites, submit new places,
              comment, like posts, and more.
            </p>
            <div className="mt-2">
              <a
                className="all-btns p-2 rounded text-decoration-none"
                href="/sign-up"
                role="button"
                aria-label="Sign up for Eye Spy"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;

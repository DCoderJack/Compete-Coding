import React from 'react'

const About = () => {
  return (
    <>
        <div className="container my-5">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Compete Coding
                        </button>
                        </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Compete Coding</strong> is a one stop array for various <code>.Competitive / Coding / Hackathons.</code> Find competitions from different Hosts & Platforms.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filter Coding Platforms
                        </button>
                        </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Filter</strong> option helps you to search for the coding platforms you are looking.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Contest Card
                        </button>
                        </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Contest Card contains </strong><code> Contest Title, Duration, Start Time, End Time, in_24_hours, Coding Platform Site Name, Status of competition, url of competiton</code>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default About
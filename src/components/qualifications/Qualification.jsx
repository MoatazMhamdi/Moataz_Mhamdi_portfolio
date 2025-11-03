import React from 'react'
import "./qualification.css";
import { useState } from 'react';

const Qualification = () => {

    const [toggleState, settoggleState] = useState(1);

    const toggleTab = (index) => {
        settoggleState(index);
    }

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__conatiner container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Esprit School of engineering </h3>
                                <span className="qualification__subtitle"> Graduated Software Engineer </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024-2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Esprit School of engineering </h3>
                                <span className="qualification__subtitle"> Mobile and web devolopment  </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2020-2024
                                </div>
                            </div>

                        </div>

                      
                    </div>

                    <div className={
                        toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }

                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Orange Tunisie</h3>
                                <span className="qualification__subtitle"> Full Stack Engineer Intern  </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Janury 2025 - September 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder">  </span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Westic</h3>
                                <span className="qualification__subtitle">Full Stack Developer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    June 2024 - November 2024
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> OSTRIX </h3>
                                <span className="qualification__subtitle"> Full Stack Developer </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    January 2024 - May 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
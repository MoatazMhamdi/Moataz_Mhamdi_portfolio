import React from 'react'
import "./skills.css"
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import Deployment from './Deployment'
import VersionControlle from './VersionControlle'
const Skills = () => {
    return (
        <section className="S section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>
            <div className="skills__container container grid">
                <FrontEnd />
                <BackEnd />
                <Deployment/>
                                <VersionControlle/>


            </div>
        </section>
    )
}

export default Skills
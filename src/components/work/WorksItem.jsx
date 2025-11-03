import React, { useState } from 'react'

const WorksItem = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title"> {item.title} </h3>
            {item.category === "'web & Mobile" ?

                <div className="work__links">
                   <a href={item.link} className="work__button" target="_blank">

                </a>
                </div>
                :
                (item.id === 1 || item.id === 2 || item.id === 3) ?
                    <span className="work__button" onClick={() => toggleTab(1)}>
                        More Details
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </span>
                    :
                    <a href={item.link} className="work__button" target="_blank"> More Details
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>

            }

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">{item.title}</h3>
                    <p className="services__modal-description" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WorksItem

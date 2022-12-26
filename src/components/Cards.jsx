import React from "react"

function Cards() {
    return (
        <section className="cards-section">

            <div className="cards card-one">
                <img src="src/images/katie-zaferes.svg" alt="" className="cards--image"/>
                <div className="cards--stats">
                    <img src="src/images/star.svg" alt="" className="cards--star" />
                    <span className="cards--text cards--rating">5.0</span>
                    <span className="cards--gray">(6)</span>
                    <span className="cards--gray"> • USA</span>
                </div>
                <p className="cards--text">Life lessons with Katie Zaferes</p>
                <p><span className="cards--bold">From $136</span><span className="cards--text"> / person</span></p>
            </div>

            <div className="cards card-two">
                <img src="src/images/wedding-dress.svg" alt="" className="cards--image"/>
                <div className="cards--stats">
                    <img src="src/images/star.svg" alt="" className="cards--star" />
                    <span className="cards--text cards--rating">5.0</span>
                    <span className="cards--gray">(6)</span>
                    <span className="cards--gray"> • USA</span>
                </div>
                <p className="cards--text">Life lessons with Katie Zaferes</p>
                <p><span className="cards--bold">From $136</span><span className="cards--text"> / person</span></p>
            </div>

            <div className="cards card-three">
                <img src="src/images/mountain-bike1.svg" alt="" className="cards--image"/>
                <div className="cards--stats">
                    <img src="src/images/star.svg" alt="" className="cards--star" />
                    <span className="cards--text cards--rating">5.0</span>
                    <span className="cards--gray">(6)</span>
                    <span className="cards--gray"> • USA</span>
                </div>
                <p className="cards--text">Life lessons with Katie Zaferes</p>
                <p><span className="cards--bold">From $136</span><span className="cards--text"> / person</span></p>
            </div>

        </section>
    )
}

export default Cards
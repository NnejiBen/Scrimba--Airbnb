import React from "react"

function Cards() {
    return (
        <section className="cards-section">
            <div className="cards card-one">
                <img src="src/images/katie-zaferes.svg" alt="" />
                <div className="cards-stats">
                    <img src="src/images/star.svg" alt="" />
                    <span>5.0</span>
                    <span>(6)</span>
                    <span>• USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p>From $136 / person</p>
            </div>

            <div className="cards card-two">
                <img src="src/images/wedding-dress.svg" alt="" />
                <div className="cards-stats">
                    <img src="src/images/star.svg" alt="" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p></p>
                <p></p>
            </div>

            <div className="cards card-three">
                <img src="src/images/mountain-bike1.svg" alt="" />
                <div className="cards-stats">
                    <img src="src/images/star.svg" alt="" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p></p>
                <p></p>
            </div>
        </section>
    )
}

export default Cards
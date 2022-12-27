import React from "react"

function Cards(props) {
    return (
        <section className="cards-section">

            <div className="card">
                <div className="cards--badge">SOLD OUT</div>
                <img src={`src/images/${props.coverImg}`} alt="" className="cards--image"/>
                <div className="cards--stats">
                    <img src="src/images/star.svg" alt="" className="cards--star" />
                    <span className="cards--text cards--rating">{props.rating}</span>
                    <span className="cards--gray">({props.reviewCount})</span>
                    <span className="cards--gray"> • {props.location}</span>
                </div>
                <p className="cards--text">{props.title}</p>
                <p><span className="cards--bold">From ${props.price}</span><span className="cards--text"> / person</span></p>
            </div>

        </section>
    )
}

export default Cards
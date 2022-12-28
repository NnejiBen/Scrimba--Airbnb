import React from "react"

function Cards(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="cards">
            {badgeText && <div className="cards--badge">{badgeText}</div>}
            <img src={props.card.coverImg} alt="" className="cards--image"/>
            <div className="cards--stats">
                <img src="https://i.postimg.cc/287Qv3Rm/star.png" alt="" className="cards--star" />
                <span className="cards--text cards--rating">{props.card.stats.rating}</span>
                <span className="cards--gray">({props.card.stats.reviewCount})</span>
                <span className="cards--gray"> • {props.card.location}</span>
            </div>
            <p className="cards--text">{props.card.title}</p>
            <p><span className="cards--bold">From ${props.card.price}</span><span className="cards--text"> / person</span></p>
        </div>
    )
}

export default Cards
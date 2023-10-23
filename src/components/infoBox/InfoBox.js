// import "./InfoBox.css"

const InfoBox = ({bgColor, title, coount, icon}) => {
    return (
        <div className={`info-box ${bgColor}`}>
            <span className="info-icon --icon-white">
                {icon}
            </span>  
            <span className="info-text">
                <p>{title}</p>
                <h4>{coount}</h4>
            </span>

        </div>
    )
}

export default InfoBox;
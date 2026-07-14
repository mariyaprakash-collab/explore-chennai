import "./template.css"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=location_on" />

function Template({image,title,overview,tips,location,opening}){
    return(
        <div className="page-template">
            <div className="template-body">
                <div className="place">
                    <div className="images">
                        <img src={image}/>
                    </div>
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className="overview">
                        <p>{overview}</p>
                    </div>
                    <div className="opening">
                        <p>Operating Hours: {opening}</p>
                    </div>
                    <div className="tips">
                        <h2>Tips</h2>
                        <div className="points">
                            <ul>
                                {tips?.map((tip, index) => (
                                    <li key={index}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="location">
                        <a 
                            href={location}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                            view on google map
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template;
import React from 'react'


function ProjectCard(props) {
    return (
        <>
        <div id="projectcard">
            <div className="card mb-4">
                <div className="row g-0">
                    <div className="col-md-4 image">
                        <img src={props.imageURL} className="img-fluid rounded-start" alt="..." style={{height:"250px", width:"400px", borderRadius:"7px"}} />
                    </div>
                    <div className="col-md-8 padding">
                        <div className="card-body">
                            <h5 className="card-title"> {props.title} </h5>
                            <p className="card-text"> {props.description} </p>
                            <a className="card-text link" href={props.gitURL} target='_blank' rel="noreferrer" ><small className="link text-body-secondary"> Click to go </small></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProjectCard

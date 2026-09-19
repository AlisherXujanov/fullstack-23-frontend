import "./style.scss"

function Title(props) {
    return (
        <div className="title-container">
            <h1>
                {props.title}
            </h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Title
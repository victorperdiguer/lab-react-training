import React from "react";

const Greetings = (props) => {
    const {lang, children} = props;
    let hello;
    switch (lang) {
        case "de":
            hello = "Hallo"
            break
        case "fr":
            hello = "Bonjour"
            break
        case "es":
            hello = "Hola"
            break
        default:
            hello = "Hello"
            break
    }
    return (
        <div className="greetings-div">
            <h2 className="greetings-text">{hello} {children}</h2>
        </div>
    )
}

export default Greetings;
function Activity({username,textcolor="green"}){
    let custom = {color : textcolor};
    return (
        <h1 style={custom}>Namaste, {username} </h1>
    )
}

export default Activity;
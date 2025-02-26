function Price({oldprice,newprice}){
    let oldstyles = {
        textDecoration : "line-through"
    }
    let newstyles = {
        fontWeight : "bold"
    }
    let styles = {
        backgroundColor : "gold",
        height : "30px",
        borderBottomLeftRadius : "18px",
        borderBottomRightRadius : "18px"
    }
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newprice}</span>
        </div>
    )
}

export default Price ;
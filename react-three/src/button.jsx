function sayHello(){
    console.log("say hello!")
}

function Button(){
    return <button onClick={sayHello}>Clickme!</button>
}

export default Button ; 
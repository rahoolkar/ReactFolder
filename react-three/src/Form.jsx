function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
    console.log(event); //event is an object and there are so many methods and properties
}

function Form (){
    return (
        <form action="/" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="enter your text here"/>
            <button>Submit</button>
        </form>
    )
}

export default Form;
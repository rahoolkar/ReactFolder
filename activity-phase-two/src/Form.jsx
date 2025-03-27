function formSubmit(event){
    event.preventDefault();
    console.log("form was submitted"); 
}


function Form() {
  return (
    <form onSubmit={formSubmit}>
      <input type="text" placeholder="enter your name" />
      <button>Submit</button>
    </form>
  );
}

export default Form;

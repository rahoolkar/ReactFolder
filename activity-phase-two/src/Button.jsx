function sayHello(event) {
  console.log("Hello");
  console.log(event);
}

function sayBye() {
  console.log("Bye");
}

function Button() {
  return (
    <>
      <button onClick={sayHello}>ClickMe!</button>
      <p onMouseOver={sayBye}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        libero! Autem pariatur facere culpa deserunt sunt quod exercitationem
        aut possimus magni. Suscipit aliquid cum iste quas alias dolorum,
        assumenda at.
      </p>
    </>
  );
}

export default Button;

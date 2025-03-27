function ActivityBox({ username, textcolor }) {
  let styles = { color: textcolor };
  return <h1 style={styles}>Hello ! {username}</h1>;
}

export default ActivityBox;

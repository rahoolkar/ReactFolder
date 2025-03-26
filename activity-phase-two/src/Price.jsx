function Price({ oldPrice, newPrice }) {
  let styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  let oldPriceStyle = { textDecoration: "line-through" };
  let newPriceStyle = { fontWeight: "bold" };
  return (
    <div style={styles}>
      <span style={oldPriceStyle}>{oldPrice}</span>&nbsp;&nbsp;&nbsp;
      <span style={newPriceStyle}>{newPrice}</span>
    </div>
  );
}

export default Price;

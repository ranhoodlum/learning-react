function Button({
  color = "green",
  fontSize = 12,
  text = "Click me",
  handleClick,
}) {
  const style = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button style={style} onClick={handleClick}>
      {" "}
      {text}{" "}
    </button>
  );
}

export { Button };

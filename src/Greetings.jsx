function Greetings() {
  const date = new Date();
  const currentTime = date.getHours();
  // console.log(currentTime)

  let greeting;
  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "yellow";
  }
  return(
    <>
    <h1>{greeting}</h1>
    </>
  )
}

export default Greetings;

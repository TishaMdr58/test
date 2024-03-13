

function Name() {

    const name ="Tisha"
    const surname = "Manandhar"
    // const num = "8"
  
    return (
      <>
        <div>
          <h1>Hello {name + " " +surname}</h1>
          <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
        </div>
      </>
    )
  }

  export default Name;
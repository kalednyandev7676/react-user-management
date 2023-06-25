import React from "react";

export default function Test() {
  const [messageValidity, setMaessage] = React.useState({
    message: "hi",
    price: 0,
  });
  // const [price, setPrice] = React.useState({message: '', price: 0});

  function messageChangeHandler(event) {
    //   setMaessage(...messageValidity, { message: event.target.value } );
    const value = event.target.value;
    //  if (value.trim().length < 3) {
    setMaessage((prevValue) => {
      return { ...prevValue, message: event.target.value };
    });
    //  }
  }

  function priceChangeHandler(event) {
    const value = event.target.value;
    //  if (value.trim().length < 3) {
    setMaessage((prevValue) => {
      return { ...prevValue, price: event.target.value };
    });
    //  }
    //   setMaessage(...messageValidity, { price: event.target.value } );
    console.log(messageValidity);
  }

  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={messageChangeHandler} />
      <p>Invalid message</p>
      <label>Price</label>
      <input type="text" onChange={priceChangeHandler} />
      {messageValidity.message} {messageValidity.price}
    </form>
  );
}

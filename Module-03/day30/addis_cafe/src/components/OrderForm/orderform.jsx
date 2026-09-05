import { useContext, useState } from "react";

import { CartContext } from "../cart/CartProvider";

import "./orderform.css";

function OrderForm() {
  const {
    items,
    total,
    dispatch
  } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Order submitted successfully!");

    dispatch({
      type: "CLEAR"
    });
  }

  const validPhone =
    /^(?:\+251|0)9\d{8}$/.test(form.phone);

  return (
    <div className="order-form">
      <h2>Checkout</h2>

      <h3>
        Items in cart: {items.length}
      </h3>

      <h3>
        Total: {total} ETB
      </h3>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Phone</label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09... or +2519..."
          required
        />

        {form.phone && !validPhone && (
          <p className="error">
            Use 09... or +2519...
          </p>
        )}

        <label>Area</label>

        <input
          name="area"
          value={form.area}
          onChange={handleChange}
          placeholder="Enter your area"
          required
        />

        <button
          type="submit"
          disabled={!validPhone || items.length === 0}
        >
          Pay with TeleBirr
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
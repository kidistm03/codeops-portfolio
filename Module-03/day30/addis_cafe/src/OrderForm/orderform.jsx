import { useState } from "react";
import "./orderform.css";

function OrderForm() {
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

    alert("Delivery information submitted");
  }

  const validPhone =
    /^(?:\+251|0)9\d{8}$/.test(form.phone);

  return (
    <div className="order-form">

      <h2>Delivery Information</h2>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Phone</label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09... or +2519..."
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
        />

        <button
          type="submit"
          disabled={!validPhone}
        >
          Pay with TeleBirr
        </button>

      </form>

    </div>
  );
}

export default OrderForm;
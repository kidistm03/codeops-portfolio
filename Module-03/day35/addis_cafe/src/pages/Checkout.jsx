import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import { useAuth } from "../auth/AuthContext";
import { validateCheckout } from "../checkout/validate";
import "./Checkout.css";

const INITIAL = { name: "", phone: "", address: "", notes: "" };

function Checkout() {
  const { items, total, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    ...INITIAL,
    name: user?.name || "",
  });
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateCheckout(values);
  const isValid = Object.keys(errors).length === 0;

  // Show an error if the field was touched OR the user tried to submit
  function showError(field) {
    return (touched[field] || submitAttempted) && errors[field];
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitAttempted(true);
    // Mark every field as touched so all errors appear
    setTouched({ name: true, phone: true, address: true, notes: true });

    if (!isValid) return;

    setSubmitting(true);

    // Simulate a short network delay
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="checkout-page">
        <h1>Checkout</h1>
        <div className="checkout-empty">
          <p>Your cart is empty – nothing to check out.</p>
          <Link to="/menu" className="checkout-link">
            Browse the menu →
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <h1>Order placed! 🎉</h1>
          <p>
            Thank you, <strong>{values.name}</strong>. Your order is on its way
            to {values.address}.
          </p>
          {values.phone && (
            <p className="success-phone">We will call {values.phone} if needed.</p>
          )}
          <button
            type="button"
            className="checkout-submit"
            onClick={() => navigate("/menu")}
          >
            Back to menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p className="checkout-summary">
        Order total: <strong>{total} ETB</strong> · {items.length} item
        {items.length !== 1 ? "s" : ""}
      </p>

      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        {/* Form-level summary when submit was attempted and still invalid */}
        {submitAttempted && !isValid && (
          <div className="form-error-summary" role="alert">
            Please fix the errors below before placing your order.
          </div>
        )}

        <div className="field">
          <label htmlFor="name">
            Full name <span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="name"
            aria-invalid={showError("name") ? "true" : "false"}
            aria-describedby={showError("name") ? "name-error" : undefined}
          />
          {showError("name") && (
            <span id="name-error" className="field-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="0911234567"
            autoComplete="tel"
            aria-invalid={showError("phone") ? "true" : "false"}
            aria-describedby={showError("phone") ? "phone-error" : undefined}
          />
          {showError("phone") && (
            <span id="phone-error" className="field-error">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="address">
            Delivery address <span className="required">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Bole, near Edna Mall"
            autoComplete="street-address"
            aria-invalid={showError("address") ? "true" : "false"}
            aria-describedby={showError("address") ? "address-error" : undefined}
          />
          {showError("address") && (
            <span id="address-error" className="field-error">
              {errors.address}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="notes">Order notes (optional)</label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Extra injera, no onions"
            aria-invalid={showError("notes") ? "true" : "false"}
            aria-describedby={showError("notes") ? "notes-error" : undefined}
          />
          {showError("notes") && (
            <span id="notes-error" className="field-error">
              {errors.notes}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="checkout-submit"
          disabled={submitting}
        >
          {submitting ? "Placing order..." : "Place order"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;

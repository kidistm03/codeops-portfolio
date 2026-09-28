/**
 Returns an object of field → error message.
 Empty object means the form is valid.
 */
export function validateCheckout(values) {
  const errors = {};

  // Name
  const name = (values.name || "").trim();
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (name.length > 60) {
    errors.name = "Name is too long (max 60 characters)";
  }

  // Phone – Ethiopian mobile: optional leading 0, then 9 digits starting with 9
  const phone = (values.phone || "").replace(/[\s\-]/g, "");
  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!/^(0?9\d{8})$/.test(phone)) {
    errors.phone = "Enter a valid Ethiopian mobile number (e.g. 0911234567)";
  }

  // Address
  const address = (values.address || "").trim();
  if (!address) {
    errors.address = "Delivery address is required";
  } else if (address.length < 5) {
    errors.address = "Please enter a more complete address (at least 5 characters)";
  } else if (address.length > 120) {
    errors.address = "Address is too long (max 120 characters)";
  }

  // Notes – optional, but limit length if provided
  const notes = (values.notes || "").trim();
  if (notes.length > 200) {
    errors.notes = "Notes must be under 200 characters";
  }

  return errors;
}

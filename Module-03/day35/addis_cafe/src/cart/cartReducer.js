/**
pure function that updates the order list.
ADD, REMOVE, UPDATE_QTY, CLEAR
 */
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "UPDATE_QTY": {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        return state.filter((item) => item.id !== id);
      }

      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

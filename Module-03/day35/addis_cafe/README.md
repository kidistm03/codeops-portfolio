# Addis Eats

A food-ordering frontend for Addis Ababa. Browse a menu loaded from an API, filter by category, open any dish on its own page, build an order, and check out through a validated form.

## How to run

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Screens

| Screen   | Route        | What it does                              |
|----------|--------------|-------------------------------------------|
| Home     | `/`          | Today's specials, link into the menu      |
| Menu     | `/menu`      | Fetched dishes, category filter in the URL|
| Dish     | `/menu/:id`  | One dish, with an add-to-order action     |
| Cart     | `/cart`      | Order lines and the running ETB total (lazy)|
| Checkout | `/checkout`  | Validated form, guarded by sign-in (lazy) |
| Sign in  | `/signin`    | Simple name-based sign-in                 |
| Not found| `*`          | Useful message and a way back             |

## Required features (Days 26–34)

| Topic | Where it appears |
|-------|------------------|
| Composed components, props, keys, conditional rendering | `DishCard`, `CategoryBar`, all pages |
| State and events, controlled form | Checkout form (`values` + `onChange`) |
| Data fetched in an effect, with cleanup on unmount | `hooks/useFetch.js` (AbortController) |
| Custom hook + context / store | `useFetch`, `CartContext` (reducer), `AuthContext` |
| Nested routes, dynamic route, guarded route | Layout + `/menu/:id` + `RequireAuth` |
| **Validation** | `checkout/validate.js` + touched tracking in Checkout |
| **Error boundary** | `ErrorBoundary` around Layout content + around Checkout |
| **Lazy-loaded route** | Cart and Checkout loaded with `React.lazy` + `Suspense` |

## Validation details

- Name: required, 2–60 characters  
- Phone: required, Ethiopian mobile format (e.g. `0911234567`)  
- Address: required, 5–120 characters  
- Notes: optional, max 200 characters  
- Errors show after the field is blurred **or** after submit is attempted  
- Form-level summary appears when submit fails validation  

## Error boundary

- Wraps every page via `Layout` (header/footer stay visible if a page crashes)  
- Also wraps the lazy Checkout route specifically  
- Shows a friendly message + “Try again” + link to menu  

## Lazy loading

```js
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
```

Suspense shows a spinner while the chunk downloads.

## Project structure (by feature)

```
src/
  api/          – fetch helpers
  hooks/        – useFetch (effect + cleanup)
  ui/           – Spinner, ErrorMessage
  cart/         – CartContext + reducer
  auth/         – AuthContext + RequireAuth
  menu/         – CategoryBar, DishCard
  checkout/     – validate.js
  pages/        – one file per screen
  components/
    layout/     – Header, Footer, Layout
    ErrorBoundary.jsx + .css
```

## Tech

- React 19 + Vite  
- React Router 7  
- Plain CSS (no UI library)  

import "./App.css";

import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import OrderForm from "./OrderForm/orderform";

function App() {
  return (
    <div className="app">

      <Header />
      <Main />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
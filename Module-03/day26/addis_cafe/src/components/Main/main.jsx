import "./main.css";

import Menu from "./Menu/menu";
import Sidebar from "./Sidebar/sidebar";

function Main() {
  return (
    <main className="main">
      <Sidebar />
      <Menu />
    </main>
  );
}

export default Main;
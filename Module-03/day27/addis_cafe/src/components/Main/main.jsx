import "./main.css";

import Sidebar from "./Sidebar/sidebar";
import Menu from "./Menu/menu";

function Main() {
  return (
    <main className="main">
      <Sidebar />

      <Menu category="All" />
    </main>
  );
}

export default Main;
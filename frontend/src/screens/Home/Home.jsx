import React, { useState } from "react";
//?components import
import Header from "../../components/Header/Header";
import SidebarHeader from "../../components/Sidebar/SidebarHeader.jsx";
import Backdrop from "../../components/Backdrop/Backdrop.jsx";
import Footer from "../../components/Footer/Footer.jsx";
//*import style css
import "./Home.css";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const handleHide = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <>
      {visible && <Backdrop click={handleHide} />}
      <Header show={handleHide} />
      <SidebarHeader visible={visible} />
      <main className="_main">
        <p>content</p>
      </main>
      <Footer />
    </>
  );
};
export default Home;

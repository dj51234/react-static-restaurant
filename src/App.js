import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Awards,
  Specials,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Specials />
    <Chef />
    <Intro />
    <Awards />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Video,
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
    <Video />
    <Awards />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

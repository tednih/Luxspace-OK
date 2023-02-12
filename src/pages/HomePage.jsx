import React from "react";
import Clients from "../parts/Clients";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/Sitemap";

import Document from "../parts/Document";

const HomePage = () => {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Document>
  );
};

export default HomePage;

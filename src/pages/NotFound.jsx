import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

import Sitemap from "../parts/Sitemap";
import ErrorMessage from "../parts/ErrorMessage";

import Document from "../parts/Document";

const NotFound = () => {
  return (
    <Document>
      <Header theme="black" />
      <ErrorMessage />
      <Sitemap />
      <Footer />
    </Document>
  );
};

export default NotFound;

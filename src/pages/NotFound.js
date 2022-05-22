import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/HomePage/Sitemap";
import PageError from "parts/PageError";
import React from "react";

function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageError/>
      <Sitemap />
      <Footer />
    </>
  );
}

export default NotFound;

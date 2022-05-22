import Footer from "parts/Footer";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Sitemap from "parts/HomePage/Sitemap";
import React from "react";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";

function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          {
            url: "/",
            name: "Home",
          },
          {
            url: "categories/988",
            name: "Office Room",
          },
          {
            url: "categories/988/products/788",
            name: "Details",
          },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
export default Details;

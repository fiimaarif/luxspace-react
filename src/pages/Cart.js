import Footer from "parts/Footer";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import React from "react";
import Sitemap from "parts/HomePage/Sitemap";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
// import ProductDetails from "parts/Details/ProductDetails";
// import Suggestion from "parts/Details/Suggestion";

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
            url: "cart",
            name: "Shopping Cart",
          },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      {/* <ProductDetails />
      <Suggestion /> */}
      <Sitemap />
      <Footer />
    </>
  );
}
export default Details;

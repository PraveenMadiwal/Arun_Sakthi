import About from "./About";
import Tools from "./Tools";
import Products from "./Products";

function HomeSections() {
  return (
    <div>

      {/* HOME HERO CAN STAY IN Home.jsx */}

      {/* SECTIONS (ONE PAGE SCROLL LIKE FLIPKART) */}
      <section id="products">
        <Products />
      </section>

      <section id="tools">
        <Tools />
      </section>

      <section id="about">
        <About />
      </section>



    </div>
  );
}

export default HomeSections;
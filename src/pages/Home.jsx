import { useEffect, useState } from "react";
import API from "../services/api";
import HomeSections from "./HomeSection";

function Home() {

  const [launchProduct, setLaunchProduct] = useState(null);

  useEffect(() => {

    const fetchLaunchProduct = async () => {
      try {
        const res = await API.get("/launch-product");

        setLaunchProduct(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchLaunchProduct();

  }, []);

  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section className="relative h-screen overflow-hidden">

        {/* VIDEO */}
        {launchProduct?.videoUrl && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src={launchProduct.videoUrl}
              type="video/mp4"
            />
          </video>
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* CONTENT */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">

          <div>

            <h1
              className="text-4xl md:text-7xl font-extrabold animate-pulse"
              style={{
                color: launchProduct?.textColor || "#ffffff",
              }}
            >
              {launchProduct?.productName || "Saga Manufacturers"}
            </h1>

            <p className="text-white text-lg md:text-2xl mt-4">
              Newly Launched Product
            </p>

            <button className="mt-8 bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-lg transition">
              Explore Now
            </button>

          </div>

        </div>

      </section>

      {/* OTHER SECTIONS */}
      <HomeSections />
    </>
  );
}

export default Home;
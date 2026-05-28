import HomeSections from "./HomeSection";

function Home() {
  return (
    <>
      {/* HERO SECTION (YOUR ORIGINAL CODE - NOT CHANGED) */}
      <section className="min-h-screen bg-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              Welcome to Saga Manufacturers & Tools
            </h1>

            <p className="text-gray-600 text-lg">
              Industrial quality tools and machinery solutions.
            </p>

            <button className="bg-green-900 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
              Explore Products
            </button>
          </div>

          <div>
            <img
              src="https://6a15842d086634e3699ab7a6.imgix.net/arun/360_F_685955602_9JHf4C0oxI1onU7kazFxapzVIsfkMmrv.jpg"
              alt=""
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* NEW: FULL PAGE SECTIONS */}
      <HomeSections />
    </>
  );
}

export default Home;
export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Services</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="p-5 border rounded shadow">
          <h2 className="font-bold">Manufacturing</h2>
          <p>Industrial tools manufacturing services.</p>
        </div>

        <div className="p-5 border rounded shadow">
          <h2 className="font-bold">Designing</h2>
          <p>Custom product designing solutions.</p>
        </div>

      </div>
    </div>
  );
}
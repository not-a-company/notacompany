export default function CreationsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b-2 border-black p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">notacompany.com</h1>
          <nav className="flex gap-6">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/clients" className="hover:underline">
              Clients
            </a>
            <a href="/creations" className="hover:underline font-bold">
              Creations
            </a>
            <a href="/opportunities" className="hover:underline">
              Opportunities
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Page Title */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Creations</h2>
          <p className="text-lg leading-relaxed">
            We have one concurrent active creation to stretch our muscles and practice what we preach.
          </p>
        </section>

        {/* Active Creations */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 border-b border-black pb-2">
            Active Creations (one active at a time):
          </h3>
          <div className="border-2 border-black p-6 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-2xl">Steps.org</h4>
              <span className="bg-black text-white px-3 py-1 text-sm">ACTIVE</span>
            </div>
            <p className="text-lg mb-4">
              Exercise Accountability for GAD mitigation.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Contact:</strong>{" "}
                <a href="mailto:hey@steps.org" className="underline">
                  hey@steps.org
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Past Creations */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 border-b border-black pb-2">Past Creations:</h3>
          <div className="space-y-6">
            {/* Acquired Companies */}
            <div>
              <h4 className="font-bold text-xl mb-4">Acquired:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-black p-4">
                  <h5 className="font-bold text-lg mb-2">Polkastarter</h5>
                  <p className="text-sm mb-2">Decentralized fundraising platform</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-xs">ACQUIRED</span>
                </div>
                <div className="border border-black p-4">
                  <h5 className="font-bold text-lg mb-2">Coinvision</h5>
                  <p className="text-sm mb-2">Blockchain due-dilligence publication</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-xs">ACQUIRED</span>
                </div>
                <div className="border border-black p-4">
                  <h5 className="font-bold text-lg mb-2">Codeplace</h5>
                  <p className="text-sm mb-2">Ruby education ecosystem</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-xs">ACQUIRED</span>
                </div>
              </div>
            </div>

            {/* Deceased Companies */}
            <div>
              <h4 className="font-bold text-xl mb-4">Deceased:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-black p-4 bg-gray-100">
                  <h5 className="font-bold text-lg mb-2">Mahalo</h5>
                  <p className="text-sm mb-2">P2P Non-Profit Fundraising Infra</p>
                  <span className="bg-gray-300 text-gray-700 px-2 py-1 text-xs">DECEASED</span>
                </div>
                <div className="border border-black p-4 bg-gray-100">
                  <h5 className="font-bold text-lg mb-2">Songvice</h5>
                  <p className="text-sm mb-2">Music Producer Advisory Market</p>
                  <span className="bg-gray-300 text-gray-700 px-2 py-1 text-xs">DECEASED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Our Approach</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              We maintain one active creation at a time to ensure focused execution and to continuously practice the
              consumer product development we advise our clients on.
            </p>
            <div>
              <h4 className="font-bold mb-2">Why we create:</h4>
              <ul className="space-y-1 ml-4">
                <li>- Stay current with consumer product development challenges</li>
                <li>- Test new technologies and approaches in real-world scenarios</li>
                <li>- Maintain our edge in understanding user behavior and market dynamics</li>
                <li>- Practice what we preach to our advisory clients</li>
              </ul>
            </div>
            <p>
              Our track record includes both successful exits and valuable learning experiences from projects that
              didn't make it. Each creation informs our advisory work and keeps us grounded in the realities of building
              consumer products.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Interested in Our Creations?</h3>
          <p className="text-lg leading-relaxed">
            Questions about our current or past creations?{" "}
            <a href="mailto:hey@notacompany.com" className="underline">
              hey@notacompany.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-16 p-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 notacompany.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-2 border-black p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h1 className="text-lg sm:text-xl font-bold">notacompany.com</h1>

            <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/services" className="hover:underline">
                Services
              </a>
              <a href="/clients" className="hover:underline">
                Clients
              </a>
              <a href="/creations" className="hover:underline">
                Creations
              </a>
              <a href="/opportunities" className="hover:underline">
                Opportunities
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight text-balance">
            Notacompany provides B2C product advisory & interim technical talent acquisition for the world's most
            ambitious consumer product companies.
          </h2>
        </section>

        {/* Services Overview */}
        <section className="mb-8 md:mb-12">
          <h3 className="text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2">
            Consumer Experience Focused Services:
          </h3>
          <ul className="space-y-3 text-base sm:text-lg">
            <li>- Interim Technical Talent Acquisition</li>
            <li>- Consumer Product Advisory</li>
          </ul>
        </section>

        {/* Quick Links */}
        <section className="mb-8 md:mb-12">
          <h3 className="text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2">Navigate:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg">
            <div>
              <h4 className="font-bold mb-3">Our Work:</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="hover:underline">
                    → Services
                  </a>
                </li>
                <li>
                  <a href="/clients" className="hover:underline">
                    → Past Service Clients
                  </a>
                </li>
                <li>
                  <a href="/creations" className="hover:underline">
                    → Our Creations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Join Us:</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/opportunities" className="hover:underline">
                    → Opportunities
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2">Contact:</h3>
          <p className="text-base sm:text-lg">
            For inquiries:{" "}
            <a href="mailto:hello@notacompany.com" className="underline break-all">
              hello@notacompany.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-12 md:mt-16 p-4 md:p-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2024 notacompany.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

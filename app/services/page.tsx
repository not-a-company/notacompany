export default function ServicesPage() {
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
            <a href="/services" className="hover:underline font-bold">
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
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Page Title */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-lg leading-relaxed">
            Consumer Experience Focused Services for ambitious product companies.
          </p>
        </section>

        {/* Service 1: Interim Technical Talent Acquisition */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Interim Technical Talent Acquisition</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              We source and place exceptional technical talent for consumer product companies on an interim basis. Our
              focus is on finding professionals who understand consumer behavior and can build products that users
              actually want to use.
            </p>
            <div>
              <h4 className="font-bold mb-2">What we do:</h4>
              <ul className="space-y-1 ml-4">
                <li>- Source senior technical talent for 3-12 month engagements</li>
                <li>- Focus on consumer-facing product experience</li>
                <li>- Rapid deployment (typically 2-4 weeks from brief to start)</li>
                <li>- Ongoing performance management and support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Typical roles:</h4>
              <ul className="space-y-1 ml-4">
                <li>- Interim CTOs and VP Engineering</li>
                <li>- Senior Full-Stack Engineers</li>
                <li>- Mobile App Developers (iOS/Android)</li>
                <li>- Product Engineers with consumer focus</li>
                <li>- DevOps and Infrastructure specialists</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service 2: Consumer Product Advisory */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Consumer Product Advisory</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Strategic guidance for consumer product companies looking to build products that users love and businesses
              that scale. We work with founders and product teams to navigate the complexities of consumer behavior and
              market dynamics.
            </p>
            <div>
              <h4 className="font-bold mb-2">What we do:</h4>
              <ul className="space-y-1 ml-4">
                <li>- Product strategy and roadmap development</li>
                <li>- User experience and interface design guidance</li>
                <li>- Technical architecture review and recommendations</li>
                <li>- Go-to-market strategy for consumer products</li>
                <li>- Team structure and hiring strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Engagement types:</h4>
              <ul className="space-y-1 ml-4">
                <li>- Strategic workshops and planning sessions</li>
                <li>- Ongoing advisory retainers</li>
                <li>- Product audits and recommendations</li>
                <li>- Due diligence for investors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Why Choose Notacompany</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              We practice what we preach. Our team has built, scaled, and exited consumer product companies. We
              understand the unique challenges of building products that millions of people use every day.
            </p>
            <ul className="space-y-2 ml-4">
              <li>- Deep consumer product experience across multiple verticals</li>
              <li>- Proven track record with successful exits and acquisitions</li>
              <li>- Network of exceptional technical talent</li>
              <li>- Focus on practical, actionable advice</li>
              <li>- No fluff, just results</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Get Started</h3>
          <p className="text-lg leading-relaxed">
            Ready to discuss your project?{" "}
            <a href="mailto:hello@notacompany.com" className="underline">
              hello@notacompany.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-16 p-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 notacompany.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

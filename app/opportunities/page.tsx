export default function OpportunitiesPage() {
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
            <a href="/creations" className="hover:underline">
              Creations
            </a>
            <a href="/opportunities" className="hover:underline font-bold">
              Opportunities
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Page Title */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Opportunities</h2>
          <p className="text-lg leading-relaxed">
            Join a team that builds and advises on consumer products that millions of people use.
          </p>
        </section>

        {/* Company Culture */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">What We're About</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              We're not a typical company. We practice what we preach by building our own consumer products while
              advising the world's most ambitious consumer product companies.
            </p>
            <div>
              <h4 className="font-bold mb-2">Our values:</h4>
              <ul className="space-y-1 ml-4">
                <li>- No fluff, just results</li>
                <li>- Consumer experience above all else</li>
                <li>- Learn by doing, not just talking</li>
                <li>- Quality over quantity in everything we do</li>
                <li>- Direct communication and honest feedback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Current Openings</h3>
          <div className="space-y-6">
            <div className="border border-black p-6">
              <h4 className="font-bold text-xl mb-2">Senior Product Engineer</h4>
              <p className="text-sm mb-4">Full-time • Remote • Consumer Products</p>
              <div className="space-y-2 mb-4">
                <p>
                  <strong>What you'll do:</strong> Build consumer-facing products for our active creation while
                  contributing to client advisory work.
                </p>
                <p>
                  <strong>What we need:</strong> 5+ years building consumer products, strong full-stack skills,
                  obsession with user experience.
                </p>
              </div>
              <a href="mailto:opportunities@notacompany.com?subject=Senior Product Engineer" className="underline">
                Apply →
              </a>
            </div>

            <div className="border border-black p-6">
              <h4 className="font-bold text-xl mb-2">Consumer Product Strategist</h4>
              <p className="text-sm mb-4">Full-time • Remote • Strategy & Advisory</p>
              <div className="space-y-2 mb-4">
                <p>
                  <strong>What you'll do:</strong> Lead strategic initiatives for client advisory engagements and
                  contribute to our internal product strategy.
                </p>
                <p>
                  <strong>What we need:</strong> 7+ years in consumer product strategy, experience scaling products to
                  millions of users, analytical mindset.
                </p>
              </div>
              <a href="mailto:opportunities@notacompany.com?subject=Consumer Product Strategist" className="underline">
                Apply →
              </a>
            </div>

            <div className="border border-black p-6">
              <h4 className="font-bold text-xl mb-2">Technical Talent Partner</h4>
              <p className="text-sm mb-4">Full-time • Remote • Talent Acquisition</p>
              <div className="space-y-2 mb-4">
                <p>
                  <strong>What you'll do:</strong> Source and place exceptional technical talent for our client
                  engagements, build our talent network.
                </p>
                <p>
                  <strong>What we need:</strong> 5+ years in technical recruiting, deep understanding of consumer
                  product engineering roles, strong network.
                </p>
              </div>
              <a href="mailto:opportunities@notacompany.com?subject=Technical Talent Partner" className="underline">
                Apply →
              </a>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">What We Offer</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <ul className="space-y-2 ml-4">
              <li>- Competitive salary and equity in our creations</li>
              <li>- Work directly with founders and product leaders at top consumer companies</li>
              <li>- Learn from building and scaling real consumer products</li>
              <li>- Remote-first culture with flexible working arrangements</li>
              <li>- Professional development budget for conferences and learning</li>
              <li>- Health, dental, and vision insurance</li>
              <li>- Unlimited PTO (that we actually encourage you to use)</li>
            </ul>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Application Process</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <ol className="space-y-2 ml-4">
              <li>1. Email us with your background and why you're interested</li>
              <li>2. Initial conversation with our team (30 minutes)</li>
              <li>3. Technical/strategic discussion relevant to the role (1 hour)</li>
              <li>4. Meet the team and discuss culture fit (45 minutes)</li>
              <li>5. Reference checks and offer</li>
            </ol>
            <p>
              <strong>Timeline:</strong> We move fast. Expect to complete the process within 1-2 weeks of your initial
              application.
            </p>
          </div>
        </section>

        {/* Not Seeing a Fit */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Don't See a Perfect Fit?</h3>
          <p className="text-lg leading-relaxed">
            We're always interested in talking to exceptional people who share our values, even if we don't have a
            specific opening. Send us a note about what you're looking for.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Get in Touch</h3>
          <p className="text-lg leading-relaxed">
            Ready to join us?{" "}
            <a href="mailto:opportunities@notacompany.com" className="underline">
              opportunities@notacompany.com
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

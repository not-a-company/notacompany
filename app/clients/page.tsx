export default function ClientsPage() {
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
            <a href="/clients" className="hover:underline font-bold">
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
          <h2 className="text-3xl font-bold mb-4">Clients</h2>
          <p className="text-lg leading-relaxed">
            Past service clients who have trusted us with their consumer product challenges.
          </p>
        </section>

        {/* Past Service Clients */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 border-b border-black pb-2">Past Service Clients:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Acreditar</h4>
              <p className="text-sm">Portugal's largest non-profit</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">xMoney</h4>
              <p className="text-sm">Digital payment on & off ramp</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Talent Protocol</h4>
              <p className="text-sm">Decentralized Data Infrastructure</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Bet Protocol</h4>
              <p className="text-sm">Decentralized betting ecosystem</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Lime</h4>
              <p className="text-sm">Mobility and transportation</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Parfois</h4>
              <p className="text-sm">Fashion and retail</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Coflyt</h4>
              <p className="text-sm">Private Aviation</p>
            </div>
            <div className="border border-black p-4">
              <h4 className="font-bold text-lg mb-2">Fisacar</h4>
              <p className="text-sm">Automotive services</p>
            </div>
          </div>
        </section>

        {/* What We Delivered */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">What We Delivered</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Across these engagements, we have provided strategic guidance, technical leadership, and interim talent
              placement to help these companies scale their consumer products.
            </p>
            <div>
              <h4 className="font-bold mb-2">Common deliverables:</h4>
              <ul className="space-y-1 ml-4">
                <li>- Interim technical leadership (CTO, VP Engineering roles)</li>
                <li>- Product strategy and roadmap development</li>
                <li>- Technical architecture review and optimization</li>
                <li>- Team scaling and hiring strategy</li>
                <li>- Consumer experience optimization</li>
                <li>- Go-to-market technical execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Client Feedback</h3>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-black pl-4 italic text-lg">
              "Tiago has a no nonsense and no bullshit attitude. Tiago gets stuff done and he is a very strong executer. Tiago also has the ability to think in network and he has shown that he can attract some of the best people work with him." Rune Theill
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4 italic text-lg">
              "Their understanding of consumer products and technical execution is unmatched." Felipe Avila da Costa
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4 italic text-lg">
              "Tiago and his teams have the rare ability to execute their visions fast, and the even more rare capacity to listen and adapt based on market feedback. " Roel Bergsma
            </blockquote>
          </div>
        </section>

        {/* Work With Us */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-black pb-2">Work With Us</h3>
          <p className="text-lg leading-relaxed">
            Ready to join our client roster?{" "}
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

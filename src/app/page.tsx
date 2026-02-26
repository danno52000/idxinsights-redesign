import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                IDX Insights
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Services
              </a>
              <a href="#approach" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Our Approach
              </a>
              <a href="#research" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Research
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-gray-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-gray-900">
                A Trusted Guide for 
                <span className="text-blue-600">Investment Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Advanced investment intelligence backed by rigorous quantitative research 
                and systematic risk management for discerning investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                  Explore Our Research
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Systematic Excellence</h3>
                  <p className="text-gray-600">Quantitative research driving superior risk-adjusted returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a complete suite of institutional-grade investment services 
              tailored to sophisticated investors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Direct Indexing</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized index solutions with sophisticated ESG integration, 
                tax-loss harvesting, and values-based customization.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Institutional Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous quantitative analysis covering factor attribution, 
                signal generation, and systematic portfolio optimization.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk-Managed Digital Assets</h3>
              <p className="text-gray-600 leading-relaxed">
                Systematic digital asset exposure with institutional-grade 
                risk controls and volatility management protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-light italic mb-6">
            "The first rule is not to lose. The second rule is not to forget the first rule."
          </blockquote>
          <cite className="text-blue-100 text-lg">— Warren Buffett</cite>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Our Approach</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">
                Tactical Excellence for 
                <span className="text-blue-600">a Dynamic Environment</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Today's markets are characterized by rising rates, heightened volatility, 
                  and unprecedented geopolitical uncertainty.
                </p>
                <p className="text-lg leading-relaxed">
                  Our systematic approach diversifies risk across multiple dimensions while 
                  maintaining rigorous downside protection through quantitative risk controls.
                </p>
                <p className="text-lg leading-relaxed">
                  Through evidence-based research and sophisticated modeling, we deliver 
                  institutional-quality solutions for navigating complex market environments.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Years of Experience</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Evidence-Based</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
                  <div className="text-gray-600 font-medium">Systematic Process</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="text-4xl font-bold text-orange-600 mb-2">#1</div>
                  <div className="text-gray-600 font-medium">Risk-Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Research Insights</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Market Intelligence & Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with institutional-grade research and tactical market insights.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Gold, Inflation, and the Global Economic Outlook
              </h3>
              <div className="aspect-video bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Featured Research Video</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Watch Full Research Series
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Investment Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join sophisticated investors who rely on our systematic approach 
            to navigate today's complex markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 bg-white text-gray-900 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Research Updates
            </button>
          </div>
          <p className="text-blue-200 text-sm">Join 500+ institutional investors receiving our insights</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">IDX Insights</div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Advancing investment intelligence through systematic research 
                and evidence-based portfolio management solutions.
              </p>
              <div className="text-xs text-gray-500 leading-relaxed">
                Investment advisory services provided by IDX Insights, LLC. 
                All content is for informational purposes only and does not constitute investment advice.
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Direct Indexing</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Institutional Research</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Digital Asset Management</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Portfolio Optimization</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Our Approach</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Research Library</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Legal Disclosures</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 IDX Insights, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

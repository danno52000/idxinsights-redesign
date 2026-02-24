import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  IDX Insights
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#philosophy" className="text-gray-600 hover:text-gray-900 transition-colors">
                Philosophy
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#research" className="text-gray-600 hover:text-gray-900 transition-colors">
                Research
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              A Unique Approach to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Quantitative Investing
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Backed by <strong>Robust Research</strong> and <strong>Empirical Evidence</strong>
            </p>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              IDX seeks to empower advisors with sophisticated tools to help their clients meet their goals 
              in a changing environment through custom, tactical strategies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Get Research Updates
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                View Our Philosophy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Warren Buffett Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic">
            "The first rule is not to lose. The second rule is not to forget the first rule."
          </blockquote>
          <cite className="mt-4 text-lg text-gray-600">— Warren Buffett</cite>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive investment solutions designed for the modern financial landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Indexing</h3>
              <p className="text-gray-600">
                We provide custom direct indices in a cost-effective manner with inclusionary and exclusionary ESG filters.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research</h3>
              <p className="text-gray-600">
                We offer institutional investors bespoke research engagements in areas such as alpha attribution, manager selection and signal generation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk-Managed Crypto</h3>
              <p className="text-gray-600">
                We have been developing and helping clients invest in risk-managed crypto exposures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-8">
              A Tactical Approach for a Changing Environment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The last few decades have witnessed an unprecedented growth in global financial markets 
                punctuated with a handful of periods of large drawdowns.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As investors look out on the horizon for the next several decades, they face a challenge 
                in navigating global financial markets that will likely be characterized by rising rates, 
                rising volatility and increased geopolitical risk.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By creating custom, tactical strategies that diversify risk across asset class, geography 
                and risk factors, we believe our toolkit can help your clients achieve their goals in a 
                risk-controlled fashion.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Evidence Based</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
                <div className="text-gray-600 font-medium">Systematic</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">#1</div>
                <div className="text-gray-600 font-medium">Risk Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="research" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Latest in our Video Series
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Gold, Inflation and the Outlook for the Global Economy
            </h3>
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-500">Video content will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Ahead with IDX Research
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get exclusive insights, market analysis, and tactical strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">IDX Insights</div>
              <p className="text-gray-400 mb-4 max-w-md">
                Direct Indexing Solutions for a Changing World
              </p>
              <div className="text-sm text-gray-500">
                The content provided on this website is informational, subject to change and is not 
                investment advice or any offer or solicitation for the purchase or sale of investments.
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Direct Indexing</li>
                <li>Research</li>
                <li>Risk-Managed Crypto</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Philosophy</li>
                <li>Research Library</li>
                <li>Legal Disclosures</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 IDX Insights, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

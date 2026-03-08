import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏡</span>
              <span className="text-white font-bold text-xl">Wooden Houses</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Crafting beautiful, sustainable wooden homes since 2008. 
              Each house is made to order using sustainably sourced timber.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/houses" className="hover:text-white transition-colors">House Catalogue</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>🏔 123 Forest Road, Alpine Valley</li>
              <li>📧 <a href="mailto:hello@woodenhouses.com" className="hover:text-white transition-colors">hello@woodenhouses.com</a></li>
              <li>📞 <a href="tel:+431234567890" className="hover:text-white transition-colors">+43 1234 567 890</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Wooden Houses. All rights reserved.</p>
          <p>Built with ❤️ and sustainably sourced code.</p>
        </div>
      </div>
    </footer>
  )
}

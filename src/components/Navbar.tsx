import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-red-900/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-red-500 text-2xl">☠</span>
            <h1 className="text-xl font-bold tracking-widest text-white uppercase" style={{fontFamily: 'Cinzel, serif'}}>
              Mortal Kombat
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <a href="#destinations" className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-red-400 transition-colors">
              Бойцы
            </a>
            <a href="#packages" className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-red-400 transition-colors">
              Реалмы
            </a>
            <a href="#about" className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-red-400 transition-colors">
              О вселенной
            </a>
            <a href="#contact" className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-red-400 transition-colors">
              Контакты
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-red-600 text-white hover:bg-red-700 rounded-none px-6 uppercase tracking-widest text-xs font-bold border border-red-500">
              Mortal Kombat!
            </Button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-red-900/50">
          <div className="px-6 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-semibold uppercase tracking-wider text-white/70 hover:text-red-400">
              Бойцы
            </a>
            <a href="#packages" className="block text-base font-semibold uppercase tracking-wider text-white/70 hover:text-red-400">
              Реалмы
            </a>
            <a href="#about" className="block text-base font-semibold uppercase tracking-wider text-white/70 hover:text-red-400">
              О вселенной
            </a>
            <a href="#contact" className="block text-base font-semibold uppercase tracking-wider text-white/70 hover:text-red-400">
              Контакты
            </a>
            <Button className="w-full bg-red-600 text-white hover:bg-red-700 rounded-none uppercase tracking-widest text-xs font-bold">
              Mortal Kombat!
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

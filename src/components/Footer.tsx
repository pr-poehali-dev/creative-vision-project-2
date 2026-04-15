import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-red-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-2xl">☠</span>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest" style={{fontFamily: 'Cinzel, serif'}}>Mortal Kombat</h3>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Неофициальный фан-сайт о легендарной серии файтингов. Mortal Kombat © NetherRealm Studios
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-red-400 transition-colors">
                <Icon name="Youtube" fallback="Globe" size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-red-400 transition-colors">
                <Icon name="Twitter" fallback="Globe" size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-red-400 transition-colors">
                <Icon name="Instagram" fallback="Globe" size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-red-400 transition-colors">
                <Icon name="Facebook" fallback="Globe" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white uppercase tracking-widest text-sm">Бойцы</h4>
            <ul className="space-y-3 text-sm text-white/40">
              {["Скорпион", "Саб-Зиро", "Рейден", "Лю Кан", "Китана"].map((name) => (
                <li key={name}>
                  <a href="#" className="hover:text-red-400 transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white uppercase tracking-widest text-sm">Реалмы</h4>
            <ul className="space-y-3 text-sm text-white/40">
              {["Земной Реалм", "Внешний Мир", "Нижний Реалм", "Небесный Реалм", "Эдения"].map((name) => (
                <li key={name}>
                  <a href="#" className="hover:text-red-400 transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white uppercase tracking-widest text-sm">Об игре</h4>
            <ul className="space-y-3 text-sm text-white/40">
              {["История серии", "Все части MK", "Fatality-гайды", "Секреты и пасхалки", "О сайте"].map((name) => (
                <li key={name}>
                  <a href="#" className="hover:text-red-400 transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-red-900/30 text-center text-sm text-white/30">
          <p>Фан-сайт. Mortal Kombat является торговой маркой Warner Bros. Entertainment. Сайт не аффилирован с NetherRealm Studios.</p>
        </div>
      </div>
    </footer>
  )
}

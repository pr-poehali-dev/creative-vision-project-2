import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Swords",
    title: "Полная история серии",
    description: "От оригинального Mortal Kombat 1992 года до MK1 2023 — вся хронология событий и персонажей",
  },
  {
    icon: "Shield",
    title: "Энциклопедия бойцов",
    description: "Подробные досье на каждого бойца: история, способности, Fatality и секретные приёмы",
  },
  {
    icon: "Globe",
    title: "Карта реалмов",
    description: "Земной Реалм, Внешний Мир, Нижний Реалм — исследуй все вселенные и их обитателей",
  },
  {
    icon: "Zap",
    title: "Гайды и советы",
    description: "Комбо, стратегии, секреты и пасхалки для всех частей игры от сообщества фанатов",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-black/50 border-y border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block border border-red-700/50 px-4 py-1 text-xs tracking-[0.3em] text-red-400 uppercase mb-6">
            О сайте
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white uppercase">
            Всё о вселенной <span className="text-red-500">Mortal Kombat</span>
          </h2>
          <p className="text-lg text-white/50 text-balance leading-relaxed">
            Крупнейший русскоязычный фан-ресурс о легендарной серии файтингов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 border border-red-900/20 hover:border-red-600/40 transition-colors group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-900/20 text-red-500 mb-2 border border-red-700/30 group-hover:bg-red-900/40 transition-colors">
                <Icon name={feature.icon} fallback="Star" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

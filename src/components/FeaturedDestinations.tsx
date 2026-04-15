import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Swords, ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const fighters = [
  {
    name: "Скорпион",
    origin: "Нижний Реалм",
    image: "/santorini-sunset.png",
    description: "Мститель из клана Ширай Рю, вернувшийся из мёртвых. Повелевает огнём преисподней.",
    role: "Ниндзя-призрак",
  },
  {
    name: "Саб-Зиро",
    origin: "Земной Реалм",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    description: "Великий мастер криомантии из клана Лин Куэй. Способен заморозить любого противника.",
    role: "Ледяной воин",
  },
  {
    name: "Лю Кан",
    origin: "Земной Реалм",
    image: "/asian-temples-thailand-bangkok-golden-temple.jpg",
    description: "Избранный чемпион Земного Реалма, хранитель турнира Мортал Комбат.",
    role: "Монах Шаолинь",
  },
  {
    name: "Шао Кан",
    origin: "Внешний Мир",
    image: "/african-safari-wildlife-elephants-sunset.jpg",
    description: "Жестокий завоеватель и правитель Внешнего Мира. Стремится поглотить все реалмы.",
    role: "Завоеватель",
  },
  {
    name: "Соня Блэйд",
    origin: "Земной Реалм",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    description: "Бесстрашный спецагент и офицер Спецсил. Мастер рукопашного боя.",
    role: "Спецагент",
  },
  {
    name: "Рейден",
    origin: "Небесный Реалм",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    description: "Бог грома и защитник Земного Реалма. Повелевает молниями и электричеством.",
    role: "Бог грома",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-block border border-red-700/50 px-4 py-1 text-xs tracking-[0.3em] text-red-400 uppercase mb-6">
            Ростер бойцов
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white uppercase">
            Легендарные <span className="text-red-500">бойцы</span>
          </h2>
          <p className="text-lg text-white/50 text-balance leading-relaxed font-medium">
            Познакомься с величайшими воинами вселенной Мортал Комбат — каждый со своей историей и смертельными приёмами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fighters.map((fighter, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-red-900/30 bg-card hover:border-red-600/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-500 cursor-pointer rounded-none"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={fighter.image || "/placeholder.svg"}
                  alt={fighter.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/80 border border-red-700/50 backdrop-blur-sm px-3 py-1.5 rounded-none">
                  <Icon name="Swords" className="h-3.5 w-3.5 text-red-400" />
                  <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">{fighter.origin}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs text-red-400 uppercase tracking-widest mb-1 font-semibold">{fighter.role}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-wide">{fighter.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{fighter.description}</p>
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-red-900/30">
                  <Button variant="ghost" size="sm" className="group/btn text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-none uppercase tracking-wider text-xs font-bold">
                    Досье бойца
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-none px-8 border-2 border-red-700/50 bg-transparent text-red-400 hover:bg-red-900/20 uppercase tracking-widest font-bold text-xs">
            Все бойцы
          </Button>
        </div>
      </div>
    </section>
  )
}

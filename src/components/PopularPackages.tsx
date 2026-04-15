import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Icon from "@/components/ui/icon"

const realms = [
  {
    title: "Земной Реалм",
    era: "Основная локация",
    population: "Защищён турниром",
    rating: "5.0",
    reviews: "999",
    image: "/european-cities-paris-eiffel-tower-romantic.jpg",
    highlights: ["Шаолиньский монастырь", "Академия Лин Куэй", "Остров Шан Цунга", "Башня Шинок"],
    status: "Под защитой",
  },
  {
    title: "Внешний Мир",
    era: "Мир завоевателей",
    population: "Правит Шао Кан",
    rating: "4.8",
    reviews: "756",
    image: "/african-safari-wildlife-elephants-sunset.jpg",
    highlights: ["Цитадель Шао Кана", "Колизей", "Тёмный Лес", "Пик Сапфира"],
    status: "Опасно",
  },
  {
    title: "Нижний Реалм",
    era: "Царство мёртвых",
    population: "Правит Куан Чи",
    rating: "4.9",
    reviews: "612",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    highlights: ["Дворец Шиннок", "Топи проклятых", "Врата Ада", "Тюрьма душ"],
    status: "Смертельно опасно",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-block border border-red-700/50 px-4 py-1 text-xs tracking-[0.3em] text-red-400 uppercase mb-6">
            Локации
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white uppercase">
            Реалмы <span className="text-red-500">вселенной</span>
          </h2>
          <p className="text-lg text-white/50 text-balance leading-relaxed">
            Шесть реалмов, связанных магией Аурорис — каждый со своими законами, обитателями и тайнами
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {realms.map((realm, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-red-900/30 bg-card hover:border-red-600/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] transition-all duration-500 rounded-none"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={realm.image || "/placeholder.svg"}
                  alt={realm.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 border border-red-700/50 backdrop-blur-sm px-3 py-1.5 rounded-none">
                  <Star className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                  <span className="text-xs font-semibold text-white">{realm.rating}</span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-red-700 text-white px-2 py-1 uppercase tracking-wider font-bold">
                    {realm.status}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">{realm.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="MapPin" fallback="Globe" size={16} />
                      <span>{realm.era}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Crown" fallback="Users" size={16} />
                      <span>{realm.population}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {realm.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-red-900/20 text-red-300 border border-red-900/40 rounded-none">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-red-900/30">
                  <div>
                    <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Отзывов</div>
                    <div className="text-xl font-bold text-red-400">{realm.reviews}+</div>
                  </div>
                  <Button className="bg-red-700 text-white hover:bg-red-600 rounded-none uppercase tracking-widest text-xs font-bold border border-red-600">
                    Исследовать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

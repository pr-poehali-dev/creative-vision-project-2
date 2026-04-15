import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        {/* Animated blood drip effect at top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70" />
      </div>

      {/* Dragon logo decoration */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-red-600/10 text-[20rem] font-bold select-none pointer-events-none" style={{fontFamily: 'serif'}}>
        ☯
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="inline-block border border-red-700/50 px-4 py-1 text-xs tracking-[0.3em] text-red-400 uppercase mb-4">
            Фан-сайт вселенной
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-balance uppercase">
            Mortal
            <span className="block text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]">Kombat</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto text-balance leading-relaxed font-medium" style={{fontFamily: 'Rajdhani, sans-serif'}}>
            Погрузись в жестокую вселенную Мортал Комбат — бойцы, реалмы, сюжет и история легендарной серии файтингов
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 rounded-none px-8 h-14 text-base group uppercase tracking-widest font-bold border border-red-500"
            >
              Смотреть бойцов
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-base border-2 border-white/20 bg-transparent text-white hover:bg-white/10 uppercase tracking-widest font-bold">
              Все реалмы
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-red-900/40">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500">30+</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">Бойцов</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500">6</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">Реалмов</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-red-500">35</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">Лет истории</div>
          </div>
        </div>
      </div>
    </section>
  )
}

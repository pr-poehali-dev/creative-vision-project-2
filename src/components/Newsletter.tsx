import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-5xl mb-4">☠</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-white uppercase">
              Вступай в <span className="text-red-500">клан</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto text-balance leading-relaxed">
              Подпишись и получай новости о новых бойцах, обновлениях вселенной и эксклюзивный контент первым
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Твой email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-none border-2 border-red-900/50 bg-black/50 text-white placeholder:text-white/30 focus:border-red-500 px-6"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 rounded-none px-6 shrink-0 border border-red-500"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>

          <p className="text-xs text-white/30">
            Подписываясь, ты вступаешь в ряды бойцов Земного Реалма. Spam'еры будут наказаны Fatality.
          </p>
        </div>
      </div>
    </section>
  )
}

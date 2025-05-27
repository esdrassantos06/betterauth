import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transforme sua ideia em realidade
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A plataforma completa para criar, gerenciar e escalar seu negócio digital. Simples, rápido e
                  eficiente.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Começar Agora</Button>
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher nossa plataforma?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos as melhores ferramentas para acelerar seu crescimento
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 mx-auto text-primary" />
                  <CardTitle>Rápido e Eficiente</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Configure tudo em minutos. Nossa plataforma é otimizada para performance máxima.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto text-primary" />
                  <CardTitle>Colaboração em Equipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Trabalhe em equipe de forma integrada com ferramentas de colaboração avançadas.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CheckCircle className="h-12 w-12 mx-auto text-primary" />
                  <CardTitle>Confiável e Seguro</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Segurança de nível empresarial com backup automático e proteção de dados.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos clientes dizem</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle>Excelente experiência</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    &quot;A plataforma transformou completamente nossa forma de trabalhar. Conseguimos aumentar nossa
                    produtividade em 300%.&quot;
                  </CardDescription>
                  <p className="mt-4 text-sm font-medium">— Maria Silva, CEO da TechStart</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle>Suporte incrível</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    &quot;O suporte é excepcional e a plataforma é muito intuitiva. Recomendo para qualquer empresa que
                    queira crescer.&quot;
                  </CardDescription>
                  <p className="mt-4 text-sm font-medium">— João Santos, Diretor de TI</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
                  Pronto para começar?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de empresas que já transformaram seus negócios
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" variant="secondary">
                  Criar Conta Grátis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
                >
                  Falar com Vendas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contato"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MinhaApp. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidade
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transforme sua ideia em realidade
                </h1>
                <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                  A plataforma completa para criar, gerenciar e escalar seu
                  negócio digital. Simples, rápido e eficiente.
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
        <section
          id="recursos"
          className="bg-muted w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Por que escolher nossa plataforma?
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos as melhores ferramentas para acelerar seu
                  crescimento
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="text-center">
                  <Zap className="text-primary mx-auto h-12 w-12" />
                  <CardTitle>Rápido e Eficiente</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Configure tudo em minutos. Nossa plataforma é otimizada para
                    performance máxima.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="text-primary mx-auto h-12 w-12" />
                  <CardTitle>Colaboração em Equipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Trabalhe em equipe de forma integrada com ferramentas de
                    colaboração avançadas.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CheckCircle className="text-primary mx-auto h-12 w-12" />
                  <CardTitle>Confiável e Seguro</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Segurança de nível empresarial com backup automático e
                    proteção de dados.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  O que nossos clientes dizem
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary h-4 w-4"
                      />
                    ))}
                  </div>
                  <CardTitle>Excelente experiência</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    &quot;A plataforma transformou completamente nossa forma de
                    trabalhar. Conseguimos aumentar nossa produtividade em
                    300%.&quot;
                  </CardDescription>
                  <p className="mt-4 text-sm font-medium">
                    — Maria Silva, CEO da TechStart
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary h-4 w-4"
                      />
                    ))}
                  </div>
                  <CardTitle>Suporte incrível</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    &quot;O suporte é excepcional e a plataforma é muito
                    intuitiva. Recomendo para qualquer empresa que queira
                    crescer.&quot;
                  </CardDescription>
                  <p className="mt-4 text-sm font-medium">
                    — João Santos, Diretor de TI
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-primary-foreground text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pronto para começar?
                </h2>
                <p className="text-primary-foreground/80 max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de empresas que já transformaram seus
                  negócios
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" variant="secondary">
                  Criar Conta Grátis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
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
        className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
      >
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} MinhaApp. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Política de Privacidade
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  );
}

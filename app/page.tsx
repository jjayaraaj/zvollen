import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import ProductsServices from './components/ProductsServices'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ProductsServices />
      <Contact />
    </main>
  )
}

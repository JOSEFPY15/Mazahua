export default function Navbar() {
  return (
    <div id="site-header" className="sticky top-0 z-30 shadow-lg">
  <header className="bg-bosque text-white">
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-3 sm:gap-4 sm:px-6 lg:px-8">
      <a href="/img/logo.png" className="shrink-0 rounded-full ring-2 ring-white/70"><img src="/img/logo.png" alt="Logo del Centro Ceremonial Mazahua" width="50" height="50" className="h-12 w-12 rounded-full object-cover" /></a>
      <h1 className="min-w-0 text-base font-bold leading-tight tracking-wide sm:text-2xl lg:text-3xl">Centro Ceremonial Mazahua</h1>
    </div>
  </header>
  <nav aria-label="Navegación principal" className="border-t border-white/15 bg-hoja text-white">
    <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 text-sm font-medium whitespace-nowrap sm:px-6 lg:flex-wrap lg:justify-center lg:overflow-visible lg:whitespace-normal lg:px-8">
      <a className="rounded-full px-3 py-2 hover:bg-white/15" href="#inicio">Inicio</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#sobre-nosotros">Sobre Nosotros</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#mision-vision">Misión y Visión</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#servicios-actividades">Servicios y actividades</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#productos">Productos</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#testimonios">Testimonios</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#galeria">Galería</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#importancia-cultural">Importancia Cultural</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#ubicacion">Ubicación</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#contacto">Contacto</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#redes">Redes Sociales</a><a className="rounded-full px-3 py-2 hover:bg-white/15" href="#privacidad">Privacidad</a>
    </div>
  </nav>
</div>
  );
}

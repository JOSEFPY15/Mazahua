export default function Inicio() {
  return (
    <section id="inicio" className="scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
      <div className="grid md:grid-cols-2">
        <a href="/img/mazahua1.jpg" className="block min-h-64 md:min-h-full"><img src="/img/mazahua1.jpg" alt="Paisaje del Centro Ceremonial Mazahua" width="600" height="500" className="h-full max-h-[500px] min-h-64 w-full object-cover" /></a>
        <div className="flex flex-col justify-center p-6 sm:p-10"><p className="mb-2 font-semibold uppercase tracking-[.2em] text-barro">Tradición · Comunidad · Naturaleza</p><h2 className="mb-4 text-3xl font-bold text-bosque sm:text-4xl">Bienvenidos</h2><p className="text-base leading-7 text-stone-600 sm:text-lg">El Centro Ceremonial Mazahua es uno de los espacios culturales más importantes del Estado de México. Se encuentra en la comunidad de Santa Ana Nichi, municipio de San Felipe del Progreso, rodeado de bosques de pino y encino. Este lugar fue creado para preservar, fortalecer y difundir la cultura, tradiciones y costumbres del pueblo mazahua.</p></div>
      </div>
    </section>
  );
}

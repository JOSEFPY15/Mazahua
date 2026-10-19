import { useState } from "react";

export default function Contacto() {
  const [enviando, setEnviando] = useState(false);
  const [estadoEnvio, setEstadoEnvio] = useState("");

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    setEnviando(true);
    setEstadoEnvio("");

    try {
      const respuesta = await fetch(formulario.action, {
        method: "POST",
        body: new FormData(formulario),
        headers: { Accept: "application/json" },
      });

      if (!respuesta.ok) throw new Error("No se pudo enviar el mensaje.");

      formulario.reset();
      setEstadoEnvio("Tu mensaje se envió correctamente.");
    } catch {
      setEstadoEnvio("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5 sm:p-9">
      <h2 className="mb-6 text-2xl font-bold text-bosque sm:text-3xl">Formulario de Contacto</h2>
      <form className="mx-auto max-w-2xl space-y-5" action="https://formspree.io/f/xnpndnwp" method="post" onSubmit={enviarFormulario}>
        <div>
          <label htmlFor="nombre" className="mb-2 block font-medium">Nombre:</label>
          <input id="nombre" name="nombre" type="text" required className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-hoja focus:ring-2 focus:ring-hoja/30" />
        </div>
        <div>
          <label htmlFor="correo" className="mb-2 block font-medium">Correo Electrónico:</label>
          <input id="correo" name="email" type="email" required className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-hoja focus:ring-2 focus:ring-hoja/30" />
        </div>
        <div>
          <label htmlFor="mensaje" className="mb-2 block font-medium">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="5" required className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-hoja focus:ring-2 focus:ring-hoja/30"></textarea>
        </div>
        <button type="submit" disabled={enviando} className="w-full rounded-xl bg-bosque px-6 py-3 font-semibold text-white transition hover:bg-hoja disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {enviando ? "Enviando..." : "Enviar mensaje"}
        </button>
        {estadoEnvio && <p role="status" aria-live="polite" className="text-sm text-stone-600">{estadoEnvio}</p>}
      </form>
    </section>
  );
}

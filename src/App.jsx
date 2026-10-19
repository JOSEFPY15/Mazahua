import Inicio from "./Components/Inicio";
import SobreNosotros from "./Components/SobreNosotros";
import MisionVision from "./Components/MisionVision";
import ServiciosActividades from "./Components/ServiciosActividades";
import Productos from "./Components/Productos";
import Testimonios from "./Components/Testimonios";
import Galeria from "./Components/Galeria";
import ImportanciaCultural from "./Components/ImportanciaCultural";
import Ubicacion from "./Components/Ubicacion";
import Contacto from "./Components/Contacto";
import Redes from "./Components/Redes";
import Privacidad from "./Components/Privacidad";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import SiteEffects from "./Components/SiteEffects";

export default function App() {
  return (
    <>
      <SiteEffects />
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Inicio />
      <SobreNosotros />
      <MisionVision />
      <ServiciosActividades />
      <Productos />
      <Video />
      <Testimonios />
      <Galeria />
      <ImportanciaCultural />
      <Ubicacion />
      <Contacto />
      <Redes />
      <Privacidad />
      </main>
      <Footer />
    </>
  );
}

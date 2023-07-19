import { Menu } from "../style/header";
import { Hero } from "../style/hero-section";
import { CarouselSection } from "../style/category-carousel/categories";
import { Banner } from "../style/banner";
import { ReleasesSection } from "../style/carousel-section/releases-section";
import { Footer } from "../style/footer";

export function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <CarouselSection title="Encontre o imóvel ideal para o seu estilo de vida!" />
      <Banner />
      <ReleasesSection title="Lançamentos que você pode se interessar!" />
      <Footer />
    </>
  );
}

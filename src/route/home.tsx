import { Menu } from "../style/header";
import { Hero } from "../style/hero-section";
import { CarouselSection } from "../style/category-carousel/categories";
import { Banner } from "../style/banner";
import { ReleasesSection } from "../style/carousel-section/releases-section";
import { Footer } from "../style/footer";
import { H3 } from "../style/typography/h3";

export function Home() {
  return (
    <>
      <H3 color="XDark">Integração criação de configuração de rotas</H3>
      <Menu />
      <Hero />
      <CarouselSection title="router" />
      <Banner />
      <ReleasesSection title="router" />
      <Footer />
    </>
  );
}

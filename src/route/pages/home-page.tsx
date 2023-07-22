import { Footer } from "../../style/footer";
import { Menu } from "../../style/header";
import { PhotoProperty } from "../../style/photo-section/property-photos";
import { PropertyCard } from "../../style/property-description/property-card";
import { Separator } from "../../style/separator/separator";

export function HomePage() {
  return (
    <>
      <Menu />

      <PhotoProperty />

      <PropertyCard />

      <Separator size="XLarge" />
      <Separator size="XLarge" />
      
      <Footer />
    </>
  );
};

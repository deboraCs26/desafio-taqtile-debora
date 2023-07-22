import { Menu } from "../../style/header";
import { PhotoProperty } from "../../style/photo-section/property-photos";
import { PropertyCard } from "../../style/property-description/property-card";

export function HomePage() {
  return (
    <>
      <Menu />

      <PhotoProperty />

      <PropertyCard />
    </>
  );
};

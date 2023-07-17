import { Menu } from "../../style/header";
import { PhotoProperty } from "../../style/photo-section/property-photos";
import { PropertyItems } from "../../style/property-items/items";

export function HomePage() {
  return (
    <>
      <Menu />

      <PhotoProperty />
    
      <PropertyItems />
    </>
  );
};

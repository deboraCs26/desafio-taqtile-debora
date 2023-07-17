import { Menu } from "../../style/header";
import { PhotoProperty } from "../../style/photo-section/property-photos";
import { Description } from "../../style/property-description/description";

export function HomePage() {
  return (
    <>
      <Menu />

      <PhotoProperty />

      <Description pool vacancy area="8x10 m²" bathrooms={2} bedrooms={2} />
    </>
  );
};

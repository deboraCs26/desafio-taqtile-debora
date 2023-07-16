import { Menu } from "../../style/header";
import { PhotoProperty } from "../../style/photo-section/property-photos";
import { Description } from "../../style/property-description.tsx/description";
import { Separator } from "../../style/separator/separator";

export function HomePages() {
  return (
    <>
      <Menu />
      
      <PhotoProperty />
      <Separator size="XLarge" />
      <Description pool vacancy area="8x10 m²" bathrooms={2} bedrooms={2}/>
    </>
  );
};

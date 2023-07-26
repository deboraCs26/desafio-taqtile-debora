// eslint-disable-next-line
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { colors } from "../colors";
import { faUtensils, faLeaf, faCar, faBell, faLightbulb, faHome, faDiceFive, faPersonSwimming, faLaugh, faDoorClosed, faBasketballBall, faPaw, faElevator, faGamepad, faTshirt } from "@fortawesome/free-solid-svg-icons";

export const itemsProperty = [
  { icon: faUtensils, text: "Cozinha americana", color: colors.cta },
  { icon: faLeaf, text: "Jardim", color: colors.cta },
  { icon: faLeaf, text: "Área de serviço", color: colors.cta },
  { icon: faCar, text: "Garagem", color: colors.cta },
  { icon: faBell, text: "Sistema de campainha", color: colors.cta },
];

export const itemsPrivate = [
  { icon: faLightbulb, text: "Mobilias", color: colors.neutral.neutralLight },
  { icon: faHome, text: "Cobertura", color: colors.neutral.neutralLight },
  { icon: faDiceFive, text: "Chuveiro a gás", color: colors.neutral.neutralLight },
  { icon: faPersonSwimming, text: "Piscina privada", color: colors.neutral.neutralLight },
];

export const itemsCondominium = [
  { icon: faPersonSwimming, text: "Piscina", color: colors.cta },
  { icon: faLaugh, text: "Playground", color: colors.cta },
  { icon: faDoorClosed, text: "Portaria", color: colors.cta },
  { icon: faBasketballBall, text: "Quadra esportiva", color: colors.cta },
  { icon: faPaw, text: "Área pet", color: colors.cta },
];

export const itemsCondominiumPrivate = [
  { icon: faElevator, text: "Elevador", color: colors.neutral.neutralLight },
  { icon: faGamepad, text: "Brinquedoteca", color: colors.neutral.neutralLight },
  { icon: faTshirt, text: "Lavanderia", color: colors.neutral.neutralLight },
  { icon: faCar, text: "Estacionamento", color: colors.neutral.neutralLight },
];

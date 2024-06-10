import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  isLogo: true,
  logoDecal: "./ShowGa.png",
  fullDecal: "./ShowGa.png",
});

export default state;

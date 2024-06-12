import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#2b2b2b",
  isLogoTexture: true,
  isFullTexture: false,
  isLogo: true,
  logoDecal: "./ShowGa.png",
  fullDecal: "./ShowGa.png",
});

export default state;

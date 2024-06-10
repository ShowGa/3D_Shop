import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  // get WBGL renderer instance
  const { gl } = useThree();

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // configuration fo the anisotropy
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
  logoTexture.anisotropy = maxAnisotropy;
  // console.log(maxAnisotropy);// 16

  // making color applying smoothly
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  //
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.3}
            map={logoTexture}
            // render on top of others
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;

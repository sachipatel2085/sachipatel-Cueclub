import { ContactShadows } from "@react-three/drei";
import CameraRig from "./CameraRig";
import CueBall from "./CueBall";
import CueStick from "./CueStick";
import Floor from "./Floor";
import SceneLights from "./Lights";
import Particles from "./Particles";
import SceneComposition from "./SceneComposition";

export default function Experience() {
  return (
    <>
      <SceneLights />

      <CameraRig>
        <SceneComposition />
      </CameraRig>
      <Particles />
      {/* <Floor /> */}

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.35}
        blur={3}
        scale={12}
        far={8}
      />
    </>
  );
}

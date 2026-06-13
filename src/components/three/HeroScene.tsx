import { Canvas } from "@react-three/fiber";

export default function HeroScene() {
  return (
    <Canvas>
      <ambientLight intensity={2} />

      <mesh rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#5B4B9A"
          wireframe
        />
      </mesh>
    </Canvas>
  );
}
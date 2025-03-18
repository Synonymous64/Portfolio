import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Group } from "three";
import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  Html,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { animate, useMotionValue } from "framer-motion";

const CodeObject = () => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const rotationSpeed = useMotionValue(0.01);
  const distortion = useMotionValue(0.3);

  useEffect(() => {
    if (hovered) {
      animate(rotationSpeed, 0.05, { duration: 0.3 });
      animate(distortion, 0.5, { duration: 0.3 });
    } else {
      animate(rotationSpeed, 0.01, { duration: 0.3 });
      animate(distortion, 0.3, { duration: 0.3 });
    }
  }, [hovered]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed.get();
    }
  });

  const technologies = ["React", "Node.js", "TypeScript", "Python", "Docker"];

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Central Code Symbol */}
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <MeshDistortMaterial
            color={hovered ? "#8B5CF6" : "#6366F1"}
            speed={2}
            distort={distortion.get()}
            radius={1}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Orbiting Technology Spheres */}
        {technologies.map((tech, i) => (
          <group
            key={i}
            rotation={[0, (i / technologies.length) * Math.PI * 2, 0]}
          >
            <group position={[3, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.3, 32, 32]} />
                <MeshDistortMaterial
                  color={`hsl(${(i * 60) % 360}, 70%, 60%)`}
                  speed={4}
                  distort={0.2}
                  radius={1}
                />
              </mesh>
              <Html center position={[0, 0.5, 0]}>
                <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap">
                  {tech}
                </div>
              </Html>
            </group>
          </group>
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <mesh
            key={`particle-${i}`}
            position={[
              Math.sin((i / 20) * Math.PI * 2) * 4,
              Math.cos((i / 20) * Math.PI * 2) * 4,
              Math.sin((i / 20) * Math.PI * 4) * 2,
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={`hsl(${(i * 20) % 360}, 70%, 60%)`}
              emissive={`hsl(${(i * 20) % 360}, 70%, 60%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const CodeScene = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
        rotateSpeed={0.5}
      />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
      />
      <CodeObject />
    </Canvas>
  );
};

export default CodeScene;

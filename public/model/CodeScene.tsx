'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Group, Vector3 } from "three";
import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Text3D,
  MeshDistortMaterial,
  Html,
  useGLTF,
  SpotLight,
  Stars,
} from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";

const TechStack = ({ position, text, color }) => {
  return (
    <mesh position={position}>
      <Text3D
        font="/fonts/monolisa/MonoLisa-Regular.json"
        size={0.3}
        height={0.1}
        curveSegments={12}
      >
        {text}
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.2}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  );
};

const CodeObject = () => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const rotationSpeed = useMotionValue(0.002);
  const distortion = useMotionValue(0.3);

  const technologies = [
    { name: "React", color: "#61DAFB", position: new Vector3(-2, 2, 0) },
    { name: "Node.js", color: "#68A063", position: new Vector3(2, 2, 0) },
    { name: "TypeScript", color: "#007ACC", position: new Vector3(-2, -2, 0) },
    { name: "Python", color: "#FFD43B", position: new Vector3(2, -2, 0) },
  ];

  useEffect(() => {
    if (hovered) {
      animate(rotationSpeed, 0.01, { duration: 0.3 });
      animate(distortion, 0.5, { duration: 0.3 });
    } else {
      animate(rotationSpeed, 0.002, { duration: 0.3 });
      animate(distortion, 0.3, { duration: 0.3 });
    }
  }, [hovered]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed.get();
      // Add subtle breathing animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Central Code Structure */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial
            color={hovered ? "#8B5CF6" : "#6366F1"}
            speed={2}
            distort={distortion.get()}
            radius={1}
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* Orbiting Technology Text */}
        {technologies.map((tech, i) => (
          <group
            key={i}
            rotation={[0, (i / technologies.length) * Math.PI * 2, 0]}
          >
            <TechStack
              position={tech.position}
              text={tech.name}
              color={tech.color}
            />
          </group>
        ))}

        {/* Particle System */}
        <Stars
          radius={10}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Dynamic Spotlights */}
        <SpotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#8B5CF6"
        />
        <SpotLight
          position={[-10, -10, -10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#6366F1"
        />
      </group>
    </Float>
  );
};

const CodeScene = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
        rotateSpeed={0.5}
      />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <CodeObject />
    </Canvas>
  );
};

export default CodeScene;

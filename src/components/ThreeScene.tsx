
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  Float, 
  MeshDistortMaterial, 
  Sparkles,
  MeshWobbleMaterial,
  Text3D,
  Center
} from '@react-three/drei';
import { Mesh, Color, MathUtils } from 'three';

const Model = ({ path }: { path: string }) => {
  try {
    const { scene } = useGLTF(path || '/placeholder.svg');
    const meshRef = useRef<Mesh>(null);
    const { viewport } = useThree();
    
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      }
    });
    
    return (
      <primitive 
        object={scene} 
        scale={Math.min(1.8, viewport.width / 5)} 
        position={[0, -1, 0]} 
        ref={meshRef}
      />
    );
  } catch (error) {
    console.error("Failed to load 3D model:", error);
    return <FloatingGeometry />;
  }
};

const FloatingGeometry = () => {
  const torusRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const octaRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const scale = Math.min(1, viewport.width / 5);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
      torusRef.current.rotation.y = t * 0.3;
      torusRef.current.position.y = Math.sin(t * 0.3) * 0.2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(t * 0.4) * 1.5;
      sphereRef.current.position.z = Math.cos(t * 0.4) * 1.5;
      sphereRef.current.rotation.y = t * 0.2;
    }
    
    if (octaRef.current) {
      octaRef.current.position.x = Math.sin(t * 0.4 + Math.PI) * 1.5;
      octaRef.current.position.z = Math.cos(t * 0.4 + Math.PI) * 1.5;
      octaRef.current.rotation.y = t * 0.2;
      octaRef.current.rotation.z = t * 0.3;
    }
  });
  
  return (
    <group position={[0, 0, 0]} scale={scale}>
      {/* Main floating torus */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[0, 0, 0]}>
          <torusGeometry args={[1.2, 0.5, 16, 64]} />
          <MeshDistortMaterial 
            color="#9333ea" 
            distort={0.4} 
            speed={2} 
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      {/* Floating sphere */}
      <mesh ref={sphereRef} position={[1.5, 0, 0]} scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial 
          color="#8b5cf6" 
          factor={0.4} 
          speed={2} 
          roughness={0.3}
        />
      </mesh>
      
      {/* Floating octahedron */}
      <mesh ref={octaRef} position={[-1.5, 0, 0]} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial 
          color="#a78bfa" 
          distort={0.3} 
          speed={2} 
          roughness={0.3}
        />
      </mesh>
      
      {/* Sparkles for magical effect */}
      <Sparkles 
        count={40} 
        scale={6} 
        size={1} 
        speed={0.3} 
        color="#c4b5fd" 
      />
      
      {/* Optional 3D text */}
      <Center position={[0, -2, 0]}>
        <Text3D
          font="/fonts/inter_regular.json"
          size={0.8}
          height={0.1}
          curveSegments={12}
        >
          Portfolio
          <MeshWobbleMaterial
            color="#d8b4fe"
            factor={0.2}
            speed={1}
            roughness={0.1}
            metalness={0.5}
          />
        </Text3D>
      </Center>
    </group>
  );
};

interface ThreeSceneProps {
  className?: string;
  modelPath?: string;
}

const ThreeScene = ({ className = '', modelPath }: ThreeSceneProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) return <div className={`w-full h-full ${className} bg-purple-500/10 rounded-3xl`} />;
  
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        {modelPath ? (
          <Model path={modelPath} />
        ) : (
          <FloatingGeometry />
        )}
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

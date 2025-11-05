import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'motion/react';
import * as THREE from 'three';

interface ChessPiece3DProps {
  piece: 'pawn' | 'rook' | 'bishop' | 'knight' | 'queen' | 'king';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  color?: 'black' | 'white';
  animate?: boolean;
}

// 3D Pawn Component
function Pawn({ color }: { color: 'black' | 'white' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const materialColor = color === 'white' ? '#E8E8E8' : '#1A1A1A';

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.2, 32]} />
        <meshStandardMaterial 
          color={materialColor} 
          roughness={0.3} 
          metalness={0.7}
        />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.25, 0.6, 32]} />
        <meshStandardMaterial 
          color={materialColor} 
          roughness={0.3} 
          metalness={0.7}
        />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color={materialColor} 
          roughness={0.3} 
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

// 3D Rook Component
function Rook({ color }: { color: 'black' | 'white' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const materialColor = color === 'white' ? '#E8E8E8' : '#1A1A1A';

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.45, 0.55, 0.3, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Tower Body */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 1.0, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Battlements */}
      <mesh position={[0, 1.25, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.35, 0.2, 4]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

// 3D Bishop Component
function Bishop({ color }: { color: 'black' | 'white' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const materialColor = color === 'white' ? '#E8E8E8' : '#1A1A1A';

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.2, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.25, 0.8, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Top Point */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

// 3D Knight Component
function Knight({ color }: { color: 'black' | 'white' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const materialColor = color === 'white' ? '#E8E8E8' : '#1A1A1A';

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.2, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.5, 0]} rotation={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 0.8, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.0, 0.3]} rotation={[0.5, 0, 0]} castShadow>
        <boxGeometry args={[0.35, 0.5, 0.4]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Ears */}
      <mesh position={[-0.15, 1.3, 0.4]} castShadow>
        <coneGeometry args={[0.08, 0.2, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0.15, 1.3, 0.4]} castShadow>
        <coneGeometry args={[0.08, 0.2, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

// 3D Queen Component
function Queen({ color }: { color: 'black' | 'white' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const materialColor = color === 'white' ? '#E8E8E8' : '#1A1A1A';

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.45, 0.55, 0.3, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Lower Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 0.7, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Upper Body */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.6, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Crown Base */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.25, 0.2, 8]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Crown Points */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i * Math.PI * 2) / 8;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 0.35,
              1.65,
              Math.sin(angle) * 0.35,
            ]}
            castShadow
          >
            <coneGeometry args={[0.08, 0.3, 32]} />
            <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
          </mesh>
        );
      })}
    </group>
  );
}

// 3D King Component
function King({ color }: { color: 'black' | 'white' }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const materialColor = color === 'white' ? '#E8E8E8' : '#1A1A1A';

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.6, 0.3, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Lower Body */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.45, 0.9, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Upper Body */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.35, 0.6, 32]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Crown */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.3, 0.3, 6]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Cross - Vertical */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Cross - Horizontal */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.08, 0.08]} />
        <meshStandardMaterial color={materialColor} roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

// Scene Component
function ChessScene({ piece, color, animate }: { piece: string; color: 'black' | 'white'; animate: boolean }) {
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[3, 3, 3]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#B197FC" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#4444FF" />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
      
      {/* Chess Piece */}
      <Suspense fallback={null}>
        {piece === 'pawn' && <Pawn color={color} />}
        {piece === 'rook' && <Rook color={color} />}
        {piece === 'bishop' && <Bishop color={color} />}
        {piece === 'knight' && <Knight color={color} />}
        {piece === 'queen' && <Queen color={color} />}
        {piece === 'king' && <King color={color} />}
      </Suspense>
      
      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.5}
        scale={3}
        blur={2}
        far={2}
        color={color === 'white' ? '#ffffff' : '#B197FC'}
      />
      
      {/* Controls */}
      {!animate && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />}
    </>
  );
}

export function ChessPiece3D({ 
  piece, 
  size = 'large', 
  className = '', 
  color = 'black',
  animate = true 
}: ChessPiece3DProps) {
  const [hovered, setHovered] = useState(false);

  const sizeConfig = {
    small: { width: 200, height: 200 },
    medium: { width: 320, height: 320 },
    large: { width: 400, height: 400 },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: config.width, height: config.height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Ambient Glow Background */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[80px] pointer-events-none"
        style={{
          background:
            color === 'white'
              ? 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(177, 151, 252, 0.4) 0%, rgba(68, 68, 255, 0.2) 50%, transparent 70%)',
        }}
        animate={animate ? {
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 3D Canvas */}
      <Canvas
        shadows
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ChessScene piece={piece} color={color} animate={animate} />
      </Canvas>

      {/* Particle Effects */}
      {animate && hovered && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={{
                background: color === 'white' ? '#FFFFFF' : '#B197FC',
                boxShadow:
                  color === 'white'
                    ? '0 0 10px rgba(255, 255, 255, 0.9)'
                    : '0 0 10px rgba(177, 151, 252, 0.9)',
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 100],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 100],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}

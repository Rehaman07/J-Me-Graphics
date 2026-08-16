import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function LightOrb({ position, color, radius = 1.2, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime() * speed
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.2
  })

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

function FastScene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      {/* 3 Core Brand Leaf Spheres - Low Poly & Fast */}
      {/* Green */}
      <LightOrb position={[-3.5, 2, -2]} color="#10B981" radius={1.2} speed={0.8} />
      {/* Orange */}
      <LightOrb position={[3.8, 0.2, -3]} color="#FF6B00" radius={1.5} speed={1.0} />
      {/* Blue */}
      <LightOrb position={[-2.2, -2.5, -2]} color="#2563EB" radius={1.1} speed={0.9} />
    </>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 transform-gpu">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={1}
      >
        <FastScene />
      </Canvas>
    </div>
  )
}

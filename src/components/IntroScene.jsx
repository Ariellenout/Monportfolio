import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BG_COLOR = '#1a1a2e'
const PARTICLE_COUNT = 600

/* Position 3D du curseur (smooth) */
function useCursor3D(mouseRef) {
  const target = useRef(new THREE.Vector3(0, 0, -2))
  const current = useRef(new THREE.Vector3(0, 0, -2))
  useFrame(() => {
    if (!mouseRef?.current) return
    const { x, y } = mouseRef.current
    target.current.set(x * 2.8, -y * 2.2, -2)
    current.current.lerp(target.current, 0.08)
  })
  return current
}

/* Particules magnétiques : attirées par le curseur */
function MagneticParticles({ mouseRef }) {
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const cursor = useCursor3D(mouseRef)
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 6,
      z: -3 - Math.random() * 3,
      vx: 0,
      vy: 0,
      vz: 0,
      hue: i % 2 === 0 ? 0.45 : 0.12,
    }))
  )

  useFrame((state) => {
    if (!meshRef.current) return
    const cursorPos = cursor.current
    const t = state.clock.elapsedTime * 0.3
    particles.current.forEach((p, i) => {
      const dx = cursorPos.x - p.x
      const dy = cursorPos.y - p.y
      const dz = cursorPos.z - p.z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.01
      const force = 0.0008 / (dist * 0.5 + 0.5)
      p.vx += dx * force
      p.vy += dy * force
      p.vz += dz * force
      p.vx *= 0.96
      p.vy *= 0.96
      p.vz *= 0.96
      p.x += p.vx + Math.sin(t + i * 0.1) * 0.002
      p.y += p.vy + Math.cos(t * 0.7 + i * 0.1) * 0.002
      p.z += p.vz
      p.x = THREE.MathUtils.clamp(p.x, -5, 5)
      p.y = THREE.MathUtils.clamp(p.y, -4, 4)
      p.z = THREE.MathUtils.clamp(p.z, -6, 0)
      dummy.position.set(p.x, p.y, p.z)
      const scale = 0.02 + (1 / (dist + 0.5)) * 0.015
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, PARTICLE_COUNT]}>
      <sphereGeometry args={[0.5, 8, 8]} />
      <meshBasicMaterial color="#7dd3c0" transparent opacity={0.7} depthWrite={false} />
    </instancedMesh>
  )
}

/* Deuxième nuage de particules — couleur cuivrée, comportement légèrement différent */
function MagneticParticlesCopper({ mouseRef }) {
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const cursor = useCursor3D(mouseRef)
  const particles = useRef(
    Array.from({ length: 400 }, (_, i) => ({
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 5,
      z: -2.5 - Math.random() * 2,
      vx: 0,
      vy: 0,
      vz: 0,
    }))
  )

  useFrame(() => {
    if (!meshRef.current) return
    const cursorPos = cursor.current
    particles.current.forEach((p, i) => {
      const dx = cursorPos.x - p.x
      const dy = cursorPos.y - p.y
      const dz = (cursorPos.z - 0.5) - p.z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.01
      const force = 0.0005 / (dist * 0.3 + 0.3)
      p.vx += dx * force
      p.vy += dy * force
      p.vz += dz * force
      p.vx *= 0.95
      p.vy *= 0.95
      p.vz *= 0.95
      p.x += p.vx
      p.y += p.vy
      p.z += p.vz
      p.x = THREE.MathUtils.clamp(p.x, -4, 4)
      p.y = THREE.MathUtils.clamp(p.y, -3.5, 3.5)
      p.z = THREE.MathUtils.clamp(p.z, -5, 0)
      dummy.position.set(p.x, p.y, p.z)
      dummy.scale.setScalar(0.018)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, 400]}>
      <sphereGeometry args={[0.5, 6, 6]} />
      <meshBasicMaterial color="#c9a227" transparent opacity={0.5} depthWrite={false} />
    </instancedMesh>
  )
}

/* Glow qui suit le curseur */
function CursorGlow({ mouseRef }) {
  const meshRef = useRef()
  const cursor = useCursor3D(mouseRef)
  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.position.copy(cursor.current)
    meshRef.current.material.opacity = 0.2 + Math.sin(Date.now() * 0.002) * 0.05
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshBasicMaterial color="#7dd3c0" transparent opacity={0.25} depthWrite={false} />
    </mesh>
  )
}

/* Grille déformée par le curseur — vague qui suit la souris */
function WaveGrid({ mouseRef }) {
  const meshRef = useRef()
  const cursor = useCursor3D(mouseRef)
  const size = 12
  const segments = 32
  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(size, size * 0.6, segments, Math.floor(segments * 0.6))
    return g
  }, [])

  useFrame(() => {
    if (!meshRef.current || !geometry.attributes.position) return
    const pos = geometry.attributes.position
    const cursorPos = cursor.current
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const dx = cursorPos.x - x
      const dy = cursorPos.y - y
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.5
      const wave = (2 / (dist + 0.5)) * 0.15
      pos.setZ(i, wave)
    }
    pos.needsUpdate = true
    geometry.computeVertexNormals()
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -2.8]} rotation={[-Math.PI / 2.2, 0, 0]}>
      <meshBasicMaterial
        color="#7dd3c0"
        transparent
        opacity={0.06}
        wireframe
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Scene({ mouseRef }) {
  return (
    <>
      <color attach="background" args={[BG_COLOR]} />
      <ambientLight intensity={0.5} />
      <WaveGrid mouseRef={mouseRef} />
      <MagneticParticles mouseRef={mouseRef} />
      <MagneticParticlesCopper mouseRef={mouseRef} />
      <CursorGlow mouseRef={mouseRef} />
    </>
  )
}

export default function IntroScene({ mouseRef }) {
  return (
    <div className="absolute inset-0 z-0 w-full h-full" style={{ background: BG_COLOR }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={1}
        gl={{ alpha: true, antialias: true, powerPreference: 'default' }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <Suspense fallback={null}>
          <Scene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}

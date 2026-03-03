import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* Position 3D du curseur lissée */
function useCursor3D(mouseRef) {
  const target = useRef(new THREE.Vector3(0, 0, 0))
  const current = useRef(new THREE.Vector3(0, 0, 0))
  useFrame(() => {
    if (!mouseRef?.current) return
    const { x, y } = mouseRef.current
    target.current.set(x * 1.5, y * 1.2, 0)
    current.current.lerp(target.current, 0.06)
  })
  return current
}

/* Tunnel d'anneaux — inclinaison et décalage selon le curseur */
function TunnelRings({ mouseRef }) {
  const groupRef = useRef()
  const cursor = useCursor3D(mouseRef)
  const ringCount = 12
  const rings = useMemo(() => {
    return Array.from({ length: ringCount }, (_, i) => {
      const radius = 0.8 + (i / ringCount) * 4.5
      const z = -1.5 - i * 0.85
      const segments = 64
      const geometry = new THREE.RingGeometry(radius - 0.02, radius + 0.02, segments)
      return { geometry, z, i }
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime * 0.15
    const c = cursor.current
    groupRef.current.rotation.x = Math.sin(t) * 0.08 + c.y * 0.12
    groupRef.current.rotation.y = t * 0.2 + c.x * 0.15
    groupRef.current.position.x = c.x * 0.3
    groupRef.current.position.y = c.y * 0.25
    groupRef.current.children.forEach((mesh, i) => {
      const fade = 1 - (i / ringCount) * 0.85
      mesh.material.opacity = 0.06 * fade + Math.sin(t * 2 + i) * 0.02
    })
  })

  return (
    <group ref={groupRef}>
      {rings.map(({ geometry, z, i }, index) => (
        <mesh key={index} geometry={geometry} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial
            color={index % 2 === 0 ? '#7dd3c0' : '#c9a227'}
            transparent
            opacity={0.08}
            wireframe
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

/* Ruban — décalage et opacité selon le curseur */
function FlowingRibbon({ mouseRef }) {
  const meshRef = useRef()
  const cursor = useCursor3D(mouseRef)
  const curve = useMemo(() => {
    const pts = []
    const segments = 80
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const x = (t - 0.5) * 8
      const y = Math.sin(t * Math.PI * 3) * 1.8
      const z = -3 + Math.cos(t * Math.PI * 2) * 1.2
      pts.push(new THREE.Vector3(x, y, z))
    }
    return new THREE.CatmullRomCurve3(pts)
  }, [])

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 80, 0.03, 8, false)
  }, [curve])

  useFrame((state) => {
    if (!meshRef.current) return
    const c = cursor.current
    meshRef.current.position.x = c.x * 0.4
    meshRef.current.position.y = c.y * 0.35
    meshRef.current.material.opacity = 0.18 + Math.sin(state.clock.elapsedTime * 0.8) * 0.06 + (Math.abs(c.x) + Math.abs(c.y)) * 0.04
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#7dd3c0"
        transparent
        opacity={0.22}
        wireframe
        depthWrite={false}
      />
    </mesh>
  )
}

/* Deuxième ruban — réaction curseur */
function FlowingRibbonCopper({ mouseRef }) {
  const meshRef = useRef()
  const cursor = useCursor3D(mouseRef)
  const curve = useMemo(() => {
    const pts = []
    const segments = 80
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const x = (t - 0.5) * 7 + 0.5
      const y = Math.cos(t * Math.PI * 2.5) * 1.4
      const z = -2.8 + Math.sin(t * Math.PI * 2) * 0.8
      pts.push(new THREE.Vector3(x, y, z))
    }
    return new THREE.CatmullRomCurve3(pts)
  }, [])

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 80, 0.025, 6, false)
  }, [curve])

  useFrame((state) => {
    if (!meshRef.current) return
    const c = cursor.current
    meshRef.current.position.x = -c.x * 0.35
    meshRef.current.position.y = -c.y * 0.3
    meshRef.current.material.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.05 + (Math.abs(c.x) + Math.abs(c.y)) * 0.03
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#c9a227"
        transparent
        opacity={0.18}
        wireframe
        depthWrite={false}
      />
    </mesh>
  )
}

/* Éclats — orbite décalée par le curseur */
function FloatingShards({ mouseRef }) {
  const count = 24
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const cursor = useCursor3D(mouseRef)
  const data = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      phase: (i / count) * Math.PI * 2,
      speed: 0.2 + (i % 3) * 0.1,
      radius: 2 + (i % 4) * 1.2,
      scale: 0.04 + (i % 2) * 0.02,
    }))
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    const c = cursor.current
    data.forEach((d, i) => {
      const angle = d.phase + t * d.speed
      const rx = d.radius * 0.6 + c.x * 0.4
      const ry = 1.5 + c.y * 0.3
      dummy.position.set(
        Math.cos(angle) * rx,
        Math.sin(angle * 0.7) * ry,
        -2.5 - (i % 3) * 0.4 + c.x * 0.1 - c.y * 0.1
      )
      dummy.rotation.z = angle * 0.5 + c.x * 0.2
      dummy.scale.setScalar(d.scale * (0.9 + Math.sin(t * 2 + i) * 0.2))
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <ringGeometry args={[0.5, 0.52, 4]} />
      <meshBasicMaterial
        color="#7dd3c0"
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </instancedMesh>
  )
}

/* Lumière / glow qui suit le curseur */
function CursorGlow({ mouseRef }) {
  const meshRef = useRef()
  const cursor = useCursor3D(mouseRef)
  useFrame(() => {
    if (!meshRef.current) return
    const c = cursor.current
    meshRef.current.position.set(c.x * 1.2, c.y * 1, -2.5)
    meshRef.current.material.opacity = 0.08 + (Math.abs(c.x) + Math.abs(c.y)) * 0.02
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 24, 24]} />
      <meshBasicMaterial color="#7dd3c0" transparent opacity={0.1} depthWrite={false} />
    </mesh>
  )
}

function Scene({ mouseRef }) {
  return (
    <>
      <color attach="background" args={['#0a0e17']} />
      <ambientLight intensity={0.4} />
      <TunnelRings mouseRef={mouseRef} />
      <FlowingRibbon mouseRef={mouseRef} />
      <FlowingRibbonCopper mouseRef={mouseRef} />
      <FloatingShards mouseRef={mouseRef} />
      <CursorGlow mouseRef={mouseRef} />
    </>
  )
}

export default function ThreeScene({ mouseRef }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 52 }}
        dpr={1}
        gl={{ alpha: true, antialias: true, powerPreference: 'default' }}
      >
        <Suspense fallback={null}>
          <Scene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}

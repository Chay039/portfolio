'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import * as THREE from 'three';

function RotatingSphere() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.y = t * 0.4;
        mesh.current.rotation.x = Math.sin(t * 0.15) * 0.3;
    });

    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[1.5, 2]} />
            <meshBasicMaterial color="#06b6d4" wireframe opacity={0.3} transparent />
        </mesh>
    );
}

function OrbitRing({ radius, speed, color, inclination = 0 }: {
    radius: number; speed: number; color: string; inclination?: number;
}) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;
        group.current.rotation.z += speed * 0.01;
    });

    return (
        <group ref={group} rotation={[inclination, 0, 0]}>
            <mesh>
                <torusGeometry args={[radius, 0.004, 10, 100]} />
                <meshBasicMaterial color={color} transparent opacity={0.3} />
            </mesh>
            {/* Dot on ring */}
            <mesh position={[radius, 0, 0]}>
                <sphereGeometry args={[0.07, 8, 8]} />
                <meshBasicMaterial color={color} />
            </mesh>
        </group>
    );
}

export default function TechSphere() {
    return (
        <div style={{ width: '100%', height: '380px' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 55 }} gl={{ antialias: false, alpha: true }}>
                <RotatingSphere />
                <OrbitRing radius={2.2} speed={0.6} color="#06b6d4" inclination={0.3} />
                <OrbitRing radius={2.8} speed={-0.4} color="#a855f7" inclination={1.0} />
                <OrbitRing radius={3.4} speed={0.3} color="#f59e0b" inclination={1.8} />
            </Canvas>
        </div>
    );
}

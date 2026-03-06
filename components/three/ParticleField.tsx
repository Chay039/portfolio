'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 3000 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);
    const { camera } = useThree();
    const mouse = useRef({ x: 0, y: 0 });

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const palette = [
            new THREE.Color('#06b6d4'),
            new THREE.Color('#a855f7'),
            new THREE.Color('#f59e0b'),
            new THREE.Color('#ffffff'),
        ];
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 28;
            positions[i3 + 1] = (Math.random() - 0.5) * 16;
            positions[i3 + 2] = (Math.random() - 0.5) * 14 - 2;
            const col = palette[Math.floor(Math.random() * palette.length)];
            colors[i3] = col.r;
            colors[i3 + 1] = col.g;
            colors[i3 + 2] = col.b;
        }
        return [positions, colors];
    }, [count]);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.y = t * 0.03 + mouse.current.x * 0.08;
        mesh.current.rotation.x = t * 0.01 + mouse.current.y * 0.04;
        // Animate camera parallax
        camera.position.x += (mouse.current.x * 0.3 - camera.position.x) * 0.02;
        camera.position.y += (mouse.current.y * 0.2 - camera.position.y) * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute args={[positions, 3]} attach="attributes-position" />
                <bufferAttribute args={[colors, 3]} attach="attributes-color" />
            </bufferGeometry>
            <pointsMaterial
                size={0.035}
                vertexColors
                transparent
                opacity={0.75}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

function FloatingRings() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.getElapsedTime();
        group.current.rotation.x = t * 0.15;
        group.current.rotation.z = t * 0.08;
    });

    return (
        <group ref={group} position={[3.5, 0.5, -2]}>
            {/* Outer ring */}
            <mesh>
                <torusGeometry args={[2.2, 0.008, 12, 90]} />
                <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
            </mesh>
            {/* Middle ring */}
            <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
                <torusGeometry args={[1.6, 0.006, 12, 90]} />
                <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
            </mesh>
            {/* Inner ring */}
            <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
                <torusGeometry args={[1.0, 0.005, 12, 60]} />
                <meshBasicMaterial color="#f59e0b" transparent opacity={0.35} />
            </mesh>
            {/* Center sphere */}
            <mesh>
                <icosahedronGeometry args={[0.3, 2]} />
                <meshBasicMaterial color="#06b6d4" wireframe />
            </mesh>
        </group>
    );
}

export default function ParticleField() {
    return (
        <div className="canvas-wrapper">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: false, alpha: true }}
                dpr={[1, 1.5]}
                style={{ background: 'transparent' }}
            >
                <Particles count={2500} />
                <FloatingRings />
            </Canvas>
        </div>
    );
}

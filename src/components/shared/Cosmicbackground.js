// src/components/CosmicBackground.jsx
import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CosmicBackground() {
  const starsRef = useRef(null);
  // Create a ref to store the mouse position. This won't trigger re-renders.
  const mouse = useRef({ x: 0, y: 0 });

  // This effect will run once and set up a global mouse listener.
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update the ref with normalized mouse coordinates (-1 to 1)
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // This is a cleanup function that removes the listener when the component is unmounted.
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty array ensures this effect runs only on component mount.

  const starPositions = useMemo(() => {
    const positions = new Float32Array(15000 * 3);
    for (let i = 0; i < 15000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = -Math.random() * 2000;
    }
    return positions;
  }, []);

  useFrame((state) => {
    // Animate the stars moving towards the camera
    if (starsRef.current) {
      starsRef.current.position.z += 0.1;
      if (starsRef.current.position.z > 1000) {
        starsRef.current.position.z = -1000;
      }
    }

    // Use the position from our 'mouse' ref
    state.camera.position.x += (mouse.current.x * 0.2 - state.camera.position.x) * 0.02;
    state.camera.position.y += (mouse.current.y * 0.2 - state.camera.position.y) * 0.02;
    
    // Ensure the camera is always looking at the center of the scene
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={15000}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.7} color="#f8f8ff" transparent={true} />
    </points>
  );
}
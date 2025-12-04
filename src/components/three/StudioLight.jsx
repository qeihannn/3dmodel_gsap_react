import { Environment, Lightformer } from "@react-three/drei";

const StudioLight = () => {
  return (
    <group name="Lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={12}          
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />

          <Lightformer
            form="rect"
            intensity={12}        
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 5]}
        angle={0.5}
        decay={0}
        intensity={Math.PI * 0.3}   
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.5}
        decay={0}
        intensity={Math.PI * 0.3}   
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 1.5}  
      />
    </group>
  )
}

export default StudioLight;

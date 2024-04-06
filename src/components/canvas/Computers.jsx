import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (

    // The mesh tag in React is used to render a 3D object in a scene. It is a part of the react-three-fiber library, which is a React renderer for Three.js.
    <mesh>
      <hemisphereLight intensity={1.75} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile?0.7:0.75}
        position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas=()=>{

  const [isMobile,setIsMobile]=useState(false);


  //Below use Effect is just setting isMobile variable whenever there is a change in screen size
  //Add an event listener for changes to the screen size

  useEffect(()=>{
    //HOW TO CHECK WHETHER ITS A MOBILE DEVICE
    const mediaQuery=window.matchMedia('(max-width:500px)');
    //Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    //Callback function to handle changes to the mediaQuery
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    // Adding a callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    //Remove the listener when the component is unmounted
    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  return (

    // The canvas tag in React is used to draw graphics on a web page.
    <Canvas 
    frameLoop="demand"
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense
        fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}
            minPolarAngle={Math.PI/2}
            maxPolarAngle={Math.PI/2}
          />
          <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas

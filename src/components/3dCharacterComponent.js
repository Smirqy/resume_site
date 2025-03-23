import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useWindowWidth, useWindowHeight } from '../App';

export var setIndexMethod = null;

const STATES = {
    IDLE: 4,
    WAVE: 7,
    BORED: 2,
    DANCE: 3,
    DYING: 5,
    STANDING_UP: 6
};

function Model(props) {
    const avatar = useGLTF(process.env.PUBLIC_URL + "/models/NoahAvatar4.glb");
    const { actions, names } = useAnimations(avatar.animations, avatar.scene);
    const [currentState, setCurrentState] = useState(STATES.IDLE);
    const [isAnimating, setIsAnimating] = useState(false);
    const boredomTimeoutRef = useRef(null);
    const patience = 20000;

    useEffect(() => {
        setCurrentState(STATES.IDLE);
        startBoredLoop();
    }, []);


    useEffect(() => {
        setIndexMethod = (state) => {
            if (!isAnimating) {
                clearTimeout(boredomTimeoutRef.current);
                setCurrentState(state);
            }
        };
    }, [isAnimating]);

    // Loops the bored animation when idle for too long
    const startBoredLoop = () => {
        clearTimeout(boredomTimeoutRef.current); // Clear any existing timer
        boredomTimeoutRef.current = setTimeout(() => {
            if (!isAnimating) {
                setCurrentState(STATES.BORED);
            }
        }, patience);
    };

    // Cleanup previous animations and play new ones
    useEffect(() => {
        Object.values(STATES).forEach(state => actions[names[state]]?.stop());

        const action = actions[names[currentState]];
        if (!action) return;

        if (currentState === STATES.BORED) {
            setIsAnimating(true);
            action.reset().fadeIn(1).setLoop(THREE.LoopOnce).play();

            setTimeout(() => {
                action.fadeOut(1);
                setTimeout(() => {
                    setIsAnimating(false);
                    setCurrentState(STATES.IDLE);
                    startBoredLoop(); // Restart boredom loop when back to idle
                }, 1000);
            }, 5000);
        } 
        // If it's a special animation (like waving or dying), let it finish before returning to idle
        else if (currentState === STATES.WAVE || currentState === STATES.DYING || currentState === STATES.DANCE) {
            setIsAnimating(true);
            action.reset().fadeIn(0.5).setLoop(THREE.LoopOnce).play();
            action.clampWhenFinished = true;
    
            action.getMixer().addEventListener('finished', () => {
                action.fadeOut(1);  // Smoothly fade out current animation
                setTimeout(() => {
                    setIsAnimating(false);
                    setCurrentState(STATES.IDLE);
                }, 1000);
            });
        }  else {
             // Looping animations (like idle) should smoothly fade in
             action.reset().fadeIn(1).setLoop(THREE.LoopRepeat).play();
             startBoredLoop();
        }
    }, [currentState]);

    return (
        <group>
            <primitive object={avatar.scene} {...props} />
        </group>
    );
}

function getModelX(width, height) {
    let x = 0;
    if (height < 1000) {
        const min = 780;
        const max = 1180;
        const start = -0.25;
        const end = -0.5;
    
        const clampedWidth = Math.min(Math.max(width, min), max);
        const t = (clampedWidth - min) / (max - min);
        x = start + t * (end - start);
    }
    else {
        const min = 1000;
        const max = 1700;
        const start = -0.1;
        const end = -0.5;
    
        const clampedWidth = Math.min(Math.max(width, min), max);
        const t = (clampedWidth - min) / (max - min);
        x = start + t * (end - start);
    }
    return x;
}

export default function CharacterModel() {
    const width = useWindowWidth();
    const height = useWindowHeight();
    return width > 768 ? (
        <Canvas dpr={[1, 2]} shadowMap shadows camera={{ fov: 20 }}>
            <ambientLight intensity={2.1} />
            <pointLight position={[1, 1, 1]} intensity={4} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
            <Model scale={0.75} position-y={-0.7} position-x={getModelX(width, height)} rotation-x={0} rotation-y={0.2} rotation-z={0} castShadow />
            <OrbitControls enabled={false} />
        </Canvas>
    ): 
    (
        <Canvas dpr={[1, 2]} shadowMap shadows camera={{ fov: 20 }}>
            <ambientLight intensity={2.1} />
            <pointLight position={[1, 1, 1]} intensity={4} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
            <Model scale={0.75} position-y={-0.7} position-x={0} rotation-x={0} rotation-y={0.2} rotation-z={0} castShadow />
            <OrbitControls enabled={false} />
        </Canvas>
    )
    
}


// import { Canvas } from '@react-three/fiber';
// import { useGLTF, OrbitControls, useAnimations} from '@react-three/drei';
// import { useEffect, useState} from 'react';
// import * as THREE from 'three';

// export var setIndexMethod = null;

// const idle = 4;
// const wave = 7;
// const bored = 2;
// const dance = 3;
// const dying = 5;
// const standing_up = 6;
// function Model(props) {
//     const avatar = useGLTF(process.env.PUBLIC_URL + "/models/NoahAvatar4.glb");
//     const {actions, names} = useAnimations(avatar.animations, avatar.scene);
//     const [index, setIndex] = useState(idle);
//     const [isWaving, setIsWaving] = useState(false);
//     const patience = 60000;

//     actions[names[dying]].getMixer().addEventListener('finished', (e) => {
//         actions[names[dying]]?.fadeOut(1).stop();
//         setIndex(idle);
//         setIsWaving(false);
        
//     });

//     const boredLoop = () => {
//         timeout(patience).then(() => {
//             if(!isWaving) {
//                 setIndex(bored);
//             }
//             boredLoop();
//         })
//     }

//     setIndexMethod = setIndex;
//     useEffect(() => {
//         setIndex(idle);
//         boredLoop();
//     }, [])

    

//     useEffect(() => {
//         if(index === wave) {
//             setIsWaving(true);
//             actions[names[index]]?.fadeIn(1).play();
//             timeout(5000).then(() => {
//                 actions[names[index]]?.reset().fadeOut(1).play();
//                 timeout(1050).then(() => {
//                     setIndex(idle);
//                     setIsWaving(false);
//                 })
//             })
//         }
//         else if(index === idle) {
//             actions[names[index]]?.reset().fadeIn().play();
//         }
//         else if(index === bored) {
//             if(!isWaving) {
//                 actions[names[index]]?.reset().fadeIn(1).play();
//                 timeout(12000).then(() => {
//                     actions[names[index]]?.fadeOut(1).play();
//                     timeout(1500).then(() => {
//                         setIndex(idle);
//                     })
//                 })
//             }
//         }
//         else if(index === dance) {
//             actions[names[index]]?.reset().fadeIn(1).play();
//             timeout(12000).then(() => {
//                 actions[names[index]]?.fadeOut(1).play();
//                 timeout(1500).then(() => {
//                     setIndex(idle);
//                 })
//             })
//         }
//         else if(index === dying) {
//             setIsWaving(true);
//             // actions[names[index]]?.reset().fadeIn(1).play();
//             // timeout(10000).then(() => {
//             //     console.log("finished dying");
//             //     setIndex(idle);
//             //     setIsWaving(false);
//             // })
//             actions[names[index]]?.reset().fadeIn(1).setLoop(THREE.LoopOnce).play();
//         }

//         return () => {
//             actions[names[index]]?.fadeOut(1).stop();
//         }
//     }, [index])

//     return(
//         <group>
//             <primitive object={avatar.scene} {...props} />
//         </group>
//     )
// }

// export default function CharacterModel() {
//     return (
//         <Canvas dpr={[1,2]} shadowMap shadows camera={{fov:20}}>
//             <ambientLight intensity={2.1}/>
//             <pointLight position={[1,1,1]} intensity={4} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512}/>
//             <Model scale={.75} position-y={-.7} position-x={-.5} rotation-x={0} rotation-y={0.2} rotation-z={0} castShadow/>
//             <OrbitControls enabled={false}/>
//         </Canvas>
//     );
// }

// function timeout(delay) {
//     return new Promise( res => setTimeout(res, delay) );
// }

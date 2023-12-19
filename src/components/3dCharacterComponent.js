import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, useAnimations} from '@react-three/drei';
import { useEffect, useState} from 'react';
import * as THREE from 'three';

export var setIndexMethod = null;

const idle = 4;
const wave = 7;
const bored = 2;
const dance = 3;
const dying = 5;
const standing_up = 6;
function Model(props) {
    const avatar = useGLTF(process.env.PUBLIC_URL + "/models/NoahAvatar4.glb");
    const {actions, names} = useAnimations(avatar.animations, avatar.scene);
    const [index, setIndex] = useState(idle);
    const [isWaving, setIsWaving] = useState(false);
    const patience = 60000;

    actions[names[dying]].getMixer().addEventListener('finished', (e) => {
        actions[names[dying]]?.fadeOut(1).stop();
        setIndex(idle);
        setIsWaving(false);
        
    });

    const boredLoop = () => {
        timeout(patience).then(() => {
            if(!isWaving) {
                setIndex(bored);
            }
            boredLoop();
        })
    }

    setIndexMethod = setIndex;
    useEffect(() => {
        setIndex(idle);
        boredLoop();
    }, [])

    

    useEffect(() => {
        if(index === wave) {
            setIsWaving(true);
            actions[names[index]]?.fadeIn(1).play();
            timeout(5000).then(() => {
                actions[names[index]]?.reset().fadeOut(1).play();
                timeout(1050).then(() => {
                    setIndex(idle);
                    setIsWaving(false);
                })
            })
        }
        else if(index === idle) {
            actions[names[index]]?.reset().fadeIn().play();
        }
        else if(index === bored) {
            if(!isWaving) {
                actions[names[index]]?.reset().fadeIn(1).play();
                timeout(12000).then(() => {
                    actions[names[index]]?.fadeOut(1).play();
                    timeout(1500).then(() => {
                        setIndex(idle);
                    })
                })
            }
        }
        else if(index === dance) {
            actions[names[index]]?.reset().fadeIn(1).play();
            timeout(12000).then(() => {
                actions[names[index]]?.fadeOut(1).play();
                timeout(1500).then(() => {
                    setIndex(idle);
                })
            })
        }
        else if(index === dying) {
            setIsWaving(true);
            // actions[names[index]]?.reset().fadeIn(1).play();
            // timeout(10000).then(() => {
            //     console.log("finished dying");
            //     setIndex(idle);
            //     setIsWaving(false);
            // })
            actions[names[index]]?.reset().fadeIn(1).setLoop(THREE.LoopOnce).play();
        }

        return () => {
            actions[names[index]]?.fadeOut(1).stop();
        }
    }, [index])

    return(
        <group>
            <primitive object={avatar.scene} {...props} />
        </group>
    )
}

export default function CharacterModel() {
    return (
        <Canvas dpr={[1,2]} shadowMap shadows camera={{fov:20}}>
            <ambientLight intensity={2.1}/>
            <pointLight position={[1,1,1]} intensity={4} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512}/>
            <Model scale={.75} position-y={-.7} position-x={-.5} rotation-x={0} rotation-y={0.2} rotation-z={0} castShadow/>
            <OrbitControls enabled={false}/>
        </Canvas>
    );
}

function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

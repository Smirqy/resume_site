import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, useAnimations} from '@react-three/drei';
import { useEffect, useState} from 'react';

export var setIndexMethod = null;

const idle = 3;
const wave = 4;
const bored = 2;
function Model(props) {
    const avatar = useGLTF("/NoahAvatar_animation.glb");
    const {actions, names} = useAnimations(avatar.animations, avatar.scene);
    const [index, setIndex] = useState(0);
    const [isWaving, setIsWaving] = useState(false);
    const patience = 60000;

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
            actions[names[index]]?.reset().fadeIn(1).play();
            setIsWaving(true);
            timeout(5000).then(() => {
                actions[names[index]]?.reset().fadeOut(1).play();
                timeout(1500).then(() => {
                    setIndex(idle);
                    setIsWaving(false);
                })
            })
        }
        else if(index === idle) {
            actions[names[index]]?.reset().fadeIn(1).play();
        }
        else if(index === bored) {
            actions[names[index]]?.reset().fadeIn(1).play();
            timeout(12000).then(() => {
                actions[names[index]]?.fadeOut(1).play();
                timeout(1500).then(() => {
                    setIndex(idle);
                })
            })
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

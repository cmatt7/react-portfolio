import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

export default function ParticlesComponent() {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            particles: {
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                },
                opacity: {
                    value: { min: 0.2, max: 0.5 }
                },
                size: {
                    value: { min: 1, max: 3 }
                }
            }
        }
    }, [])

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
    })
    
    return <Particles init={particlesInit} options={options}/>
}
import { useEffect, useState } from "react"

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteor();

        const handleResize = ()=>{
                generateStars();
        };

        window.addEventListener('resize' , handleResize);

        return()=> window.removeEventListener("resize" , handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStars(newStars);
    };

    const generateMeteor = () => {
        const numberOfMeteors = 4;
        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100, // Random horizontal position
                y: -10, // Start ABOVE the screen
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id}>
                    <div 
                        className="star animate-pulse-subtle absolute bg-white rounded-full -translate-x-1/2 -translate-y-1/2" 
                        style={{ 
                            width: star.size + "px", 
                            height: star.size + "px", 
                            left: star.x + "%", 
                            top: star.y + "%", 
                            opacity: star.opacity, 
                            animationDuration: star.animationDuration + "s" 
                        }}
                    >
                    </div>
                </div>
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id}>
                    <div 
                        className="meteor animate-meteor"
                        style={{ 
                         width: meteor.size * 80 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                    />

                </div>
            ))}
        </div>
    );
}
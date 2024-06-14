import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPositon] = useState(0);
    
    useEffect(() => {
        const updatePosition = () => {
            setScrollPositon(window.pageYOffset);
        };
        
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    
    return scrollPosition;
}
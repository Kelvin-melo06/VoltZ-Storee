import { useEffect } from "react";

function useFadeUp() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, {threshold: 0.2});

    elements.forEach((el)=>{observer.observe(el)});

    return ()=> {
        elements.forEach((el)=>{observer.unobserve(el)});
    }

  }, []);

}

export default useFadeUp;
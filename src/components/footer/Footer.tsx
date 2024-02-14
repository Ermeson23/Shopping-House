import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {

    const [isFooterFixed, setIsFooterFixed] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
          if (scrollTop > lastScrollTop) {
            setIsFooterFixed(false);
          } else {
            setIsFooterFixed(true);
          }
          lastScrollTop = scrollTop;
        });
      }, []);

    return(
        <footer className={`footer ${isFooterFixed ? 'fixed' : ''}`}>
            <p> &copy; 2024 | Todos os Direitos Reservados</p>
        </footer>
    )
}
/**
 * useFadeUp.js
 * ----------------------------------------
 * Hook responsável por aplicar animações de entrada (fade-up)
 * conforme os elementos entram na viewport.
 *
 * Foco em performance utilizando IntersectionObserver
 * ao invés de eventos de scroll.
 */

import { useEffect } from "react";

function useFadeUp() {
  useEffect(() => {

    // Observer que detecta quando elementos entram na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          // Quando o elemento atinge 20% da viewport
          if (entry.isIntersecting) {

            // Aplica a animação
            entry.target.classList.add("show");

            // Para de observar após animar (otimização)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // 20% visível
      }
    );

    // Seleciona elementos que ainda não animaram
    const observeElements = () => {
      const elements = document.querySelectorAll(".fade-up:not(.show)");
      elements.forEach((el) => observer.observe(el));
    };

    // Observação inicial
    observeElements();

    /**
     * MutationObserver:
     * Garante que elementos adicionados dinamicamente
     * também recebam a animação
     */
    const mutationObserver = new MutationObserver(observeElements);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      mutationObserver.disconnect();
    };

  }, []);
}

export default useFadeUp;
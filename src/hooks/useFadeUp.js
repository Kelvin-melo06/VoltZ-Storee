/**
 * useFadeUp.js
 * ----------------------------------------
 * Hook responsável por aplicar animações de entrada (fade-up)
 * nos elementos da aplicação conforme eles entram na viewport.
 *
 * A implementação prioriza performance, evitando o uso de eventos
 * de scroll e utilizando APIs modernas do navegador.
 */

import { useEffect } from "react";

function useFadeUp() {
  useEffect(() => {

    /**
     * IntersectionObserver:
     * ----------------------
     * Observa quando elementos entram na viewport.
     *
     * Diferente do evento de scroll (que dispara várias vezes por segundo),
     * essa abordagem é mais performática, pois só executa quando necessário.
     */
    const observer = new IntersectionObserver(
      (entries) => {

        /**
         * Para cada elemento observado:
         */
        entries.forEach((entry) => {

          /**
           * entry.isIntersecting:
           * ---------------------
           * Verifica se o elemento atingiu o threshold definido
           * (neste caso, 20% visível na tela).
           */
          if (entry.isIntersecting) {

            /**
             * Adiciona a classe "show", ativando a animação CSS.
             */
            entry.target.classList.add("show");

            /**
             * Remove o elemento da observação após animar,
             * evitando processamento desnecessário (otimização de performance).
             */
            observer.unobserve(entry.target);
          }
        });
      },

      /**
       * threshold: 0.2
       * --------------
       * A callback será acionada quando 20% do elemento estiver visível.
       */
      { threshold: 0.2 },
    );

    /**
     * observeElements:
     * ----------------
     * Seleciona todos os elementos com a classe "fade-up"
     * que ainda não foram animados (não possuem a classe "show")
     * e adiciona eles ao IntersectionObserver.
     */
    const observeElements = () => {
      const elements = document.querySelectorAll(".fade-up:not(.show)");

      elements.forEach((el) => observer.observe(el));
    };

    /**
     * Executa a observação inicial ao montar o componente.
     */
    observeElements();

    /**
     * MutationObserver:
     * -----------------
     * Observa mudanças no DOM, como elementos adicionados dinamicamente.
     *
     * Isso garante que novos elementos com a classe "fade-up"
     * também recebam a animação, mesmo após a montagem inicial.
     */
    const mutationObserver = new MutationObserver(observeElements);

    /**
     * Configuração do observer:
     * - childList: observa adição/remoção de elementos filhos
     * - subtree: observa todos os níveis da árvore DOM
     */
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    /**
     * Cleanup:
     * --------
     * Remove o MutationObserver ao desmontar o componente,
     * evitando vazamentos de memória.
     */
    return () => {
      mutationObserver.disconnect();
    };

  }, []);
}

export default useFadeUp;
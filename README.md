# Pousada do Tchurray e da Maria — Site Oficial

Landing page profissional da pousada em Itapura/SP.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Zero dependências de runtime extras (carrossel e animações implementados sob medida)

## Como rodar

```bash
npm install
npm run dev      # ambiente local
npm run build    # build de produção (dist/)
npm run preview  # prévia do build
```

## Estrutura

```
src/
  components/
    Header.tsx          # header fixo com transição no scroll + menu mobile
    Hero.tsx            # hero em tela cheia com foto real e entrada animada
    About.tsx           # seção "A Pousada" com layout assimétrico
    Amenities.tsx       # estrutura da pousada (composição editorial)
    Itapura.tsx         # seção da cidade com experiências verificáveis
    Gallery.tsx         # carrossel acessível (swipe, teclado, autoplay, lightbox)
    BookingCTA.tsx      # CTA final de reserva
    Footer.tsx          # rodapé com contatos
    WhatsAppButton.tsx  # botão flutuante do WhatsApp
    Reveal.tsx          # wrapper de animação de entrada no scroll
  hooks/
    useReveal.ts        # IntersectionObserver para reveals
  data/
    content.ts          # TODOS os textos, links e fotos (edite aqui)
public/
  images/               # fotos reais otimizadas da pousada
  favicon.svg
```

## Edição de conteúdo

Todos os textos, links do WhatsApp, Instagram e lista de fotos estão centralizados
em `src/data/content.ts`. Nenhuma informação (preços, avaliações, endereço etc.)
foi inventada — complete esses dados conforme a pousada disponibilizar.

## Acessibilidade e performance

- Navegação por teclado no carrossel (setas, Home/End, Enter para ampliar)
- `prefers-reduced-motion` respeitado em CSS e JS (autoplay desligado)
- Lazy loading em todas as imagens abaixo da dobra
- Fotos reais otimizadas (~80 KB cada)
- Sem overflow horizontal em nenhum breakpoint

# Thaís & Giovanni — Home v3

Versão ajustada para reproduzir a referência aprovada:

- envelope com linhas finas;
- aba superior sem transparência;
- menu em botões laterais;
- igreja posicionada no canto inferior esquerdo;
- botões sobrepondo a área da árvore;
- ramos florais laterais em CSS;
- layout mobile-first sem rolagem.

## Como publicar no GitHub Pages

1. Descompacte o ZIP.
2. Envie todo o conteúdo para a raiz do repositório.
3. Confirme que o arquivo `index.html` está na raiz.
4. No GitHub: Settings → Pages → Deploy from a branch → `main` → `/root`.
5. Acesse:

`https://julioprecoma.github.io/convite-casamento-thaisegiovanni/`

## Arquivos principais

- `index.html` — estrutura da Home.
- `assets/css/home.css` — visual, posições, envelope e botões.
- `assets/js/home.js` — clique para abrir o envelope.
- `assets/img/igreja-aquarela.jpg` — imagem da igreja.

## Ajustes rápidos

### Mover o menu para cima ou para baixo

Arquivo: `assets/css/home.css`

Procure:

```css
.menu {
  top: 43vh;
}
```

Aumente para descer; diminua para subir.

### Aumentar ou diminuir os botões

Procure:

```css
.menu-card {
  min-height: clamp(43px, 6.25vh, 53px);
}
```

### Mover a igreja

Procure:

```css
.church {
  width: 97vw;
  left: -18vw;
  bottom: 1.6vh;
}
```

- `width`: tamanho da imagem.
- `left`: deslocamento horizontal.
- `bottom`: altura em relação à base da tela.

### Ajustar espessura das linhas do envelope

Procure:

```css
border: .65px solid var(--purple-line);
```

Use `.5px`, `.7px` ou `1px`.

### Trocar links do menu

No `index.html`, altere os valores `href="..."`.

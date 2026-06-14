# Thaís e Giovanni — Home v2

Primeira página do convite em HTML/CSS/JS puro.

## Arquivos principais

- `index.html` — página inicial.
- `assets/css/home.css` — estilos da Home.
- `assets/js/home.js` — clique de abertura.
- `assets/img/igreja-aquarela.jpg` — fundo principal.
- `assets/img/envelope-reference.jpg` — usado como textura suave do fundo.

## Como alterar os links do menu

Abra `index.html` e edite os `href`:

```html
<a class="menu-card" href="convite.html">
```

Troque `convite.html` pelo destino desejado.

## Como alterar nomes dos botões

No mesmo bloco, altere o texto:

```html
<span>Convite</span>
```

## Como ajustar posição dos botões

Abra `assets/css/home.css` e procure:

```css
.menu {
  right: 15px;
  top: 39.5vh;
  width: min(50vw, 228px);
}
```

- `right` move o menu para a esquerda/direita.
- `top` move para cima/baixo.
- `width` muda a largura dos botões.

## Como ajustar o envelope

Procure no CSS:

```css
.envelope-area {
  top: ...;
  width: ...;
}
```

- `top` move o envelope para cima/baixo.
- `width` aumenta ou diminui.

## Como deixar o menu aberto automaticamente para testes

Abra `assets/js/home.js` e remova o comentário desta linha:

```js
// setTimeout(openHome, 700);
```

Ficará assim:

```js
setTimeout(openHome, 700);
```

## Publicação no GitHub Pages

Suba todos os arquivos na raiz do repositório e acesse:

```text
https://julioprecoma.github.io/convite-casamento-thaisegiovanni/
```

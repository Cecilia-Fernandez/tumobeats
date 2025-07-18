# Tumo Beats!

**Javascript audio player**

## 📦 Descrição

Tumo Beats! é um reprodutor de áudio simples feito com Javascript, HTML e CSS. Ele inclui suporte a Progressive Web App (PWA), permitindo instalação em dispositivos móveis e desktops, com ícones personalizados e tela inicial.

## ⚙️ Instruções

Sempre que alterarmos **qualquer um** dos seguintes ficheiros, é necessário atualizar a **versão do `service-worker.js`** para garantir que o cache seja corretamente invalidado:

### Ficheiros monitorados:
- `index.html`
- `script.js`
- `style.css`
- `manifest.json`
- `images/app_logo.svg`
- `images/icons-192.webp`
- `images/icons-512.webp`
- `images/icons-vector.svg`
- `images/maskable_icon.webp`
- `images/screenshot1.webp`
- `images/screenshot2.webp`

### Como atualizar a versão

Abra o ficheiro `service-worker.js` e localize a constante `VERSION`.

Por exemplo, se estiver assim:

```js
const VERSION = "1.1.0";
```

Atualizar para:

```js
const VERSION = "1.1.0";
```

Nota: É importante alterar a versão para desta forma forçar o update do cache.
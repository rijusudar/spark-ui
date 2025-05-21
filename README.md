# Spark UI

A modern React + TypeScript boilerplate with SCSS, Moment.js, rc-table, i18next internationalization, ESLint, Stylelint, Prettier formatting, and full Webpack configuration including fast refresh and JSX/TSX support.

---

## 🚀 Features

- ⚛️ **React 18** with **TypeScript**
- 🎨 **SCSS** support
- 🕒 **Moment.js** for date formatting
- 📊 **rc-table** for rich table components
- 🌍 **i18next** for internationalization (EN/FR included)
- 🧹 **ESLint** + **Stylelint** for JS and SCSS linting
- 🧼 **Prettier** for consistent formatting (format-on-save enabled)
- 🔥 **Fast refresh** (HMR) with `react-refresh-webpack-plugin`
- ⚙️ **Webpack 5** with alias support

---

## 📁 Project Structure

```
src/
  ├── components/
  ├── Icons/
  ├── Localization/
  ├── styles/
  │   └── theme/
  ├── App.tsx
  ├── index.tsx
  └── i18n.ts
.vscode/
  └── settings.json
```

---

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

Runs the app in development mode with live reload at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Lint & Format

### JavaScript/TypeScript Lint

```bash
npm run lint:js
```

### SCSS Lint

```bash
npm run lint:scss
```

### Format All Code (Prettier)

```bash
npm run format
```

> Format-on-save is enabled via `.vscode/settings.json` for VS Code users.

---

## 🌍 Language Support

This project uses **i18next** via `react-i18next`.

- Default Language: `en`
- Additional Language: `fr`
- Add your keys in `src/i18n.ts`

---

## 📦 Build for Production

```bash
npm run build
```

Builds the app for production into the `/dist` folder.

---

## 📌 Aliases

Webpack alias example:

```js
'@theme': path.resolve(__dirname, 'src/styles/theme')
```

Use it like:

```scss
@import '~@theme/colors';
```

---

## 📬 Feedback

For issues or improvements, feel free to open a pull request or contact the maintainer.

# Création d'un projet pour tester le fonctionnement du reload dans electron
# Cela ne fonctionne pas correctement dans mon projet mesfinancespersonnelles
# Ce projet reproduit au plus près l'environnement de mafinancespersonnelles
#  vite + react + typescript + sass + sqlite3 
git init
add et commit avec vscode
git branch -M main
Création d'un repo dans github
Rattachement du repo au local
git remote add origin https://github.com/AGDBO/electron-reload.git
synchronisation du local et du distant
git pull origin main --allow-unrelated-histories
Résoudre les conflits sur readme.md
Commit



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# electron-reload
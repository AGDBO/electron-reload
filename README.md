# electron-reload

An Electron application with React and TypeScript

# Création d'un projet pour tester le fonctionnement du reload dans electron
# Cela ne fonctionne pas correctement dans mon projet mesfinancespersonnelles
# Ce projet reproduit au plus près l'environnement de mafinancespersonnelles
#  vite + react + typescript + sass + sqlite3 

npm create vite@latest
choisir react puis typescript swc

git init
add et commit avec vscode
git branch -M main
Création d'un repository  sur  github
Rattachement du repo au local
git remote add origin https://github.com/AGDBO/electron-reload.git
synchronisation du local et du distant
git pull origin main --allow-unrelated-histories
Résoudre les conflits sur readme.md
Commit

A ce stade le serveur fonctionne à l'adresse
http://localhost:5173/

Ajout Electron (je me demande si installer seulement electron-vite n'est pas suffisant ? à tester)
npm i electron-vite -D
    "start": "electron-vite preview", // start electron app to preview production build
    "dev": "electron-vite dev", // start dev server and electron app
    "prebuild": "electron-vite build" // build for production

npm create @quick-start/electron electron-reload -- --template react-ts
copier le nouveau répertoire electron-reload sur .

npm install
npm run dev

Création des scripts dans le package.json
npx electron-vite


## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

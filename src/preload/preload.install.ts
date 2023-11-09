/* eslint-disable prettier/prettier */
/**
 * Ce module regroupe toutes les fonctions nécessaires
 * pour interroger la table livre de la base de données mfss.db
 *
 * Ces fonctions sont développées dans le context Electron
 * On utilise l'envoi de message IPC pour communiquer avec le processus main
 * Le processus main a en charge d'executer les requetes sur la DB sqlite3
 * et retourne le résultat sous forme de promesse.
 */
import { ipcRenderer } from 'electron'

const relanceApp = async (): Promise<void> => {
  console.log('Preload  Install relanceApp ');

  await ipcRenderer.send('relanceApplication');
}

// expose les fonctions nécessaires au traitement de l'installation
export const indexBridgeInstall = {
  relanceApp: relanceApp
}

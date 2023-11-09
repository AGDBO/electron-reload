import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown

    BridgeInstall: {
      relanceApp: () => Promise<void>
    }
  }
}

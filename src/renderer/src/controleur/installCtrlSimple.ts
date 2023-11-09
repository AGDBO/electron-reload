/* eslint-disable prettier/prettier */
export async function relanceApp(): Promise<void> {
  console.log('[controleurInstall] relanceApp() : entrée')
  try {
    await window.BridgeInstall.relanceApp()
    console.log('[controleurInstall] relanceApp : OK ')
    
  } catch (error) {
    console.error('[controleurInstall] relanceApp : error ', error)
  }

 
}

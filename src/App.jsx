import { useState } from 'react'
import Preloader from './components/Preloader'
import DesktopWallpaper from './components/retro/DesktopWallpaper'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <Preloader
          brandName="REHAN OS v2.0"
          onComplete={() => setIsLoading(false)}
        />
      )}
      <DesktopWallpaper />
    </>
  )
}

export default App

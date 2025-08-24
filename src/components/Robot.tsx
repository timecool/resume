import { useEffect } from 'react'
import { Application } from '@splinetool/runtime'

const Robot = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      'canvas3d',
    ) as HTMLCanvasElement | null
    if (!canvas) return

    const app = new Application(canvas)

    app
      .load('https://prod.spline.design/DAgbgEEKQnoL31EY/scene.splinecode')
      .then(() => {
        const character = app.findObjectByName('Character')
        if (character) {
          character.position.x -= 1300
        }
      })
      .catch((err) => console.error('Fehler beim Laden der Spline-Szene:', err))
  }, [])

  return (
    <canvas
      id="canvas3d"
      className="w-full h-[70vh] absolute left-0 top-0 z-10"
    />
  )
}

export default Robot

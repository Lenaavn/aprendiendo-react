import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Nuevo Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando las primeras tres palabras para ${fact}`} />}
    </main>
  )
}
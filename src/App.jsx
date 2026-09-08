import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import Container from './components/Container'
import MovieCard from './components/MovieCard'


export default function App() {
  return (
    <>
      <Container>
        <MovieCard

          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bclxYDd5EHUz4TVKjjw0V2EioxC9mYYYR490gYbOzg&s=10"
          anno="2025"
          title="Liberami Dal Nulla"
        />

        <MovieCard

          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXA8njihk-1rzebnxcHKSluOudAUJc7SpqMUi8KE83w&s=10"
          anno="1974"
          title="Altrimenti Ci Arrabbiamo"
        />
        <MovieCard

          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCKu1ROiMF3xdsggDQSgZHO01g7U3etasnW42C3p0Kw&s=10"
          anno="1983"
          title="Nati Con La Camicia"
        />
        <MovieCard

          image="https://m.media-amazon.com/images/M/MV5BYjdhZDg5ZGEtOTdmNS00MTBiLWJlYTAtYjA3MmRjY2NiYTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          anno="1985"
          title="Ritorno al Futuro"
        />
      </Container>
    </>
  )
}



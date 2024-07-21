import '../css/Layout.css'
import '../css/Component.css'
import '../css/kokopu.css'
import React from 'react'
import ChessBoard from '../components/chess_play/ChessBoard.tsx'

export default function Home() {
  return (
    <div className="App">
      <ChessBoard />
    </div>
  )
}

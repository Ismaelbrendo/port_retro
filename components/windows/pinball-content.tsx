"use client"

import { useState, useEffect, useRef } from "react"

export function PinballContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)
  const [ball, setBall] = useState({ x: 150, y: 200, vx: 0, vy: 0 })
  const [leftFlipper, setLeftFlipper] = useState(false)
  const [rightFlipper, setRightFlipper] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gameLoop = () => {
      if (!gameRunning) return

      // Limpar canvas
      ctx.fillStyle = "#1a1a2e"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Desenhar bordas
      ctx.strokeStyle = "#00ff00"
      ctx.lineWidth = 2
      ctx.strokeRect(0, 0, canvas.width, canvas.height)

      // Desenhar flippers
      ctx.fillStyle = "#ff6b6b"

      // Flipper esquerdo
      ctx.save()
      ctx.translate(75, 220)
      ctx.rotate(leftFlipper ? -0.3 : 0.3)
      ctx.fillRect(-20, -4, 40, 8)
      ctx.restore()

      // Flipper direito
      ctx.save()
      ctx.translate(225, 220)
      ctx.rotate(rightFlipper ? 0.3 : -0.3)
      ctx.fillRect(-20, -4, 40, 8)
      ctx.restore()

      // Desenhar obstáculos
      ctx.fillStyle = "#4ecdc4"
      ctx.beginPath()
      ctx.arc(100, 100, 15, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(200, 120, 10, 0, Math.PI * 2)
      ctx.fill()

      // Física da bola
      setBall((prev) => {
        let newX = prev.x + prev.vx
        let newY = prev.y + prev.vy
        let newVx = prev.vx
        let newVy = prev.vy + 0.2 // gravidade

        // Colisão com bordas
        if (newX <= 8 || newX >= canvas.width - 8) {
          newVx = -newVx * 0.8
          newX = newX <= 8 ? 8 : canvas.width - 8
        }
        if (newY <= 8) {
          newVy = -newVy * 0.8
          newY = 8
        }

        // Game over se a bola sair pela parte inferior
        if (newY >= canvas.height - 8) {
          setGameRunning(false)
          return { x: 150, y: 200, vx: 0, vy: 0 }
        }

        // Colisão com obstáculos
        const dist1 = Math.sqrt((newX - 100) ** 2 + (newY - 100) ** 2)
        const dist2 = Math.sqrt((newX - 200) ** 2 + (newY - 120) ** 2)

        if (dist1 < 23) {
          setScore((prev) => prev + 10)
          newVx = (newX - 100) / 8
          newVy = (newY - 100) / 8
        }

        if (dist2 < 18) {
          setScore((prev) => prev + 15)
          newVx = (newX - 200) / 6
          newVy = (newY - 120) / 6
        }

        return { x: newX, y: newY, vx: newVx, vy: newVy }
      })

      // Desenhar bola
      ctx.fillStyle = "#ff4757"
      ctx.beginPath()
      ctx.arc(ball.x, ball.y, 6, 0, Math.PI * 2)
      ctx.fill()

      requestAnimationFrame(gameLoop)
    }

    if (gameRunning) {
      gameLoop()
    }
  }, [gameRunning, ball, leftFlipper, rightFlipper])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "z") {
        setLeftFlipper(true)
      }
      if (e.key === "ArrowRight" || e.key === "x") {
        setRightFlipper(true)
      }
      if (e.key === " ") {
        e.preventDefault()
        if (!gameRunning) {
          startGame()
        }
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "z") {
        setLeftFlipper(false)
      }
      if (e.key === "ArrowRight" || e.key === "x") {
        setRightFlipper(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [gameRunning])

  const startGame = () => {
    setGameRunning(true)
    setScore(0)
    setBall({ x: 150, y: 200, vx: Math.random() * 3 - 1.5, vy: -4 })
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-800">🎯 Retro Pinball</h2>
        <div className="text-sm font-bold text-blue-600">Score: {score}</div>
      </div>

      <div className="bg-black border-2 border-gray-400 rounded p-1">
        <canvas ref={canvasRef} width={300} height={250} className="border border-gray-600 rounded" />
      </div>

      <div className="space-y-1">
        {!gameRunning ? (
          <button
            onClick={startGame}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded border border-green-600 text-xs"
          >
            🚀 Iniciar Jogo (Espaço)
          </button>
        ) : (
          <div className="text-center text-green-600 font-bold text-xs">Jogo em andamento!</div>
        )}

        <div className="text-xs text-gray-600 space-y-0.5">
          <p>
            <strong>Controles:</strong>
          </p>
          <p>• Setas ← → ou Z/X para os flippers</p>
          <p>• Espaço para iniciar</p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Monitor } from "@/components/monitor"
import { BootSequence } from "@/components/boot-sequence"
import { Desktop } from "@/components/desktop"
import { WindowManager } from "@/components/window-manager"

export default function RetroPortfolio() {
  const [bootComplete, setBootComplete] = useState(false)
  const [showDesktop, setShowDesktop] = useState(false)

  useEffect(() => {
    // Simula o tempo de boot
    const bootTimer = setTimeout(() => {
      setBootComplete(true)
      setTimeout(() => setShowDesktop(true), 500)
    }, 4000)

    return () => clearTimeout(bootTimer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8 overflow-hidden">
      {/* Ambiente escuro de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/10 via-gray-900/50 to-black"></div>

      {/* Efeitos de luz ambiente suaves */}
      <div className="absolute top-32 left-32 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-green-400/3 rounded-full blur-3xl"></div>

      {/* Monitor CRT */}
      <div className="relative z-10">
        <Monitor>
          {!bootComplete ? (
            <BootSequence onComplete={() => setBootComplete(true)} />
          ) : showDesktop ? (
            <>
              <Desktop />
              <WindowManager />
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <div className="text-green-400 font-mono text-sm animate-pulse">Carregando desktop...</div>
            </div>
          )}
        </Monitor>
      </div>
    </div>
  )
}

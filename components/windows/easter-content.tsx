"use client"

import { useState } from "react"

export function EasterContent() {
  const [showBSOD, setShowBSOD] = useState(false)
  const [matrixMode, setMatrixMode] = useState(false)
  const [secretCode, setSecretCode] = useState("")

  const handleSecretCode = (code: string) => {
    setSecretCode(code)
    if (code === "1337") {
      setMatrixMode(true)
      setTimeout(() => setMatrixMode(false), 5000)
    } else if (code === "bsod") {
      setShowBSOD(true)
      setTimeout(() => setShowBSOD(false), 3000)
    }
  }

  if (showBSOD) {
    return (
      <div className="fixed inset-0 bg-blue-600 text-white font-mono flex flex-col justify-center items-center z-[9999]">
        <div className="text-center space-y-3 p-4">
          <h1 className="text-2xl font-bold">:(</h1>
          <h2 className="text-sm">Seu PC encontrou um problema e precisa ser reiniciado.</h2>
          <p className="text-xs">Estamos coletando algumas informações de erro e reiniciaremos para você.</p>
          <div className="mt-4">
            <div className="text-xs">0% completo</div>
            <div className="w-40 h-1.5 bg-blue-800 mt-1">
              <div className="h-full bg-white w-0 animate-pulse"></div>
            </div>
          </div>
          <p className="text-xs mt-4">Código de parada: EASTER_EGG_FOUND</p>
        </div>
      </div>
    )
  }

  if (matrixMode) {
    return (
      <div className="fixed inset-0 bg-black text-green-400 font-mono overflow-hidden z-[9999]">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-center space-y-2">
            <h1 className="text-sm animate-pulse">MODO MATRIX ATIVADO</h1>
            <div className="text-xs">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                  {Math.random().toString(36).substring(2, 15)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-gray-800">🥚 Easter Eggs</h2>

      <div className="bg-white border border-gray-300 p-2 rounded space-y-2">
        <div>
          <h3 className="font-bold text-xs text-gray-800 mb-1">🔐 Códigos Secretos</h3>
          <input
            type="text"
            placeholder="Digite um código secreto..."
            className="w-full border border-gray-300 p-1 text-xs"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSecretCode(secretCode)
              }
            }}
          />
          <p className="text-[10px] text-gray-600 mt-0.5">Pressione Enter para ativar</p>
        </div>

        <div className="border-t pt-2">
          <h3 className="font-bold text-xs text-gray-800 mb-1">🎮 Easter Eggs Disponíveis</h3>
          <div className="space-y-1 text-xs">
            <button
              onClick={() => handleSecretCode("bsod")}
              className="block w-full text-left p-1 hover:bg-gray-100 rounded"
            >
              💙 Tela Azul da Morte (código: "bsod")
            </button>
            <button
              onClick={() => handleSecretCode("1337")}
              className="block w-full text-left p-1 hover:bg-gray-100 rounded"
            >
              🟢 Modo Matrix (código: "1337")
            </button>
          </div>
        </div>

        <div className="border-t pt-2">
          <h3 className="font-bold text-xs text-gray-800 mb-1">🎯 Conquistas</h3>
          <div className="space-y-0.5 text-xs text-gray-600">
            <div>🏆 Explorador - Abriu todas as janelas</div>
            <div>🎮 Gamer - Jogou o Pinball</div>
            <div>🔍 Detetive - Encontrou os Easter Eggs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

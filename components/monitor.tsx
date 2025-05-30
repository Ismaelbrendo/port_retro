"use client"

import type { ReactNode } from "react"

interface MonitorProps {
  children: ReactNode
}

export function Monitor({ children }: MonitorProps) {
  return (
    <div className="relative">
      {/* Monitor CRT - Inspirado na imagem de referência */}
      <div className="relative w-[850px] h-[650px] max-w-[90vw] max-h-[85vh]">
        {/* Carcaça principal do monitor - cor bege amarelada como na imagem */}
        <div
          className="absolute inset-0 rounded-t-[2rem] rounded-b-lg shadow-2xl"
          style={{
            background: `linear-gradient(135deg, 
              #f5f1e8 0%, 
              #ede4d3 15%, 
              #e8dcc6 30%, 
              #ddd0b8 50%, 
              #d4c7a9 70%, 
              #cbbf9f 85%, 
              #c2b896 100%)`,
            boxShadow: `
              0 25px 50px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.1)
            `,
          }}
        >
          {/* Detalhes da carcaça superior */}
          <div
            className="absolute top-4 left-8 right-8 h-6 rounded-lg"
            style={{
              background: `linear-gradient(90deg, 
                #e8dcc6 0%, 
                #f0e6d4 50%, 
                #e8dcc6 100%)`,
              boxShadow: `inset 0 2px 4px rgba(0,0,0,0.1)`,
            }}
          >
            {/* Logo/marca */}
            <div className="absolute left-4 top-1 text-gray-600 font-bold text-xs tracking-wider">RETROTECH</div>
            <div className="absolute right-4 top-1 text-gray-500 font-mono text-xs">CRT-2000</div>
          </div>

          {/* Parte inferior com controles */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 rounded-b-lg"
            style={{
              background: `linear-gradient(180deg, 
                #d4c7a9 0%, 
                #cbbf9f 30%, 
                #c2b896 70%, 
                #b8ac88 100%)`,
              boxShadow: `inset 0 2px 4px rgba(0,0,0,0.1)`,
            }}
          >
            {/* Controles e botões */}
            <div className="absolute bottom-4 right-8 flex items-center space-x-4">
              {/* Botões de controle */}
              <div className="flex space-x-2">
                <div
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, #666, #333)`,
                    borderColor: "#999",
                    boxShadow: `inset 0 1px 2px rgba(0,0,0,0.3)`,
                  }}
                ></div>
                <div
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, #666, #333)`,
                    borderColor: "#999",
                    boxShadow: `inset 0 1px 2px rgba(0,0,0,0.3)`,
                  }}
                ></div>
              </div>

              {/* LED de energia */}
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{
                  background: `radial-gradient(circle at 30% 30%, #4ade80, #16a34a)`,
                  boxShadow: `
                    0 0 8px rgba(74, 222, 128, 0.6),
                    inset 0 1px 1px rgba(255,255,255,0.3)
                  `,
                }}
              ></div>
            </div>

            {/* Etiqueta do modelo */}
            <div className="absolute bottom-4 left-8 text-gray-600 font-mono text-xs">MODEL: CRT-2000 • 17" SVGA</div>
          </div>
        </div>

        {/* Moldura da tela - mais profunda e realista */}
        <div
          className="absolute top-16 left-12 right-12 bottom-20 rounded-lg overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #000000 100%)`,
            boxShadow: `
              inset 0 0 20px rgba(0,0,0,0.8),
              inset 0 4px 8px rgba(0,0,0,0.6),
              0 2px 4px rgba(0,0,0,0.3)
            `,
          }}
        >
          {/* Moldura interna da tela */}
          <div
            className="absolute inset-4 rounded overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #000000 100%)`,
              boxShadow: `inset 0 0 15px rgba(0,0,0,0.9)`,
            }}
          >
            {/* Tela propriamente dita */}
            <div className="absolute inset-2 bg-black rounded overflow-hidden">
              {/* Efeito de vidro CRT curvado */}
              <div
                className="absolute inset-0 pointer-events-none rounded"
                style={{
                  background: `
                    radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%),
                    linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)
                  `,
                }}
              ></div>

              {/* Reflexo principal do CRT */}
              <div
                className="absolute top-8 left-8 w-40 h-32 pointer-events-none rounded-full blur-xl"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)`,
                }}
              ></div>

              {/* Linhas de scan CRT */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg, 
                    transparent, 
                    transparent 2px, 
                    rgba(255,255,255,0.1) 2px, 
                    rgba(255,255,255,0.1) 4px
                  )`,
                }}
              ></div>

              {/* Conteúdo da tela */}
              <div className="relative w-full h-full">{children}</div>
            </div>
          </div>
        </div>

        {/* Reflexo geral no monitor */}
        <div
          className="absolute inset-0 rounded-t-[2rem] rounded-b-lg pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)`,
          }}
        ></div>

        {/* Sombra projetada do monitor */}
        <div
          className="absolute -bottom-12 left-8 right-8 h-12 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)`,
          }}
        ></div>

        {/* Detalhes adicionais de profundidade */}
        <div
          className="absolute top-12 left-8 right-8 h-1 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)`,
          }}
        ></div>
      </div>
    </div>
  )
}

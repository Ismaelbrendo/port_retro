"use client"

import { useState, useEffect } from "react"
import { useWindowManager } from "@/hooks/use-window-manager"
import { User, FolderOpen, Mail, FileText, Settings, HelpCircle, Gamepad2, Zap } from "lucide-react"

export function Desktop() {
  const { openWindow } = useWindowManager()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const desktopIcons = [
    { id: "about", name: "Sobre Mim", icon: User, x: 30, y: 30 },
    { id: "projects", name: "Projetos", icon: FolderOpen, x: 30, y: 130 },
    { id: "contact", name: "Contato", icon: Mail, x: 30, y: 230 },
    { id: "resume", name: "Currículo", icon: FileText, x: 30, y: 330 },
    { id: "pinball", name: "Pinball", icon: Gamepad2, x: 30, y: 430 },
    { id: "easter", name: "???", icon: Zap, x: 150, y: 30 },
    { id: "settings", name: "Config", icon: Settings, x: 150, y: 130 },
    { id: "help", name: "Ajuda", icon: HelpCircle, x: 150, y: 230 },
  ]

  return (
    <div className="w-full h-full relative">
      {/* Papel de parede estilo Windows XP */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
        {/* Padrão de fundo sutil */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Efeito de luz no canto */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/20 to-transparent"></div>
      </div>

      {/* Ícones do desktop */}
      {desktopIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute cursor-pointer group"
          style={{ left: icon.x, top: icon.y }}
          onDoubleClick={() => openWindow(icon.id)}
        >
          <div className="flex flex-col items-center p-3 rounded-lg group-hover:bg-white/20 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <icon.icon className="w-7 h-7 text-blue-700" />
            </div>
            <span className="text-white text-xs mt-2 text-center font-medium drop-shadow-lg max-w-16 leading-tight">
              {icon.name}
            </span>
          </div>
        </div>
      ))}

      {/* Barra de tarefas estilo Windows XP */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 border-t-2 border-blue-400 shadow-lg">
        {/* Botão Iniciar */}
        <div className="flex items-center h-full">
          <button className="ml-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 border border-green-700 rounded-r-full px-6 py-2 text-white font-bold text-sm shadow-lg transition-all duration-200 flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-xs">⊞</span>
            </div>
            <span>iniciar</span>
          </button>

          {/* Área de programas abertos */}
          <div className="flex-1 px-4">{/* Aqui apareceriam os programas abertos */}</div>

          {/* Área de notificação */}
          <div className="flex items-center space-x-3 pr-4">
            {/* Ícones de sistema */}
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
              <div className="w-4 h-4 bg-yellow-300 rounded-sm"></div>
            </div>

            {/* Relógio */}
            <div className="bg-blue-700 border border-blue-800 rounded px-3 py-1 text-white text-xs font-mono shadow-inner">
              {time.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { type ReactNode, useState, useRef, useEffect } from "react"
import { useWindowManager } from "@/hooks/use-window-manager"
import { X, Minus, Square } from "lucide-react"

interface WindowProps {
  id: string
  title: string
  children: ReactNode
  x: number
  y: number
  width: number
  height: number
  isActive: boolean
}

export function Window({ id, title, children, x, y, width, height, isActive }: WindowProps) {
  const { closeWindow, focusWindow, updateWindow } = useWindowManager()
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest(".window-header")) {
      setIsDragging(true)
      setDragOffset({
        x: e.clientX - x,
        y: e.clientY - y,
      })
      focusWindow(id)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - width))
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - height))
        updateWindow(id, { x: newX, y: newY })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, dragOffset, updateWindow, id, width, height])

  // Janelas menores para caber na tela do monitor CRT
  return (
    <div
      ref={windowRef}
      className={`absolute bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-400 shadow-2xl rounded-lg overflow-hidden ${
        isActive ? "z-50" : "z-40"
      }`}
      style={{ left: x, top: y, width, height }}
      onMouseDown={handleMouseDown}
    >
      {/* Barra de título estilo Windows XP */}
      <div
        className={`window-header h-6 ${
          isActive
            ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"
            : "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400"
        } border-b border-gray-400 flex items-center justify-between px-2 cursor-move`}
      >
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
          <span className="text-white text-xs font-medium truncate">{title}</span>
        </div>

        <div className="flex space-x-1">
          <button className="w-4 h-4 bg-gradient-to-b from-blue-300 to-blue-400 border border-blue-500 rounded-sm flex items-center justify-center hover:from-blue-200 hover:to-blue-300 transition-colors">
            <Minus className="w-2 h-2 text-blue-800" />
          </button>
          <button className="w-4 h-4 bg-gradient-to-b from-blue-300 to-blue-400 border border-blue-500 rounded-sm flex items-center justify-center hover:from-blue-200 hover:to-blue-300 transition-colors">
            <Square className="w-1.5 h-1.5 text-blue-800" />
          </button>
          <button
            className="w-4 h-4 bg-gradient-to-b from-red-400 to-red-500 border border-red-600 rounded-sm flex items-center justify-center hover:from-red-300 hover:to-red-400 transition-colors"
            onClick={() => closeWindow(id)}
          >
            <X className="w-2 h-2 text-white" />
          </button>
        </div>
      </div>

      {/* Conteúdo da janela */}
      <div
        className="p-3 h-full overflow-auto bg-gradient-to-b from-gray-50 to-gray-100 text-xs"
        style={{ height: height - 24 }}
      >
        {children}
      </div>
    </div>
  )
}

"use client"

import { create } from "zustand"

interface WindowState {
  id: string
  x: number
  y: number
  width: number
  height: number
  isActive: boolean
}

interface WindowManagerState {
  windows: WindowState[]
  openWindow: (id: string) => void
  closeWindow: (id: string) => void
  focusWindow: (id: string) => void
  updateWindow: (id: string, updates: Partial<WindowState>) => void
}

export const useWindowManager = create<WindowManagerState>((set) => ({
  windows: [],

  openWindow: (id: string) =>
    set((state) => {
      // Verifica se a janela já está aberta
      if (state.windows.find((w) => w.id === id)) {
        return {
          windows: state.windows.map((w) => ({
            ...w,
            isActive: w.id === id,
          })),
        }
      }

      // Cria nova janela - tamanhos menores para caber na tela do monitor CRT
      const newWindow: WindowState = {
        id,
        x: 40 + state.windows.length * 20,
        y: 40 + state.windows.length * 20,
        width: 350,
        height: 300,
        isActive: true,
      }

      return {
        windows: [...state.windows.map((w) => ({ ...w, isActive: false })), newWindow],
      }
    }),

  closeWindow: (id: string) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  focusWindow: (id: string) =>
    set((state) => ({
      windows: state.windows.map((w) => ({
        ...w,
        isActive: w.id === id,
      })),
    })),

  updateWindow: (id: string, updates: Partial<WindowState>) =>
    set((state) => ({
      windows: state.windows.map((w) => (w.id === id ? { ...w, ...updates } : w)),
    })),
}))

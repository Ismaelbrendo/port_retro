"use client"

import { useWindowManager } from "@/hooks/use-window-manager"
import { Window } from "@/components/window"
import { AboutContent } from "@/components/windows/about-content"
import { ProjectsContent } from "@/components/windows/projects-content"
import { ContactContent } from "@/components/windows/contact-content"
import { ResumeContent } from "@/components/windows/resume-content"
import { SettingsContent } from "@/components/windows/settings-content"
import { HelpContent } from "@/components/windows/help-content"
import { PinballContent } from "@/components/windows/pinball-content"
import { EasterContent } from "@/components/windows/easter-content"

export function WindowManager() {
  const { windows } = useWindowManager()

  const getWindowContent = (id: string) => {
    switch (id) {
      case "about":
        return <AboutContent />
      case "projects":
        return <ProjectsContent />
      case "contact":
        return <ContactContent />
      case "resume":
        return <ResumeContent />
      case "pinball":
        return <PinballContent />
      case "easter":
        return <EasterContent />
      case "settings":
        return <SettingsContent />
      case "help":
        return <HelpContent />
      default:
        return <div>Conteúdo não encontrado</div>
    }
  }

  const getWindowTitle = (id: string) => {
    switch (id) {
      case "about":
        return "Sobre Mim"
      case "projects":
        return "Meus Projetos"
      case "contact":
        return "Contato"
      case "resume":
        return "Currículo"
      case "pinball":
        return "Retro Pinball"
      case "easter":
        return "Easter Eggs"
      case "settings":
        return "Configurações"
      case "help":
        return "Ajuda"
      default:
        return "Janela"
    }
  }

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={getWindowTitle(window.id)}
          x={window.x}
          y={window.y}
          width={window.width}
          height={window.height}
          isActive={window.isActive}
        >
          {getWindowContent(window.id)}
        </Window>
      ))}
    </>
  )
}

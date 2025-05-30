"use client"

import { useState, useEffect } from "react"

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [text, setText] = useState("")

  const bootSteps = [
    "RETRO COMPUTER SYSTEMS",
    "Copyright (C) 1995-1998 RetroSoft Inc.",
    "",
    "Memory Test: 64MB OK",
    "Detecting IDE drives...",
    "Primary Master: QUANTUM FIREBALL 2.1GB",
    "Primary Slave: None",
    "Secondary Master: CD-ROM DRIVE",
    "Secondary Slave: None",
    "",
    "Loading RETRO-DOS...",
    "",
    "Starting Windows 95...",
    "",
  ]

  useEffect(() => {
    if (currentStep < bootSteps.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + bootSteps[currentStep] + "\n")
        setCurrentStep((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      const completeTimer = setTimeout(onComplete, 1000)
      return () => clearTimeout(completeTimer)
    }
  }, [currentStep, onComplete])

  return (
    <div className="w-full h-full bg-black text-green-400 font-mono text-xs p-4 overflow-hidden">
      <div className="whitespace-pre-line">
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  )
}

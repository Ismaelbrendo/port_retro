export function AboutContent() {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-bold text-gray-800 border-b border-gray-300 pb-1">Sobre Mim</h2>

      <div className="bg-white border border-gray-300 p-3 rounded">
        <div className="flex items-start space-x-3">
          <div className="w-16 h-16 bg-gray-300 border border-gray-400 rounded flex items-center justify-center">
            <span className="text-gray-600 text-xs">FOTO</span>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-sm text-gray-800">Seu Nome</h3>
            <p className="text-gray-600 text-xs">Desenvolvedor Full Stack</p>
            <p className="text-gray-700 mt-1 text-xs leading-relaxed">
              Olá! Sou um desenvolvedor apaixonado por tecnologia e design retrô. Especializado em criar experiências
              digitais únicas que combinam nostalgia com funcionalidade moderna.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-3 rounded">
        <h4 className="font-bold text-xs text-gray-800 mb-1">Habilidades</h4>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div>• JavaScript/TypeScript</div>
          <div>• React/Next.js</div>
          <div>• Node.js</div>
          <div>• Python</div>
          <div>• CSS/Tailwind</div>
          <div>• Git/GitHub</div>
        </div>
      </div>
    </div>
  )
}

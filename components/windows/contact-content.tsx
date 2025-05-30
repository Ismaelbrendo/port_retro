export function ContactContent() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1">Entre em Contato</h2>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-[10px]">@</span>
            </div>
            <div>
              <p className="font-bold text-xs text-gray-800">Email</p>
              <p className="text-gray-600 text-[10px]">seu.email@exemplo.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-[10px]">in</span>
            </div>
            <div>
              <p className="font-bold text-xs text-gray-800">LinkedIn</p>
              <p className="text-gray-600 text-[10px]">linkedin.com/in/seuperfil</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-[10px]">git</span>
            </div>
            <div>
              <p className="font-bold text-xs text-gray-800">GitHub</p>
              <p className="text-gray-600 text-[10px]">github.com/seuusuario</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h4 className="font-bold text-xs text-gray-800 mb-1">Envie uma Mensagem</h4>
        <form className="space-y-2">
          <input type="text" placeholder="Seu nome" className="w-full border border-gray-300 p-1 text-xs" />
          <input type="email" placeholder="Seu email" className="w-full border border-gray-300 p-1 text-xs" />
          <textarea
            placeholder="Sua mensagem"
            rows={3}
            className="w-full border border-gray-300 p-1 text-xs resize-none"
          ></textarea>
          <button className="bg-blue-500 text-white px-3 py-1 border border-blue-600 hover:bg-blue-400 text-xs">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}

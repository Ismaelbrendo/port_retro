export function HelpContent() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1">Ajuda do Sistema</h2>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h3 className="font-bold text-xs text-gray-800 mb-1">Como Usar</h3>

        <div className="space-y-1 text-[10px] text-gray-700">
          <div>
            <p className="font-bold">🖱️ Navegação:</p>
            <p>Clique duplo nos ícones para abrir programas</p>
          </div>

          <div>
            <p className="font-bold">🪟 Janelas:</p>
            <p>Arraste pela barra de título para mover</p>
            <p>Use os botões no canto superior direito para controlar</p>
          </div>

          <div>
            <p className="font-bold">⌨️ Atalhos:</p>
            <p>Alt + F4: Fechar janela ativa</p>
            <p>Ctrl + Alt + Del: Gerenciador de tarefas</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h3 className="font-bold text-xs text-gray-800 mb-1">Sobre o Portfolio</h3>
        <p className="text-[10px] text-gray-700 leading-relaxed">
          Este portfólio foi criado para recriar a experiência nostálgica dos computadores dos anos 90. Cada elemento
          foi cuidadosamente projetado para transportar você de volta à era dourada da computação pessoal.
        </p>
      </div>

      <div className="bg-yellow-100 border border-yellow-300 p-2 rounded">
        <h3 className="font-bold text-xs text-yellow-800 mb-1">💡 Dica</h3>
        <p className="text-[10px] text-yellow-700">
          Explore todos os ícones do desktop para descobrir easter eggs e funcionalidades especiais!
        </p>
      </div>
    </div>
  )
}

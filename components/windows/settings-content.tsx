export function SettingsContent() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1">Configurações</h2>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h3 className="font-bold text-xs text-gray-800 mb-1">Aparência</h3>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-xs">Tema Retrô</span>
            <input type="checkbox" defaultChecked className="w-3 h-3" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-xs">Efeitos CRT</span>
            <input type="checkbox" defaultChecked className="w-3 h-3" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-xs">Sons do Sistema</span>
            <input type="checkbox" className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h3 className="font-bold text-xs text-gray-800 mb-1">Sistema</h3>

        <div className="space-y-1 text-[10px] text-gray-700">
          <p>
            <strong>Versão:</strong> RetroOS 95 v2.1
          </p>
          <p>
            <strong>Memória:</strong> 64MB RAM
          </p>
          <p>
            <strong>Processador:</strong> Intel 486 DX2
          </p>
          <p>
            <strong>Placa de Vídeo:</strong> S3 Trio64
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-gray-500 text-white px-2 py-1 border border-gray-600 hover:bg-gray-400 text-xs mr-1">
          Aplicar
        </button>
        <button className="bg-red-500 text-white px-2 py-1 border border-red-600 hover:bg-red-400 text-xs">
          Restaurar
        </button>
      </div>
    </div>
  )
}

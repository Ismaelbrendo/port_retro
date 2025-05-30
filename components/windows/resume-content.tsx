export function ResumeContent() {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1">Currículo</h2>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h3 className="font-bold text-xs text-gray-800 mb-1">Experiência Profissional</h3>

        <div className="space-y-2">
          <div className="border-l-2 border-blue-500 pl-2">
            <h4 className="font-bold text-xs text-gray-800">Desenvolvedor Full Stack</h4>
            <p className="text-gray-600 text-[10px]">Empresa XYZ • 2022 - Presente</p>
            <p className="text-gray-700 text-[10px] mt-0.5">
              Desenvolvimento de aplicações web modernas usando React, Node.js e PostgreSQL.
            </p>
          </div>

          <div className="border-l-2 border-green-500 pl-2">
            <h4 className="font-bold text-xs text-gray-800">Desenvolvedor Frontend</h4>
            <p className="text-gray-600 text-[10px]">Startup ABC • 2021 - 2022</p>
            <p className="text-gray-700 text-[10px] mt-0.5">
              Criação de interfaces responsivas e experiências de usuário intuitivas.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-2 rounded">
        <h3 className="font-bold text-xs text-gray-800 mb-1">Formação</h3>

        <div className="border-l-2 border-purple-500 pl-2">
          <h4 className="font-bold text-xs text-gray-800">Ciência da Computação</h4>
          <p className="text-gray-600 text-[10px]">Universidade Federal • 2018 - 2022</p>
          <p className="text-gray-700 text-[10px] mt-0.5">Bacharelado com foco em desenvolvimento de software.</p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-green-500 text-white px-3 py-1 border border-green-600 hover:bg-green-400 text-xs">
          📄 Baixar PDF
        </button>
      </div>
    </div>
  )
}

export function ProjectsContent() {
  const projects = [
    {
      name: "Portfolio Retrô",
      description: "Site de portfólio com estética dos anos 90",
      tech: "React, CSS, JavaScript",
      status: "Concluído",
    },
    {
      name: "Sistema de Gestão",
      description: "Aplicação web para gerenciamento empresarial",
      tech: "Next.js, TypeScript, PostgreSQL",
      status: "Em desenvolvimento",
    },
    {
      name: "App Mobile",
      description: "Aplicativo para dispositivos móveis",
      tech: "React Native, Firebase",
      status: "Planejado",
    },
  ]

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1">Meus Projetos</h2>

      {projects.map((project, index) => (
        <div key={index} className="bg-white border border-gray-300 p-2 rounded">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-xs text-gray-800">{project.name}</h3>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded ${
                project.status === "Concluído"
                  ? "bg-green-200 text-green-800"
                  : project.status === "Em desenvolvimento"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-blue-200 text-blue-800"
              }`}
            >
              {project.status}
            </span>
          </div>
          <p className="text-gray-700 text-xs mb-1">{project.description}</p>
          <p className="text-gray-600 text-[10px]">
            <strong>Tecnologias:</strong> {project.tech}
          </p>
        </div>
      ))}
    </div>
  )
}

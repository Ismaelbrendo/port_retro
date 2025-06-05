// Estado global da aplicação
const AppState = {
  bootComplete: false,
  showDesktop: false,
  windows: [],
  activeWindow: null,
  windowZIndex: 50,
}

// Dados das janelas
const WindowData = {
  about: {
    title: "Sobre Mim",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <h2 style="font-size: 1rem; font-weight: bold; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 0.25rem;">Sobre Mim</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.75rem; border-radius: 0.25rem;">
                    <div style="display: flex; gap: 0.75rem;">
                        <div style="width: 4rem; height: 4rem; background: #d1d5db; border: 1px solid #9ca3af; border-radius: 0.25rem; display: flex; align-items: center; justify-content: center;">
                            <span style="color: #6b7280; font-size: 0.75rem;">FOTO</span>
                        </div>
                        <div style="flex: 1;">
                            <h3 style="font-weight: bold; font-size: 0.875rem; color: #374151;">Seu Nome</h3>
                            <p style="color: #6b7280; font-size: 0.75rem;">Desenvolvedor Full Stack</p>
                            <p style="color: #4b5563; margin-top: 0.5rem; font-size: 0.75rem; line-height: 1.4;">
                                Olá! Sou um desenvolvedor apaixonado por tecnologia e design retrô. Especializado em criar experiências
                                digitais únicas que combinam nostalgia com funcionalidade moderna.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.75rem; border-radius: 0.25rem;">
                    <h4 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.5rem;">Habilidades</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem; font-size: 0.75rem;">
                        <div>• JavaScript/TypeScript</div>
                        <div>• React/Next.js</div>
                        <div>• Node.js</div>
                        <div>• Python</div>
                        <div>• CSS/Tailwind</div>
                        <div>• Git/GitHub</div>
                    </div>
                </div>
            </div>
        `,
  },
  projects: {
    title: "Meus Projetos",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 0.25rem;">Meus Projetos</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
                        <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151;">Portfolio Retrô</h3>
                        <span style="font-size: 0.625rem; padding: 0.125rem 0.375rem; border-radius: 0.25rem; background: #dcfce7; color: #166534;">Concluído</span>
                    </div>
                    <p style="color: #4b5563; font-size: 0.75rem; margin-bottom: 0.25rem;">Site de portfólio com estética dos anos 90</p>
                    <p style="color: #6b7280; font-size: 0.625rem;"><strong>Tecnologias:</strong> HTML, CSS, JavaScript</p>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
                        <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151;">Sistema de Gestão</h3>
                        <span style="font-size: 0.625rem; padding: 0.125rem 0.375rem; border-radius: 0.25rem; background: #fef3c7; color: #92400e;">Em desenvolvimento</span>
                    </div>
                    <p style="color: #4b5563; font-size: 0.75rem; margin-bottom: 0.25rem;">Aplicação web para gerenciamento empresarial</p>
                    <p style="color: #6b7280; font-size: 0.625rem;"><strong>Tecnologias:</strong> React, Node.js, PostgreSQL</p>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
                        <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151;">App Mobile</h3>
                        <span style="font-size: 0.625rem; padding: 0.125rem 0.375rem; border-radius: 0.25rem; background: #dbeafe; color: #1e40af;">Planejado</span>
                    </div>
                    <p style="color: #4b5563; font-size: 0.75rem; margin-bottom: 0.25rem;">Aplicativo para dispositivos móveis</p>
                    <p style="color: #6b7280; font-size: 0.625rem;"><strong>Tecnologias:</strong> React Native, Firebase</p>
                </div>
            </div>
        `,
  },
  contact: {
    title: "Contato",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 0.25rem;">Entre em Contato</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 1.5rem; height: 1.5rem; background: #3b82f6; border-radius: 0.25rem; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 0.625rem;">@</span>
                            </div>
                            <div>
                                <p style="font-weight: bold; font-size: 0.75rem; color: #374151;">Email</p>
                                <p style="color: #6b7280; font-size: 0.625rem;">seu.email@exemplo.com</p>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 1.5rem; height: 1.5rem; background: #2563eb; border-radius: 0.25rem; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 0.625rem;">in</span>
                            </div>
                            <div>
                                <p style="font-weight: bold; font-size: 0.75rem; color: #374151;">LinkedIn</p>
                                <p style="color: #6b7280; font-size: 0.625rem;">linkedin.com/in/seuperfil</p>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 1.5rem; height: 1.5rem; background: #374151; border-radius: 0.25rem; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 0.625rem;">git</span>
                            </div>
                            <div>
                                <p style="font-weight: bold; font-size: 0.75rem; color: #374151;">GitHub</p>
                                <p style="color: #6b7280; font-size: 0.625rem;">github.com/seuusuario</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h4 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Envie uma Mensagem</h4>
                    <form style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <input type="text" placeholder="Seu nome" style="width: 100%; border: 1px solid #d1d5db; padding: 0.25rem; font-size: 0.75rem; border-radius: 0.25rem;">
                        <input type="email" placeholder="Seu email" style="width: 100%; border: 1px solid #d1d5db; padding: 0.25rem; font-size: 0.75rem; border-radius: 0.25rem;">
                        <textarea placeholder="Sua mensagem" rows="3" style="width: 100%; border: 1px solid #d1d5db; padding: 0.25rem; font-size: 0.75rem; resize: none; border-radius: 0.25rem;"></textarea>
                        <button type="button" style="background: #3b82f6; color: white; padding: 0.25rem 0.75rem; border: 1px solid #2563eb; border-radius: 0.25rem; font-size: 0.75rem; cursor: pointer;">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        `,
  },
  resume: {
    title: "Currículo",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 0.25rem;">Currículo</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Experiência Profissional</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="border-left: 2px solid #3b82f6; padding-left: 0.5rem;">
                            <h4 style="font-weight: bold; font-size: 0.75rem; color: #374151;">Desenvolvedor Full Stack</h4>
                            <p style="color: #6b7280; font-size: 0.625rem;">Empresa XYZ • 2022 - Presente</p>
                            <p style="color: #4b5563; font-size: 0.625rem; margin-top: 0.125rem;">
                                Desenvolvimento de aplicações web modernas usando React, Node.js e PostgreSQL.
                            </p>
                        </div>
                        
                        <div style="border-left: 2px solid #10b981; padding-left: 0.5rem;">
                            <h4 style="font-weight: bold; font-size: 0.75rem; color: #374151;">Desenvolvedor Frontend</h4>
                            <p style="color: #6b7280; font-size: 0.625rem;">Startup ABC • 2021 - 2022</p>
                            <p style="color: #4b5563; font-size: 0.625rem; margin-top: 0.125rem;">
                                Criação de interfaces responsivas e experiências de usuário intuitivas.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Formação</h3>
                    
                    <div style="border-left: 2px solid #8b5cf6; padding-left: 0.5rem;">
                        <h4 style="font-weight: bold; font-size: 0.75rem; color: #374151;">Ciência da Computação</h4>
                        <p style="color: #6b7280; font-size: 0.625rem;">Universidade Federal • 2018 - 2022</p>
                        <p style="color: #4b5563; font-size: 0.625rem; margin-top: 0.125rem;">Bacharelado com foco em desenvolvimento de software.</p>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button style="background: #10b981; color: white; padding: 0.25rem 0.75rem; border: 1px solid #059669; border-radius: 0.25rem; font-size: 0.75rem; cursor: pointer;">📄 Baixar PDF</button>
                </div>
            </div>
        `,
  },
  pinball: {
    title: "Retro Pinball",
    width: 350,
    height: 400,
    content: `
            <div class="pinball-container">
                <div class="pinball-header">
                    <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151;">🎯 Retro Pinball</h2>
                    <div class="pinball-score">Score: <span id="pinball-score">0</span></div>
                </div>
                
                <div class="pinball-canvas-container">
                    <canvas id="pinball-canvas" class="pinball-canvas" width="300" height="250"></canvas>
                </div>
                
                <div class="pinball-controls">
                    <button id="pinball-start" class="pinball-start-btn">🚀 Iniciar Jogo (Espaço)</button>
                    <div class="pinball-instructions">
                        <p><strong>Controles:</strong></p>
                        <p>• Setas ← → ou Z/X para os flippers</p>
                        <p>• Espaço para iniciar</p>
                    </div>
                </div>
            </div>
        `,
  },
  easter: {
    title: "Easter Eggs",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151;">🥚 Easter Eggs</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <div style="margin-bottom: 0.5rem;">
                        <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">🔐 Códigos Secretos</h3>
                        <input type="text" id="secret-code" placeholder="Digite um código secreto..." style="width: 100%; border: 1px solid #d1d5db; padding: 0.25rem; font-size: 0.75rem; border-radius: 0.25rem;">
                        <p style="font-size: 0.625rem; color: #6b7280; margin-top: 0.125rem;">Pressione Enter para ativar</p>
                    </div>
                    
                    <div style="border-top: 1px solid #d1d5db; padding-top: 0.5rem; margin-bottom: 0.5rem;">
                        <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">🎮 Easter Eggs Disponíveis</h3>
                        <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.75rem;">
                            <button onclick="activateEasterEgg('bsod')" style="width: 100%; text-align: left; padding: 0.25rem; background: transparent; border: none; border-radius: 0.25rem; cursor: pointer; font-size: 0.75rem;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='transparent'">
                                💙 Tela Azul da Morte (código: "bsod")
                            </button>
                            <button onclick="activateEasterEgg('1337')" style="width: 100%; text-align: left; padding: 0.25rem; background: transparent; border: none; border-radius: 0.25rem; cursor: pointer; font-size: 0.75rem;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='transparent'">
                                🟢 Modo Matrix (código: "1337")
                            </button>
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid #d1d5db; padding-top: 0.5rem;">
                        <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">🎯 Conquistas</h3>
                        <div style="display: flex; flex-direction: column; gap: 0.125rem; font-size: 0.75rem; color: #6b7280;">
                            <div>🏆 Explorador - Abriu todas as janelas</div>
                            <div>🎮 Gamer - Jogou o Pinball</div>
                            <div>🔍 Detetive - Encontrou os Easter Eggs</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
  },
  settings: {
    title: "Configurações",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 0.25rem;">Configurações</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Aparência</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="color: #4b5563; font-size: 0.75rem;">Tema Retrô</span>
                            <input type="checkbox" checked style="width: 0.75rem; height: 0.75rem;">
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="color: #4b5563; font-size: 0.75rem;">Efeitos CRT</span>
                            <input type="checkbox" checked style="width: 0.75rem; height: 0.75rem;">
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="color: #4b5563; font-size: 0.75rem;">Sons do Sistema</span>
                            <input type="checkbox" style="width: 0.75rem; height: 0.75rem;">
                        </div>
                    </div>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Sistema</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 0.125rem; font-size: 0.625rem; color: #4b5563;">
                        <p><strong>Versão:</strong> RetroOS 95 v2.1</p>
                        <p><strong>Memória:</strong> 64MB RAM</p>
                        <p><strong>Processador:</strong> Intel 486 DX2</p>
                        <p><strong>Placa de Vídeo:</strong> S3 Trio64</p>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button style="background: #6b7280; color: white; padding: 0.25rem 0.5rem; border: 1px solid #4b5563; border-radius: 0.25rem; font-size: 0.75rem; margin-right: 0.25rem; cursor: pointer;">Aplicar</button>
                    <button style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border: 1px solid #dc2626; border-radius: 0.25rem; font-size: 0.75rem; cursor: pointer;">Restaurar</button>
                </div>
            </div>
        `,
  },
  help: {
    title: "Ajuda",
    width: 350,
    height: 300,
    content: `
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <h2 style="font-size: 0.875rem; font-weight: bold; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 0.25rem;">Ajuda do Sistema</h2>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Como Usar</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.625rem; color: #4b5563;">
                        <div>
                            <p style="font-weight: bold;">🖱️ Navegação:</p>
                            <p>Clique duplo nos ícones para abrir programas</p>
                        </div>
                        
                        <div>
                            <p style="font-weight: bold;">🪟 Janelas:</p>
                            <p>Arraste pela barra de título para mover</p>
                            <p>Use os botões no canto superior direito para controlar</p>
                        </div>
                        
                        <div>
                            <p style="font-weight: bold;">⌨️ Atalhos:</p>
                            <p>Alt + F4: Fechar janela ativa</p>
                            <p>Ctrl + Alt + Del: Gerenciador de tarefas</p>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; border: 1px solid #d1d5db; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #374151; margin-bottom: 0.25rem;">Sobre o Portfolio</h3>
                    <p style="font-size: 0.625rem; color: #4b5563; line-height: 1.4;">
                        Este portfólio foi criado para recriar a experiência nostálgica dos computadores dos anos 90. Cada elemento
                        foi cuidadosamente projetado para transportar você de volta à era dourada da computação pessoal.
                    </p>
                </div>
                
                <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 0.5rem; border-radius: 0.25rem;">
                    <h3 style="font-weight: bold; font-size: 0.75rem; color: #92400e; margin-bottom: 0.125rem;">💡 Dica</h3>
                    <p style="font-size: 0.625rem; color: #92400e;">
                        Explore todos os ícones do desktop para descobrir easter eggs e funcionalidades especiais!
                    </p>
                </div>
            </div>
        `,
  },
}

// Sequência de boot
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

// Inicialização da aplicação
document.addEventListener("DOMContentLoaded", () => {
  startBootSequence()
})

// Sequência de boot
function startBootSequence() {
  const screenContent = document.getElementById("screen-content")
  const bootTemplate = document.getElementById("boot-template")
  const bootElement = bootTemplate.content.cloneNode(true)

  screenContent.appendChild(bootElement)

  const bootText = screenContent.querySelector(".boot-text")
  let currentStep = 0
  let text = ""

  function addBootStep() {
    if (currentStep < bootSteps.length) {
      text += bootSteps[currentStep] + "\n"
      bootText.textContent = text
      currentStep++
      setTimeout(addBootStep, 300)
    } else {
      setTimeout(() => {
        AppState.bootComplete = true
        showDesktop()
      }, 1000)
    }
  }

  addBootStep()
}

// Mostrar desktop
function showDesktop() {
  const screenContent = document.getElementById("screen-content")
  screenContent.innerHTML = ""

  const desktopTemplate = document.getElementById("desktop-template")
  const desktopElement = desktopTemplate.content.cloneNode(true)

  screenContent.appendChild(desktopElement)

  // Inicializar relógio
  updateClock()
  setInterval(updateClock, 1000)

  // Adicionar event listeners para ícones
  const desktopIcons = screenContent.querySelectorAll(".desktop-icon")
  desktopIcons.forEach((icon) => {
    icon.addEventListener("dblclick", function () {
      const windowType = this.getAttribute("data-window")
      openWindow(windowType)
    })
  })

  AppState.showDesktop = true

  // Monitor 3D Rotation Logic
  const monitor3dWrapper = document.querySelector('.monitor-3d-wrapper');
  if (monitor3dWrapper) {
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0; // Added
    let currentRotateX = 0; // Added
    let currentRotateY = 0;
    const rotationSensitivity = 0.5;

    monitor3dWrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY; // Added
      monitor3dWrapper.style.cursor = 'grabbing'; // Optional: change cursor
      document.body.style.userSelect = 'none'; // Optional: prevent text selection

      document.addEventListener('mousemove', handleMonitorDrag);
      document.addEventListener('mouseup', stopMonitorDrag);
    });

    function handleMonitorDrag(e) {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY; // Added
      previousMouseX = e.clientX;
      previousMouseY = e.clientY; // Added

      currentRotateY += deltaX * rotationSensitivity;
      currentRotateX -= deltaY * rotationSensitivity; // Added, -= to invert Y mouse direction

      // Clamp X-axis rotation
      currentRotateX = Math.max(-60, Math.min(60, currentRotateX)); // Added

      monitor3dWrapper.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`; // Updated
    }

    function stopMonitorDrag() {
      if (!isDragging) return;
      isDragging = false;
      monitor3dWrapper.style.cursor = 'grab'; // Optional: revert cursor
      document.body.style.userSelect = ''; // Optional: re-enable text selection

      document.removeEventListener('mousemove', handleMonitorDrag);
      document.removeEventListener('mouseup', stopMonitorDrag);
    }
  } else {
    console.warn("'.monitor-3d-wrapper' not found. Monitor rotation will not work.");
  }
}

// Atualizar relógio
function updateClock() {
  const clock = document.getElementById("clock")
  if (clock) {
    const now = new Date()
    const timeString = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    clock.textContent = timeString
  }
}

// Abrir janela
function openWindow(windowType) {
  // Verificar se a janela já está aberta
  const existingWindow = AppState.windows.find((w) => w.type === windowType)
  if (existingWindow) {
    focusWindow(existingWindow.id)
    return
  }

  const windowData = WindowData[windowType]
  if (!windowData) return

  const windowId = "window-" + Date.now()
  const windowsContainer = document.getElementById("windows-container")

  const windowTemplate = document.getElementById("window-template")
  const windowElement = windowTemplate.content.cloneNode(true)

  const window = windowElement.querySelector(".window")
  window.id = windowId
  window.style.left = 40 + AppState.windows.length * 20 + "px"
  window.style.top = 40 + AppState.windows.length * 20 + "px"
  window.style.width = windowData.width + "px"
  window.style.height = windowData.height + "px"
  window.style.zIndex = ++AppState.windowZIndex

  // Configurar título
  const titleElement = window.querySelector(".window-title")
  titleElement.textContent = windowData.title

  // Configurar conteúdo
  const contentElement = window.querySelector(".window-content")
  contentElement.innerHTML = windowData.content

  // Adicionar event listeners para controles da janela
  const closeButton = window.querySelector(".window-control.close")
  closeButton.addEventListener("click", () => closeWindow(windowId))

  const minimizeButton = window.querySelector(".window-control.minimize")
  minimizeButton.addEventListener("click", () => minimizeWindow(windowId))

  const maximizeButton = window.querySelector(".window-control.maximize")
  maximizeButton.addEventListener("click", () => maximizeWindow(windowId))

  // Adicionar funcionalidade de arrastar
  const header = window.querySelector(".window-header")
  let isDragging = false
  const dragOffset = { x: 0, y: 0 }

  header.addEventListener("mousedown", (e) => {
    isDragging = true
    dragOffset.x = e.clientX - window.offsetLeft
    dragOffset.y = e.clientY - window.offsetTop
    focusWindow(windowId)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  })

  function handleMouseMove(e) {
    if (isDragging) {
      const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - windowData.width))
      const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - windowData.height))
      window.style.left = newX + "px"
      window.style.top = newY + "px"
    }
  }

  function handleMouseUp() {
    isDragging = false
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  windowsContainer.appendChild(windowElement)

  // Adicionar à lista de janelas
  AppState.windows.push({
    id: windowId,
    type: windowType,
    element: window,
  })

  // Focar na nova janela
  focusWindow(windowId)

  // Inicializar funcionalidades específicas da janela
  if (windowType === "pinball") {
    initializePinball()
  } else if (windowType === "easter") {
    initializeEasterEggs()
  }
}

// Focar janela
function focusWindow(windowId) {
  AppState.windows.forEach((w) => {
    if (w.id === windowId) {
      w.element.style.zIndex = ++AppState.windowZIndex
      w.element.classList.add("active")
      const header = w.element.querySelector(".window-header")
      header.classList.remove("inactive")
      AppState.activeWindow = w.id
    } else {
      w.element.classList.remove("active")
      const header = w.element.querySelector(".window-header")
      header.classList.add("inactive")
    }
  })
}

// Fechar janela
function closeWindow(windowId) {
  const windowIndex = AppState.windows.findIndex((w) => w.id === windowId)
  if (windowIndex !== -1) {
    const window = AppState.windows[windowIndex]
    window.element.remove()
    AppState.windows.splice(windowIndex, 1)

    if (AppState.activeWindow === windowId) {
      AppState.activeWindow = null
    }
  }
}

// Minimizar janela
function minimizeWindow(windowId) {
  const window = AppState.windows.find((w) => w.id === windowId)
  if (window) {
    window.element.style.display = "none"
  }
}

// Maximizar janela
function maximizeWindow(windowId) {
  const window = AppState.windows.find((w) => w.id === windowId)
  if (window) {
    // Implementar lógica de maximizar
    console.log("Maximizar janela:", windowId)
  }
}

// Inicializar Pinball
function initializePinball() {
  const canvas = document.getElementById("pinball-canvas")
  const ctx = canvas.getContext("2d")
  const scoreElement = document.getElementById("pinball-score")
  const startButton = document.getElementById("pinball-start")

  let gameRunning = false
  let score = 0
  let ball = { x: 150, y: 200, vx: 0, vy: 0 }
  let leftFlipper = false
  let rightFlipper = false

  startButton.addEventListener("click", startGame)

  // Event listeners para controles
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "z") {
      leftFlipper = true
    }
    if (e.key === "ArrowRight" || e.key === "x") {
      rightFlipper = true
    }
    if (e.key === " ") {
      e.preventDefault()
      if (!gameRunning) {
        startGame()
      }
    }
  })

  document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" || e.key === "z") {
      leftFlipper = false
    }
    if (e.key === "ArrowRight" || e.key === "x") {
      rightFlipper = false
    }
  })

  function startGame() {
    gameRunning = true
    score = 0
    scoreElement.textContent = score
    ball = { x: 150, y: 200, vx: Math.random() * 3 - 1.5, vy: -4 }
    startButton.textContent = "Jogo em andamento!"
    startButton.disabled = true
    gameLoop()
  }

  function gameLoop() {
    if (!gameRunning) return

    // Limpar canvas
    ctx.fillStyle = "#1a1a2e"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Desenhar bordas
    ctx.strokeStyle = "#00ff00"
    ctx.lineWidth = 2
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    // Desenhar flippers
    ctx.fillStyle = "#ff6b6b"

    // Flipper esquerdo
    ctx.save()
    ctx.translate(75, 220)
    ctx.rotate(leftFlipper ? -0.3 : 0.3)
    ctx.fillRect(-20, -4, 40, 8)
    ctx.restore()

    // Flipper direito
    ctx.save()
    ctx.translate(225, 220)
    ctx.rotate(rightFlipper ? 0.3 : -0.3)
    ctx.fillRect(-20, -4, 40, 8)
    ctx.restore()

    // Desenhar obstáculos
    ctx.fillStyle = "#4ecdc4"
    ctx.beginPath()
    ctx.arc(100, 100, 15, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 120, 10, 0, Math.PI * 2)
    ctx.fill()

    // Física da bola
    ball.x += ball.vx
    ball.y += ball.vy
    ball.vy += 0.2 // gravidade

    // Colisão com bordas
    if (ball.x <= 8 || ball.x >= canvas.width - 8) {
      ball.vx = -ball.vx * 0.8
      ball.x = ball.x <= 8 ? 8 : canvas.width - 8
    }
    if (ball.y <= 8) {
      ball.vy = -ball.vy * 0.8
      ball.y = 8
    }

    // Game over se a bola sair pela parte inferior
    if (ball.y >= canvas.height - 8) {
      gameRunning = false
      startButton.textContent = "🚀 Iniciar Jogo (Espaço)"
      startButton.disabled = false
      ball = { x: 150, y: 200, vx: 0, vy: 0 }
      return
    }

    // Colisão com obstáculos
    const dist1 = Math.sqrt((ball.x - 100) ** 2 + (ball.y - 100) ** 2)
    const dist2 = Math.sqrt((ball.x - 200) ** 2 + (ball.y - 120) ** 2)

    if (dist1 < 23) {
      score += 10
      scoreElement.textContent = score
      ball.vx = (ball.x - 100) / 8
      ball.vy = (ball.y - 100) / 8
    }

    if (dist2 < 18) {
      score += 15
      scoreElement.textContent = score
      ball.vx = (ball.x - 200) / 6
      ball.vy = (ball.y - 120) / 6
    }

    // Desenhar bola
    ctx.fillStyle = "#ff4757"
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, 6, 0, Math.PI * 2)
    ctx.fill()

    requestAnimationFrame(gameLoop)
  }
}

// Inicializar Easter Eggs
function initializeEasterEggs() {
  const secretCodeInput = document.getElementById("secret-code")

  if (secretCodeInput) {
    secretCodeInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        activateEasterEgg(this.value)
        this.value = ""
      }
    })
  }
}

// Ativar Easter Egg
function activateEasterEgg(code) {
  if (code === "bsod") {
    showBSOD()
  } else if (code === "1337") {
    showMatrixMode()
  }
}

// Mostrar Tela Azul da Morte
function showBSOD() {
  const bsod = document.createElement("div")
  bsod.className = "bsod"
  bsod.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h1 style="font-size: 2rem; margin-bottom: 1rem;">:(</h1>
            <h2 style="font-size: 1rem; margin-bottom: 0.5rem;">Seu PC encontrou um problema e precisa ser reiniciado.</h2>
            <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">Estamos coletando algumas informações de erro e reiniciaremos para você.</p>
            <div style="margin-top: 1rem;">
                <div style="font-size: 0.75rem;">0% completo</div>
                <div style="width: 10rem; height: 0.375rem; background: #1e40af; margin: 0.25rem auto;">
                    <div style="height: 100%; background: white; width: 0; animation: pulse 2s infinite;"></div>
                </div>
            </div>
            <p style="font-size: 0.75rem; margin-top: 1rem;">Código de parada: EASTER_EGG_FOUND</p>
        </div>
    `

  document.body.appendChild(bsod)

  setTimeout(() => {
    bsod.remove()
  }, 3000)
}

// Mostrar Modo Matrix
function showMatrixMode() {
  const matrix = document.createElement("div")
  matrix.className = "matrix-mode"

  const content = document.createElement("div")
  content.style.textAlign = "center"
  content.innerHTML = `
        <h1 style="font-size: 1rem; animation: pulse 2s infinite; margin-bottom: 1rem;">MODO MATRIX ATIVADO</h1>
        <div style="font-size: 0.75rem;" id="matrix-text"></div>
    `

  matrix.appendChild(content)
  document.body.appendChild(matrix)

  // Gerar texto matrix
  const matrixText = document.getElementById("matrix-text")
  for (let i = 0; i < 10; i++) {
    const line = document.createElement("div")
    line.style.animationDelay = `${i * 100}ms`
    line.style.animation = "pulse 1s infinite"
    line.textContent = Math.random().toString(36).substring(2, 15)
    matrixText.appendChild(line)
  }

  setTimeout(() => {
    matrix.remove()
  }, 5000)
}

// Event listeners globais
document.addEventListener("keydown", (e) => {
  // Alt + F4 para fechar janela ativa
  if (e.altKey && e.key === "F4") {
    e.preventDefault()
    if (AppState.activeWindow) {
      closeWindow(AppState.activeWindow)
    }
  }
})

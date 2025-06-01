// Sons retrô
const retroSounds = {
    hover: new Audio('data:audio/wav;base64,UklGRl9vT19...'), // Som de hover
    click: new Audio('data:audio/wav;base64,UklGRl9vT19...'), // Som de click
    startup: new Audio('data:audio/wav;base64,UklGRl9vT19...') // Som de inicialização
};

// Efeito de inicialização
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    const mainContent = document.querySelector('main');
    
    // Animação inicial
    mainContent.style.opacity = '0';
    heroSection.classList.add('loading');
    
    setTimeout(() => {
        heroSection.classList.remove('loading');
        mainContent.style.opacity = '1';
        retroSounds.startup.play();
        initializeTypewriter();
        initializePressStart();
    }, 1000);

    loadTranslations();
});

// Efeito de máquina de escrever para o título
function initializeTypewriter() {
    const title = document.querySelector('.retro-title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100);
}

// Animação "Press Start"
function initializePressStart() {
    const pressStart = document.querySelector('.press-start');
    pressStart.style.display = 'block';
    
    pressStart.addEventListener('click', () => {
        scrollToContent();
        retroSounds.click.play();
    });
}

// Scroll suave para o conteúdo
function scrollToContent() {
    const aboutSection = document.querySelector('#sobre');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

// Efeito de glitch nos cards de projeto
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        applyGlitchEffect(card);
        retroSounds.hover.play();
    });
});

function applyGlitchEffect(element) {
    element.classList.add('glitch');
    setTimeout(() => {
        element.classList.remove('glitch');
    }, 500);
}

// Barras de progresso animadas para skills
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bars .skill-progress');
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Validação do formulário com estilo retrô
const contactForm = document.querySelector('.retro-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        showRetroAlert('Mensagem enviada com sucesso!');
        contactForm.reset();
    }
});

function validateForm() {
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            showInputError(input);
        } else {
            removeInputError(input);
        }
    });
    
    return isValid;
}

function showInputError(input) {
    input.classList.add('error');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Este campo é obrigatório';
    input.parentElement.appendChild(errorMessage);
}

function removeInputError(input) {
    input.classList.remove('error');
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showRetroAlert(message) {
    alert(message);
}

// Configuração de idiomas
let currentLanguage = 'pt';
let translations = {};

// Carregar traduções
async function loadTranslations() {
    try {
        const response = await fetch(`i18n/${currentLanguage}.json`);
        translations = await response.json();
        updateContent();
        updateActiveLanguageButton();
    } catch (error) {
        console.error('Erro ao carregar traduções:', error);
    }
}

// Atualizar conteúdo
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Obter tradução aninhada
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}

// Trocar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    loadTranslations();
}

// Atualizar botão de idioma ativo
function updateActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="changeLanguage('${currentLanguage}')"]`).classList.add('active');
}
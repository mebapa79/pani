// Quiz functionality
const quizWrapper = document.getElementById('quizWrapper');
const heroBtn = document.getElementById('heroBtn');
const resetBtn = document.getElementById('resetBtn');
const quizResults = document.getElementById('quizResults');
const resultsContent = document.getElementById('resultsContent');

let quizState = {
    currentQuestion: 1,
    category: null,
    frequency: null,
    size: null
};

// Service data
const serviceData = {
    hauswartung: {
        name: 'Hauswartung',
        prices: [
            { description: 'Einfache Reparatur', price: 'CHF 150–300' },
            { description: 'Wartungsvertrag (monatlich)', price: 'CHF 400–800' },
            { description: 'Jahreswartung (umfassend)', price: 'CHF 2000–5000' }
        ]
    },
    reinigung: {
        name: 'Reinigung',
        prices: [
            { description: 'Unterhaltsreinigung (monatlich)', price: 'CHF 500–1200' },
            { description: 'Tiefenreinigung (einmalig)', price: 'CHF 800–2000' },
            { description: 'Fassadenreinigung (pro 100 m²)', price: 'CHF 400–600' }
        ]
    },
    entsorgung: {
        name: 'Entsorgung',
        prices: [
            { description: 'Abfallwirtschaftsvertrag', price: 'CHF 60–150/Monat' },
            { description: 'Entrümpelung (pro m³)', price: 'CHF 80–120' },
            { description: 'Spezialreinigung nach Entrümpelung', price: 'CHF 400–1000' }
        ]
    },
    gartenarbeiten: {
        name: 'Gartenarbeiten',
        prices: [
            { description: 'Rasenmähen (monatlich)', price: 'CHF 100–300' },
            { description: 'Heckenschnitt & Baumschnitt', price: 'CHF 150–500/Einsatz' },
            { description: 'Ganzjahresvertrag (Grünflächenunterhalt)', price: 'CHF 800–2000/Saison' }
        ]
    }
};

// Initialize quiz
function initQuiz() {
    const question1 = document.getElementById('question1');
    const options = question1.querySelectorAll('.quiz__option');

    options.forEach(option => {
        option.addEventListener('click', handleQuizAnswer);
    });
}

function handleQuizAnswer(e) {
    const option = e.currentTarget;
    const question = option.closest('.quiz__question');
    const allOptions = question.querySelectorAll('.quiz__option');

    allOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');

    if (quizState.currentQuestion === 1) {
        quizState.category = option.dataset.category;
        setTimeout(() => showQuestion(2), 300);
    } else if (quizState.currentQuestion === 2) {
        quizState.frequency = option.dataset.frequency;
        setTimeout(() => showQuestion(3), 300);
    } else if (quizState.currentQuestion === 3) {
        quizState.size = option.dataset.size;
        setTimeout(() => showResults(), 300);
    }
}

function showQuestion(questionNumber) {
    const currentQuestion = document.getElementById(`question${quizState.currentQuestion}`);
    const nextQuestion = document.getElementById(`question${questionNumber}`);

    currentQuestion.classList.add('hidden');
    nextQuestion.classList.remove('hidden');

    const options = nextQuestion.querySelectorAll('.quiz__option');
    options.forEach(option => {
        option.addEventListener('click', handleQuizAnswer);
    });

    quizState.currentQuestion = questionNumber;
}

function showResults() {
    document.getElementById(`question${quizState.currentQuestion}`).classList.add('hidden');
    quizResults.classList.remove('hidden');

    resultsContent.innerHTML = '';

    const service = serviceData[quizState.category];
    const priceRange = getPriceRange();

    const html = `
        <div class="result-service">
            <div class="result-service__title">${service.name} für Ihre Bedürfnisse</div>
            <p style="margin: var(--spacing-md) 0; color: var(--color-text-light);">
                Basierend auf Ihre Auswahl: <strong>${frequencyLabel()}</strong>,
                <strong>${sizeLabel()}</strong> Objekt
            </p>
            <div class="result-service__price">${priceRange}</div>
            <p style="margin-top: var(--spacing-md); color: var(--color-text-light); font-size: 0.9375rem;">
                Unverbindliche Preisangabe. Für ein detailliertes Angebot kontaktieren Sie uns direkt.
            </p>
        </div>
    `;

    resultsContent.innerHTML = html;
}

function getPriceRange() {
    const service = serviceData[quizState.category];
    const frequency = quizState.frequency;
    const size = quizState.size;

    if (frequency === 'einmalig') {
        return service.prices[1]?.price || service.prices[0]?.price || 'CHF 300–1000';
    } else if (frequency === 'regelmaessig') {
        return service.prices[0]?.price || 'CHF 400–1000';
    } else {
        if (size === 'klein') {
            return service.prices[0]?.price || 'CHF 400–800';
        } else if (size === 'mittel') {
            return service.prices[1]?.price || service.prices[0]?.price || 'CHF 800–2000';
        } else {
            return service.prices[2]?.price || service.prices[1]?.price || 'CHF 2000–5000';
        }
    }
}

function frequencyLabel() {
    const labels = {
        'einmalig': 'Einmalige Leistung',
        'regelmaessig': 'Regelmäßiger Service',
        'dauerhaft': 'Dauerhafter Vertrag'
    };
    return labels[quizState.frequency] || '';
}

function sizeLabel() {
    const labels = {
        'klein': 'kleine',
        'mittel': 'mittlere',
        'gross': 'große'
    };
    return labels[quizState.size] || '';
}

function resetQuiz() {
    quizState = {
        currentQuestion: 1,
        category: null,
        frequency: null,
        size: null
    };

    document.querySelectorAll('.quiz__question, .quiz__results').forEach(el => {
        el.classList.add('hidden');
    });

    document.getElementById('question1').classList.remove('hidden');
    document.querySelectorAll('.quiz__option.active').forEach(el => {
        el.classList.remove('active');
    });

    initQuiz();
}

// Hero button scroll to quiz
heroBtn.addEventListener('click', () => {
    document.querySelector('.quiz').scrollIntoView({ behavior: 'smooth' });
});

// Reset button
resetBtn.addEventListener('click', resetQuiz);

// Contact form functionality
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!validateEmail(email)) {
        showFormStatus('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
        return;
    }

    if (!validatePhone(phone)) {
        showFormStatus('Bitte geben Sie eine gültige Telefonnummer ein.', 'error');
        return;
    }

    if (name.length < 2) {
        showFormStatus('Bitte geben Sie Ihren Namen ein.', 'error');
        return;
    }

    if (message.length < 10) {
        showFormStatus('Die Nachricht muss mindestens 10 Zeichen lang sein.', 'error');
        return;
    }

    console.log('Form Data:', { name, email, phone, message });
    showFormStatus('Nachricht erfolgreich versendet! Wir melden uns in Kürze bei Ihnen.', 'success');

    contactForm.reset();

    setTimeout(() => {
        formStatus.classList.remove('success', 'error');
        formStatus.textContent = '';
    }, 5000);
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.classList.remove('success', 'error');
    formStatus.classList.add(type);
}

// Impressum modal
const impressumModal = document.getElementById('impressumModal');
const impressumLink = document.querySelector('a[href="#impressum"]');
const modalClose = document.querySelector('.modal__close');

if (impressumLink) {
    impressumLink.addEventListener('click', (e) => {
        e.preventDefault();
        impressumModal.classList.add('active');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        impressumModal.classList.remove('active');
    });
}

window.addEventListener('click', (e) => {
    if (e.target === impressumModal) {
        impressumModal.classList.remove('active');
    }
});

// Quiz Quote Form Handler
const quizQuoteForm = document.getElementById('quizQuoteForm');
const quizFormStatus = document.getElementById('quizFormStatus');

quizQuoteForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('quoteName').value.trim();
    const email = document.getElementById('quoteEmail').value.trim();
    const phone = document.getElementById('quotePhone').value.trim();
    const message = document.getElementById('quoteMessage').value.trim();
    const category = quizState.category;

    if (!validateEmail(email)) {
        showQuizFormStatus('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
        return;
    }

    if (!validatePhone(phone)) {
        showQuizFormStatus('Bitte geben Sie eine gültige Telefonnummer ein.', 'error');
        return;
    }

    if (name.length < 2) {
        showQuizFormStatus('Bitte geben Sie Ihren Namen ein.', 'error');
        return;
    }

    const quoteData = {
        name,
        email,
        phone,
        message,
        service: serviceData[category].name,
        frequency: frequencyLabel(),
        size: sizeLabel()
    };

    console.log('Quote Request:', quoteData);
    showQuizFormStatus('Offerte erfolgreich angefordert! Wir melden uns in Kürze bei Ihnen.', 'success');

    quizQuoteForm.reset();

    setTimeout(() => {
        quizFormStatus.classList.remove('success', 'error');
        quizFormStatus.textContent = '';
    }, 5000);
});

function showQuizFormStatus(message, type) {
    quizFormStatus.textContent = message;
    quizFormStatus.classList.remove('success', 'error');
    quizFormStatus.classList.add(type);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});

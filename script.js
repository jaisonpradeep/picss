const slides = [
    {
        image: 'images/1.jpg',
        title: 'Community Spirit',
        description: 'Coming together to share moments of joy and reflection in a warm, welcoming space.',
        theme: {
            bgPrimary: '#20052C',
            bgSecondary: '#3A0E4C',
            textPrimary: '#FDEFF4',
            textSecondary: '#E5B8F4',
            accent: '#D3265D',
            frameColor: '#4A125E' // Slightly lighter
        }
    },
    {
        image: 'images/2.jpg',
        title: 'Harmony',
        description: 'Music connects us all, creating a symphony of shared emotions and memories.',
        theme: {
            bgPrimary: '#0F1626',
            bgSecondary: '#1C2938',
            textPrimary: '#F5F5F5',
            textSecondary: '#ABBBC2',
            accent: '#FF533D',
            frameColor: '#253545'
        }
    },
    {
        image: 'images/3.jpg',
        title: 'Tradition',
        description: 'Sitting together, listening, and preserving the values that define our community.',
        theme: {
            bgPrimary: '#1A1A00',
            bgSecondary: '#292905',
            textPrimary: '#FFFFF0',
            textSecondary: '#E8E8C9',
            accent: '#CAD108',
            frameColor: '#3D3D0A'
        }
    },
    {
        image: 'images/4.jpg',
        title: 'Engagement',
        description: 'Active participation and attentive hearts make every gathering meaningful.',
        theme: {
            bgPrimary: '#2C061F',
            bgSecondary: '#42082E',
            textPrimary: '#FFE0B5',
            textSecondary: '#E0A890',
            accent: '#FF9A00',
            frameColor: '#590B3F'
        }
    },
    {
        image: 'images/5.jpg',
        title: 'Melody',
        description: 'The keys to our hearts are often played on a piano, leading us in song.',
        theme: {
            bgPrimary: '#002B36',
            bgSecondary: '#073642',
            textPrimary: '#FDF6E3',
            textSecondary: '#93A1A1',
            accent: '#2AA198',
            frameColor: '#094B59'
        }
    }
];

let currentIndex = 0;
const totalSlides = slides.length;

// DOM Elements
const slideImage = document.getElementById('slide-image');
const slideTitle = document.getElementById('slide-title');
const slideDesc = document.getElementById('slide-desc');
const slideNumber = document.getElementById('slide-number');
const indicatorsContainer = document.getElementById('indicators');


// Initialize
function init() {
    createIndicators();
    updateSlide(0);

    // Auto-play
    setInterval(nextSlide, 5000);
}

function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => updateSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
}

function updateSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;

    const slide = slides[currentIndex];

    // Apply Theme
    document.documentElement.style.setProperty('--bg-primary', slide.theme.bgPrimary);
    document.documentElement.style.setProperty('--bg-secondary', slide.theme.bgSecondary);
    document.documentElement.style.setProperty('--text-primary', slide.theme.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', slide.theme.textSecondary);
    document.documentElement.style.setProperty('--accent-color', slide.theme.accent);
    document.documentElement.style.setProperty('--frame-color', slide.theme.frameColor);

    // Update Content
    // Update Image with simple fade
    slideImage.style.opacity = 0;
    setTimeout(() => {
        slideImage.src = slide.image;
        slideImage.style.opacity = 1;
    }, 200);

    slideTitle.innerText = slide.title;
    slideDesc.innerText = slide.description;
    slideNumber.innerText = `0${currentIndex + 1}`;

    // Update Indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((ind, i) => {
        if (i === currentIndex) {
            ind.classList.add('active');
        } else {
            ind.classList.remove('active');
        }
    });

    // Animate Text
    const contentInner = document.querySelector('.content-inner');
    contentInner.style.animation = 'none';
    contentInner.offsetHeight; /* trigger reflow */
    contentInner.style.animation = 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards';
}

function nextSlide() {
    updateSlide(currentIndex + 1);
}

function prevSlide() {
    updateSlide(currentIndex - 1);
}

// Start
init();

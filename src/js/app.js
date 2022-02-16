// Particles Div
const particles = document.getElementById('particles-js');

// --- WATER ELEMENT ---
const waterElement = document.getElementById('water-element');
waterElement.addEventListener('click', function() {
    particles.remove();
    document.body.innerHTML = createWaterDiv();

    clickCounter();
    operationsCounter();
    timer();

    calculator();

    // --- Button Standard Themes ---
    const buttonStandardThemes = document.getElementById('standard-themes-btn');
    const modalStandardThemes = document.getElementById('standard-themes-modal');

    // --- Button Premium Themes ---
    const buttonPremiumThemes = document.getElementById('premium-themes-btn');
    const modalPremiumThemes = document.getElementById('premium-themes-modal');

    // Open modal Standard Themes
    buttonStandardThemes.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 1;   
        modalStandardThemes.style.zIndex = 10;    
    });

    // Open modal Premium Themes - If #operations >= 25
    buttonPremiumThemes.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations');
        let totalOperationsAmount = parseInt(totalOperations.innerHTML);
        if (totalOperationsAmount >= 25) {
            modalPremiumThemes.style.opacity = 1;   
            modalPremiumThemes.style.zIndex = 10; 
        }

        // Removes the lock if amount of operations is enough
        if (totalOperationsAmount >= 50) {
            if (!!document.querySelector('.love-unlock')) {
                const loveElement = document.getElementById('love-element');
                const lockLove = document.querySelector('.love-unlock');
                lockLove.remove();
                loveElement.style.justifyContent = "center";
            }
        }
       
        if (totalOperationsAmount >= 75) {
            if (!!document.querySelector('.fade-unlock')) {
                const fadeElement = document.getElementById('fade-element');
                const lockfade = document.querySelector('.fade-unlock');
                lockfade.remove();
                fadeElement.style.justifyContent = "center";
            }
        }

        if (totalOperationsAmount >= 100) {
            if (!!document.querySelector('.aurora-unlock')) {
                const auroraElement = document.getElementById('aurora-element');
                const lockaurora = document.querySelector('.aurora-unlock');
                lockaurora.remove();
                auroraElement.style.justifyContent = "center";
            }
        }
    });

    // If click outside modal it closes
    window.addEventListener('click', function(e) {
        if(e.target == modalStandardThemes) {
            modalStandardThemes.style.opacity = 0;   
            modalStandardThemes.style.zIndex = -1; 
        } else if (e.target == modalPremiumThemes) {
            modalPremiumThemes.style.opacity = 0;
            modalPremiumThemes.style.zIndex = -1;
        }
    });

    const waterElement = document.getElementById('water-element');
    waterElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--water-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('water');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(function(element) {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-water');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #1dc3da 0%, #0f3961 100%)";
    });

    const airElement = document.getElementById('air-element');
    airElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--air-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('air');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-air');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #94B5BF, #3D5D7B)";
    });

    const fireElement = document.getElementById('fire-element');
    fireElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--fire-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('fire');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-fire');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #F6D525, #FA9805)";
    });

    const earthElement = document.getElementById('earth-element');
    earthElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--earth-gradient)";
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('earth');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-earth');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #B1E51D, #10B43E)";
    });

    const sunsetElement = document.getElementById('sunset-element');
    sunsetElement.addEventListener('click', function() {
        modalPremiumThemes.style.opacity = 0;   
        modalPremiumThemes.style.zIndex = -1; 

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "linear-gradient(#1b4592, #f14115)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('sunset');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-sunset');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #d62167, #e6281a)";
    });

    const loveElement = document.getElementById('love-element');
    loveElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 50) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f30bad, #ce1c25ee)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('love');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-love');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f30bad, #ce1c25ee)";
        }
    });

    const fadeElement = document.getElementById('fade-element');
    fadeElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 75) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f8e806, #ff00dd)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('fade');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-fade');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #ec9613, #e719a3)";
        }
    });

    const auroraElement = document.getElementById('aurora-element');
    auroraElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 100) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#1eecca, #e01fd7)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.add('aurora');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-sunset');
                element.classList.add('button-operator-aurora');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f06ae5, #d61db7)";
        }
    });
});


// --- AIR ELEMENT ---
const airElement = document.getElementById('air-element');
airElement.addEventListener('click', function() {
    particles.remove();
    document.body.innerHTML = createAirDiv();

    clickCounter();
    operationsCounter();
    timer();

    calculator();

    // --- Button Standard Themes ---
    const buttonStandardThemes = document.getElementById('standard-themes-btn');
    const modalStandardThemes = document.getElementById('standard-themes-modal');

    // --- Button Premium Themes ---
    const buttonPremiumThemes = document.getElementById('premium-themes-btn');
    const modalPremiumThemes = document.getElementById('premium-themes-modal');

    // Open modal Standard Themes
    buttonStandardThemes.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 1;   
        modalStandardThemes.style.zIndex = 10;    
    });

    // Open modal Premium Themes - If #operations >= 25
    buttonPremiumThemes.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations');
        let totalOperationsAmount = parseInt(totalOperations.innerHTML);
        if (totalOperationsAmount >= 25) {
            modalPremiumThemes.style.opacity = 1;   
            modalPremiumThemes.style.zIndex = 10; 
        }

        // Removes the lock if amount of operations is enough
        if (totalOperationsAmount >= 50) {
            if (!!document.querySelector('.love-unlock')) {
                const loveElement = document.getElementById('love-element');
                const lockLove = document.querySelector('.love-unlock');
                lockLove.remove();
                loveElement.style.justifyContent = "center";
            }
        }
       
        if (totalOperationsAmount >= 75) {
            if (!!document.querySelector('.fade-unlock')) {
                const fadeElement = document.getElementById('fade-element');
                const lockfade = document.querySelector('.fade-unlock');
                lockfade.remove();
                fadeElement.style.justifyContent = "center";
            }
        }

        if (totalOperationsAmount >= 100) {
            if (!!document.querySelector('.aurora-unlock')) {
                const auroraElement = document.getElementById('aurora-element');
                const lockaurora = document.querySelector('.aurora-unlock');
                lockaurora.remove();
                auroraElement.style.justifyContent = "center";
            }
        }
    });

    // If click outside modal it closes
    window.addEventListener('click', function(e) {
        if(e.target == modalStandardThemes) {
            modalStandardThemes.style.opacity = 0;   
            modalStandardThemes.style.zIndex = -1; 
        } else if (e.target == modalPremiumThemes) {
            modalPremiumThemes.style.opacity = 0;
            modalPremiumThemes.style.zIndex = -1;
        }
    });

    const waterElement = document.getElementById('water-element');
    waterElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--water-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('water');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(function(element) {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-water');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #1dc3da 0%, #0f3961 100%)";
    });

    const airElement = document.getElementById('air-element');
    airElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--air-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('air');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-air');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #94B5BF, #3D5D7B)";
    });

    const fireElement = document.getElementById('fire-element');
    fireElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--fire-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('fire');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-fire');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #F6D525, #FA9805)";
    });

    const earthElement = document.getElementById('earth-element');
    earthElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--earth-gradient)";
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('earth');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-earth');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #B1E51D, #10B43E)";
    });

    const sunsetElement = document.getElementById('sunset-element');
    sunsetElement.addEventListener('click', function() {
        modalPremiumThemes.style.opacity = 0;   
        modalPremiumThemes.style.zIndex = -1; 

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "linear-gradient(#1b4592, #f14115)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('sunset');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-sunset');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #d62167, #e6281a)";
    });

    const loveElement = document.getElementById('love-element');
    loveElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 50) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f30bad, #ce1c25ee)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('love');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-love');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f30bad, #ce1c25ee)";
        }
    });

    const fadeElement = document.getElementById('fade-element');
    fadeElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 75) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f8e806, #ff00dd)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('fade');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-fade');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #ec9613, #e719a3)";
        }
    });

    const auroraElement = document.getElementById('aurora-element');
    auroraElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 100) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#1eecca, #e01fd7)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.add('aurora');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-sunset');
                element.classList.add('button-operator-aurora');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f06ae5, #d61db7)";
        }
    });
});


// --- FIRE ELEMENT ---
const fireElement = document.getElementById('fire-element');
fireElement.addEventListener('click', function() {
    particles.remove();
    document.body.innerHTML = createFireDiv();

    clickCounter();
    operationsCounter();
    timer();

    calculator();

    // --- Button Standard Themes ---
    const buttonStandardThemes = document.getElementById('standard-themes-btn');
    const modalStandardThemes = document.getElementById('standard-themes-modal');

    // --- Button Premium Themes ---
    const buttonPremiumThemes = document.getElementById('premium-themes-btn');
    const modalPremiumThemes = document.getElementById('premium-themes-modal');

    // Open modal Standard Themes
    buttonStandardThemes.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 1;   
        modalStandardThemes.style.zIndex = 10;    
    });

    // Open modal Premium Themes - If #operations >= 25
    buttonPremiumThemes.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations');
        let totalOperationsAmount = parseInt(totalOperations.innerHTML);
        if (totalOperationsAmount >= 25) {
            modalPremiumThemes.style.opacity = 1;   
            modalPremiumThemes.style.zIndex = 10; 
        }

        // Removes the lock if amount of operations is enough
        if (totalOperationsAmount >= 50) {
            if (!!document.querySelector('.love-unlock')) {
                const loveElement = document.getElementById('love-element');
                const lockLove = document.querySelector('.love-unlock');
                lockLove.remove();
                loveElement.style.justifyContent = "center";
            }
        }
       
        if (totalOperationsAmount >= 75) {
            if (!!document.querySelector('.fade-unlock')) {
                const fadeElement = document.getElementById('fade-element');
                const lockfade = document.querySelector('.fade-unlock');
                lockfade.remove();
                fadeElement.style.justifyContent = "center";
            }
        }

        if (totalOperationsAmount >= 100) {
            if (!!document.querySelector('.aurora-unlock')) {
                const auroraElement = document.getElementById('aurora-element');
                const lockaurora = document.querySelector('.aurora-unlock');
                lockaurora.remove();
                auroraElement.style.justifyContent = "center";
            }
        }
    });

    // If click outside modal it closes
    window.addEventListener('click', function(e) {
        if(e.target == modalStandardThemes) {
            modalStandardThemes.style.opacity = 0;   
            modalStandardThemes.style.zIndex = -1; 
        } else if (e.target == modalPremiumThemes) {
            modalPremiumThemes.style.opacity = 0;
            modalPremiumThemes.style.zIndex = -1;
        }
    });

    const waterElement = document.getElementById('water-element');
    waterElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--water-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('water');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(function(element) {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-water');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #1dc3da 0%, #0f3961 100%)";
    });

    const airElement = document.getElementById('air-element');
    airElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--air-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('air');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-air');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #94B5BF, #3D5D7B)";
    });

    const fireElement = document.getElementById('fire-element');
    fireElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--fire-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('fire');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-fire');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #F6D525, #FA9805)";
    });

    const earthElement = document.getElementById('earth-element');
    earthElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--earth-gradient)";
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('earth');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-earth');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #B1E51D, #10B43E)";
    });

    const sunsetElement = document.getElementById('sunset-element');
    sunsetElement.addEventListener('click', function() {
        modalPremiumThemes.style.opacity = 0;   
        modalPremiumThemes.style.zIndex = -1; 

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "linear-gradient(#1b4592, #f14115)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('sunset');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-sunset');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #d62167, #e6281a)";
    });

    const loveElement = document.getElementById('love-element');
    loveElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 50) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f30bad, #ce1c25ee)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('love');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-love');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f30bad, #ce1c25ee)";
        }
    });

    const fadeElement = document.getElementById('fade-element');
    fadeElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 75) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f8e806, #ff00dd)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('fade');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-fade');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #ec9613, #e719a3)";
        }
    });

    const auroraElement = document.getElementById('aurora-element');
    auroraElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 100) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#1eecca, #e01fd7)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.add('aurora');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-sunset');
                element.classList.add('button-operator-aurora');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f06ae5, #d61db7)";
        }
    });
});


// --- EARTH ELEMENT ---
const earthElement = document.getElementById('earth-element');
earthElement.addEventListener('click', function() {
    particles.remove();
    document.body.innerHTML = createEarthDiv();

    clickCounter();
    operationsCounter();
    timer();

    calculator();

    // --- Button Standard Themes ---
    const buttonStandardThemes = document.getElementById('standard-themes-btn');
    const modalStandardThemes = document.getElementById('standard-themes-modal');

    // --- Button Premium Themes ---
    const buttonPremiumThemes = document.getElementById('premium-themes-btn');
    const modalPremiumThemes = document.getElementById('premium-themes-modal');

    // Open modal Standard Themes
    buttonStandardThemes.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 1;   
        modalStandardThemes.style.zIndex = 10;    
    });

    // Open modal Premium Themes - If #operations >= 25
    buttonPremiumThemes.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations');
        let totalOperationsAmount = parseInt(totalOperations.innerHTML);
        if (totalOperationsAmount >= 25) {
            modalPremiumThemes.style.opacity = 1;   
            modalPremiumThemes.style.zIndex = 10; 
        }

        // Removes the lock if amount of operations is enough
        if (totalOperationsAmount >= 50) {
            if (!!document.querySelector('.love-unlock')) {
                const loveElement = document.getElementById('love-element');
                const lockLove = document.querySelector('.love-unlock');
                lockLove.remove();
                loveElement.style.justifyContent = "center";
            }
        }
       
        if (totalOperationsAmount >= 75) {
            if (!!document.querySelector('.fade-unlock')) {
                const fadeElement = document.getElementById('fade-element');
                const lockfade = document.querySelector('.fade-unlock');
                lockfade.remove();
                fadeElement.style.justifyContent = "center";
            }
        }

        if (totalOperationsAmount >= 100) {
            if (!!document.querySelector('.aurora-unlock')) {
                const auroraElement = document.getElementById('aurora-element');
                const lockaurora = document.querySelector('.aurora-unlock');
                lockaurora.remove();
                auroraElement.style.justifyContent = "center";
            }
        }
    });

    // If click outside modal it closes
    window.addEventListener('click', function(e) {
        if(e.target == modalStandardThemes) {
            modalStandardThemes.style.opacity = 0;   
            modalStandardThemes.style.zIndex = -1; 
        } else if (e.target == modalPremiumThemes) {
            modalPremiumThemes.style.opacity = 0;
            modalPremiumThemes.style.zIndex = -1;
        }
    });

    const waterElement = document.getElementById('water-element');
    waterElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--water-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('water');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(function(element) {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-water');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #1dc3da 0%, #0f3961 100%)";
    });

    const airElement = document.getElementById('air-element');
    airElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--air-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('air');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-air');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #94B5BF, #3D5D7B)";
    });

    const fireElement = document.getElementById('fire-element');
    fireElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--fire-gradient)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('fire');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-fire');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #F6D525, #FA9805)";
    });

    const earthElement = document.getElementById('earth-element');
    earthElement.addEventListener('click', function() {
        modalStandardThemes.style.opacity = 0;   
        modalStandardThemes.style.zIndex = -1;

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "var(--earth-gradient)";
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('sunset');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('earth');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-sunset');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-earth');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #B1E51D, #10B43E)";
    });

    const sunsetElement = document.getElementById('sunset-element');
    sunsetElement.addEventListener('click', function() {
        modalPremiumThemes.style.opacity = 0;   
        modalPremiumThemes.style.zIndex = -1; 

        const gradientContainer = document.getElementById('gradient-container');
        gradientContainer.style.backgroundImage = "linear-gradient(#1b4592, #f14115)";
        gradientContainer.classList.remove('earth');
        gradientContainer.classList.remove('air');
        gradientContainer.classList.remove('fire');
        gradientContainer.classList.remove('water');
        gradientContainer.classList.remove('love');
        gradientContainer.classList.remove('fade');
        gradientContainer.classList.remove('aurora');
        gradientContainer.classList.add('sunset');

        const buttonsOperators = document.querySelectorAll('.button-operator');
        buttonsOperators.forEach(element => {
            element.classList.remove('button-operator-air');
            element.classList.remove('button-operator-fire');
            element.classList.remove('button-operator-earth');
            element.classList.remove('button-operator-water');
            element.classList.remove('button-operator-love');
            element.classList.remove('button-operator-fade');
            element.classList.remove('button-operator-aurora');
            element.classList.add('button-operator-sunset');
        });

        const buttonEqual = document.querySelector('.button-equal');
        buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #d62167, #e6281a)";
    });

    const loveElement = document.getElementById('love-element');
    loveElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 50) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f30bad, #ce1c25ee)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('love');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-love');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f30bad, #ce1c25ee)";
        }
    });

    const fadeElement = document.getElementById('fade-element');
    fadeElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 75) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#f8e806, #ff00dd)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.remove('aurora');
            gradientContainer.classList.add('fade');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-sunset');
                element.classList.remove('button-operator-aurora');
                element.classList.add('button-operator-fade');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #ec9613, #e719a3)";
        }
    });

    const auroraElement = document.getElementById('aurora-element');
    auroraElement.addEventListener('click', function() {
        const totalOperations = document.getElementById('total-operations').innerHTML;
        if (totalOperations >= 100) {
            modalPremiumThemes.style.opacity = 0;   
            modalPremiumThemes.style.zIndex = -1; 
    
            const gradientContainer = document.getElementById('gradient-container');
            gradientContainer.style.backgroundImage = "linear-gradient(#1eecca, #e01fd7)";
            gradientContainer.classList.remove('earth');
            gradientContainer.classList.remove('air');
            gradientContainer.classList.remove('fire');
            gradientContainer.classList.remove('water');
            gradientContainer.classList.remove('love');
            gradientContainer.classList.remove('fade');
            gradientContainer.classList.remove('sunset');
            gradientContainer.classList.add('aurora');
    
            const buttonsOperators = document.querySelectorAll('.button-operator');
            buttonsOperators.forEach(element => {
                element.classList.remove('button-operator-air');
                element.classList.remove('button-operator-fire');
                element.classList.remove('button-operator-earth');
                element.classList.remove('button-operator-water');
                element.classList.remove('button-operator-love');
                element.classList.remove('button-operator-fade');
                element.classList.remove('button-operator-sunset');
                element.classList.add('button-operator-aurora');
            });
    
            const buttonEqual = document.querySelector('.button-equal');
            buttonEqual.style.backgroundImage = "linear-gradient(to bottom right, #f06ae5, #d61db7)";
        }
    });
});


// Timer
function timer() {
    seconds = 0;
    minutes = 0;

    let secs = document.getElementById('seconds');
    let mins = document.getElementById('minutes');

    window.setInterval(function() {
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            mins.innerHTML = minutes;
        }
        
        seconds++;
        secs.innerHTML = seconds;
    }, 1000);
}

// Click Counter
function clickCounter() {
    let clicks = document.getElementById('total-clicks');

    const calculatorButtons = document.querySelectorAll('.button');
    calculatorButtons.forEach(element => {
        element.addEventListener('click', () => {
            totalClicks = parseInt(clicks.innerHTML);
            totalClicks++;
            clicks.innerHTML = totalClicks;
        })
    })
}

// Operations Counter
function operationsCounter() {
    const equalButton = document.querySelector('.button-equal');
    equalButton.addEventListener('click', () => {
        let operations = document.getElementById('total-operations');
        let displayOperation = document.querySelector('.operation');
        if (displayOperation.value != "") {
            totalOperations = parseInt(operations.innerHTML);
            totalOperations++;
            operations.innerHTML = totalOperations;
        }

        // If #operations >= 25 remove lock
        if (totalOperations >= 25) {
            if (!!document.querySelector('.themes-premium-unlock')) {
                const lock = document.querySelector('.themes-premium-unlock');
                lock.remove();
            }
        }
    });
}


// Alert when trying to reload
window.onbeforeunload = function() {
    return "";
}

// Changes the Background Gradient (No using)
function changeBgGradient(gradient) {
    document.getElementById('particles-js').style.backgroundImage = gradient;
}



// --- CREATE THE DIFERENTS ELEMENTS HTML --- 
function createWaterDiv() {
    return '<div id="gradient-container" class="water"><div class="stats"><div class="stats-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"/></svg><h2>Stats</h2></div><div class="stats-quantity"><p>Total Operations: <span id="total-operations">0</span></p><p>Total Clicks: <span id="total-clicks">0</span></p></div><div class="time"><p>Time: <span><span id="minutes">0</span>m <span id="seconds">0</span>s</span></p></div></div><form class="calculator"><div class="display"><input class="display-input operation" type="text" value="" disabled><input class="display-input result" type="text" value="0" disabled></div><div class="buttons-grid"><input id="btn-c" class="button button-operator button-operator-water" type="button" value="C"><input id="btn-del" class="button button-operator button-operator-water" type="button" value="D"><input id="btn-percentage" class="button button-operator button-operator-water" type="button" value="%"><input id="btn-div" class="button button-operator button-operator-water" type="button" value="/"><input id="btn-7" class="button" type="button" value="7"><input id="btn-8" class="button" type="button" value="8"><input id="btn-9" class="button" type="button" value="9"><input id="btn-mult" class="button button-operator button-operator-water" type="button" value="x"><input id="btn-4" class="button" type="button" value="4"><input id="btn-5" class="button" type="button" value="5"><input id="btn-6" class="button" type="button" value="6"><input id="btn-sub" class="button button-operator button-operator-water" type="button" value="-"><input id="btn-1" class="button" type="button" value="1"><input id="btn-2" class="button" type="button" value="2"><input id="btn-3" class="button" type="button" value="3"><input id="btn-add" class="button button-operator button-operator-water" type="button" value="+"><input id="btn-0" class="button" type="button" value="0"><input id="btn-dot" class="button" type="button" value="."><input id="btn-equal" class="button button-equal button-equal-water" type="button" value="="></div></form><div class="themes"><div class="themes-standard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/></svg><button id="standard-themes-btn" class="themes-btn">Standard Themes</button></div><div class="themes-premium"><div class="themes-premium-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg><button id="premium-themes-btn" class="themes-btn">Premium Themes</button></div><div class="themes-premium-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 25 operations to unlock</p></div></div></div><div id="standard-themes-modal" class="standard-themes-modal"><section class="element-selection stm-container"><h1>Choose an Element</h1><div class="elements"><button id="water-element" class="element"><img src="./assets/images/water.png" alt="water element"> <h2>Water</h2></button><button id="air-element" class="element"><img src="./assets/images/air.png" alt="air element"><h2>Air</h2></button><button id="fire-element" class="element"><img src="./assets/images/fire.png" alt="fire element"><h2>Fire</h2></button><button id="earth-element" class="element"><img src="./assets/images/earth.png" alt="earth element"><h2>Earth</h2></button></div></section></div><div id="premium-themes-modal" class="standard-themes-modal premium-themes-modal"><section class="element-selection stm-container ptm-container"><h1>Premium Themes</h1><div class="elements"><button id="sunset-element" class="element"><img class="sunset-img" src="./assets/images/sunset.png" alt="water element"> <h2>Sunset</h2></button><button id="love-element" class="element"><img class="aurora-img" src="./assets/images/love.png" alt="air element"><h2>Love</h2><div class="element-unlock love-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 50 operations to unlock</p></div></button><button id="fade-element" class="element"><img src="./assets/images/fade.png" alt="fire element"><h2>Fade</h2><div class="element-unlock fade-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 75 operations to unlock</p></div></button><button id="aurora-element" class="element"><img src="./assets/images/aurora.png" alt="earth element"><h2>Boreal Aurora</h2><div class="element-unlock aurora-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 100 operations to unlock</p></div></button></div></section></div><footer class="footer"><h3>© 2022 Elemental Calculator</h3></footer></div>';
}

function createAirDiv() {
    return '<div id="gradient-container" class="air"><div class="stats"><div class="stats-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"/></svg><h2>Stats</h2></div><div class="stats-quantity"><p>Total Operations: <span id="total-operations">0</span></p><p>Total Clicks: <span id="total-clicks">0</span></p></div><div class="time"><p>Time: <span><span id="minutes">0</span>m <span id="seconds">0</span>s</span></p></div></div><form class="calculator"><div class="display"><input class="display-input operation" type="text" value="" disabled><input class="display-input result" type="text" value="0" disabled></div><div class="buttons-grid"><input id="btn-c" class="button button-operator button-operator-air" type="button" value="C"><input id="btn-del" class="button button-operator button-operator-air" type="button" value="D"><input id="btn-percentage" class="button button-operator button-operator-air" type="button" value="%"><input id="btn-div" class="button button-operator button-operator-air" type="button" value="/"><input id="btn-7" class="button" type="button" value="7"><input id="btn-8" class="button" type="button" value="8"><input id="btn-9" class="button" type="button" value="9"><input id="btn-mult" class="button button-operator button-operator-air" type="button" value="x"><input id="btn-4" class="button" type="button" value="4"><input id="btn-5" class="button" type="button" value="5"><input id="btn-6" class="button" type="button" value="6"><input id="btn-sub" class="button button-operator button-operator-air" type="button" value="-"><input id="btn-1" class="button" type="button" value="1"><input id="btn-2" class="button" type="button" value="2"><input id="btn-3" class="button" type="button" value="3"><input id="btn-add" class="button button-operator button-operator-air" type="button" value="+"><input id="btn-0" class="button" type="button" value="0"><input id="btn-dot" class="button" type="button" value="."><input id="btn-equal" class="button button-equal button-equal-air" type="button" value="="></div></form><div class="themes"><div class="themes-standard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/></svg><button id="standard-themes-btn" class="themes-btn">Standard Themes</button></div><div class="themes-premium"><div class="themes-premium-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg><button id="premium-themes-btn" class="themes-btn">Premium Themes</button></div><div class="themes-premium-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 25 operations to unlock</p></div></div></div><div id="standard-themes-modal" class="standard-themes-modal"><section class="element-selection stm-container"><h1>Choose an Element</h1><div class="elements"><button id="water-element" class="element"><img src="./assets/images/water.png" alt="water element"> <h2>Water</h2></button><button id="air-element" class="element"><img src="./assets/images/air.png" alt="air element"><h2>Air</h2></button><button id="fire-element" class="element"><img src="./assets/images/fire.png" alt="fire element"><h2>Fire</h2></button><button id="earth-element" class="element"><img src="./assets/images/earth.png" alt="earth element"><h2>Earth</h2></button></div></section></div><div id="premium-themes-modal" class="standard-themes-modal premium-themes-modal"><section class="element-selection stm-container ptm-container"><h1>Premium Themes</h1><div class="elements"><button id="sunset-element" class="element"><img class="sunset-img" src="./assets/images/sunset.png" alt="water element"> <h2>Sunset</h2></button><button id="love-element" class="element"><img class="aurora-img" src="./assets/images/love.png" alt="air element"><h2>Love</h2><div class="element-unlock love-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 50 operations to unlock</p></div></button><button id="fade-element" class="element"><img src="./assets/images/fade.png" alt="fire element"><h2>Fade</h2><div class="element-unlock fade-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 75 operations to unlock</p></div></button><button id="aurora-element" class="element"><img src="./assets/images/aurora.png" alt="earth element"><h2>Boreal Aurora</h2><div class="element-unlock aurora-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 100 operations to unlock</p></div></button></div></section></div><footer class="footer"><h3>© 2022 Elemental Calculator</h3></footer></div>';
}

function createFireDiv() {
    return '<div id="gradient-container" class="fire"><div class="stats"><div class="stats-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"/></svg><h2>Stats</h2></div><div class="stats-quantity"><p>Total Operations: <span id="total-operations">0</span></p><p>Total Clicks: <span id="total-clicks">0</span></p></div><div class="time"><p>Time: <span><span id="minutes">0</span>m <span id="seconds">0</span>s</span></p></div></div><form class="calculator"><div class="display"><input class="display-input operation" type="text" value="" disabled><input class="display-input result" type="text" value="0" disabled></div><div class="buttons-grid"><input id="btn-c" class="button button-operator button-operator-fire" type="button" value="C"><input id="btn-del" class="button button-operator button-operator-fire" type="button" value="D"><input id="btn-percentage" class="button button-operator button-operator-fire" type="button" value="%"><input id="btn-div" class="button button-operator button-operator-fire" type="button" value="/"><input id="btn-7" class="button" type="button" value="7"><input id="btn-8" class="button" type="button" value="8"><input id="btn-9" class="button" type="button" value="9"><input id="btn-mult" class="button button-operator button-operator-fire" type="button" value="x"><input id="btn-4" class="button" type="button" value="4"><input id="btn-5" class="button" type="button" value="5"><input id="btn-6" class="button" type="button" value="6"><input id="btn-sub" class="button button-operator button-operator-fire" type="button" value="-"><input id="btn-1" class="button" type="button" value="1"><input id="btn-2" class="button" type="button" value="2"><input id="btn-3" class="button" type="button" value="3"><input id="btn-add" class="button button-operator button-operator-fire" type="button" value="+"><input id="btn-0" class="button" type="button" value="0"><input id="btn-dot" class="button" type="button" value="."><input id="btn-equal" class="button button-equal button-equal-fire" type="button" value="="></div></form><div class="themes"><div class="themes-standard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/></svg><button id="standard-themes-btn" class="themes-btn">Standard Themes</button></div><div class="themes-premium"><div class="themes-premium-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg><button id="premium-themes-btn" class="themes-btn">Premium Themes</button></div><div class="themes-premium-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 25 operations to unlock</p></div></div></div><div id="standard-themes-modal" class="standard-themes-modal"><section class="element-selection stm-container"><h1>Choose an Element</h1><div class="elements"><button id="water-element" class="element"><img src="./assets/images/water.png" alt="water element"> <h2>Water</h2></button><button id="air-element" class="element"><img src="./assets/images/air.png" alt="air element"><h2>Air</h2></button><button id="fire-element" class="element"><img src="./assets/images/fire.png" alt="fire element"><h2>Fire</h2></button><button id="earth-element" class="element"><img src="./assets/images/earth.png" alt="earth element"><h2>Earth</h2></button></div></section></div><div id="premium-themes-modal" class="standard-themes-modal premium-themes-modal"><section class="element-selection stm-container ptm-container"><h1>Premium Themes</h1><div class="elements"><button id="sunset-element" class="element"><img class="sunset-img" src="./assets/images/sunset.png" alt="water element"> <h2>Sunset</h2></button><button id="love-element" class="element"><img class="aurora-img" src="./assets/images/love.png" alt="air element"><h2>Love</h2><div class="element-unlock love-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 50 operations to unlock</p></div></button><button id="fade-element" class="element"><img src="./assets/images/fade.png" alt="fire element"><h2>Fade</h2><div class="element-unlock fade-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 75 operations to unlock</p></div></button><button id="aurora-element" class="element"><img src="./assets/images/aurora.png" alt="earth element"><h2>Boreal Aurora</h2><div class="element-unlock aurora-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 100 operations to unlock</p></div></button></div></section></div><footer class="footer"><h3>© 2022 Elemental Calculator</h3></footer></div>';
}

function createEarthDiv() {
    return '<div id="gradient-container" class="earth"><div class="stats"><div class="stats-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"/></svg><h2>Stats</h2></div><div class="stats-quantity"><p>Total Operations: <span id="total-operations">0</span></p><p>Total Clicks: <span id="total-clicks">0</span></p></div><div class="time"><p>Time: <span><span id="minutes">0</span>m <span id="seconds">0</span>s</span></p></div></div><form class="calculator"><div class="display"><input class="display-input operation" type="text" value="" disabled><input class="display-input result" type="text" value="0" disabled></div><div class="buttons-grid"><input id="btn-c" class="button button-operator button-operator-earth" type="button" value="C"><input id="btn-del" class="button button-operator button-operator-earth" type="button" value="D"><input id="btn-percentage" class="button button-operator button-operator-earth" type="button" value="%"><input id="btn-div" class="button button-operator button-operator-earth" type="button" value="/"><input id="btn-7" class="button" type="button" value="7"><input id="btn-8" class="button" type="button" value="8"><input id="btn-9" class="button" type="button" value="9"><input id="btn-mult" class="button button-operator button-operator-earth" type="button" value="x"><input id="btn-4" class="button" type="button" value="4"><input id="btn-5" class="button" type="button" value="5"><input id="btn-6" class="button" type="button" value="6"><input id="btn-sub" class="button button-operator button-operator-earth" type="button" value="-"><input id="btn-1" class="button" type="button" value="1"><input id="btn-2" class="button" type="button" value="2"><input id="btn-3" class="button" type="button" value="3"><input id="btn-add" class="button button-operator button-operator-earth" type="button" value="+"><input id="btn-0" class="button" type="button" value="0"><input id="btn-dot" class="button" type="button" value="."><input id="btn-equal" class="button button-equal button-equal-earth" type="button" value="="></div></form><div class="themes"><div class="themes-standard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/></svg><button id="standard-themes-btn" class="themes-btn">Standard Themes</button></div><div class="themes-premium"><div class="themes-premium-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg><button id="premium-themes-btn" class="themes-btn">Premium Themes</button></div><div class="themes-premium-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 25 operations to unlock</p></div></div></div><div id="standard-themes-modal" class="standard-themes-modal"><section class="element-selection stm-container"><h1>Choose an Element</h1><div class="elements"><button id="water-element" class="element"><img src="./assets/images/water.png" alt="water element"> <h2>Water</h2></button><button id="air-element" class="element"><img src="./assets/images/air.png" alt="air element"><h2>Air</h2></button><button id="fire-element" class="element"><img src="./assets/images/fire.png" alt="fire element"><h2>Fire</h2></button><button id="earth-element" class="element"><img src="./assets/images/earth.png" alt="earth element"><h2>Earth</h2></button></div></section></div><div id="premium-themes-modal" class="standard-themes-modal premium-themes-modal"><section class="element-selection stm-container ptm-container"><h1>Premium Themes</h1><div class="elements"><button id="sunset-element" class="element"><img class="sunset-img" src="./assets/images/sunset.png" alt="water element"> <h2>Sunset</h2></button><button id="love-element" class="element"><img class="aurora-img" src="./assets/images/love.png" alt="air element"><h2>Love</h2><div class="element-unlock love-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 50 operations to unlock</p></div></button><button id="fade-element" class="element"><img src="./assets/images/fade.png" alt="fire element"><h2>Fade</h2><div class="element-unlock fade-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 75 operations to unlock</p></div></button><button id="aurora-element" class="element"><img src="./assets/images/aurora.png" alt="earth element"><h2>Boreal Aurora</h2><div class="element-unlock aurora-unlock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/></svg><p>Reach 100 operations to unlock</p></div></button></div></section></div><footer class="footer"><h3>© 2022 Elemental Calculator</h3></footer></div>';
}



// ------ CALCULATOR ------

function calculator() {
    // Display
    const displayOperation = document.querySelector('.operation');
    const displayResult = document.querySelector('.result');

    // --- Calculator Buttons ---
    const btnC = document.getElementById('btn-c');
    const btnDelete = document.getElementById('btn-del');
    const btnPercentage = document.getElementById('btn-percentage');
    const btnDiv = document.getElementById('btn-div');
    const btnMult = document.getElementById('btn-mult');
    const btnSub = document.getElementById('btn-sub');
    const btnAdd = document.getElementById('btn-add');
    const btnEqual = document.getElementById('btn-equal');

    const btnDot = document.getElementById('btn-dot');

    const btn0 = document.getElementById('btn-0');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');
    const btn4 = document.getElementById('btn-4');
    const btn5 = document.getElementById('btn-5');
    const btn6 = document.getElementById('btn-6');
    const btn7 = document.getElementById('btn-7');
    const btn8 = document.getElementById('btn-8');
    const btn9 = document.getElementById('btn-9');

    // Buttons Actions
    btnC.addEventListener('click', () => {
        displayResult.value = "0";
        displayOperation.value = "";
    });

    btnDelete.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        let operation = displayOperation.value.substring(0, actualOperation.length - 1);
        displayOperation.value = operation;
    });


    btnPercentage.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (actualOperation.length != 0 || displayResult.value != "0") {
            if (actualOperation.length != 0) {
                let lastChar = actualOperation.charAt(actualOperation.length - 1);
                if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "%" && lastChar != "*" && lastChar != ".") {
                    let operation = `${displayOperation.value}%`;
                    displayOperation.value = operation;
                }
            } else {
                if (displayResult.value.includes('.')) {
                    displayOperation.value = `${parseFloat(displayResult.value).toFixed(5)}%`;
                } else {
                    displayOperation.value = `${displayResult.value}%`;
                }
            }
        }
    });

    btnSub.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        
        let lastChar = actualOperation.charAt(actualOperation.length - 1);
        if (displayResult.value != "0") {
            if (actualOperation == "") {
                if (displayResult.value.includes('.')) {
                    displayOperation.value = `${parseFloat(displayResult.value).toFixed(5)}-`;
                } else {
                    displayOperation.value = `${displayResult.value}-`;
                }
            } else {
                if (lastChar != "." && lastChar != "-") {
                    let operation = `${displayOperation.value}-`;
                    displayOperation.value = operation;
                }   
            }
        } else {
            if (lastChar != "." && lastChar != "-") {
                let operation = `${displayOperation.value}-`;
                displayOperation.value = operation;
            }   
        }    
    });

    btnAdd.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (actualOperation.length != 0 || displayResult.value != "0") {
            if (actualOperation.length != 0) {
                let lastChar = actualOperation.charAt(actualOperation.length - 1);
                if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "%" && lastChar != "*" && lastChar != ".") {
                    let operation = `${displayOperation.value}+`;
                    displayOperation.value = operation;
                }
            } else {
                if (displayResult.value.includes('.')) {
                    displayOperation.value = `${parseFloat(displayResult.value).toFixed(5)}+`;
                } else {
                    displayOperation.value = `${displayResult.value}+`;
                }
            }
        }
    });

    btnMult.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (actualOperation.length != 0 || displayResult.value != "0") {
            if (actualOperation.length != 0) {
                let lastChar = actualOperation.charAt(actualOperation.length - 1);
                if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "%" && lastChar != "*" && lastChar != ".") {
                    let operation = `${displayOperation.value}*`;
                    displayOperation.value = operation;
                }
            } else {
                if (displayResult.value.includes('.')) {
                    displayOperation.value = `${parseFloat(displayResult.value).toFixed(5)}*`;
                } else {
                    displayOperation.value = `${displayResult.value}*`;
                }
            }
        }
    });

    btnDiv.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (actualOperation.length != 0 || displayResult.value != "0") {
            if (actualOperation.length != 0) {
                let lastChar = actualOperation.charAt(actualOperation.length - 1);
                if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "%" && lastChar != "*" && lastChar != ".") {
                    let operation = `${displayOperation.value}/`;
                    displayOperation.value = operation;
                }
            } else {
                if (displayResult.value.includes('.')) {
                    displayOperation.value = `${parseFloat(displayResult.value).toFixed(5)}/`;
                } else {
                    displayOperation.value = `${displayResult.value}/`;
                }
            }
        }
    });

    
    btnEqual.addEventListener('click', () => {
        let operation = displayOperation.value;
        if (operation != "") {
            displayOperation.value = "";
            displayResult.value = eval(operation);
        }
    });


    btnDot.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (actualOperation.length != 0) {
            let lastChar = actualOperation.charAt(actualOperation.length - 1);
            if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "%" && lastChar != "*" && lastChar != ".") {
                let operation = `${displayOperation.value}.`;
                displayOperation.value = operation;
            }
        }
    });

    btn0.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}0`;
            displayOperation.value = operation;
        }
    });

    btn1.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}1`;
            displayOperation.value = operation;
        }
    });

    btn2.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}2`;
            displayOperation.value = operation;
        }
    });

    btn3.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}3`;
            displayOperation.value = operation;
        }
    });

    btn4.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}4`;
            displayOperation.value = operation;
        }
    });

    btn5.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}5`;
            displayOperation.value = operation;
        }
    });

    btn6.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}6`;
            displayOperation.value = operation;
        }
    });

    btn7.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}7`;
            displayOperation.value = operation;
        }
    });

    btn8.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}8`;
            displayOperation.value = operation;
        }
    });

    btn9.addEventListener('click', () => {
        let actualOperation = displayOperation.value;
        if (displayResult.value == "0" || actualOperation.length != 0) {
            let operation = `${displayOperation.value}9`;
            displayOperation.value = operation;
        }
    });


    // Infinity & NaN
    let result = document.querySelector('.result').value;
    if (result == "NaN" || result == "Infinity" || result == "-Infinity" || result == "undefined") {
        
    }
}
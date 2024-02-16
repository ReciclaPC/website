function changeLanguage(language) {
    // Define translation mappings for different languages
    const translations = {
        'en': {
            'welcome_message': 'Welcome to ReciclaPC! Your tech\'s second chance! We rescue old gadgets, making them good as new.',
            'save_money_message': 'Save the planet while saving your money!'
            // Add more translations as needed
        },
        'pt': {
            'welcome_message': 'Bem-vindo ao ReciclaPC! A segunda chance para a sua tecnologia! Resgatamos dispositivos antigos, deixando-os como novos.',
            'save_money_message': 'Salve o planeta enquanto economiza dinheiro!'
            // Add more translations as needed
        }
    };

    // Get all elements that need translation
    const elements = document.querySelectorAll('[data-translate]');
    
    // Iterate over each element and update its text content with the corresponding translation
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}


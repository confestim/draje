// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Detect system theme preference
    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    // Apply saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = getSystemTheme();
    const currentTheme = savedTheme || systemTheme;
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    console.log('Applied theme:', currentTheme, '(saved:', savedTheme, 'system:', systemTheme + ')'); // Debug log
    
    if (!themeToggle || !themeIcon) {
        console.log('Theme toggle button not found'); // Debug log
        return;
    }
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log('Switching from', currentTheme, 'to', newTheme); // Debug log
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon with animation
        themeIcon.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            updateThemeIcon(newTheme);
            themeIcon.style.transform = 'rotate(0deg)';
        }, 150);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.textContent = '☾'; // Moon for light mode (to switch to dark)
        } else {
            themeIcon.textContent = '☀'; // Sun for dark mode (to switch to light)
        }
        console.log('Updated icon for theme:', theme); // Debug log
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener(function(e) {
            // Only auto-update if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const newSystemTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newSystemTheme);
                if (themeIcon) {
                    updateThemeIcon(newSystemTheme);
                }
                console.log('System theme changed to:', newSystemTheme);
            }
        });
    }
});

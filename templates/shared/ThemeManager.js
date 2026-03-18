/**
 * KETICK Theme Manager
 * Menguruskan skema warna dan tipografi secara dinamik
 */

export const getThemeStyles = (category) => {
    // Definisi tema berdasarkan kategori industri
    const themes = {
        medical: {
            primary: '#0ea5e9', // Sky Blue
            secondary: '#f0f9ff',
            accent: '#0284c7',
            font: "'Inter', sans-serif"
        },
        food: {
            primary: '#ea580c', // Orange
            secondary: '#fff7ed',
            accent: '#c2410c',
            font: "'Poppins', sans-serif"
        },
        corporate: {
            primary: '#1e293b', // Slate Dark
            secondary: '#f8fafc',
            accent: '#334155',
            font: "'Montserrat', sans-serif"
        },
        saas: {
            primary: '#6366f1', // Indigo
            secondary: '#f5f3ff',
            accent: '#4f46e5',
            font: "'Plus Jakarta Sans', sans-serif"
        }
    };

    // Jika kategori tidak ditemui, gunakan tema 'corporate' sebagai default
    const theme = themes[category] || themes.corporate;

    // Menjana CSS Variables untuk disuntik ke dalam HTML
    return `
        <style>
            :root {
                --primary-color: ${theme.primary};
                --secondary-color: ${theme.secondary};
                --accent-color: ${theme.accent};
                --main-font: ${theme.font};
            }
            body { font-family: var(--main-font); }
            .btn-primary { background-color: var(--primary-color); color: white; }
            .text-primary { color: var(--primary-color); }
            .bg-soft { background-color: var(--secondary-color); }
        </style>
    `;
};

// templates/shared/Footer.js
export const Footer = ({ brandName }) => {
    const year = new Date().getFullYear();
    return `
        <footer style="background: #1a1a1a; color: #888; padding: 40px 20px; text-align: center; margin-top: 50px;">
            <div style="margin-bottom: 20px;">
                <strong style="color: #fff; font-size: 1.2rem;">${brandName}</strong>
                <p style="margin-top: 10px;">Dijana secara pintar oleh KETICK Engine.</p>
            </div>
            <div style="border-top: 1px solid #333; padding-top: 20px; font-size: 0.8rem;">
                &copy; ${year} ${brandName}. Hak Cipta Terpelihara.
            </div>
        </footer>
    `;
};

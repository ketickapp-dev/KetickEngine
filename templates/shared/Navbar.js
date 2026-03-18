export const Navbar = ({ brandName, themeColor }) => {
    return `
        <nav style="background: ${themeColor}; color: white; padding: 1rem; display: flex; justify-content: space-between;">
            <div class="logo"><strong>${brandName}</strong></div>
            <ul style="display: flex; list-style: none; gap: 20px;">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    `;
};

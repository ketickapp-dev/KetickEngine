// templates/index.js - VERSI UJIAN KEMATIAN
console.log("ENGINE SEDANG BERMULA...");

export const KetickEngine = (templateId, userData) => {
    return `
        <div style="padding: 50px; text-align: center; font-family: sans-serif; background: #000; color: #0f0; height: 100vh;">
            <h1>🚀 KETICK ENGINE IS ALIVE!</h1>
            <p>ID Template: ${templateId}</p>
            <p>Nama Bisnes: ${userData.name}</p>
            <hr border="1">
            <p style="color: yellow;">Jika anda nampak tulisan hijau ini, maksudnya Engine dah berjaya load.</p>
        </div>
    `;
};

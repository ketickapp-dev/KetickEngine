/**
 * KETICK OS - Website Engine Core
 * Controller utama untuk menguruskan aliran data
 */

const { getCompanyData } = require('./services/google-fetcher');
const { createAdvancedPrompt } = require('./services/ai-generator');

async function startEngine(placeId, templateId) {
    console.log("🚀 Memulakan Engine KETICK...");

    // 1. Ambil Data dari Google
    // Nota: Di persekitaran sebenar, API_KEY diambil dari process.env
    const apiKey = "GOOGLE_API_KEY_ANDA"; 
    const company = await getCompanyData(placeId, apiKey);

    if (!company || company.error) {
        console.error("❌ Ralat: Data syarikat tidak ditemui.");
        return;
    }

    console.log(`✅ Data diterima: ${company.name}`);

    // 2. Jana Prompt Advanced untuk AI
    const powerPrompt = createAdvancedPrompt(company, templateId);

    // 3. Output untuk di hantar ke AI (Gemini/OpenAI)
    const finalPayload = {
        project: "KETICK_WEB_GEN",
        timestamp: new Date().toISOString(),
        business_info: company,
        ai_instruction: powerPrompt,
        target_template: templateId
    };

    console.log("💎 Engine sedia untuk menjana Website.");
    return finalPayload;
}

// Contoh penggunaan (Logik ini akan dipanggil oleh API/Dashboard nanti)
// startEngine("PLACE_ID_CONTOH", "TEMPLATE_01");

module.exports = { startEngine };

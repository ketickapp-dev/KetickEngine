const axios = require('axios');

/**
 * Fungsi untuk menarik info syarikat dari Google Maps
 */
async function getCompanyData(placeId, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,rating,reviews,opening_hours,website,types&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data.result;

        if (!data) return null;

        // Data yang telah dibersihkan untuk kegunaan AI
        return {
            name: data.name || "N/A",
            location: data.formatted_address || "N/A",
            contact: data.formatted_phone_number || "N/A",
            rating: data.rating || 0,
            feedback: data.reviews ? data.reviews.slice(0, 3).map(r => r.text) : [],
            category: data.types ? data.types[0].replace(/_/g, ' ') : "Business"
        };
    } catch (error) {
        return { error: "Gagal menarik data Google" };
    }
}

module.exports = { getCompanyData };

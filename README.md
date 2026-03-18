# KetickEngine
# 🚀 KETICK Engine - Advanced SaaS Website Generator

**KETICK Engine** adalah platform automasi pembinaan laman web gred industri yang dibina oleh **AzlanMymo Lab**. Sistem ini direka khas untuk menjana laman web yang pantas, responsif, dan mesra SEO secara dinamik berdasarkan data perniagaan sebenar.

## 🛠️ Ciri Utama (Advanced Features)
* **AI-Driven Content**: Menjana teks & strategi UX berdasarkan data Google Business.
* **Modular Architecture**: Sistem 20+ template yang boleh dikustomasi sepenuhnya.
* **PWA Ready**: Semua website yang dijana menyokong fungsi aplikasi mudah alih (offline-ready).
* **High Performance**: Dibina menggunakan Next.js untuk skor Lighthouse 90+.

## 📂 Struktur Projek
* `services/`: Logik Backend (Google Fetcher & AI Generator).
* `templates/`: Koleksi 20+ template modular (shared components).
* `config/`: Pengurusan konfigurasi dan API keys.
* `public/`: Aset statik dan media.

## 🏗️ Teknologi Yang Digunakan
* **Framework**: Next.js / Node.js
* **Data Source**: Google Places API
* **AI Engine**: Gemini AI / OpenAI
* **Styling**: Tailwind CSS

---
Developed with ❤️ by **AzlanMymo Lab** | *Kuala Pilah, Malaysia*

# 🚀 KETICK ENGINE v1.0 (20-in-1 SaaS Engine)
**Developed by AzlanMymo Lab & KETICK OS**

KETICK Engine adalah sistem penjana laman web (Website Generator) yang direka khas untuk pasaran usahawan di Malaysia. Dengan hanya menggunakan satu baris kod, sistem ini mampu menjana landing page yang profesional, responsif, dan mesra SEO untuk 20 jenis industri berbeza.

---

## 🛠️ Industri Yang Disokong (20 Templates)
Sistem ini merangkumi segmen ekonomi utama di Malaysia:
1.  **Professional:** Lawyer, Consultant, Accountant (ID: 07)
2.  **Medical:** Private Clinics (ID: 05), Veterinary (ID: 08)
3.  **Education:** Tadika & Schools (ID: 17), Online Courses (ID: 21)
4.  **Lifestyle:** Beauty & Spa (ID: 11), Fitness & Gym (ID: 12)
5.  **Hospitality:** Hotel & Homestay (ID: 06), Wedding Planner (ID: 15)
6.  **Services:** Cleaning (ID: 10), Car Rental (ID: 18), Real Estate (ID: 19)
7.  **Tech & SaaS:** Corporate & Software (ID: 02)
8.  **Industrial:** Factory & Construction (ID: 03)
9.  **Social:** NGO & Charity (ID: 20)

---

## ⚡ Cara Penggunaan (API Syntax)
Gunakan fungsi `KetickEngine` untuk menjana HTML secara dinamik:

```javascript
const html = KetickEngine('ID_TEMPLATE', {
    name: "NAMA_BISNES",
    location: "LOKASI",
    contact: "NO_WHATSAPP"
});

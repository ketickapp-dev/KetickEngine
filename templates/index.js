// templates/index.js - Master Engine Selector for KETICK OS

// 1. Import Semua Template Utama (WAJIB ADA .js)
import { MultiPurposeTemplate } from './01-multi-purpose/Layout.js';
import { TechSaaSTemplate } from './02-tech-saas/Layout.js';
import { IndustrialTemplate } from './03-industrial-factory/Layout.js';
import { PortfolioTemplate } from './04-portfolio-personal/Layout.js';
import { ClinicTemplate } from './05-clinic-pro/Layout.js';
import { HotelTemplate } from './06-hotel-homestay/Layout.js';
import { ProfessionalTemplate } from './07-professional-services/Layout.js';
import { VeterinaryTemplate } from './08-veterinary/Layout.js';
import { RestaurantTemplate } from './09-restaurant-cafe/Layout.js';
import { CleaningTemplate } from './10-cleaning-services/Layout.js';
import { BeautySpaTemplate } from './11-beauty-spa/Layout.js';
import { FitnessGymTemplate } from './12-fitness-gym/Layout.js';
import { BoutiqueTemplate } from './13-fashion-boutique/Layout.js';
import { GadgetTemplate } from './14-gadget-store/Layout.js';
import { WeddingTemplate } from './15-wedding-event/Layout.js';
import { SchoolTemplate } from './17-tadika-school/Layout.js';
import { CarRentalTemplate } from './18-car-rental/Layout.js';
import { RealEstateTemplate } from './19-real-estate/Layout.js';
import { NGOTemplate } from './20-ngo-charity/Layout.js';
import { CourseTemplate } from './21-course-landing/Layout.js';

console.log("🚀 KETICK Engine: Modules Loading...");

/**
 * KETICK ENGINE SELECTOR
 */
export const KetickEngine = (templateId, userData) => {
    // Default Data Sekiranya Kosong (Fallback)
    const data = {
        name: userData.name || "Perniagaan Saya",
        location: userData.location || "Malaysia",
        contact: userData.contact || "60123456789",
        ...userData
    };

    // Logika Pemilihan Template
    const templates = {
        '01': MultiPurposeTemplate,
        '02': TechSaaSTemplate,
        '03': IndustrialTemplate,
        '04': PortfolioTemplate,
        '05': ClinicTemplate,
        '06': HotelTemplate,
        '07': ProfessionalTemplate,
        '08': VeterinaryTemplate,
        '09': RestaurantTemplate,
        '10': CleaningTemplate,
        '11': BeautySpaTemplate,
        '12': FitnessGymTemplate,
        '13': BoutiqueTemplate,
        '14': GadgetTemplate,
        '15': WeddingTemplate,
        '17': SchoolTemplate,
        '18': CarRentalTemplate,
        '19': RealEstateTemplate,
        '20': NGOTemplate,
        '21': CourseTemplate
    };

    const selectedTemplate = templates[templateId] || MultiPurposeTemplate;
    return selectedTemplate(data);
};

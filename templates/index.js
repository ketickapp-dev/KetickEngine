alert("KETICK Engine Sedang Bermula!");

// templates/index.js - Master Engine Selector for KETICK OS

// 1. Import Semua Template Utama (DENGAN .js EXTENSION)
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

/**
 * KETICK ENGINE SELECTOR
 */
export const KetickEngine = (templateId, userData) => {
    
    const data = {
        name: userData.name || "Perniagaan Saya",
        location: userData.location || "Malaysia",
        contact: userData.contact || "60123456789",
        ...userData
    };

    switch (templateId) {
        case '01': return MultiPurposeTemplate(data);
        case '02': return TechSaaSTemplate(data);
        case '03': return IndustrialTemplate(data);
        case '04': return PortfolioTemplate(data);
        case '05': return ClinicTemplate(data);
        case '06': return HotelTemplate(data);
        case '07': return ProfessionalTemplate(data);
        case '08': return VeterinaryTemplate(data);
        case '09': return RestaurantTemplate(data);
        case '10': return CleaningTemplate(data);
        case '11': return BeautySpaTemplate(data);
        case '12': return FitnessGymTemplate(data);
        case '13': return BoutiqueTemplate(data);
        case '14': return GadgetTemplate(data);
        case '15': return WeddingTemplate(data);
        case '17': return SchoolTemplate(data);
        case '18': return CarRentalTemplate(data);
        case '19': return RealEstateTemplate(data);
        case '20': return NGOTemplate(data);
        case '21': return CourseTemplate(data);
        default: return MultiPurposeTemplate(data);
    }
};

console.log("🚀 KETICK Engine: 20 Templates Loaded Successfully!");

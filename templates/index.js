// templates/index.js - Master Engine Selector for KETICK OS

// 1. Import Semua Template Utama
import { MultiPurposeTemplate } from './01-multi-purpose/Layout';
import { TechSaaSTemplate } from './02-tech-saas/Layout';
import { IndustrialTemplate } from './03-industrial-factory/Layout';
import { PortfolioTemplate } from './04-portfolio-personal/Layout';
import { ClinicTemplate } from './05-clinic-pro/Layout';
import { HotelTemplate } from './06-hotel-homestay/Layout';
import { ProfessionalTemplate } from './07-professional-services/Layout';
import { VeterinaryTemplate } from './08-veterinary/Layout';
import { RestaurantTemplate } from './09-restaurant-cafe/Layout';
import { CleaningTemplate } from './10-cleaning-services/Layout';
import { BeautySpaTemplate } from './11-beauty-spa/Layout';
import { FitnessGymTemplate } from './12-fitness-gym/Layout';
import { BoutiqueTemplate } from './13-fashion-boutique/Layout';
import { GadgetTemplate } from './14-gadget-store/Layout';
import { WeddingTemplate } from './15-wedding-event/Layout';
import { SchoolTemplate } from './17-tadika-school/Layout';
import { CarRentalTemplate } from './18-car-rental/Layout';
import { RealEstateTemplate } from './19-real-estate/Layout';
import { NGOTemplate } from './20-ngo-charity/Layout';
import { CourseTemplate } from './21-course-landing/Layout';

/**
 * KETICK ENGINE SELECTOR
 * Fungsi ini membolehkan user pilih template mengikut ID
 */
export const KetickEngine = (templateId, userData) => {
    
    // Default Data Sekiranya Kosong (Fallback)
    const data = {
        name: userData.name || "Perniagaan Saya",
        location: userData.location || "Malaysia",
        contact: userData.contact || "60123456789",
        ...userData
    };

    // Logika Pemilihan Template Secara Dinamik
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
        
        // Jika ID salah, guna Multi-Purpose sebagai backup
        default: return MultiPurposeTemplate(data);
    }
};

console.log("🚀 KETICK Engine: 20 Templates Loaded Successfully!");

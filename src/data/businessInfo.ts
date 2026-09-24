/**
 * Urban Crust Business Configuration
 * Centralized business data for easy client customization
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  shortDesc: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    landmark: string;
    full: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    kitchenCloses: string;
  };
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  googleMapsUrl: string;
}

export const businessInfo: BusinessConfig = {
  name: "Urban Crust",
  tagline: "Café + Fast Food Center",
  shortDesc: "Freshly prepared gourmet burgers, loaded fries, artisan coffee, and café favorites made with passion in a dark luxury ambiance.",
  phone: "+15558722628",
  displayPhone: "+1 (555) 872-CRUST",
  whatsappNumber: "15558722628",
  whatsappMessage: "Hello Urban Crust! I would like to place an order / make an inquiry.",
  email: "hello@urbancrustcafe.com",
  address: {
    street: "482 Grand Avenue, Suite 104",
    city: "Metropolis",
    state: "NY",
    zip: "10012",
    landmark: "Opposite Metro Plaza Central",
    full: "482 Grand Avenue, Suite 104, Metropolis, NY 10012",
  },
  hours: {
    weekdays: "Monday – Thursday: 11:00 AM – 11:00 PM",
    weekends: "Friday – Sunday: 11:00 AM – Midnight",
    kitchenCloses: "Kitchen closes 30 minutes before closing time",
  },
  social: {
    instagram: "https://instagram.com/urbancrust",
    facebook: "https://facebook.com/urbancrust",
    tiktok: "https://tiktok.com/@urbancrust",
  },
  googleMapsUrl: "https://maps.google.com/?q=Urban+Crust+Cafe",
};

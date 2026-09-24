/**
 * Urban Crust Menu Data
 * Cleanly structured for simple editing and category filtering
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'Burgers' | 'Pizza' | 'Chicken' | 'Snacks' | 'Coffee' | 'Drinks';
  price: number;
  description: string;
  image: string;
  popular?: boolean;
  chefSpecial?: boolean;
  calories?: string;
  tags?: string[];
}

export const menuCategories = [
  'All',
  'Burgers',
  'Pizza',
  'Chicken',
  'Snacks',
  'Coffee',
  'Drinks'
] as const;

export type MenuCategoryType = typeof menuCategories[number];

export const menuItems: MenuItem[] = [
  {
    id: 'burger-signature-smash',
    name: 'The Crown Double Smash',
    category: 'Burgers',
    price: 13.95,
    description: 'Double Angus beef patties, molten aged cheddar, caramelized shallots, house truffle aioli on toasted brioche.',
    image: '/src/assets/images/signature_smash_burger_1790227779191.jpg',
    popular: true,
    chefSpecial: true,
    tags: ['Signature', 'Angus Beef'],
  },
  {
    id: 'burger-truffle-prime',
    name: 'Smoked Gouda Prime Burger',
    category: 'Burgers',
    price: 14.50,
    description: 'Thick seared prime beef, melted Dutch smoked gouda, crisp oakleaf greens, slow-roasted garlic glaze.',
    image: '/src/assets/images/hero_gourmet_burger_1790227742661.jpg',
    popular: true,
    tags: ['Gourmet', 'Prime'],
  },
  {
    id: 'chicken-crispy-tenders',
    name: 'Golden Crisp Chicken Tenders',
    category: 'Chicken',
    price: 11.50,
    description: 'Buttermilk-brined tender strips, secret 11-spice crust, served with honey mustard and garlic dip.',
    image: '/src/assets/images/crispy_chicken_tenders_1790227794675.jpg',
    popular: true,
    tags: ['Crispy', 'House Recipe'],
  },
  {
    id: 'pizza-crust-artisan',
    name: 'Truffle & Wild Mushroom Crust',
    category: 'Pizza',
    price: 16.50,
    description: 'Slow-fermented sourdough crust, roasted cremini mushrooms, fior di latte, white truffle oil & thyme.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    popular: true,
    tags: ['Sourdough', 'Vegetarian'],
  },
  {
    id: 'pizza-pepperoni-fire',
    name: 'Spicy Artisanal Pepperoni Pizza',
    category: 'Pizza',
    price: 15.75,
    description: 'Hand-stretched crust, San Marzano tomato base, artisanal spicy pepperoni, hot honey drizzle & fresh basil.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    popular: true,
    tags: ['Hot Honey', 'Crispy Crust'],
  },
  {
    id: 'chicken-spicy-crunch',
    name: 'Nashville Hot Chicken Burger',
    category: 'Chicken',
    price: 12.95,
    description: 'Crispy fried chicken breast drenched in cayenne spiced oil, dill pickle chips, creamy slaw, brioche bun.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    chefSpecial: true,
    tags: ['Spicy', 'Crispy'],
  },
  {
    id: 'snacks-loaded-fries',
    name: 'Urban Loaded Truffle Fries',
    category: 'Snacks',
    price: 8.95,
    description: 'Golden shoestring fries tossed in white truffle oil, grated parmesan, smoked bacon crumbles & fresh chives.',
    image: '/src/assets/images/about_dish_arch_1790227766001.jpg',
    popular: true,
    tags: ['Loaded', 'Parmesan'],
  },
  {
    id: 'snacks-mozzarella-sticks',
    name: 'Herb-Crusted Mozzarella Bites',
    category: 'Snacks',
    price: 8.50,
    description: 'Stretched mozzarella encased in seasoned panko crumb, served with warm marinara dipping sauce.',
    image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=800&q=80',
    tags: ['Cheesy', 'Vegetarian'],
  },
  {
    id: 'coffee-caramel-macchiato',
    name: 'Golden Silk Caramel Macchiato',
    category: 'Coffee',
    price: 5.75,
    description: 'Double ristretto espresso poured over velvety steamed oat milk, real Madagascar vanilla and salted caramel.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    tags: ['Artisan Brew', 'Hot or Iced'],
  },
  {
    id: 'coffee-cold-brew',
    name: 'Nitro Cold Brew Reserve',
    category: 'Coffee',
    price: 5.25,
    description: 'Single-origin Ethiopian beans steeped for 20 hours, nitrogen-infused for a silky stout-like cascading crema.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tags: ['Nitro Infused', 'Sugar Free'],
  },
  {
    id: 'drinks-belgian-shake',
    name: 'Velvet Belgian Chocolate Shake',
    category: 'Drinks',
    price: 6.95,
    description: 'Rich dark Belgian cocoa, creamy Madagascar vanilla bean gelato, topped with dark chocolate curls.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    popular: true,
    tags: ['Gelato', 'Indulgent'],
  },
  {
    id: 'drinks-passion-cooler',
    name: 'Sparkling Mango Passion Cooler',
    category: 'Drinks',
    price: 5.50,
    description: 'Pressed alphonso mango purée, passionfruit nectar, sparkling soda water, fresh mint & lime wheel.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    tags: ['Refreshing', 'Citrus'],
  }
];

export const signatureItem = {
  id: 'urban-crust-supreme-burger',
  title: 'THE CROWN DOUBLE SMASH',
  subtitle: 'URBAN CRUST SIGNATURE',
  tagline: 'THE BURGER EVERYONE TALKS ABOUT',
  price: 13.95,
  description: 'Two smashed 100% Black Angus beef patties seared on smoking cast iron for ultra-crisp edges, stacked with double melted Wisconsin sharp cheddar, sweet balsamic-caramelized shallots, house secret golden relish, and crisp organic butter lettuce on a toasted golden brioche bun.',
  highlights: [
    'Freshly ground daily Angus beef',
    'Wisconsin aged cheddar & caramelized shallots',
    'Golden house secret sauce on toasted brioche',
    'Served with seasoned golden crispy fries'
  ],
  image: '/src/assets/images/signature_smash_burger_1790227779191.jpg',
  badge: "Chef's Masterpiece"
};

export const galleryItems = [
  {
    id: 'gal-1',
    title: 'The Crown Double Smash',
    category: 'Burgers',
    image: '/src/assets/images/hero_gourmet_burger_1790227742661.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-4 row-span-2',
    caption: 'Signature freshly grilled prime burger with melting golden cheddar'
  },
  {
    id: 'gal-2',
    title: 'Warm Café Ambiance',
    category: 'Interior',
    image: '/src/assets/images/cafe_interior_ambiance_1790227810813.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-8',
    caption: 'Intimate evening dining with ambient warm golden lighting'
  },
  {
    id: 'gal-3',
    title: 'Crispy Tender Basket',
    category: 'Chicken & Fries',
    image: '/src/assets/images/crispy_chicken_tenders_1790227794675.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    caption: 'Golden spiced crispy tenders served with house secret dip'
  },
  {
    id: 'gal-4',
    title: 'Bistro Loaded Bowl',
    category: 'Specialties',
    image: '/src/assets/images/about_dish_arch_1790227766001.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    caption: 'Savory roasted loaded beans and cheese bowl with fresh herbs'
  },
  {
    id: 'gal-5',
    title: 'Artisan Sourdough Pizza',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    caption: 'Wood-fired crispy thin crust with melted mozzarella'
  },
  {
    id: 'gal-6',
    title: 'Double Smash Close-Up',
    category: 'Burgers',
    image: '/src/assets/images/signature_smash_burger_1790227779191.jpg',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    caption: 'Crispy laced beef smash edges with golden melting cheese'
  }
];

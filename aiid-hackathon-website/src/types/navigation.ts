export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  children?: NavigationItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

export interface SocialLink {
  platform: 'instagram' | 'youtube' | 'maps';
  url: string;
  icon: string;
}
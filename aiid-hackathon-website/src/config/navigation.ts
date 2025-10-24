import type { NavigationItem, ContactInfo, SocialLink } from '../types/navigation';

export const navigationConfig: NavigationItem[] = [
  { id: 'home', label: 'HOME', path: '/' },
  { id: 'team', label: 'TEAM', path: '/team' },
  {
    id: 'project1',
    label: 'PROJECT1',
    path: '/project1',
    children: [
      { id: 'background', label: 'BACKGROUND', path: '/project1/background' },
      { id: 'idea', label: 'IDEA', path: '/project1/idea' },
      { id: 'implementation', label: 'IMPLEMENTATION', path: '/project1/implementation' },
      { id: 'result', label: 'RESULT', path: '/project1/result' }
    ]
  },
  {
    id: 'project2',
    label: 'PROJECT2',
    path: '/project2',
    children: [
      { id: 'background', label: 'BACKGROUND', path: '/project2/background' },
      { id: 'idea', label: 'IDEA', path: '/project2/idea' },
      { id: 'implementation', label: 'IMPLEMENTATION', path: '/project2/implementation' },
      { id: 'result', label: 'RESULT', path: '/project2/result' }
    ]
  },
  {
    id: 'project3',
    label: 'PROJECT3',
    path: '/project3',
    children: [
      { id: 'background', label: 'BACKGROUND', path: '/project3/background' },
      { id: 'idea', label: 'IDEA', path: '/project3/idea' },
      { id: 'implementation', label: 'IMPLEMENTATION', path: '/project3/implementation' },
      { id: 'result', label: 'RESULT', path: '/project3/result' }
    ]
  },
  { id: 'communication', label: 'COMMUNICATION', path: '/communication' },
  { id: 'tutorial', label: 'TUTORIAL', path: '/tutorial' }
];

export const contactInfo: ContactInfo = {
  phone: '+1 123-456-7890',
  email: 'hello@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown, USA 12345',
    country: 'United States'
  }
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    url: 'https://instagram.com',
    icon: 'IG'
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com',
    icon: 'YT'
  },
  {
    platform: 'maps',
    url: 'https://maps.google.com',
    icon: 'MAP'
  }
];
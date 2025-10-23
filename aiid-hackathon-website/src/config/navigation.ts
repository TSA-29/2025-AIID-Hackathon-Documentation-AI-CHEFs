import type { NavigationItem, ContactInfo, SocialLink } from '../types/navigation';

export const navigationConfig: NavigationItem[] = [
  { id: 'home', label: 'HOME', path: '/' },
  { id: 'team', label: 'TEAM', path: '/team' },
  {
    id: 'name1',
    label: 'NAME1',
    path: '/name1',
    children: [
      {
        id: 'project',
        label: 'PROJECT',
        path: '/name1/project',
        children: [
          { id: 'problem', label: 'PROBLEM DESCRIPTION', path: '/name1/project/problem-description' },
          { id: 'results', label: 'RESULTS', path: '/name1/project/results' },
          { id: 'engineering', label: 'ENGINEERING', path: '/name1/project/engineering' }
        ]
      },
      { id: 'experiments', label: 'EXPERIMENTS', path: '/name1/experiments' },
      { id: 'communication', label: 'COMMUNICATION', path: '/name1/communication' }
    ]
  },
  {
    id: 'name2',
    label: 'NAME2',
    path: '/name2',
    children: [
      {
        id: 'project',
        label: 'PROJECT',
        path: '/name2/project',
        children: [
          { id: 'problem', label: 'PROBLEM DESCRIPTION', path: '/name2/project/problem-description' },
          { id: 'results', label: 'RESULTS', path: '/name2/project/results' },
          { id: 'engineering', label: 'ENGINEERING', path: '/name2/project/engineering' }
        ]
      },
      { id: 'experiments', label: 'EXPERIMENTS', path: '/name2/experiments' },
      { id: 'communication', label: 'COMMUNICATION', path: '/name2/communication' }
    ]
  },
  {
    id: 'name3',
    label: 'NAME3',
    path: '/name3',
    children: [
      {
        id: 'project',
        label: 'PROJECT',
        path: '/name3/project',
        children: [
          { id: 'problem', label: 'PROBLEM DESCRIPTION', path: '/name3/project/problem-description' },
          { id: 'results', label: 'RESULTS', path: '/name3/project/results' },
          { id: 'engineering', label: 'ENGINEERING', path: '/name3/project/engineering' }
        ]
      },
      { id: 'experiments', label: 'EXPERIMENTS', path: '/name3/experiments' },
      { id: 'communication', label: 'COMMUNICATION', path: '/name3/communication' }
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'contact@aiid-hackathon.org',
  address: {
    street: '123 Innovation Drive',
    city: 'Tech City, TC 12345',
    country: 'United States'
  }
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    url: 'https://instagram.com/aiid-hackathon',
    icon: '📷'
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com/aiid-hackathon',
    icon: '📺'
  },
  {
    platform: 'maps',
    url: 'https://maps.google.com/?q=123+Innovation+Drive',
    icon: '📍'
  }
];
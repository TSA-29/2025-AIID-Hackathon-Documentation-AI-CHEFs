import type { NavigationItem, ContactInfo, SocialLink } from '../types/navigation';

export const navigationConfig: NavigationItem[] = [
  { id: 'home', label: 'HOME', path: '/' },
  { id: 'team', label: 'TEAM', path: '/team' },
  {
    id: 'project1',
    label: 'ARROWISTA',
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
    label: 'CARBON COMPASS',
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
    label: 'STUDYBUDDY',
    path: '/project3',
    children: [
      { id: 'background', label: 'BACKGROUND', path: '/project3/background' },
      { id: 'idea', label: 'IDEA', path: '/project3/idea' },
      { id: 'implementation', label: 'IMPLEMENTATION', path: '/project3/implementation' },
      { id: 'result', label: 'RESULT', path: '/project3/result' }
    ]
  },
  { id: 'communication', label: 'COMMUNICATION', path: '/communication' },
  { id: 'tutorial', label: 'TUTORIAL', path: '/tutorial' },
  {
    id: 'vibe-coding-guide',
    label: 'VIBE CODING GUIDE',
    path: '/vibe-coding-guide',
    children: [
      { id: 'introduction', label: 'INTRODUCTION', path: '/vibe-coding-guide/introduction' },
      { id: 'setup', label: 'SETUP', path: '/vibe-coding-guide/setup' },
      { id: 'step1', label: 'STEP 1: PROJECT SETUP', path: '/vibe-coding-guide/step1' },
      { id: 'step2', label: 'STEP 2: UI DESIGN', path: '/vibe-coding-guide/step2' },
      { id: 'step3', label: 'STEP 3: CARBON CALCULATION', path: '/vibe-coding-guide/step3' },
      { id: 'step4', label: 'STEP 4: DATA INTEGRATION', path: '/vibe-coding-guide/step4' },
      { id: 'step5', label: 'STEP 5: REPORTING', path: '/vibe-coding-guide/step5' },
      { id: 'step6', label: 'STEP 6: DEPLOYMENT', path: '/vibe-coding-guide/step6' }
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '',
  email: 'broumad29@gmail.com',
  address: {
    street: 'Building J, Tsinghua SIGS',
    city: 'Nanshan District, Shenzhen, Guangdong',
    country: 'China'
  }
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/tsinghua_sigs',
    icon: 'IG'
  },
  {
    platform: 'twitter',
    url: 'https://x.com/Tsinghua_China',
    icon: 'X'
  },
  {
    platform: 'university',
    url: 'https://www.sigs.tsinghua.edu.cn/en/',
    icon: 'SIGS'
  }
];
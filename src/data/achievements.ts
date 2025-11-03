export interface Achievement {
  id: string
  title: string
  organization: string
  year: string
  description?: string
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Top Performer Recognition',
    organization: 'NAVTTC',
    year: '2022',
    description: 'Awarded Best Performer by NAVTTC for outstanding technical skills, dedication, and project delivery excellence',
  },
  {
    id: '2',
    title: 'Hardworking Employer of the Year',
    organization: 'DanZee Tech',
    year: '2024',
    description: 'Recognized for exceptional dedication and consistent performance throughout the year',
  },
  {
    id: '3',
    title: 'Employee of the Month',
    organization: 'DanZee Tech',
    year: '2023',
    description: 'Recognized as Best Employee of the Month for consistent performance, leadership, and contribution to team success',
  },
  {
    id: '4',
    title: 'Microsoft Office Certification',
    organization: 'VTI',
    year: '2021',
    description: 'Certified in Microsoft Office applications',
  },
  {
    id: '5',
    title: 'Android APP Development',
    organization: 'NAVTTC',
    year: '2021',
    description: 'NAVTTC Certification in Android Application Development',
  },
  {
    id: '6',
    title: 'Web Application Development',
    organization: 'NAVTTC',
    year: '2021',
    description: 'NAVTTC Certification in Web Application Development',
  },
  {
    id: '7',
    title: 'Desktop Development',
    organization: 'NAVTTC',
    year: '2021',
    description: 'NAVTTC Certification in Desktop Development',
  },
]


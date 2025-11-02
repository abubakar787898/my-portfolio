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
    title: 'Best Performer NAVTTC',
    organization: 'NAVTTC',
    year: '2022',
    description: 'Recognized as top performer in the training program',
  },
  {
    id: '2',
    title: 'Employee of the Month',
    organization: 'DanZee Tech',
    year: '2024',
    description: 'Awarded for exceptional performance and dedication',
  },
]


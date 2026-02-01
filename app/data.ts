type Product = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Organization = {
  name: string
  description: string
  location: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Product[] = [
  {
    name: 'TeamFlicks',
    description:
      'The current app from Next Goal Sports Management for teams, players, and growth.',
    link: 'https://teamflicks.com',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'product-teamflicks',
  },
]

export const ORGANIZATIONS: Organization[] = [
  {
    name: 'North Lakes FC',
    description: 'Girl club soccer team owned and supported by NGSM.',
    location: 'Denton, Texas',
    link: 'https://northlakesfc.com',
    id: 'org-north-lakes-fc',
  },
]

export const SOCIAL_LINKS: SocialLink[] = []

export const EMAIL = 'hello@nextgoalsports.com'

type Product = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
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
    image: '/tf_app_screenshot.png',
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

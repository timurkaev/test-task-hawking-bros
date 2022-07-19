type Socials = {
  facebook: string
  vk: string
  ok: string
  instagram: string
  tiktok: string
}

type Data = {
  minutes: string
  internet: string
  socials: Socials[]
}

export const tariffs: Data[] = [
  {
    minutes: '0',
    internet: '0',
    socials: [
      {
        facebook: '20',
        vk: '20',
        ok: '20',
        instagram: '60',
        tiktok: '60',
      },
    ],
  },
]

type ComponentList = "mediaContainer" | "imageReveal" | "mediaSlider" | "asymmetricMediaContainer" | "workInfo"

export interface IProjectCard {
  id: string
  services: string[]
  title: string
  url: string
  awardImage: string
  mediaSrc: string
  mediaType: string
}

export interface IWorkCard {
  id: string
  title: string
  url: string
  awardImage: string
  mediaSrc: string
  mediaType: string
}

export interface IMediaData {
  items: { mediaType: string; mediaSrc: string; isAutoplay: boolean; thumbnail?: string }[]
  smallLeft?: boolean
  isPaddingX?: boolean
  workUrl: string
}

export interface IWorkInfo {
  mediaType: "image" | "video"
  mediaTypeMobile: "image" | "video"
  mediaSrc: string
  mediaSrcMobile?: string
  title: string
  service?: string
  awardImage?: string | null
  case: {
    summary: string
    detail?: string
    mediaLink: string
  }
  client: string
  clientType: string[]
  market: string
  services: string[]
  website: {
    ui: string
    url: string
  }
  award: {
    ui: string
    url: string
  }[]
  media: {
    ui: string
    url: string
  }[]
}

export interface IComponentData {
  component: ComponentList
  propData: IMediaData | IWorkInfo
  props: any
}

export interface IService {
  id: string
  title: string
  description: string
}

export interface IAward {
  id: string
  title: string
  image: string
  category: string
  url: string
}

export interface ITeamMember {
  id: string
  name: string
  surname: string
  role: string
  profileImage: string
  iconImage: string
  linkedin: string
}

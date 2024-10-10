export interface UserInfo {
  profile: Profile
  package: Package
  weddingInfo: WeddingInfo
}

export interface Package {
  name: string
}

export interface Profile {
  name: string
  email: string
}

export interface WeddingInfo {
  couples: Couples
  arRum: ArRum
  eventDetail: EventDetail
  banks: Bank[]
  gallery: Gallery
  loveStory: LoveStory[]
  liveStreaming: LiveStreaming
  wishes: Wishes
}

export interface ArRum {
  title: string
  desc: string
}

export interface Bank {
  bank: string
  number: string
  name: string
}

export interface Couples {
  title: string
  desc: string
  bride: Bride
  groom: Bride
}

export interface Bride {
  name: string
  fullName: string
  parents: Parents
  instagram: string
}

export interface Parents {
  father: string
  mother: string
}

export interface EventDetail {
  title: string
  akad: Akad
  reception: Akad
  countdown: Countdown
}

export interface Akad {
  title: string
  date: string
  time: string
  location: Location
}

export interface Location {
  name: string
  address: string
  maps: string
}

export interface Countdown {
  title: string
  endTime: EndTime
}

export interface EndTime {
  date: string
  time: string
}

export interface Gallery {
  template: string
  images: ImageElement[][]
}

export interface ImageElement {
  url: string
}

export interface LiveStreaming {
  title: string
  desc: string
  links: Link[]
}

export interface Link {
  name: string
  url: string
}

export interface LoveStory {
  date: string
  image: LoveStoryImage
  title: string
  desc: string
}

export interface LoveStoryImage {
  url: string
  template: string
}

export interface Wishes {
  title: string
  desc: string
  comments: Comments
}

export interface Comments {
  total: number
  datas: Data[]
  button: Button
  forms: Forms
}

export interface Data {
  name: string
  email: string
  comment: string
  createdAt: string
}

export interface Button {
  label: string
  type: string
}

export interface Forms {
  fields: Field[]
  button: Button[]
}

export interface Field {
  value?: string
  name: string
  title: string
  required: boolean
  placeholder: string
  type: string
  rows?: number
  cols?: number
}

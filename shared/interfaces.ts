interface LoveStoryList {
  date: string
  image: {
    url: string
    template: string // 'horizontal' | 'vertical'
  }
  title: string
  desc: string
}
interface BankList {
  bank: string // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
  number: string
  name: string
}
interface ImageList {
  url: string
}
interface LinkList {
  name: string
  url: string
}
interface CommentDataList {
  name: string
  email: string
  message: string
  createdAt: string
}
interface WishesFormFieldList {
  value?: string
  name: string
  title: string
  required: boolean
  placeholder: string
  type: string
  rows?: number
  cols?: number
}
interface WishesFormButtonList {
  label: string
  type: string
}
interface Forms {
  fields: WishesFormFieldList[]
  button: WishesFormButtonList[]
}
interface UserInfo {
  profile: {
    name: string
    email: string
  }
  package: {
    name: string
  }
  weddingInfo: {
    couples: {
      title: string
      desc: string
      bride: {
        name: string
        fullName: string
        parents: {
          father: string
          mother: string
        }
        instagram: string
      }
      groom: {
        name: string
        fullName: string
        parents: {
          father: string
          mother: string
        }
        instagram: string
      }
    }
    arRum: {
      title: string
      desc: string
    }
    eventDetail: {
      title: string // 'Wedding Event'
      akad: {
        title: string // 'Akad Nikah'
        date: string // YYYY/MM/DD
        time: string // HH:MM
        location: {
          name: string
          address: string
          maps: string
        }
      }
      reception: {
        title: string // 'Resepsi'
        date: string // YYYY/MM/DD
        time: string // HH:MM
        location: {
          name: string
          address: string
          maps: string
        }
      }
      countdown: {
        title: string
        endTime: {
          date: string // YYYY/MM/DD
          time: string // HH:MM
        }
      }
    }
    loveStory: LoveStoryList[]
    banks: BankList[]
    gallery: {
      template: string
      images: ImageList[][]
    }
    liveStreaming: {
      title: string
      desc: string
      links: LinkList[]
    }
    wishes: {
      title: string
      desc: string
      comments: {
        total: number
        data: CommentDataList[]
        forms: Forms
      }
    }
  }
}

export type { LoveStoryList, UserInfo, Forms }

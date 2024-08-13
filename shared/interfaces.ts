interface loveStoryList {
  date: string
  image: {
    url: string
    template: string // 'horizontal' | 'vertical'
  }
  title: string
  desc: string
}
interface bankList {
  bank: string // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
  number: string
  name: string
}
interface imageList {
  url: string
}
interface linkList {
  name: string
  url: string
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
    loveStory: loveStoryList[]
    banks: bankList[]
    gallery: {
      template: string
      images: imageList[][]
    }
    liveStreaming: {
      title: string
      desc: string
      links: linkList[]
    }
  }
}

export type { loveStoryList, UserInfo }

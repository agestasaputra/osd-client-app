interface loveStoryItem {
  date: string
  image: string
  title: string
  desc: string
}
interface bank {
  bank: string // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
  number: string
  name: string
}
interface galleryImage {
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
      bride: {
        name: string
        fullName: string
        parents: {
          father: string
          mother: string
        }
      }
      groom: {
        name: string
        fullName: string
        parents: {
          father: string
          mother: string
        }
      }
    }
    akad: {
      date: string // YYYY/MM/DD
      time: string // HH:MM
      location: {
        name: string
        address: string
        maps: string
      }
    }
    reception: {
      date: string // YYYY/MM/DD
      time: string // HH:MM
      location: {
        name: string
        address: string
        maps: string
      }
    }
    endTime: {
      date: string // YYYY/MM/DD
      time: string // HH:MM
    }
    loveStory: loveStoryItem[]
    banks: bank[]
    gallery: {
      template: string
      images: galleryImage[][]
    }
  }
}

export type { loveStoryItem, UserInfo }

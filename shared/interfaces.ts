export interface UserInfo {
  profile: {
    name: string
    email: string
  }
  package: {
    name: string
  }
  weddingInfo: {
    brides: string[]
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
  }
}

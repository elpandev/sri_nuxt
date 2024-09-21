interface IUser {
  key:      string
  name:     string
  email:    string
  password: string
  triggers: {
    invoice: ITrigger
  }
}

interface ITrigger {
  url:    string
  method: string
}

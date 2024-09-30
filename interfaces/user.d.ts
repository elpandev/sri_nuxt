interface IUser {
  token:    string
  name:     string
  email:    string
  password: string
  trigger_invoice: ITrigger
}

interface ITrigger {
  url:    string
  method: string
}

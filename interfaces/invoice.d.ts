interface IInvoice {
  id:      string
  company: IInvoiceCompany
  emails:  IInvoiceEmail[]
  events:  IInvoiceEvent[]
}

interface IInvoiceCompany {
  ruc:         string
  name:        string
  trade_name:  string
  address:     string
  accountable: boolean
}

interface IInvoiceEmail {
  email:      string
  status:     string
  created_at: number
}

interface IInvoiceEvent {
  key:        'PDF_CREATED'|'XML_CREATED'|'XML_SIGNED'|'XML_SENT'|'XML_VERIFIED'|'INVOICE_TOUCHED'|'EMAIL_SENT'
  created_at: number
  status:     string|number
  messages:   IInvoiceMessage[]
  url:        string
  method:     string
}

interface IInvoiceMessage {
  type:        string
  code:        string
  message:     string
  description: string
}
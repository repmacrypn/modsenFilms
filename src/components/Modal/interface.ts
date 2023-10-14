export interface IModal {
  isActive: boolean
  onModalClick: (state: boolean) => void
  children: React.ReactNode
}

export type LoginProps = {
  email: string
  password: string
}

export type AuthDefaultValues = {
  Login: ({ email, password }: LoginProps) => void
  user: string
  setUser: Dispatch<SetStateAction<string>>
  statusAuth: boolean
}

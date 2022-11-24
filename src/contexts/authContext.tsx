import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction
} from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import api from 'services/api'

import type { ChildrenProps } from 'types/Children'

type LoginProps = {
  email: string
  password: string
}

type AuthDefaultValues = {
  Login: ({ email, password }: LoginProps) => void
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

const authContext: AuthDefaultValues = {
  Login: () => ({}),
  user: '',
  setUser: () => ''
}

export const AuthContext = createContext<AuthDefaultValues>(authContext)
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: ChildrenProps) => {
  const router = useRouter()
  const [user, setUser] = useState<string>('')

  const Login = async ({ email, password }: LoginProps) => {
    try {
      const { headers, data, status } = await api.post('/auth/sign-in', {
        email: email,
        password: password
      })

      if (status === 200) {
        const authorization = headers.authorization
        const refreshToken = headers['refresh-token']
        Cookies.set('authorization', authorization)
        Cookies.set('refreshToken', refreshToken)
        localStorage.setItem('user', data.name)
        if (Cookies.get('authorization')) {
          router.push('/')
        }
      }
    } catch (error) {
      throw String(error)
    }
  }

  return (
    <AuthContext.Provider value={{ Login, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext

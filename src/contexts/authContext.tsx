import { useContext, useState, createContext } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import api from 'services/api'

import { Children, Auth } from 'types'

const authContext: Auth.AuthDefaultValues = {
  Login: () => ({}),
  user: '',
  setUser: () => '',
  statusAuth: true
}

export const AuthContext = createContext<Auth.AuthDefaultValues>(authContext)
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: Children.ChildrenProps) => {
  const router = useRouter()
  const [user, setUser] = useState<string>('')
  const [statusAuth, setStatusAuth] = useState<boolean>(true)

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message
    return String(error)
  }

  const reportError = ({ message }: { message: string }) => {
    if (message.includes('401')) {
      setStatusAuth(false)
    }
  }

  const Login = async ({ email, password }: Auth.LoginProps) => {
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
        setStatusAuth(true)
      }
    } catch (error) {
      reportError({ message: getErrorMessage(error) })
    }
  }

  return (
    <AuthContext.Provider value={{ Login, user, setUser, statusAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext

import { useContext, useState, useEffect, createContext } from 'react'
import api from 'services/api'

export const AuthContext = createContext({})
export const useAuthContext = () => useContext(AuthContext)

type AuthContextProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<object | null>(null)
  const Login = async () => {
    try {
      const { headers, data, status } = await api.post('/auth/sign-in', {
        email: 'desafio@ioasys.com.br',
        password: '12341234'
      })

      if (status === 200) {
        console.log(headers.authorization)
        console.log(headers['refresh-token'])

        setUser(data)
      }
    } catch (error) {
      throw String(error)
    }
  }

  const getToken = async () => {
    try {
      const { data, status } = await api.post('/auth/refresh-token', {
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MTUzMSIsImlhdCI6MTU5ODMwMzM3ODk3NX0.g7hU3QQenR5ZB_nO3XhipFpdScPusurJFkgKWzYsgZ4'
      })
      console.log({ data, status })
    } catch (error) {
      throw String(error)
    }
  }

  useEffect(() => {
    Login()
  }, [])

  useEffect(() => {
    if (user !== null) {
      getToken()
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext

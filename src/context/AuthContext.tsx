import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

type User = {
  name: string
  avatarUrl?: string
  companiesUsed?: number
  companiesLimit?: number
}

type AuthContextType = {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (u: User) => {
    setUser(u)
    try { localStorage.setItem('sf_user', JSON.stringify(u)) } catch (e) {}
  }

  const logout = () => {
    setUser(null)
    try { localStorage.removeItem('sf_user') } catch (e) {}
  }

  // hydrate from localStorage once
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem('sf_user')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {}
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

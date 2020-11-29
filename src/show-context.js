import { createContext } from 'react'

export const ShowContext = createContext({
  showList: true,
  showListHandler: () => {}
})
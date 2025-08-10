import type { ReactNode } from "react"


const Container = ({children}:{children:ReactNode}) => {
  return (
    <div className="p-4 md:p-8 md:mb-6 mb-3">{children}</div>
  )
}

export default Container
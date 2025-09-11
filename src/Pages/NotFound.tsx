import Lottie from "lottie-react"
import error  from "../assets/Lotties/404.json"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center w-1/2 mx-auto ">
     <Lottie  animationData={error} loop={true} />
    </div>
  )
}

export default NotFound
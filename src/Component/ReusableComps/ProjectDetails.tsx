import { useParams } from "react-router"


const ProjectDetails = () => {
     const {id}= useParams();
  return (
    <div>ProjectDetails: {id}</div>
  )
}

export default ProjectDetails
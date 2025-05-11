import { MdWeb } from "react-icons/md";
import { SiGithub } from "react-icons/si"
import "./ProjectCard.scss"

interface Props {
    title: string,
    image: string,
    site: string,
    repo: string
}

export default function ProjectCard({title, image, site, repo}:Props) {
  return (
    <div className="card">
        <img src={image !== "-" ? image : "./react.svg"} alt={title +" img"} className="card_image"/>
        <div className="card_info">
            <h2>{title}</h2>
        </div>
        <div className="card_btn_box">
            <a target="_blanc" href={repo}>
                <SiGithub/>
            </a>
            <a target="_blanc" href={site}>
                <MdWeb />
            </a>
        </div>
    </div>
  )
}

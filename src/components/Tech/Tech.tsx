import TechItem from "./TechItem/TechItem"
import "./Tech.scss"
import data from "./Tech.json"

export interface Icon{
    icon: string,
    name: string
}

export default function Tech() {
    let icons:Icon[] = data
  
    return (
        <section className="tech">
            <h1>Technologie, które znam i używam</h1>
            <div>
            {icons.map((item:Icon, index:number) => {
                return <TechItem icon={item} key={index}/>
            })}
            </div>
        </section>
    )
}

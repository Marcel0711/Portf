import { Icon } from '../Tech'
import { SiAiqfome } from "react-icons/si";
import { lazy, Suspense } from 'react'
import "./TechItem.scss"

export default function TechItem({icon}:{icon: Icon}) {

    const DynamicIcon = lazy(async () => {
        const module = await import('react-icons/si') as unknown as Record<string, React.ComponentType<any>>;
        const Component = module[icon.icon];
        return { default: Component || SiAiqfome};
    });

    return (
        <div className="tech_item">
            <Suspense fallback={<SiAiqfome />}>
                <DynamicIcon/>
            </Suspense>
            <h3>{icon.name}</h3>
        </div>
    )
}

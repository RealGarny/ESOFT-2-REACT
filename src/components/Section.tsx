import { ContainerProps } from "../interfaces"
import Text from "./Text"

interface SectionProps extends ContainerProps {
    header:string
}

const Section = (props:SectionProps) => {
    return(
        <div className="flex-col first:mt-0 mt-6">
            <Text text={props.header} scale="md" className="font-bold"/>
            {props.children}
        </div>
    )
}

export default Section
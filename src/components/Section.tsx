import { ContainerProps } from "../interfaces"

const Section = (props:ContainerProps) => {
    return(
        <div className={`flex flex-col gap-2 ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Section
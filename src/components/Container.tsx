import { ContainerProps } from "../interfaces"

const Container = (props:ContainerProps) => {
    return (
        <div className={`${props.className ? props.className : ""} flex px-4 py-6`}>
            {props.children}
        </div>
    )
}

export default Container;
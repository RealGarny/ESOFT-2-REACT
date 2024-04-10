
import { ContainerProps } from "../interfaces";

const Container = (props:ContainerProps) => {

    return(
        <div className="mx-6 lg:mx-auto max-w-[50rem] my-4 text-text">
            {props.children}
        </div>
    )
}

export default Container;
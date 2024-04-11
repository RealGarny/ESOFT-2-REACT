<<<<<<< HEAD

import { ContainerProps } from "../interfaces";

const Container = (props:ContainerProps) => {

    return(
        <div className="mx-6 lg:mx-auto max-w-[50rem] my-4 text-text">
=======
import { ContainerProps } from "../interfaces"

const Container = (props:ContainerProps) => {
    return (
        <div className={`${props.className ? props.className : ""} flex px-4 py-6`}>
>>>>>>> be5cae7a729dc768c13bf41a15939bd9278787a2
            {props.children}
        </div>
    )
}

export default Container;
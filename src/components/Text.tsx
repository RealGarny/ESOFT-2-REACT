
interface TextProps {
    type?: string,
    text: string,
    className?:string
}

const Text = (props:TextProps) => {
    let fontStyle:string = "";

    switch(props.type) {
        case "lg": 
            fontStyle = "md:text-5xl text-3xl"
            break;
        case "md": 
            fontStyle = "md:text-3xl text-2xl"
            break;
        case "sm":
            fontStyle = "md:text-sm text-xs"
            break;
        default:
            fontStyle = "md:text-sm text-xs"
            break;
    }

    return(
        <p className={`${fontStyle} ${props.className ? props.className : ""}`}>{props.text}</p>
    )
}

export default Text;
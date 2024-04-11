
interface TextProps {
    type?: string,
    text: string,
    url?: string,
    scale: string,
    className?:string
}

const Text = ({type="text", text, url, scale, className}:TextProps) => {
    let fontStyle:string = "";

    switch(scale) {
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
    console.log(type)
    return(
        type === "link" 
        ? <a href={url} className={`${fontStyle} ${className ? className : ""}`}>{text}</a>
        : <p className={`${fontStyle} ${className ? className : ""}`}>{text}</p>
    )
}

export default Text;
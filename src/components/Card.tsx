import Container from "./Container"
import Text from "./Text"
import { cardItem } from "../interfaces"

const Card = (props:cardItem) => {
    return(
        <Container className={`bg-none relative hover:bg-primary gap-1 group flex-col flex-auto align-middle text-center rounded-md transition ease-in-out px-2 ${props.className}`}>
            {props.iconPath && <img src={props.iconPath} className="h-12"></img>}
            {props.url &&
             <>
             <a href={props.url } className="absolute w-full h-full top-0 left-0 z-10"></a>
             <img className="absolute top-2 right-2 h-2 opacity-100 group-hover:opacity-0" src="arrow-sm-45.svg"></img>
             </>
            }
            <Text text={props.title} scale="sm" className="font-bold group-hover:text-background"/>
            <Text text={props.description} scale="sm" className="group-hover:text-background"/>
        </Container>
    )
}

export default Card
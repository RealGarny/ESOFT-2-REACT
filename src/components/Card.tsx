import Container from "./Container"
import Text from "./Text"
import { cardItem } from "../interfaces"

const Card = (props:cardItem) => {
    return(
        <Container className={`bg-none hover:bg-primary gap-1 group flex-col flex-auto align-middle text-center rounded-md transition ease-in-out px-2 ${props.className}`}>
            {props.iconPath && <img src={props.iconPath} className="h-12"></img>}
            <Text text={props.title} type="sm" className="font-bold group-hover:text-background"/>
            <Text text={props.description} type="sm" className="group-hover:text-background"/>
        </Container>
    )
}

export default Card
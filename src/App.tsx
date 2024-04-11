import Container from "./components/Container"
import Section from "./components/Section"
import cardSections from "./data"

import { cardItem, sectionItem } from "./interfaces"
import Card from "./components/Card"
import Text from "./components/Text"


function App() {

  {/*Как видно ниже, я не ищу легких путей...*/}
  return (
    <>
      <Container className="flex-col max-w-4xl mx-auto text-text">
        <Section header="Привет, я">
          <div className="flex gap-2 px-4 py-5 rounded-xl overflow-hidden relative">
            <div className="hidden sm:block z-10">
              <div className="border-slate-200 overflow-hidden min-h-12 min-w-12 max-h-24 max-w-24 rounded-full">
              <img src="funny-corgi-pictures-a7ftlogy9c0ctn7f 1.png"></img> {/*классное название, согласен*/}
              </div>
            </div>
            <div className="flex flex-col justify-center z-10">
              <p className="text-2xl font-semibold"><span className="text-primary">Асеев</span> Никита Михайлович</p>
              <Text text="Маленький программист-самоучка" />
              <Text text="2 годика" className="opacity-50"/>
            </div>
            <div className="absolute h-2/3 w-1/3 blur-3xl rounded-full bg-secondary bottom-[-20px] right-[-12px] z-0"></div>
          </div>
        </Section>
        {cardSections.map(
          (section:sectionItem, i:number)=>{
            return(
              <Section key={i} header={section.header}>
                <Container className={`gap-2 flex-wrap`}>
                  {section.items.map((card:cardItem, j:number) => {
                    console.log(i)
                    return(
                    <Card
                      title={card.title}
                      url={card.url && card.url}
                      key={j}
                      iconPath={card.iconPath}
                      description={card.description}
                      className={`${i !== 0 ? "w-1/3 md:w-1/4" : "w-1/3 md:w-1/5"}`}
                    />)
                  })}
                </Container>
              </Section>
            )
          })}
      </Container>
      <Container className="bg-primary text-background justify-center">
        <Text text="Хорошего вам дня!" scale="md" className="font-bold"/>
      </Container>
    </>
  )
}

export default App

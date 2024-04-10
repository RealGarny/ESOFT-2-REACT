import Container from "./components/Container"
import Section from "./components/Section"
import { cardItem, sectionItem } from "./interfaces"
import Card from "./components/Card"

function App() {

  const cardSections = [
    {
      header: "Мои компетенции",
      items: [{
        iconPath: "figma.svg",
        title: "Figma",
        description: "Без неё верстать сложна"
      },
      {
        iconPath: "js.svg",
        title: "JavaScript",
        description: "Без неё верстать сложна"
      },
      {
        iconPath: "c++.svg",
        title: "C++",
        description: "Дебаг консоль, замаскированная под язык"
      },
      {
        iconPath: "python.svg",
        title: "Python",
        description: "всё же программировать может каждый?"
      }]
    },
    {
      header: "Мои проекты",
      items: [{
        iconPath: "",
        title: "Blocky",
        description: "Сапер, сделанный на React"
      },
      {
        iconPath: "",
        title: "JavaScript",
        description: "Без неё верстать сложна"
      },
      {
        iconPath: "",
        title: "C++",
        description: "Дебаг консоль, замаскированная под язык"
      }]
    },
    {
      header: "Хотел бы изучить",
      items: [{
        iconPath: "",
        title: "Асинхронное программирование",
        description: "Теория вроде как мне понятна, но на практике получается не очень. Надо практиковаться"
      },
      {
        iconPath: "",
        title: "Эффективную работу с базами данных",
        description: "Всегда интересно, как можно оптимизировать какой-либо процесс."
      },
      {
        iconPath: "",
        title: "Бэкенд разработку",
        description: "Хоть опыт бэкенд разработки у меня есть, мне не хватает более глубоких познаний в данной сфере"
      },
      {
        iconPath: "",
        title: "Бэкенд разработку",
        description: "Хоть опыт бэкенд разработки у меня есть, мне не хватает более глубоких познаний в данной сфере"
      },
      {
        iconPath: "",
        title: "Бэкенд разработку",
        description: "Хоть опыт бэкенд разработки у меня есть, мне не хватает более глубоких познаний в данной сфере"
      }]
    }
  ]
  {/*Как видно ниже, я не ищу легких путей...*/}
  return (
    <>
      <Container className="flex-col max-w-2xl mx-auto text-text">
        {cardSections.map(
          (section:sectionItem, i:number)=>{
            return(
              <Section key={i} header={section.header}>
                <Container className={`gap-2 flex-wrap`}>
                {section.items.map((card:cardItem, j:number) => {
                  console.log(i)
                  return(<Card title={card.title} iconPath={card.iconPath} description={card.description} className={`${i !== 0 ? "w-1/3 md:w-1/4" : "w-1/3 md:w-1/5"}`}/>)
                })}
                </Container>
              </Section>
            )
          })}
      </Container>
    </>
  )
}

export default App

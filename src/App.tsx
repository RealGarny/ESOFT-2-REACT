import Container from "./components/Container"
import Section from "./components/Section"
<<<<<<< HEAD
=======
import { cardItem, sectionItem } from "./interfaces"
import Card from "./components/Card"
>>>>>>> be5cae7a729dc768c13bf41a15939bd9278787a2

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
<<<<<<< HEAD
      <Container>   
        <Section>
          <p className="font-bold text-3xl lg:text-5xl">Привет, я</p>
          <div className="flex gap-2 px-4 py-5 rounded-xl overflow-hidden relative">
            <div className="hidden sm:block z-10">
              <div className="border-slate-200 overflow-hidden min-h-12 min-w-12 max-h-24 max-w-24 rounded-full">
              <img src="funny-corgi-pictures-a7ftlogy9c0ctn7f 1.png"></img> {/*классное название, согласен*/}
              </div>
            </div>
            <div className="flex flex-col justify-center z-10">
              <p className="text-2xl font-semibold"><span className="text-primary">Асеев</span> Никита Михайлович</p>
              <p>Маленький программист-самоучка</p>
              <p>2 годика</p>
            </div>
            <div className="absolute h-2/3 w-1/3 blur-3xl rounded-full bg-secondary bottom-[-20px] right-[-12px] z-0"></div>
          </div>
        </Section>
=======
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
>>>>>>> be5cae7a729dc768c13bf41a15939bd9278787a2
      </Container>
    </>
  )
}

export default App

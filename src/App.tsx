import Container from "./components/Container"
import Section from "./components/Section"

function App() {

  return (
    <>
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
      </Container>
    </>
  )
}

export default App

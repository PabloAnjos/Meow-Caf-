import { Header } from "./components/Header"
import { CafeAoLeite } from "./components/Cafes/CafeAoLeite"
import { Capuccino } from "./components/Cafes/Capuccino"
import { CafePreto } from "./components/Cafes/CafePreto"
import imgCroissant from "./assets/images/imagem-croissan.png"
import imgEmbalagem from "./assets/images/imagem-embalagem.png"
import imgXicara from "./assets/images/xicara.png"
import imgLocation from "./assets/images/imagem-localizacao.png"
import { Footer } from "./components/Footer"



function App() {
  return (
    <>
      <Header />

      {/* SECTION CAFE */}
      
      <section className="flex justify-center items-center w-screen h-screen bg-[url('./assets/images/fundo-section-drinks.png')] bg-no-repeat bg-contain bg-center bg-background-white" id="produtos">

          <h1 className="absolute -mb-[-400px] font-semibold text-[2.5rem] text-Headings-color">Cafés</h1>    
          <span className="absolute left-2 right-0 bottom-[95px] mx-auto w-16 border-b-2 border-Headings-color mb-12"></span>
          <p className="absolute -mb-[-250px] font-normal text-Headings-color max-w-[500px] text-center">Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados. </p>
          <a className="absolute -mb-[-100px] font-semibold text-Headings-color" href="#">Veja todos {'>'}</a>

          <div className="flex gap-20 mt-[37.5rem]">
            <Capuccino />
            <CafeAoLeite />
            <CafePreto />
          </div>

      </section>

      {/* SECTION CROISSANTS */}

      <section className="flex gap-64 justify-center items-center w-screen max-h-[28.0625rem] bg-background-white">
            <div className="mt-[600px]">
                  <div className="bg-white flex justify-center items-center w-28 h-10 rounded-3xl text-pink-color-2 font-semibold drop-shadow-2xl"><p>R$ 12,00</p></div>
                  <h1 className="text-brand-color-2 font-bold text-[5rem]">Croissants</h1>
                  <span className="absolute -left-4 right-0 ml-[350px] mt-[-15px]  w-16 border-b-2 border-Headings-color"></span>
                  <h2 className="text-brand-color-2 font-medium text-[2.5rem]">Conheça nossa receita</h2>
                  <p className="text-brand-color-2 max-w-[300px] font-medium">A nossa receita de Croissant vai te surpreender. Croissants clássicos ou recheados!</p>
                  <a href="#" className="text-Headings-color font-semibold">Todos os croissants {'>'}</a>
                
            </div>

            <div className="mt-[600px]">
                  <img src={imgCroissant} alt="Imagem Croiassant" />
            </div>
      </section>

      {/* SECTION IN YOUR HOUSE */}

      <section className="flex justify-center w-screen max-h-[429rem] bg-background-white h-screen">
            <div className="bg-pink-200 flex justify-center items-center gap-0 w-[1150px] h-[368px] rounded-3xl bg-gradient-to-b from-pink-linear-gradient to-brow-linear-gradient mt-[600px]" id="delivery">
                <div>
                      <img src={imgEmbalagem} alt="Imagem da embalagem" className="w-[550px] mr-[195px] mb-24"/>
                </div>

                <div>
                      <h1 className="text-white font-bold text-[3rem] w-[31.25rem]">Levamos até você!</h1>
                      <p className="font-normal text-white">Estamos nos principais aplicativos de Delivery!</p>
                      <button className="bg-white w-72 h-14 rounded-full mt-9 ml-4 text-black font-semibold text-lg drop-shadow-2xl hover:bg-pink-100 duration-150">Delivery</button>
                </div>    
            </div>
      </section>

      {/* SECTION SOBRE NOS */}

        <section className="bg-background-white w-screen h-screen bg-[url('./assets/images/background-sobre-nos.png')] bg-no-repeat bg-contain bg-center flex justify-center items-center gap-48" id="sobre">
          <div>
                  <h1 className="text-brand-color-2 font-medium text-xl mb-5">Sobre nós</h1>
                  <p className="text-brand-color-2 font-bold text-5xl max-w-[450px]">Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!</p>

          </div>

          <div>
                <h1 className="text-brand-color-2 font-bold">O melhor lugar para apreciar o seu café</h1>
                <p className="text-Headings-color max-w-[300px] mt-4">No Meow Cafe, priorizamos a criação de um espaço onde tanto os seres humanos quanto seus animais de estimação possam relaxar e desfrutar.</p>
                <p className="text-Headings-color max-w-[300px] mt-14">Nosso design interior é inspirado na harmonia e conforto, com sofás aconchegantes, iluminação suave e uma decoração que remete à natureza e à alegria que os animais trazem para nossas vidas.</p>
          </div>
           
        </section>

        {/* SECTION CONTATO */}

        <section className="bg-background-white flex justify-center items-center h-screen w-screen">
            <div className="flex rounded-3xl max-w-[1500px] max-h-[400px] -mt-36">
                  <div className="bg-gradient-to-bl from-pink-linear-gradient2 to-pink-color rounded-3xl ml-10 flex h-[450px] ">

                        <div>
                              <h1 className="text-white font-bold text-[5rem] max-w-[100px] leading-[90px] ml-10 mt-10">Meow Enjoy</h1>
                              <span className="absolute -left-12 right-0 ml-[330px] w-16 border-b-2 border-white"></span>
                              <p className="text-white font-medium text-xl mt-8 ml-10">Todos os sábados e domingos</p>
                              <p className="max-w-[300px] mt-4 text-white ml-10">Venha tomar o seu brunch com a gente!</p>
                              <p className="mt-7"><a href="#" className="font-semibold text-Headings-color ml-10">Faça uma reserva {'>'}</a></p>
                        </div>


                        <div>
                              <img src={imgXicara} alt="Imagem Xicará" className="w-[600px] mr-[195px] -mt-20"/>
                        </div>

                        <div className="rounded-e-3xl bg-gradient-to-bl from-pink-linear-gradient2 to-pink-color w-[400px]">
                              <h1 className="text-white font-bold text-[2.5rem] text-center mt-5">Onde estamos</h1>
                              <span className="absolute left-[1020px] right-0 ml-[330px] mt-6 w-80 border-b-2 border-white"></span>
                              <p className="text-white mt-16 text-center">Você pode nos encontrar no endereço:</p>
                              
                              <div className="flex items-center gap-5 mt-7">
                                    <img src={imgLocation} alt="Imagem Location" className="ml-7"/>
                                    <p className="text-white">  Rua do Miado 234, Gatolândia</p>
                              </div>
                        </div>
                  </div>
            </div>
        </section>

        {/* FOOTER */}

            <Footer />
    </>
  )
}

export default App

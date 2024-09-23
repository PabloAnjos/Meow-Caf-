import imgCapuccino from '../../assets/images/imagem-capuccino.png'



export function Capuccino() {
    return (
        <>
            <div className="w-80 h-[500px] rounded-[3.125rem] bg-gradient-to-bl from-pink-color-2 to-pink-color">
                  <img src={imgCapuccino} alt="Imagem capuccino" className="mt-10"/>
                  <p className="text-center text-xl font-semibold text-white">R$ 24,00</p>
                  <h1 className="text-center font-semibold text-3xl text-white mt-2">Capuccino</h1>
                  <p className="text-white mt-5  font-normal text-center">Café expresso , leite vaporizado, espuma e um toque de caramelo.</p>
                  <button className="bg-white w-72 h-14 rounded-full mt-9 ml-4 text-black font-semibold text-lg drop-shadow-2xl hover:bg-pink-100 duration-150">Delivery</button>
              </div>
        </>
    )
}
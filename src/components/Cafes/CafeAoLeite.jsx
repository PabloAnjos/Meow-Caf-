import imgCafeComLeite from '../../assets/images/imagem-cafe-com-leite.png'



export function CafeAoLeite() {
    return (
        <>
            <div className="w-80 h-[500px] rounded-[3.125rem] bg-gradient-to-bl from-white to-amber-800">
                  <img src={imgCafeComLeite} alt="Imagem café com leite" className="mt-5"/>
                  <p className="text-center text-xl font-semibold text-white">R$ 16,00</p>
                  <h1 className="text-center font-semibold text-3xl text-white mt-2">Café ao Leite</h1>
                  <p className="text-white mt-5  font-normal text-center">O clássico, amado pelos brasileiros, com um toque de sofisticação!</p>
                  <button className="bg-white w-72 h-14 rounded-full mt-9 ml-4 text-black font-semibold text-lg drop-shadow-2xl hover:bg-orange-200 duration-150">Delivery</button>
              </div>
        </>
    )
}
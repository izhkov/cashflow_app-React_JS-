import img from '../img/cashflow_logo.png'


export const MainPage = () => {

    
    
    setTimeout(() => {
        const mainTitle = document.querySelector('.main-title')
        mainTitle.style.opacity = 1
    }, 500)

    return (
        <>
            <div className="main-title">
                <img className="main-image" src={img} alt="" />
                <h1>Финансовый отчет</h1>
            </div>
        </>
    )
}

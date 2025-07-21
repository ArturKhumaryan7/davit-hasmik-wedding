import rings from "../../assets/rings.svg"

export const WeddingSection = () => {
    return (
        <div className="wedding-section">
            <div className="wedding-section-image">
                 <img src={rings} alt="ring"/>
            </div>
            <h3 className="wedding-section-title">Պսակադրություն</h3>
            <h3 className="wedding-section-time">15։00</h3>
            <h3 className="wedding-section-church">Սուրբ Աննա Եկեղեցի</h3>
            <span className="wedding-section-village">ք․ Երևան</span>
            <a href="https://maps.app.goo.gl/8UrLNdn8Vnfm6AGt9" target="_blank">Ինչպես հասնել</a>
        </div>
    )
}
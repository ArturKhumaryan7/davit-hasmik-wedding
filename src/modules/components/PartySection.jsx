import  party  from "../../assets/cup.svg"
import {CivilMarriageCeremony} from "./CivilMarriageCeremony"

export const PartySection = () => {
    return (
        <div className="party-section">
            <div className="wedding-party-section">
                  <div className="party-section-image">
                      <img src={party} alt="party"/>
                  </div>
                  <h3 className="wedding-section-title">Հարսանեկան հանդիսություն</h3>
                  <h3 className="wedding-section-time">17։00</h3>
            </div>
            <CivilMarriageCeremony />
            <h3 className="wedding-section-church">Թայմ Թու Իթ Գարդեն</h3>
            <span className="wedding-section-village">Կոտայքի մարզ, գ․ Գառնի, Ազատամարտիկների 11</span>
            <a href="https://maps.app.goo.gl/qA2PGwtUBCWQ85WK9" target="_blank">Ինչպես հասնել</a>
        </div>
    )
}
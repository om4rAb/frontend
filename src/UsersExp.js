import React from "react";
import "./css/UserExpStyle.css";
export default function UsersExp() {
  return (
    <div>
      <h2 className="Uexp">Users Experience</h2>

      <div className="flex">
        <div className="user-container">
          <div className="p-container">
            <p>
              VENOM m'a aidé à atteindre mon objectif à travers un programme
              sportif et nutritionnel très détaillé. Cest vraiment un coach de
              qualité et de confiance, toujours à lécoute. Je recommande le
              coaching de VENOM sans hésitations !
            </p>
          </div>

          <div className="img-container">
            <img src={require("./images/image1.jpeg")} alt="user 1" />
          </div>
        </div>

        <div className="user-container">
          <div className="p-container">
            <p>
              Je recommande à toutes personnes voulons développer son corps et
              sa santé mentale, de suivre le programme EFT de VENOM. C'est
              vraiment le meilleur avec qui j'ai travaillé durant toute ma
              vie, il m'a aidé à perdre 10 kg en 2 mois et demi et j'ai aussi
              gagné de la masse musculaire.
            </p>
          </div>

          <div className="img-container">
            <img src={require("./images/user3 exp.jpg")} alt="user2" />
          </div>
        </div>

        <div className="user-container">
        
          <div className="p-container">
            <p>
              J'ai choisi VENOM comme coach sportif pour développer mon corps
              et c'est à ce moment-là j'ai réalisé qu'avoir un coach est une
              chose primordiale. En effet, VENOM fournit les conseils,
              l'accompagnement et la motivation nécessaire pour un débutant. Je
              vous conseille d'ailleurs d'investir tous dans l'activité physique
              pour votre bien être.
            </p>
          </div>

          <div className="img-container">
            <img src={require("./images/user2 exp.jpg")} alt="user3" />
          </div>
        </div>
      </div>
    </div>
  );
}

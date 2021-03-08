import React from 'react'
import './css/bootstrap.min.css'
import './css/bootstrap.css'
import './css/starwarsintro.css'
import './css/style.css'
import SecondLogo from './img/Star_Wars_logo.png';


export default function MainPage() {
  return (
    <>
      <div>
        <div class="star-wars" id="cover">
          {/* <p class="intro-text">Hope for success ...</p> */}
          <h2 class="main-logo"><img src={SecondLogo} /></h2>
          <div class="main-content">
            <div class="title-content">
              <p class="content-header">StarWars Lab 1</p>
              <p class="content-body">
                We put it off for a long time and hoped that it would carry us, but the world is cruel and it is necessary to do laboratory work. We rallied ourselves to do this. We hope that you will not be very demanding and let the young Jedi go. An important thesis awaits the Jedi.
              </p>
            </div>
          </div>
        </div>
        <div class="container-fluid" id="about-project">
          <div class="row rowDiv">
            <div class="col-md-6 col-sm-12 cart-text">
              <div class="textblock text-left textin" id="two">
                <p class="bigLeters">About project</p>
                <p class="smallLeters">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus iure, explicabo asperiores quo quia eligendi rerum quasi eum rem. Ullam architecto adipisci minima unde rerum exercitationem atque nemo nobis?
                  </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 cart-photo-right"></div>
          </div>
          <div class="row rowDiv">
            <div class="col-md-6 col-sm-12 cart-photo-left"></div>
            <div class="col-md-6 col-sm-12 cart-text">
              <div class="textblock text-left textin" id="one">
                <p class="bigLeters">About Us</p>
                <p class="smallLeters">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima error fugiat delectus accusamus. Qui accusantium saepe harum eum quisquam alias unde, sequi in voluptatem voluptatum earum esse magnam autem consequatur.
            </p>
              </div>
            </div>
          </div>
        </div>



        <div class="container-fluid team" id="team">
          <div class="container">
            <div class="row" style={{paddingBottom: "30px"}}>
              <div class="container logoWord">
                <span class="textOnFotoTeam ">Our Team</span>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row blockTeam">
              <div class="container col-md-3 col-sm-6  teamBlock ceo text-center  align-items-center">
                <p class="nameTeam">
                  <span>Karyna Mazur</span>
                  <br/>
                  <span>CEO</span>
                </p>
              </div>
              <div class="container col-md-3 col-sm-6  teamBlock designer text-center">
                <p class="nameTeam">
                  <span>Max Hordiienko</span> <br/>
                  <span>Web Designer</span>
                </p>
              </div>
              <div className="container col-md-3 col-sm-6  teamBlock yoda text-center">
                <p class="nameTeam">
                  <span>Baby Yoda</span>
                  <br/>
                  <span>Mascot</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

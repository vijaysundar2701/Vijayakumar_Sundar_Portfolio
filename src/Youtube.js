import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./index.css";
class Youtube extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="heading">
        <div class="jumbotron text-center" id="heading">
          <h1 class="myname">Vijayakumar</h1>
          <p class="myoccupation">Software Developer</p>
          <ul class="nav nav-pills nav-justified" id="navigation">
            <li class="nav-item">
              <a class="nav-link " href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/project">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/youtube">
                Youtube
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
    
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h2>Channel Logo</h2>
              <div class="rounded-circle">
                <br />
                <br />
                <img
                  src="vjlogo.jpg"
                  class="rounded-circle"
                  alt="my photo"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <br />
            <div class="col-sm-8">
              <h2>Channel Trailer</h2>
              <div class="embed-responsive embed-responsive-16by9">
                <br />
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/_W6d6BXNsY8"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h2>React JS</h2>
              <div class="rounded-circle">
                <br />
                <br />
                <br />
                <img
                  src="logo192.png"
                  class="rounded-circle"
                  alt="my photo"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>

            <div class="col-sm-8">
              <h2>React JS Full Course</h2>
              <div class="embed-responsive embed-responsive-16by9">
                <br />
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/videoseries?list=PLtMr2pEysMV46-LZTpYxmeRqbrZ-A_Rr5"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h2>Node JS</h2>
              <div class="rounded-circle">
                <br />
                <br />
                <br />
                <img
                  src="Node JS.jpg"
                  class="rounded-circle"
                  alt="my photo"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>

            <div class="col-sm-8">
              <h2>Node JS Full Course</h2>
              <div class="embed-responsive embed-responsive-16by9">
                <br />
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/cRqIGvlgO88"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron text-center" id="footer">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/vijayakumar2701"
                class="fa fa-linkedin nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.youtube.com/vjtechnowizard"
                class="fa fa-youtube nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.github.com/vijaysundar2701"
                class="fa fa-github nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/vjtechnowizard"
                class="fa fa-instagram nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.facebook.com/profile.php?id=100011763072508"
                class="fa fa-facebook nav-link"
                style={{ color: "white" }}
              />
            </li>
            <li class="nav-item">
              <a
                href="https://www.twitter.com/vijaysundars"
                class="fa fa-twitter nav-link"
                style={{ color: "white" }}
              />
            </li>
          </ul>
          <br />
          <p>Copyright By VJ</p>
        </div>
      </div>
    );
  }
}

export default Youtube;

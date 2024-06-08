import React, { Component } from 'react'
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Outlet } from 'react-router-dom'
import hero from './hero.jpg'
export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <h4> Lorem ipsum dolor sit amet</h4>
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae maiores unde inventore reiciendis distinctio pariatur vero illo nulla delectus, doloribus quidem ullam? Ut nobis fugiat omnis vel, provident quasi.</p>
        <div className="home-img">
          <img src={hero} alt="hero" />
        </div>
        <Link to="/gallery" className='btn btn-primary' >go to gallery</Link>
        
        <Outlet />
      </div>
    )
  }
}
import React, { Component } from 'react';
import Aboutme from './aboutme/aboutme';
import Navigation from './navigation/nav';
import Skills from './skills/skills';
import Link from './link/link';
import Projects from './projects/projects';
import Footer from './footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Aboutme/>
        <Skills/>
        <Link/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;

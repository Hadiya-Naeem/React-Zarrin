import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

import Footer from './components/Footer'
import Post from './components/Post.jsx';
import Cards from './components/Cards.jsx';
import Popular from './components/Popular.jsx';

const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Post />
    <Cards />
    <Popular />
    <Footer />
    
    </>
  )
}

export default App
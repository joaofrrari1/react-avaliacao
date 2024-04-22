import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Galery from '../components/Galery'
import '../styles/styles.css'


function Home(){
    return(
        <main>
            <Header />
            <Banner />
            <div className="section" id="sobre">
            </div>
            <div className="section" id="galeria">
                <Galery />
            </div>
            <Footer />
        </main>
    )
}

export default Home
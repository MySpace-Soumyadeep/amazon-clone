import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                    id = '1'
                    title='The Lean Start Up'
                    price={19.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={4}/>
                    <Product
                    id = '5' 
                    title='Pulse oximeters'
                    price={21.41}
                    image='https://newassets.apollo247.com/pub/media/catalog/product/p/u/pul0018.jpg'
                    rating={5}/>
                </div>

                <div className="home__row">
                <Product 
                    id = '2'
                    title='Macbook Air'
                    price={2800}
                    image='https://images.techhive.com/images/article/2014/12/macbook_air-100538062-large.jpg'
                    rating={5}/>
                    <Product 
                    id = '6'
                    title='Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size'
                    price={98}
                    image='https://www.dreamworksdirect.com/wp-content/uploads/2020/12/DWAC00513.png'
                    rating={4}/>
                    <Product 
                    id = '3'
                    title='iPhone 12 Pro Max'
                    price={200}
                    image='https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg'
                    rating={5}/>
                </div>

                <div className="home__row">
                <Product 
                    id = '4'
                    title='SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built'
                    price={85}
                    image='https://images.samsung.com/is/image/samsung/in-uhd-tv-tu7200-ua50tu7200kxxl-rperspectivetitangray-232233901?$720_576_PNG$'
                    rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home

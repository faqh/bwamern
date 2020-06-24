import React from 'react'

import ImgHero from 'assests/images/img-hero.jpg'
import ImgHeroFrame from 'assests/images/img-hero-frame.jpg'
import IcDest from 'assests/images/icon/iconDest.svg'
import IcIntrst from 'assests/images/icon/iconIntrst.svg'
import IcTravel from 'assests/images/icon/iconTravel.svg'

import numberFormat from 'utils/formatNumber'

import Button from 'elements/Button'
export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    

    return (
        <section className="container pt-4">
            <div className="row">
                <div className="col-6 pr-5" style={{width: 620}}>
                    <h1 className="h2 font-weight-bold line-height-1 mb-3">
                        Vacation brings health and<br/>
                        love back into your life
                    </h1>
                    <p className="font-weight-light text-gray-500 w-75" style={{marginBottom: 40, lineHeight:"170%"}}>
                    We provided you the pleasure you need so that you don’t think of any problems back at home. Let’s make another memorable moments with us.
                    </p>
                    <Button className="btn px-5 font-weight-bold" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me
                    </Button>

                    <div className="row" style={{marginTop: 64}}>
                        <div className="col-auto" style={{marginRight: 10}}>
                            <img width="38" height="38" src={IcTravel} alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3 font-weight-medium">
                                {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 10}}>
                            <img width="38" height="38" src={IcDest} alt={`${props.data.destination} Destination`}/>
                            <h6 className="mt-3 font-weight-medium">
                                {numberFormat(props.data.destination)} <span className="text-gray-500 font-weight-light">destination</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="38" height="38" src={IcIntrst} alt="Places"/>
                            <h6 className="mt-3 ">
                                <span className="text-gray-500 font-weight-light">Many interest places</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-5 pl-5">
                    <div style={{width: 590, height: 490, marginTop: 30}}>
                        <img src={ImgHero} alt="Kamanre Resort" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}} />
                        <img src={ImgHeroFrame} alt="Kamanre Resort Frame" className="img-fluid position-absolute" style={{margin: '0 -15px -15px 0' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

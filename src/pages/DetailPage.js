import React, { Component } from 'react'

import Fade from "react-reveal/Fade";

import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import FeaturedImage from 'parts/FeaturedImage'
import PageDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

import ItemDetails from 'json/itemDetails.json';

export default class DetailPage extends Component {

    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Details", pageHref: ""},
        ]

        return (
            <>
                <Header {...this.props}/>
                <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails}/>
                <FeaturedImage data={ItemDetails.imageUrls}/>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <Fade bottom>
                                <PageDetailDescription data={ItemDetails}/>
                            </Fade>
                        </div>
                        <div className="col-5"><BookingForm itemDetails={ItemDetails}/></div>
                    </div>
                </section>
                <Fade bottom>
                    <Categories data={ItemDetails.categories}/>
                </Fade>
                <Fade bottom>
                <Testimoni data={ItemDetails.testimonial}/>
                </Fade>

                <Footer />
            </>
        )
    }
}

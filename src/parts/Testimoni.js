import React from 'react'

import TestimonialFrame from 'assests/images/img-testimonial-frame.jpg'

import Star from 'elements/star'
import Button from 'elements/Button'

export default function Testimoni({data}) {
    return (
        <section className="container">
            <div className="row align-items-center" >
                <div className="col-auto" style={{ marginRight: 64 }}>
                    <div className="testimonial-hero ">
                        <img src={data.imageUrl} alt="testimonial" className="position-absolute" style={{margin: `30px 0 0 30px`, zIndex: 1}} />
                        <img src={TestimonialFrame} alt="testimonial frame" className="position-absolute" style={{ marginRight: `-30px 0 0 -30px` }} />
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom: 32}}>{data.name}</h4>
                    <Star value={data.rate} width={26} height={25} spacing={4} />
                    <h5 className="h2 font-weight-light line-height-2 my-3">{data.content}</h5> 
                    <span className="text-gray-500">{data.familyName}, {data.familyOccupation}</span>
                    <div>
                        <Button className="btn px-5" style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/${data.id}`}>Read Their Story</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

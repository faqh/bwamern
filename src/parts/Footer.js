import React from 'react'

import Button from 'elements/Button'
import IconText from 'parts/iconText'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <IconText />
                        <p className="brand-tagline mt-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                        </p>
                    </div>

                    <div className="col-2 mr-5">
                        <h6 className="mt-2 font-weight-medium">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2 mr-5">
                        <h6 className="mt-2 font-weight-medium">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/carrers">Our Carrers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Terms & Condition</Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h6 className="mt-2 font-weight-medium">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" isExternal href="mailto:support@faqhaction.id">support@faqhaction.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" isExternal href="tel:+622188766653">021 - 8876 - 6653</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Faqhacation, Makassar, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2020 • All rights reserved • Faqhacation 
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

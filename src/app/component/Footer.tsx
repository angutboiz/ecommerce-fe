import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-muted mt-8">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-muted-foreground">
                            ShopNow is your one-stop destination for all your
                            shopping needs. We offer a wide range of
                            high-quality products at competitive prices.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-primary hover:text-primary/80"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-primary hover:text-primary/80"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-primary hover:text-primary/80"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <p className="text-muted-foreground">
                            123 Shop Street, City, Country
                            <br />
                            Email: info@shopnow.com
                            <br />
                            Phone: +1 234 567 890
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center text-muted-foreground">
                    © 2023 ShopNow. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

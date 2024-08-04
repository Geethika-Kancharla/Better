import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
    return (
        <div className='bg-white text-black h-screen flex flex-col lg:pl-24'>
            <h3 className='p-4 text-green-900 font-bold text-2xl'>Better</h3>
            <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row lg:p-4'>
                <div className='pl-4 flex flex-col bg-white lg:w-1/3'>
                    <div className=''>

                        <p className='p-4 text-slate-700'>Better is a family of companies serving all your homeownership needs.</p>
                    </div>
                    <div>
                        <div className='flex space-x-2'>
                            <h3 className='pl-4 text-green-900 font-bold text-2xl'>Better</h3>
                            <h3 className='text-slate-500 text-2xl'>Mortage</h3>
                        </div>
                        <p className='p-4 text-slate-700'>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
                    </div>

                    <div>
                        <div className='flex space-x-2'>
                            <h3 className='pl-4 text-green-900 font-bold text-2xl'>Better</h3>
                            <h3 className='text-slate-500 text-2xl'>Real Estate</h3>
                        </div>
                        <p className='p-4 text-slate-700'>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
                    </div>

                    <div>
                        <div className='flex space-x-2'>
                            <h3 className='pl-4 text-green-900 font-bold text-2xl'>Better</h3>
                            <h3 className='text-slate-500 text-2xl'>Cover</h3>
                        </div>
                        <p className='p-4 text-slate-700'>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
                    </div>

                    <div>
                        <div className='flex space-x-2'>
                            <h3 className='pl-4 text-green-900 font-bold text-2xl'>Better</h3>
                            <h3 className='text-slate-500 text-2xl'>Inspect</h3>
                        </div>
                        <p className='p-4 text-slate-700'> Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
                    </div>

                    <div>
                        <div className='flex space-x-2  '>
                            <h3 className='pl-4 text-green-900 font-bold text-2xl'>Better</h3>
                            <h3 className='text-slate-500 text-2xl'>Settlement Services</h3>
                        </div>
                        <p className='p-4 text-slate-700'>Get transparent rates when you shop for title insurance all in one convenient place.</p>
                    </div>

                </div>

                <div className='flex flex-col space-y-3 lg:pl-10'>
                    <h5 className='pl-4 font-bold'>Resources</h5>
                    <p className='text-slate-700 pl-4'>Home affordability calculator</p>
                    <p className='text-slate-700 pl-4'>Mortgage calculator</p>
                    <p className='text-slate-700 pl-4'>Free mortgage calculator</p>
                    <p className='text-slate-700 pl-4'>Mortgage calculator with taxes</p>
                    <p className='text-slate-700 pl-4'>Mortgage calculator with PMI</p>
                    <p className='text-slate-700 pl-4'>Rent vs buy calculator</p>
                    <p className='text-slate-700 pl-4'>HELOC payment calculator</p>
                    <p className='text-slate-700 pl-4'>HELOC vs cash-out refinance calculator</p>
                    <p className='text-slate-700 pl-4'>Buy a home</p>
                    <p className='text-slate-700 pl-4'>Sell a home</p>
                    <p className='text-slate-700 pl-4'>Get home inspection</p>
                </div>

                <div className='flex flex-col pt-8 space-y-3 lg:pt-0 lg:pl-10'>
                    <h5 className='pl-4 font-bold'>Company</h5>
                    <p className='text-slate-700 pl-4'>About Us</p>
                    <p className='text-slate-700 pl-4'>Careers</p>
                    <p className='text-slate-700 pl-4'>Media</p>
                    <p className='text-slate-700 pl-4'>Partner With Us</p>
                    <p className='text-slate-700 pl-4'>Learning center</p>
                    <p className='text-slate-700 pl-4'>FAQs</p>
                    <p className='text-slate-700 pl-4'>Investor Relations</p>
                </div>

                <div className='lg:pt-0'>

                    <div className='flex flex-col pt-8 space-y-3 lg:pt-0 lg:pl-10'>
                        <h5 className='pl-4 font-bold'>Contact Us</h5>
                        <p className='text-slate-700 pl-4'>hello@better.com</p>
                        <p className='text-slate-700 pl-4'>415-523-8837</p>
                        <p className='text-slate-700 pl-4'>FAQ</p>
                        <p className='text-slate-700 pl-4'>Glossary</p>
                    </div>

                    <div className='flex flex-col pt-8 space-y-3 lg:pl-10'>
                        <h5 className='pl-4 font-bold'>Legal</h5>
                        <p className='text-slate-700 pl-4'>NMLS Consumer Access</p>
                        <p className='text-slate-700 pl-4'>Privacy Policy</p>
                        <p className='text-slate-700 pl-4'>Terms of Use</p>
                        <p className='text-slate-700 pl-4'>Disclosures & Licensing</p>
                        <p className='text-slate-700 pl-4'>Affiliated Business</p>
                        <p className='text-slate-700 pl-4'>Browser Disclaimer</p>
                    </div>
                </div>
            </div>

            <div className='flex space-x-5 p-3 pt-7 text-3xl lg:pl-12 lg:pt-44 lg:pb-7'>
                <LuFacebook />
                <FaInstagram />
                <LuLinkedin />
            </div>

            <div className='flex flex-col lg:w-11/12 lg:pl-16'>
                <p className='text-slate-600 text-sm p-4'>1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.</p>
                <p className='text-slate-700 text-sm p-4'>2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.</p>
                <p className='text-slate-700 text-sm p-4'>3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.</p>

            </div>

            <div className="flex justify-center lg:w-11/12 lg:pl-16">
                <hr className="w-4/5 border-t-2 border-gray-600 my-4" />
            </div>


            <div className='flex flex-col lg:w-11/12 lg:pl-16 lg:pt-32'>
                <p className='text-slate-600 text-sm p-4'>© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
                <p className='text-slate-700 text-sm p-4'>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
                <p className='text-slate-700 text-sm p-4'>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>

                <p className='text-slate-700 text-sm p-4'>New York State Fair Housing Notice</p>
                <p className='text-slate-700 text-sm p-4'>New York Standard Operating Procedures.</p>
                <p className='text-slate-700 text-sm p-4'>Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice</p>
                <p className='text-slate-700 text-sm p-4'>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
                <p className='text-slate-700 text-sm p-4'>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
                <p className='text-slate-700 text-sm p-4'>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.</p>
                <p className='text-slate-700 text-sm p-4'>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
                <p className='text-slate-700 text-sm p-4'>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
                <p className='text-slate-700 text-sm p-4'>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>

            </div>

        </div>
    )
}

export default Footer
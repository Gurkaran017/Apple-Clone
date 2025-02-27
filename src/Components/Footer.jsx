import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {

  const LastItem1 = [
    "Privacy Policy ",
    "|",
    "Terms of Use",
    "|",
    "Sales Policy",
    "|",
    "Legal",
    "|",
    "Site Map",
  ]
  return (
    <>
      <div className="  pt-5 lg:px-32 px-5 ">
        <div className="space-y-3 ">
          <h1 className="lg:text-2xl text-xl font-semibold text-gray-900 tracking-tight">
            Quick Links
          </h1>
          <div className="flex lg:space-x-4 space-x-2 ">
            <button className="flex items-center hover:text-white hover:bg-black border lg:text-sm text-[10px] border-gray-800 text-gray-900 rounded-3xl  lg:px-4 px-3 lg:py-2 py-1">
              Order Status <GoArrowUpRight className="mt-1" />
            </button>
            <button className="border lg:text-sm hover:text-white hover:bg-black text-[10px] border-gray-800 text-gray-900 rounded-3xl lg:px-4 px-2 py-2">
              Shoping Help
            </button>
            <button className="flex border lg:text-sm hover:text-white hover:bg-black text-[10px] border-gray-800 text-gray-900 rounded-3xl lg:px-2 px-3 py-2">
              Your Saves <GoArrowUpRight className="mt-1" />
            </button>
          </div>
        </div>
        <div className="lg:p-16 pt-8 text-xs text-gray-500 space-y-3">
          <p>
            Apple Intelligence is available in beta on all iPhone 16 models,
            iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
            Mac models with M1 and later, with Siri and device language set to
            English (Australia, Canada, Ireland, New Zealand, South Africa, UK
            or US), as part of an iOS 18, iPadOS 18 and macOS Sequoia software
            update. Additional features and languages will be available in
            April, with more languages and platforms coming over the course of
            the year. Languages supported in 2025 include Chinese, English
            (India, Singapore), French, German, Italian, Japanese, Korean,
            Portuguese, Spanish and Vietnamese.
          </p>
          <p>
            ◊◊ Monthly pricing is after purchase using EMI with qualifying cards
            at 15.99% p.a. over a 24‑month tenure. Monthly pricing is rounded to
            the nearest rupee. Exact pricing will be provided by your card
            issuer, subject to your card issuer’s terms and conditions.
          </p>
          <div>
            <h1>Representative example:</h1>
            <p>
              A purchase of ₹79900.00 repaid over 24 months with an interest
              rate of 15.99% p.a. requires monthly payments of ₹3912.00. Total
              amount payable: ₹93882.00. Total interest paid to bank: ₹13982.00.
            </p>
          </div>
          <div>
            <h1>
              § No Cost EMI is available with the purchase of an eligible
              product made using qualifying cards on 3-, 6-, 9-, 12-, 18-, or
              24-month tenures from most leading card issuers.
            </h1>
            <p>
              § No Cost EMI is available with the purchase of an eligible
              product made using qualifying cards on 3-, 6-, 9-, 12-, 18-, or
              24-month tenures from most leading card issuers. Eligible AirPods,
              HomePod and Beats products are available with No Cost EMI on 3-
              and 6-month tenures only. Monthly pricing is rounded to the
              nearest rupee. Exact pricing will be provided by your card issuer,
              subject to your card issuer’s terms and conditions. Minimum order
              spend applies as per your card issuer’s threshold. No Cost EMI is
              not available to Business customers and cannot be combined with
              Apple Store for Education or Corporate Employee Purchase Plan
              pricing. Card eligibility is subject to terms and conditions
              between you and your card issuer. Offer may be revised or
              withdrawn at anytime without any prior notice.{" "}
              <span className="underline text-gray-700">Terms apply.</span>
            </p>
          </div>
          <div>
            <h1>Representative example:</h1>
            <p>
              A purchase of ₹79900.00 repaid over 24 months with an interest
              rate of 15.99% p.a. and No Cost EMI savings of ₹11903.00 requires
              monthly payments of ₹3329.00. Total amount payable: ₹79900.00.
            </p>
          </div>
          <p>
            §§ Instant cashback is available with the purchase of an eligible
            product with qualifying American Express, Axis Bank and ICICI Bank
            cards only. Minimum transaction value of ₹10001.00 applies.
            <span className="underline text-gray-700">Click here</span> to see
            instant cashback amounts and eligible devices. Instant cashback is
            available for up to two orders per rolling 90-day period with an
            eligible card. Card eligibility is subject to terms and conditions
            between you and your card issuer. Total transaction value is
            calculated after any trade-in credit or eligible discount is
            applied. Any subsequent order adjustment(s) or cancellation(s) may
            result in instant cashback being recalculated, and any refund may be
            adjusted to account for instant cashback clawback; this may result
            in no refund being made to you. Offer may be revised or withdrawn at
            any time without any prior notice.{" "}
            <span className="underline text-gray-600">
              Additional terms apply.
            </span>{" "}
            Instant cashback is not available to Business customers and cannot
            be combined with Apple Store for Education or Corporate Employee
            Purchase Plan pricing. Multiple separate orders cannot be combined
            for instant cashback.
          </p>
          <p>
            * Mac, iPad, and Apple Watch trade-in is available only in-store in
            India. Apple Retail Online in India does not offer trade-in for Mac,
            iPad, and Apple Watch. Trade‑in values will vary based on the
            condition, year and configuration of your eligible trade‑in device.
            Not all devices are eligible for credit. You must be at least the
            age of majority to be eligible to trade in for credit. Trade‑in
            value may be applied towards a qualifying new device purchase.
            Actual value awarded is based on receipt of a qualifying device
            matching the description provided when estimate was made. Sales tax
            may be assessed on full value of a new device purchase. In-store
            trade‑in requires presentation of a valid photo ID (local law may
            require saving this information). Some stores may have additional
            requirements. Apple or its trade‑in partners reserve the right to
            refuse, cancel or limit the quantity of any trade‑in transaction for
            any reason. More details are available from Apple’s trade‑in partner
            for trade‑in and recycling of eligible devices. Restrictions and
            limitations may apply.
          </p>
          <p>
            ‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).
          </p>
        </div>
        <div className="min-h-screen flex flex-col lg:px-16 pt-8">
          <footer className="bg-gray-100 text-gray-700 text-xs py-6 border-t border-gray-300">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-2 pb-4">
                <FaApple className="text-lg" />
                <MdOutlineKeyboardArrowRight />
                <span>Apple Store Online </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 border-b pb-6 ">
                <div>
                  <h3 className="font-semibold mb-3">Shop and Learn</h3>
                  <ul className="space-y-3">
                    {[
                      "Store",
                      "Mac",
                      "iPad",
                      "iPhone",
                      "Watch",
                      "AirPods",
                      "TV & Home",
                      "AirTag",
                      "Accessories",
                      "Gift Cards",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Account</h3>
                  <ul className="space-y-3">
                    {[
                      "Manage Your Apple Account",
                      "Apple Store Account",
                      "iCloud.com",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-semibold mt-6 mb-3">Entertainment</h3>
                  <ul className="space-y-3">
                    {[
                      "Apple One",
                      "Apple TV+",
                      "Apple Music",
                      "Apple Books",
                      "App Store",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Apple Store</h3>
                  <ul className="space-y-3">
                    {[
                      "Find a Store",
                      "Genius Bar",
                      "Today at Apple",
                      "Apple Summer Camp",
                      "Ways to Buy",
                      "Apple Trade In",
                      "Recycling Programme",
                      "Order Status",
                      "Shopping Help",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">For Business</h3>
                  <ul className="space-y-3">
                    <li className="hover:underline cursor-pointer">
                      Apple and Business
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-6 mb-3">For Education</h3>
                  <ul className="space-y-3">
                    {[
                      "Apple and Education",
                      "Shop for Education",
                      "Shop for University",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">For Healthcare</h3>
                  <ul className="space-y-3">
                    {["Apple in Healthcare", "Health on Apple Watch"].map(
                      (item) => (
                        <li
                          key={item}
                          className="hover:underline cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <h3 className="font-semibold mt-6 mb-3">Apple Values</h3>
                  <ul className="space-y-3">
                    {[
                      "Accessibility",
                      "Environment",
                      "Privacy",
                      "Supply Chain",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">About Apple</h3>
                  <ul className="space-y-3">
                    {[
                      "Newsroom",
                      "Apple Leadership",
                      "Career Opportunities",
                      "Investors",
                      "Ethics & Compliance",
                      "Events",
                      "Contact Apple",
                    ].map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-4">
                More ways to shop:{" "}
                <span className="text-blue-700 underline cursor-pointer">
                  Find an Apple Store
                </span>{" "}
                or{" "}
                <span className="text-blue-700 underline cursor-pointer">
                  other retailer
                </span>{" "}
                near you. Or call 000800 040 1966.
              </div>

              <div className="lg:flex space-y-1 items-center lg:space-x-8 text-xs text-gray-500 mt-4 border-t pt-4">
                <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                <div className="flex lg:justify-center items-center lg:space-x-2 space-x-1  ">
                  {LastItem1.map((item,index) => (
                    <span key={index} className="hover:underline font-medium lg:text-xs text-[10px] cursor-pointer ">
                      {item}
                    </span>
                  ))}
                </div>
                <div >India</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5B21B6]/5 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 pt-24">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5B21B6] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent mb-4">
            Return and Refund Policy
          </h1>
          <p className="text-gray-600">Last updated: June 04, 2025</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <section className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Thank you for shopping at Zvollen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The following terms are applicable for any products that You purchased with Us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">Interpretation and Definitions</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[#2563EB]">Interpretation</h3>
                <p className="text-gray-600 leading-relaxed">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[#2563EB]">Definitions</h3>
                <p className="text-gray-600 leading-relaxed">
                  For the purposes of this Return and Refund Policy:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                  <li><span className="font-semibold">Company</span> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Zvollen Global Trading, No 41, Jalan Kubah, U8/60 Bukit Jelutong, 40150 Shah Alam.</li>
                  <li><span className="font-semibold">Goods</span> refer to the items offered for sale on the Service.</li>
                  <li><span className="font-semibold">Orders</span> mean a request by You to purchase Goods from Us.</li>
                  <li><span className="font-semibold">Service</span> refers to the Website.</li>
                  <li><span className="font-semibold">Website</span> refers to Zvollen, accessible from www.zvollen.com</li>
                  <li><span className="font-semibold">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">Your Order Cancellation Rights</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>You are entitled to cancel Your Order within 14 days without giving any reason for doing so.</p>
              <p>The deadline for cancelling an Order is 14 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
              <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
              <div className="bg-gradient-to-r from-[#5B21B6]/10 to-[#2563EB]/10 p-4 rounded-lg">
                <p className="text-gray-700">By email: info@zvollen.com</p>
              </div>
              <p>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">Conditions for Returns</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>In order for the Goods to be eligible for a return, please make sure that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Goods were purchased in the last 14 days</li>
                <li>The Goods are in the original packaging</li>
              </ul>
              
              <p>The following Goods cannot be returned:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
              </ul>
              
              <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
              <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">Returning Goods</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
              <div className="bg-gradient-to-r from-[#5B21B6]/10 to-[#2563EB]/10 p-4 rounded-lg">
                <p className="text-gray-700">No 41 Jalan Kubah U8/60 Bukit Jelutong 40150 Shah Alam Malaysia</p>
              </div>
              <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">Gifts</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You&apos;ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
              <p>If the Goods weren&apos;t marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our Returns and Refunds Policy, please contact us:
            </p>
            <div className="bg-gradient-to-r from-[#5B21B6]/10 to-[#2563EB]/10 p-4 rounded-lg">
              <p className="text-gray-700">By email: info@zvollen.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 
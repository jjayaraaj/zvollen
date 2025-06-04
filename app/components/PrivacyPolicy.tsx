import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5B21B6]/5 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5B21B6] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Communication preferences</li>
              <li>Service usage information</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Providing and maintaining our services</li>
              <li>Improving customer service</li>
              <li>Sending periodic emails and updates</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">3. Information Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">4. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">5. Cookie Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">6. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#5B21B6]">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gradient-to-r from-[#5B21B6]/10 to-[#2563EB]/10 p-4 rounded-lg">
              <p className="text-gray-700">Email: privacy@zvollen.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
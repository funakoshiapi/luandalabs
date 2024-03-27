import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className='justify-center m-12 p-64 '>
      <h2 className='font-bold'>Privacy Policy</h2>
      <p className='font-bold'>Last updated: March 27, 2024</p>
      <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.</p>

      <h3 className='font-bold'>1. Information we collect</h3>
      <h4>Log data</h4>
      <p>When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered "non-identifying information," as it does not personally identify you on its own. It may include your computer's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
      <h4>Personal information</h4>
      <p>We may ask for personal information, such as your:</p>
      <ul>
        <li>Name</li>
        <li>Email</li>
        <li>Phone/mobile number</li>
        <li>Date of birth</li>
        <li>Payment information</li>
        <li>Address</li>
      </ul>

      <h3 className='font-bold'>2. Legal bases for processing</h3>
      <p>We will process your personal information lawfully, fairly, and transparently. We collect and process information about you only where we have legal bases for doing so.</p>

      <h3 className='font-bold'>3. Collection and use of information</h3>
      <p>We may collect, hold, use, and disclose information for various purposes.</p>
      {/* Additional content skipped for brevity */}

      <h3 className='font-bold'>4. Changes to this Privacy Policy</h3>
      <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.</p>

      <h3 className='font-bold'>5. Contact us</h3>
      <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:luandalabs@gmail.com">luandalabs@gmail.com</a>.</p>
    </div>
  );
}

export default PrivacyPolicy;

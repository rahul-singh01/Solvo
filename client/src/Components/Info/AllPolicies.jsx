import React from 'react';

import WarningIcon from '@mui/icons-material/Warning';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

import IterInfo from './IterInfo'

const items = [
  {
    icon: <WarningIcon />,
    title: 'Terms and Conditions',
    // href: '/contact-us',
    // hrefText: 'Contact Us',
    description:
      ' Our website allows users to post questions, answers, and other content ("User Content"). By posting User Content, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sub-licensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in any media.',
  },
  {
    icon: <AdminPanelSettingsRoundedIcon />,
    title: 'Privacy Policy',
    description:
      `

      Personal Information: When you visit our website or use our services, we may collect personal information such as your name, email address, and contact information.
      Usage Data: We may also collect information about how you access and use our website, including your IP address, browser type, and operating system.
      
      Our website is intended for use by individuals who are at least 13 years of age. By using our website, you represent and warrant that you are at least 13 years old.
      `,
  },
  {
    icon: <CurrencyRupeeSharpIcon />,
    title: 'Refund Policy',
    description:
      'We offer a limited time period default to 24 hours which user can modify, to cancle a payment on a question, If cancled then the payment will be refunded to the user. Between the time period of 3 days.',
  },
];

function TermsAndConditions() {
  return (
    <IterInfo title={'Policies'} desc={'Please read these policies carefully before using our website and services.'} items={items}/>
  )
}

export default TermsAndConditions;

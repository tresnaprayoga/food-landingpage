import React from 'react';
import { FaUserTie } from 'react-icons/fa6';

const WhatsAppButton = ({ text, phoneNumber }) => {
  return (
    <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noopener noreferrer' className='whatsapp-button'>
      <span className='whatsapp-text'>{text}</span>
      <FaUserTie className='whatsapp-icon' />
    </a>
  );
};

export default WhatsAppButton;

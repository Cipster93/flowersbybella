import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTiktok, FaWhatsappSquare } from 'react-icons/fa'

const SocialIcons = () => {
  const icons = [
    {
      Icon: FaFacebookSquare,
      link: 'https://www.facebook.com/profile.php?id=61557269575881',
      label: 'Pagina de Facebook Flowers by Bella'
    },
    {
      Icon: FaWhatsappSquare,
      link: 'https://wa.me/407XXXXXXXX',
      label: 'Contact WhatsApp Flowers by Bella'
    },
    // {
    //   Icon: FaInstagramSquare,
    //   link: 'https://instagram.com',
    //   label: 'Profil Instagram Flowers by Bella'
    // },
    // {
    //   Icon: FaTiktok,
    //   link: 'https://tiktok.com',
    //   label: 'Profil TikTok Flowers by Bella'
    // },
  ]

  return (
    <nav aria-label="Rețele sociale Flowers by Bella" className='flex space-x-8 mt-6 text-gray-300 text-3xl'>
      {icons.map(({ Icon, link, label }, i) => (
        <a
          key={i}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className='hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
        >
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default SocialIcons

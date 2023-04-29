// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Galleria' },
    { href: '/', name: 'Interviste' },
    { href: '/', name: 'Articoli' },
    { href: '/', name: 'Contatti' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Signori, io sono Void.',
  subtitle:
    'I tatuaggi hanno il loro potere e la loro magia. Non solo abbelliscono il corpo ma anche la psiche',
  btnText: 'Scopri di più',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'La mia Storia',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Conosciamoci',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Sfoglia la Galleria',
  btnText: 'Vedi tutto',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Considera ciò che desideri. Il tuo tatuatore non ti dirà mai quale tatuaggio avere”',
  btnText: 'Guardalo ora',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "L'intero team è estremamente gentile e amichevole, sono fantastici. Estremamente bravi in ​​quello che fanno! Si consulteranno professionalmente con te.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Mettiti in contatto:',
  info: [
    {
      title: 'Ufficio di Roma',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '00000 ROMA, Italia',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'provaprova@gmail.com',
      },
      link: 'Scegli la location',
    },
    {
      title: 'Ufficio di Milano',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '00000 MILANO, Italia',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'provaprova@gmail.com',
      },
      link: 'Scegli la location',
    },
  ],
  form: {
    name: 'Il tuo Nome',
    email: 'La tua Email',
    message: 'Scrivimi il messaggio',
    btnText: 'Invia',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '00000 ROMA, Italia',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'provaprova@gmail.com',
    },
  },
  links: {
    title: 'Link utili',
    items: [
      { href: '/', name: 'Su di me' },
      { href: '/', name: 'La mia Galleria' },
      { href: '/', name: 'I miei Servizi' },
      { href: '/', name: 'Contattami' },
    ],
  },
  program: {
    title: 'Orari di Lavoro',
    items: [
      { name: 'Lun - Mar / Appuntamento' },
      { name: 'Mer - Ven / 10:00 -21:00' },
      { name: 'Sabato / 10:00 - 18:00' },
      { name: 'Domenica / ci riposiamo' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'La tua email',
      icon: <FiSend />,
    },
  },
};

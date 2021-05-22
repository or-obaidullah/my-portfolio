import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faBriefcase, faEnvelopeOpen, faComment} from '@fortawesome/free-solid-svg-icons';

export const NavData = [
    {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FontAwesomeIcon icon={faUser}/>,
        cName: 'nav-text'
    },
    {
        title: 'Works',
        path: '/works',
        icon: <FontAwesomeIcon icon={faBriefcase}/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FontAwesomeIcon icon={faEnvelopeOpen}/>,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FontAwesomeIcon icon={faComment}/>,
        cName: 'nav-text'
    }
]
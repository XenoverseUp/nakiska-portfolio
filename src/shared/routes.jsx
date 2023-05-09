import Home from 'pages'
import Contact from 'pages/contact'
import Clients from 'pages/clients'
import Services from 'pages/services'

export default [
  {
    path: '/',
    name: 'Home',
    Component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    Component: Contact,
  },
  {
    path: '/clients',
    name: 'Clients',
    Component: Clients,
  },
  {
    path: '/services',
    name: 'Services',
    Component: Services,
  },
]

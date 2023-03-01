import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from 'pages'
import Contact from 'pages/contact'
import Clients from 'pages/clients'
import Services from 'pages/services'

import Layout from 'components/Layout'
import PageTransition from 'components/PageTransition'

import WebFontLoader from 'webfontloader'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import gsap, { Expo } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import IntroAnimation from './components/IntroAnimation'

import './utils/ArrayPrototypes'

gsap.registerPlugin(MotionPathPlugin)

const routes = [
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

function App() {
  const location = useLocation()

  const transitionRef = useRef(null)
  const curtain = useRef(null)
  const curtainShadow = useRef(null)

  useEffect(
    () =>
      WebFontLoader.load({
        google: {
          families: ['PT Mono'],
        },
      }),
    []
  )

  useLayoutEffect(() => {
    gsap.context(() => {}, transitionRef)
  }, [])

  let pageTransitionContext = null

  const onExit = () => {
    // animateSlider()
    pageTransitionContext = gsap.context(() => {
      gsap.to(['#curtain-shadow', '#curtain'], {
        height: '100%',
        duration: 0.8,
        ease: Expo.easeInOut,
        delay: -0.1,
        stagger: 0.05,
      })
    }, transitionRef)
  }

  const onEntered = () => {
    // animateParticles()
    pageTransitionContext = gsap.context(() => {
      gsap.to(['#curtain', '#curtain-shadow'], {
        height: 0,
        duration: 0.7,
        stagger: 0.075,
      })
    }, transitionRef)
  }

  return (
    <>
      <Layout>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={900}
            {...{ onEntered, onExit }}
          >
            <Routes location={location}>
              {routes.map(({ path, name, Component }) => (
                <Route key={name} path={path} element={<Component />} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
      <IntroAnimation />
      <PageTransition
        ref={transitionRef}
        internalRefs={{
          curtain,
          curtainShadow,
        }}
      />
    </>
  )
}

export default App

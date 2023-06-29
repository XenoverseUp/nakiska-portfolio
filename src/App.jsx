import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import gsap, { Expo } from 'gsap'
import WebFontLoader from 'webfontloader'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

import Cursor from 'components/Cursor'
import PageLayout from 'components/Layout'
import PageTransition from 'components/PageTransition'
import IntroAnimation from 'components/IntroAnimation'
import routes from 'shared/routes'
import { Colors, Layout } from '../config'
import kebabize from 'utils/kebabize'
import 'utils/ArrayPrototypes'

gsap.registerPlugin(MotionPathPlugin)

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

  useEffect(() => {
    const config = { ...Colors, ...Layout }
    Object.keys(config).forEach((key) =>
      document.documentElement.style.setProperty(
        `--${kebabize(key)}`,
        config[key]
      )
    )
  }, [])

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
      <Cursor />
      <PageLayout>
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
      </PageLayout>
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

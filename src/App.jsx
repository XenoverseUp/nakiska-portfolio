import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import gsap, { Expo } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import Cursor from 'components/Cursor'
import PageLayout from 'components/Layout'
import PageTransition from 'components/PageTransition'
import StarAnimation from 'components/StarAnimation'
import routes from 'shared/routes'

import 'utils/ArrayPrototypes'
import useConfig from './hooks/useConfig'

gsap.registerPlugin(MotionPathPlugin)

function App() {
  useConfig()

  const location = useLocation()
  const transitionRef = useRef(null)
  const curtain = useRef(null)
  const stars = useRef(null)

  const onExit = () => {
    gsap.context(() => {
      gsap.to('#curtain', {
        opacity: 1,
        duration: 0.4,
      })
    }, transitionRef)
  }

  const onEntered = () => {
    gsap.context(() => {
      gsap.set('#curtain', {
        opacity: 0,
      })
    }, transitionRef)

    stars.current.runAnimation()
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
      <StarAnimation ref={stars} />
      <PageTransition
        ref={transitionRef}
        internalRefs={{
          curtain,
        }}
      />
    </>
  )
}

export default App

import { Fragment, useCallback, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

import Cursor from 'components/Cursor'
import PageLayout from 'components/Layout'
import Fade from 'components/Fade'
import StarAnimation from 'components/StarAnimation'

import useConfig from 'hooks/useConfig'
import { secret } from 'config'
import { reset } from 'animations/stars'
import routes from 'shared/routes'

import 'utils/ArrayPrototypes'

gsap.registerPlugin(MotionPathPlugin)

function App() {
  useConfig()

  const location = useLocation()
  const fade = useRef(null)

  const onExit = useCallback(() => {
    gsap.to(fade.current, {
      opacity: 1,
      duration: 0.3,
    })
  }, [])

  const onEntered = useCallback(() => {
    gsap.set(fade.current, {
      opacity: 0,
    })

    reset()
  }, [])

  useEffect(() => console.log(secret), [])

  return (
    <Fragment>
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
      <Fade ref={fade} />
      <StarAnimation />
    </Fragment>
  )
}

export default App

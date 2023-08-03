import { Fragment } from 'react'

const ConditionalWrapper = ({
  children,
  wrapper: Wrapper = Fragment,
  condition,
}) =>
  condition ? <Wrapper>{children}</Wrapper> : <Fragment>{children}</Fragment>

export default ConditionalWrapper

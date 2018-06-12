// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Spring, animated } from 'react-spring'
//
import Container from './index.style'

const AnimatedContainer = animated(Container)

type tProps = {
  options: {
    items: Array<any>,
    rootId?: string,
    mountId?: string,
    styles?: {},
  },
  children: () => any,
}

export default class Modal extends React.Component<tProps> {
  root: any
  mount: any
  rootId: string
  moundId: string
  constructor(props: tProps) {
    super(props)

    const options = this.props.options || {}

    if (typeof document != 'undefined') {
      this.moundId = options.mountId || 'root-modal'
      this.root = document.getElementById(options.rootId || 'root')
      this.mount = document.createElement('div')

      this.mount.style =
        // $FlowFixMe
        'position: absolute; z-index: 1000; top: 0; left: 0; bottom: 0; right: 0; filter: blur(0px) !important;'
    }
  }
  componentDidMount() {
    if (typeof document != 'undefined') {
      // $FlowFixMe
      document.body.appendChild(this.mount)
      document
        .getElementsByTagName('body')[0]
        .classList.add('component-modal-active')
    }
  }
  componentWillUnmount() {
    if (typeof document != 'undefined') {
      // $FlowFixMe
      document.body.removeChild(this.mount)
      document
        .getElementsByTagName('body')[0]
        .classList.remove('component-modal-active')
    }
  }
  render() {
    const { options: opts, children, ...attrs } = this.props
    const options = opts || {}
    return ReactDOM.createPortal(
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} native>
        {styles => (
          <AnimatedContainer
            style={styles}
            options={{
              ...options,
              styles: options.styles || {},
            }}
            {...attrs}
          >
            <div>{children}</div>
          </AnimatedContainer>
        )}
      </Spring>,
      // $FlowFixMe
      this.mount,
    )
  }
}

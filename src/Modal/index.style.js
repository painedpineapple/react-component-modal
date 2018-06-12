import styled from 'react-emotion'
import { injectGlobal } from 'emotion'

injectGlobal({
  body: {
    '#root': {
      transition: 'opacity 0.5s ease, filter 0.5s ease',
      zIndex: 1,
      position: 'relative',
    },

    '&.component-modal-active': {
      maxHeight: '100vh',
      overflow: 'hidden',

      '#root': {
        filter: 'blur(8px)',
      },
    },
  },
})

export default styled('div')(({ options: o }) => ({
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255, 0.50)',
  position: 'absolute',
  zIndex: 900,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'scroll',
  perspective: 1200,

  '> div': {
    boxShadow: '1px 1px 16px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'rgba(255,255,255, 1)',
  },

  ...o.styles,
}))

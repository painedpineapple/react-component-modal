import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import Modal from './Modal'
import modalStyles from './styles'

const styles = {
  p: {
    maxWidth: '800px',
    fontSize: 18,
    margin: 30,
  },
}

class App extends React.Component<{}, { isActive: boolean }> {
  state = {
    isActive: false,
  }
  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{
            position: 'absolute',
            right: 30,
            top: 30,
            zIndex: '9999999999999',
          }}
        >
          Toggle Modal
        </button>
        <div style={{ marginTop: 80 }}>
          {_.times(20, () => (
            <p key={faker.random.uuid()} style={styles.p}>
              {faker.lorem.paragraph()}
            </p>
          ))}
        </div>
        {this.state.isActive && (
          <Modal
            options={{
              styles: modalStyles,
            }}
          >
            Modal content
            <button onClick={this.handleClick}>Toggle Modal</button>
          </Modal>
        )}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))

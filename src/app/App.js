import React, { Component } from 'react'
import ControlPanel from 'components/control-panel/ControlPanel'
import FileZone from 'components/file-zone/FileZone'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { AppWrapper, AppHeader, AppContainer } from './AppStyled'
import getMockText from '../text.service'

// Initialize store
const store = configureStore()

class App extends Component {
  getText() {
    getMockText().then((result) => {
      console.log(result)
    })
  }

  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <AppHeader>
            <span>Simpffle Text Editor</span>
          </AppHeader>
          <AppContainer>
            <ControlPanel />
            <FileZone />
          </AppContainer>
        </AppWrapper>
      </Provider>
    )
  }
}

export default App

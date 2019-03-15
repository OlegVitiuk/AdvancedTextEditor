import React, { Component } from 'react'
import { ControlPanelWrapper, FormatActions } from './ControlPanelStyled'

class ControlPanel extends Component {
  render() {
    return (
      <ControlPanelWrapper>
        <FormatActions>
          <button className="format-action" type="button">
            <b>B</b>
          </button>
          <button className="format-action" type="button">
            <i>I</i>
          </button>
          <button className="format-action" type="button">
            <u>U</u>
          </button>
        </FormatActions>
      </ControlPanelWrapper>
    )
  }
}

export default ControlPanel

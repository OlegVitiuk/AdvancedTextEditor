import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { setTypeOfEditing } from 'actions/actions'
import { ControlPanelWrapper, FormatActions } from './ControlPanelStyled'

class ControlPanel extends Component {
  constructor(props) {
    super(props)

    this.synonymsDiv = React.createRef()
  }

  render() {
    const { setTypeOfEditing, synonyms } = this.props

    return (
      <ControlPanelWrapper>
        <FormatActions>
          <button
            type="button"
            onClick={() => setTypeOfEditing('bold')}
            onMouseDown={e => e.preventDefault()}
          >
            <b>B</b>
          </button>
          <button
            type="button"
            onClick={() => setTypeOfEditing('italic')}
            onMouseDown={e => e.preventDefault()}
          >
            <i>I</i>
          </button>
          <button
            type="button"
            onClick={() => setTypeOfEditing('underline')}
            onMouseDown={e => e.preventDefault()}
          >
            <u>U</u>
          </button>
          <button type="button">
            <u>Color</u>
          </button>
          <button type="button">
            <u>BlockIndent</u>
          </button>
          <span>Synonyms: </span>
          <div
            style={{
              maxWidth: '600px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'red',
              position: 'relative'
            }}
          >
            {synonyms.map((el, index) => (
              <span key={index}>{`${el.word}   `}</span>
            ))}
          </div>
        </FormatActions>
      </ControlPanelWrapper>
    )
  }
}

ControlPanel.propTypes = {
  setTypeOfEditing: PropTypes.func
}

export default connect(
  state => ({
    synonyms: state.editingReducer.synonyms
  }),
  dispatch => bindActionCreators(
    {
      setTypeOfEditing
    },
    dispatch
  )
)(ControlPanel)

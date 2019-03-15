import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { getSynonyms } from 'actions/actions'
import { FileZoneWrapper, File } from './FileZoneStyled'

class FileZone extends Component {
  componentDidMount() {
    const { getSynonyms } = this.props

    getSynonyms('dog')
  }

  render() {
    return (
      <FileZoneWrapper>
        <File />
      </FileZoneWrapper>
    )
  }
}

FileZone.propTypes = {
  getSynonyms: PropTypes.func
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators(
    {
      getSynonyms
    },
    dispatch
  )
)(FileZone)

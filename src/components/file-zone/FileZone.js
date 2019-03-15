import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { getSynonyms } from 'actions/actions'
import { FileZoneWrapper, File } from './FileZoneStyled'

class FileZone extends Component {
  setDesignMode = () => {
    document.designMode = 'on'
    document.execCommand('styleWithCSS', false, true)
  }

  componentDidMount() {
    document.designMode = 'on'
    document.execCommand('styleWithCSS', false, true)
    window.addEventListener('load', this.setDesignMode, false)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.setDesignMode, false)
  }

  render() {
    const { typeOfEditing, getSynonyms } = this.props

    document.execCommand(typeOfEditing, false, null)

    return (
      <FileZoneWrapper>
        <File
          contenteditable="true"
          spellcheck="false"
          onMouseUp={e => {
            const selectedValue = window
              .getSelection()
              .getRangeAt(0)
              .toString()

            selectedValue.length && getSynonyms(selectedValue)
          }}
        >
          Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote
          his. By proposal speedily mr striking am. But attention sex questions applauded how
          happiness. To travelling occasional at oh sympathize prosperous. His merit end means widow
          songs linen known. Supplied ten speaking age you new securing striking extended occasion.
          Sang put paid away joy into six her. Comfort reached gay perhaps chamber his six detract
          besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share
          led his widen noisy young. On weddings believed laughing although material do exercise of.
          Up attempt offered ye civilly so sitting to. She new course get living within elinor joy.
          She her rapturous suffering concealed. Paid was hill sir high. For him precaution any
          advantages dissimilar comparison few terminated projecting. Prevailed discovery immediate
          objection of ye at. Repair summer one winter living feebly pretty his. In so sense am
          known these since. Shortly respect ask cousins brought add tedious nay. Expect relied do
          we genius is. On as around spirit of hearts genius. Is raptures daughter branched laughter
          peculiar in settling. Considered an invitation do introduced sufficient understood
          instrument it. Of decisively friendship in as collecting at. No affixed be husband ye
          females brother garrets proceed. Least child who seven happy yet balls young. Discovery
          sweetness principle discourse shameless bed one excellent. Sentiments of surrounded
          friendship dispatched connection is he. Me or produce besides hastily up as pleased. Bore
          less when had and john shed hope. Knowledge nay estimable questions repulsive daughters
          boy. Solicitude gay way unaffected expression for. His mistress ladyship required off
          horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he unpleasant no
          inquietude insipidity. Advantages can discretion possession add favourable cultivated
          admiration far. Why rather assure how esteem end hunted nearer and before. By an truth
          after heard going early given he. Charmed to it excited females whether at examine. Him
          abilities suffering may are yet dependent.
        </File>
      </FileZoneWrapper>
    )
  }
}

FileZone.propTypes = {
  getSynonyms: PropTypes.func
}

export default connect(
  state => ({
    typeOfEditing: state.editingReducer.typeOfEditing
  }),
  dispatch =>
    bindActionCreators(
      {
        getSynonyms
      },
      dispatch
    )
)(FileZone)

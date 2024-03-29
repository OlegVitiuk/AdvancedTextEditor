import styled from 'styled-components'

const FileZoneWrapper = styled.div`
  background-color: #f1f0f0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`

const File = styled.div`
  width: 600px;
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #e4dede;
`

export { FileZoneWrapper, File }

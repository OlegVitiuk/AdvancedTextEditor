import axios from 'axios'

const fetchSynonyms = word => axios.get(`https://api.datamuse.com/words?ml=${word}`).then(synonyms => synonyms.data.map(synonym => ({
  word: synonym.word
})))

export { fetchSynonyms }

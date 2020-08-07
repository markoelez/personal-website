/* istanbul ignore file */

import { useDispatch, useSelector } from 'react-redux'

import { selectQuery } from '@redux/mentorData/selectors'
import { submitQuery } from '@redux/mentorData/actions'

export const useMentorsState = () => {
  return {
    currentQuery: useSelector((state) => selectQuery(state)),
  }
}

export const useMentorsDispatch = () => {
  const dispatch = useDispatch()
  return {
    submitQuery: (query) => dispatch(submitQuery(query)),
  }
}

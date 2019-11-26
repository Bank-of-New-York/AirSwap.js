import { createSelector } from 'reselect'
import _ from 'lodash'
import { abis, erc20, erc721 } from '../index'
import { getDelegateContractAddresses } from '../../delegateFactory/redux/selectors'
import delegateABI from '../delegate.json'

function getAbiForToken(token) {
  if (token.kind === 'ERC721') {
    return erc721
  }
  return erc20
}

function abiReducer(state = abis, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      if (action.tokens) {
        const addresses = action.tokens.map(({ address }) => address.toLowerCase())
        const tokenAbis = action.tokens.map(getAbiForToken)
        const newAbis = _.zipObject(addresses, tokenAbis)
        // old state remains, new state fills in gaps, but doesn't overwrite
        // this is so custom contracts like WETH and AST aren't overwritten by their generic equivalents
        return {
          ...newAbis,
          ...state,
        }
      } else if (action.token) {
        return {
          [action.token.address.toLowerCase()]: getAbiForToken(action.token),
          ...state,
        }
      }
      return state

    default:
      return state
  }
}

const getAbisState = state => state.abis

export const getAbis = createSelector(getAbisState, getDelegateContractAddresses, (abi, delegateContracts) => {
  const delegateContractMapping = _.zipObject(delegateContracts, delegateContracts.map(() => delegateABI))
  return {
    ...abi,
    ...delegateContractMapping,
  }
})

export default abiReducer

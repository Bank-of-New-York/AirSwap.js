// This file is generated code, edits will be overwritten
import _ from 'lodash'
import { createSelector } from 'reselect'
import constants from '../../constants'
import {
  getFetchedTrackedEvents,
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
} from '../../events/redux/reducers'

export const getIndexerAddTokenToBlacklistEvents = createSelector(getFetchedTrackedEvents, events =>
  _.filter(events, {
    topic: '0xe53b519de693da0496205f0705fa49c937a9045cb26b6f67711cd22051955401',
    address: constants.INDEXER_CONTRACT_ADDRESS,
  }),
)

export const getIndexerAddTokenToBlacklistHistoricalFetchStatus = createSelector(
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
  (fetchingValues, fetchedValues) => {
    const fetching = fetchingValues.indexerAddTokenToBlacklist
    const fetched = fetchedValues.indexerAddTokenToBlacklist
    return {
      fetching,
      fetched,
    }
  },
)

export const getIndexerCreateIndexEvents = createSelector(getFetchedTrackedEvents, events =>
  _.filter(events, {
    topic: '0x20cbc92354b230c7cc3e03e86e970490c1bfadae113827bca7a04496c4659681',
    address: constants.INDEXER_CONTRACT_ADDRESS,
  }),
)

export const getIndexerCreateIndexHistoricalFetchStatus = createSelector(
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
  (fetchingValues, fetchedValues) => {
    const fetching = fetchingValues.indexerCreateIndex
    const fetched = fetchedValues.indexerCreateIndex
    return {
      fetching,
      fetched,
    }
  },
)

export const getIndexerOwnershipTransferredEvents = createSelector(getFetchedTrackedEvents, events =>
  _.filter(events, {
    topic: '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
    address: constants.INDEXER_CONTRACT_ADDRESS,
  }),
)

export const getIndexerOwnershipTransferredHistoricalFetchStatus = createSelector(
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
  (fetchingValues, fetchedValues) => {
    const fetching = fetchingValues.indexerOwnershipTransferred
    const fetched = fetchedValues.indexerOwnershipTransferred
    return {
      fetching,
      fetched,
    }
  },
)

export const getIndexerRemoveTokenFromBlacklistEvents = createSelector(getFetchedTrackedEvents, events =>
  _.filter(events, {
    topic: '0xa1f26e166f408721b7578234199103d95e0aea4308d683b2f6c0ec86ac9e9e73',
    address: constants.INDEXER_CONTRACT_ADDRESS,
  }),
)

export const getIndexerRemoveTokenFromBlacklistHistoricalFetchStatus = createSelector(
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
  (fetchingValues, fetchedValues) => {
    const fetching = fetchingValues.indexerRemoveTokenFromBlacklist
    const fetched = fetchedValues.indexerRemoveTokenFromBlacklist
    return {
      fetching,
      fetched,
    }
  },
)

export const getIndexerStakeEvents = createSelector(getFetchedTrackedEvents, events =>
  _.filter(events, {
    topic: '0xc5017594d2723c038bb216e5bcef3ac65910ade839c0e63253bf5b59efbf0fd7',
    address: constants.INDEXER_CONTRACT_ADDRESS,
  }),
)

export const getIndexerStakeHistoricalFetchStatus = createSelector(
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
  (fetchingValues, fetchedValues) => {
    const fetching = fetchingValues.indexerStake
    const fetched = fetchedValues.indexerStake
    return {
      fetching,
      fetched,
    }
  },
)

export const getIndexerUnstakeEvents = createSelector(getFetchedTrackedEvents, events =>
  _.filter(events, {
    topic: '0x2cbcd809a4c90d11f8d12c4b6d09986b255ae1e68f54f076c145fbb2185904e1',
    address: constants.INDEXER_CONTRACT_ADDRESS,
  }),
)

export const getIndexerUnstakeHistoricalFetchStatus = createSelector(
  getFetchingHistoricalEvents,
  getFetchedHistoricalEvents,
  (fetchingValues, fetchedValues) => {
    const fetching = fetchingValues.indexerUnstake
    const fetched = fetchedValues.indexerUnstake
    return {
      fetching,
      fetched,
    }
  },
)

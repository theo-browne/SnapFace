import * as ApiReactionUtil from '../util/reaction_util'


export const RECEIVE_REACTION = 'RECEIVE_REACTION'
export const REMOVE_REACTION = 'REMOVE_REACTION'

export const receiveReaction = reaction => ({
    type: RECEIVE_REACTION,
    reaction
})

export const removeReaction = reaction => ({
    type: REMOVE_REACTION,
    reaction
})

export const createReaction = reaction => dispatch => {
    return ApiReactionUtil.createReaction(reaction).then(reaction => dispatch(receiveReaction(reaction)))
}

export const updateReaction = reaction => dispatch => {
    return ApiReactionUtil.updateReaction(reaction).then(reaction => dispatch(receiveReaction(reaction)))
}

export const deleteReaction = id => dispatch => {
    return ApiReactionUtil.deleteReaction(id).then(reaction => dispatch(removeReaction(reaction)))
}
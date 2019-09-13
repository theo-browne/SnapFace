import * as ApiReactionUtil from '../util/reaction_util'


export const RECEIVE_REACTION = 'RECEIVE_REACTION'

export const receiveReaction = reaction => ({
    type: RECEIVE_REACTION,
    reaction
})

export const createReaction = reaction => dispatch => {
    return ApiReactionUtil.createReaction(reaction).then(reaction => dispatch(receiveReaction(reaction)))
}
/**
* @description Counts all the Votes for one Poll
* @param {obj} - The Poll
* @returns {number} - The calculated result 
*/

export const totalAnswers = (poll) => {

    return poll.optionOne.votes.concat(poll.optionTwo.votes).length
    
}
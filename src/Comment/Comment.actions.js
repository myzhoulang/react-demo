var id = 1;
function addComment(comment) {
  return {
    type: 'ADD_COMMENT',
    payload: {
      _id: id++,
      author: comment.author,
      comment: comment.comment
    }
  }
}

function showAll(comments){
  return {
    type:'SHOW_ALL',
    payload: comments
  }
}

export default {
  addComment: addComment,
  showAll: showAll
};

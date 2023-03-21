import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
    thumbsup: '👍',
    wow: '🤯',
    heart: '💓',
    rocket: '🚀',
    cofee: '☕'
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
      return (
        <button 
          key={name}
          className="reactionButton"
          type="button"
          onClick={() => 
            dispatch(reactionAdded({postId: post.id, reaction: name}))}
          >
          {emoji} {post.reactions[name]}
        </button>
      )
  })

  return <div>{reactionButtons}</div>
}

export default ReactionButtons
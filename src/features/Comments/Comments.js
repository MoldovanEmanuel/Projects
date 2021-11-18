import './Comments.css'

export function Comment({ comments }) {
    return(
        <>
        <div>
         {comments?.map((comment) =>  
            <div className="user-box">
            <h2 className="user-name">        
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
              className="user-avatar"
            />
            {comment.username}
            </h2>
            <h3 className="user-comment">
                {comment.text}
            </h3>
            </div>
        )}
        </div> 
        </>
    )
}
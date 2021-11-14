export function Comment(comments) {
    return (
        <div>
         {comments?.map((comment) =>  
            <div>
               {comment.username}
               {comment.text}
            </div>
        )}
        </div>
    )
}
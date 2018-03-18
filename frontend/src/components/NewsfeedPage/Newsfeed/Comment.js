import React from 'react';

const Comment = ({comment}) => (
	<div className='comment'>
			<p className='reset-spacing fss'><strong>{`${comment.firstName} ${comment.lastName}`}</strong> {comment.content}</p>
	</div>
);

export default Comment;
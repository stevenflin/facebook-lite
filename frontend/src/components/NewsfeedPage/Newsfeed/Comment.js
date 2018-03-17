import React from 'react';

import Chip from 'material-ui/Chip';

const Comment = ({comment}) => (
	<div className='comment'>
		<Chip style={{backgroundColor: 'white'}}>	
			<p className='reset-spacing fss'><strong>{`${comment.firstName} ${comment.lastName}`}</strong> {comment.content}</p>
		</Chip>
	</div>
);

export default Comment;
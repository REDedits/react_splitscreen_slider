import styled from 'styled-components';

const Img = styled.img`
	position: relative;
	max-width: 50%;
	max-height: 98%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
		
	@media (max-width: 768px) {
	    max-width: 98%;
	    max-height: 98%;
	
	}
`;

export default Img;
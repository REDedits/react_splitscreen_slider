import styled from 'styled-components';

const ContentBody = styled.div`
	max-width: 25%;
	position: absolute;
	top: 50%;
	text-align: center;
	transform: translateY(-50%);
	color: #fff;
	
	@media (max-width: 1024px) {
        max-width: 20%;
	}
	
	@media (max-width: 768px) {
	    display:none;
	
	}
`;

export default ContentBody;
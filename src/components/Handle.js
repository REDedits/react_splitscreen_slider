import styled from 'styled-components';

const Handle = styled.div.attrs({
    style: ({left, background, transform}) => ({
        left,
        background,
        transform,
    }),
})`	
	position: absolute;
	height: 100%;
	display: block;
	background: #FDAB00;
	width: 5px;
	top: 0;
	left: 50%;
	z-index: 3;
`;

export default Handle;
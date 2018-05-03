import styled from 'styled-components';

const Layer = styled.div.attrs({
    style: ({ width, transform }) => ({
        width,
        transform,
    }),
})`
	position: absolute;
	width: 100vw;
	min-height: 55vw;
	overflow: hidden;
`;

export default Layer;
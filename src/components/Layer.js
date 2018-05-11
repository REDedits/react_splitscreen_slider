import styled from 'styled-components';

const Layer = styled.div.attrs({
    style: ({ width, transform }) => ({
        width,
        transform,
    }),
})`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export default Layer;
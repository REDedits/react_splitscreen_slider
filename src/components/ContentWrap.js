import styled from 'styled-components';

const ContentWrap = styled.div.attrs({
    style: ({ transform }) => ({
        transform,
    }),
})`
	position: relative;
	width: 100vw;
	height: 100%;
`;

export default ContentWrap;
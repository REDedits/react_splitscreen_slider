import styled from 'styled-components';

const ContentWrap = styled.div.attrs({
    style: ({ transform }) => ({
        transform,
    }),
})`
	position: absolute;
	width: 100vw;
	min-height: 55vw;
`;

export default ContentWrap;
import Handle from './Handle';

const SkewedHandle = Handle.extend`
	top: 50%;
	transform: rotate(33deg) translateY(-50%);
	height: 200%;
	transform-origin: top;
`;

export default SkewedHandle;
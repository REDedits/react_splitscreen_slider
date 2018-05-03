import Layer from './Layer';

const SkewedLayerTop = Layer.extend`
	background: #222;
	color: #fff;
	z-index: 2;
	transform: skew(-33deg);
	margin-left: -1000px;
`;

export default SkewedLayerTop;
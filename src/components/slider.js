const styles = {
	slider: {
		height: '100%',
		position: 'relative',
		width: '100%',
	},
	slide: {
		height: '100%',
		left: 0,
		opacity: 0,
		position: 'absolute',
		top: 0,
		transition: 'all 0.3s',
		width: '100%',
		zIndex: 3,
	},
	sliderImg: {
		height: '100%',
		objectFit: 'cover',
		opacity: 1,
		display: 'block',
		width: '100%',
	},
	onTop: {
		opacity: 1,
		zIndex: 1,
	},
	pagination: {
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		left: 0,
		margin: '0 auto',
		position: 'absolute',
		right: 0,
		zIndex: 99,
	},
	tile: {
		background: '#CCC',
		border: '1px solid #666',
		borderRadius: '50%',
		cursor: 'pointer',
		height: '20px',
		margin: '6px',
		opacity: 0.5,
		outline: 'none',
		padding: 0,
		transition: 'all 0.3s',
		WebkitAppearance: 'none',
		width: '20px',
	},
	activeTile: {
		background: '#999',
		opacity: 1,
	},
}

class Slider extends React.Component {
	constructor(props) {
		super(props)
		this.state = { images: [], currentSlide: 0, pagination: false }
		this.slider = React.createRef()
		this.styles = {
			...styles,
			tile: {
				...styles.tile,
				...props.paginationStyle,
			},
			activeTile: {
				...styles.activeTile,
				...props.paginationStyle,
			},
		}
	}

	componentDidMount() {
		const { children, pagination, delay = 4500 } = this.props
		const images = React.Children.map(children, child =>
			React.cloneElement(child, { style: this.styles.sliderImg })
		)

		this.setState({ images, pagination })

		images &&
			setInterval(() => {
				const onTop = this.state.currentSlide
				const currentSlide = onTop == images.length - 1 ? 0 : onTop + 1

				this.setState({ currentSlide })
			}, delay)
	}

	createPagination = (slides, activeTile) => {
		const tiles =
			slides &&
			slides.map((slide, key) => {
				const currentIndex = slides.indexOf(slide)
				const classes = currentIndex == activeTile ? 'tile' : 'tile active-tile'
				const style =
					slides.indexOf(slide) == activeTile
						? { ...this.styles.tile, ...this.styles.activeTile }
						: this.styles.tile

				return (
					<button
						key={key}
						className={classes}
						style={style}
						onClick={() => this.handlePagination(currentIndex)}
					/>
				)
			})

		return (
			<nav className="pagination" style={this.styles.pagination}>
				{tiles}
			</nav>
		)
	}

	handlePagination = index => this.setState({ currentSlide: index })

	render() {
		const { images, pagination } = this.state
		const slides =
			images.length > 1 &&
			images.map((slide, key) => {
				const classes =
					images.indexOf(slide) == this.state.currentSlide
						? 'slide on-top'
						: 'slide'
				const style =
					images.indexOf(slide) == this.state.currentSlide
						? { ...this.styles.slide, ...this.styles.onTop }
						: this.styles.slide

				return (
					<div key={key} className={classes} style={style}>
						{slide}
					</div>
				)
			})

		return (
			<div className="slider" style={this.styles.slider} ref={this.slider}>
				{slides}
				{pagination && this.createPagination(slides, this.state.currentSlide)}
			</div>
		)
	}
}

export default Slider

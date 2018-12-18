import slugify from 'slugify'

const Products = ({ content: { title, products }, openModal }) => (
	<section id={slugify(title, { lower: true })} className="products scroll">
		<h1 className="main-title">{title}</h1>
		<div className="products-list">
			{products.map((product, key) => (
				<div
					key={key}
					className="product"
					onClick={e => openModal(e, product)}
				>
					<img className="product-image" src={product.image} alt="" />
					<h3 className="product-title">
						<span>{product.name}</span>
					</h3>
				</div>
			))}
		</div>
	</section>
)

export default Products

import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 5,
    title: 'Pen',
    description: 'This is a black pen.',
  },
  {
    id: 'p2',
    price: 4,
    title: 'Pencil',
    description: 'This is a #2 pencil.',
  },
  {
    id: 'p3',
    price: 6,
    title: 'Highlighter',
    description: 'This is a yellow highlighter.',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products

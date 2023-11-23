import { Link } from 'react-router-dom'

const EcommerceHome = () => {
    return (
        <div>
            <Link className="button-link" to="/ecommerce/product/1" > PDL 1</Link>
            <Link className="button-link" to="/ecommerce/product/2" >PDL 2</Link>
        </div>
    )
}

export default EcommerceHome
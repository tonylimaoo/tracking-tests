import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGtag } from '../../hooks/useGtag'
import { promotionsPayload } from '../../payloads/payloads'

const EcommerceHome = () => {

    const { fireEvent } = useGtag();

    useEffect(() => {
        fireEvent("view_promotion", promotionsPayload(1))
        fireEvent("view_promotion", promotionsPayload(2))
    }, [])

    const handlePromotionClick = (id) => {
        fireEvent("select_promotion", promotionsPayload(id))
    }

    return (
        <div>
            <Link
                className="button-link"
                to="/ecommerce/list/1"
                onClick={() => handlePromotionClick(1)}
            > PDL 1</Link>
            <Link
                className="button-link"
                to="/ecommerce/list/2"
                onClick={() => handlePromotionClick(2)}
            >PDL 2</Link>
        </div>
    )
}

export default EcommerceHome
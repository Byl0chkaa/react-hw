import type {ProductModel} from "../../models/ProductModel.ts";
import type {FC} from "react";
import './ProductComponent.css'

type ProductComponentProps = { product: ProductModel }
export const ProductComponent: FC<ProductComponentProps> = ({product: {id, title, description, category, price, discountPercentage, rating, stock, tags, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta, thumbnail}}) => {
    return (
        <div className={'product-card'}>
            <p>Title: {title}</p>
            <p>ProductID: {id}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <p>DiscountPercentage: {discountPercentage}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Tags: {tags.join(', ')}</p>
            <p>Brand: {brand}</p>
            <p>Sku: {sku}</p>
            <p>Weight: {weight}</p>
            <p>Dimensions: width: {dimensions.width}, height: {dimensions.height}, depth: {dimensions.depth}</p>
            <p>WarrantyInformation: {warrantyInformation}</p>
            <p>WarrantyInformation: {warrantyInformation}</p>
            <p>ShippingInformation: {shippingInformation}</p>
            <p>AvailabilityStatus: {availabilityStatus}</p>
                <p>Reviews:
                        {reviews.map((review, index) => (
                            <div key={index}>
                                    <p>Rating: {review.rating}</p>
                                    <p>Comment: {review.comment}</p>
                                    <p>Reviewer: {review.reviewerName}</p>
                                    <p>Email: {review.reviewerEmail}</p>
                                    <p>Date: {review.date}</p>
                            </div>
                        ))}
                </p>
            <p>ReturnPolicy: {returnPolicy}</p>
            <p>MinimumOrderQuantity: {minimumOrderQuantity}</p>
            <p>Meta: createdAt: {meta.createdAt}, updatedAt: {meta.updatedAt}, barCode: {meta.barcode}, qrCode: {meta.qrCode}</p>
                <img src={thumbnail} alt={thumbnail}/>
        </div>
    );
};
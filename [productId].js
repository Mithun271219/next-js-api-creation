import { connect, products } from '../../../library/mongo'

export default async function getProductsById(req, res) {
    try {
        let id = parseInt(req.query.productId);
        await connect();

        let productsCollection = await products();
        let product = await productsCollection.findOne({ id: id });
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error while fetching products" })
    }
}
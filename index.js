import { connect, products } from '../../../library/mongo';

export default async function getAllProducts(req, res) {
    try {
        await connect();

        let productsCollection = await products();
        let productsData = await productsCollection.find().toArray();
        res.status(200).json(productsData)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error while fetching products" })
    }
}
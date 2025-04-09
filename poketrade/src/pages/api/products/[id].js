import products from "../../../data/products";

export default function handler(req, res) {
  const { id } = req.query;

  const card = products.find((c) => c.id === id);
  return res.status(200).json(card);
}

import Product from "../models/product.js"

export const getAllProducts = async (req, res) => {
	try {
		const response = await Product.findAll()
		res.status(200).json(response)
	} catch (error) {
		console.log(error)
	}
}

export const getProductById = async (req, res) => {
	try {
		const response = await Product.findOne({
			where: {
				id: req.params.id,
			},
		})
		res.status(200).json(response)
	} catch (error) {
		console.log(error)
	}
}

export const createProduct = async (req, res) => {
	try {
		await Product.create(req.body)
		res.status(201).json({
			msg: "Product Created",
		})
	} catch (error) {
		console.log(error)
	}
}

export const updateProduct = async (req, res) => {
	try {
		await Product.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
		res.status(200).json({
			msg: " Product Updated",
		})
	} catch (error) {
		console.log(error)
	}
}

export const deleteProduct = async (req, res) => {
	try {
		await Product.destroy({
			where: {
				id: req.params.id,
			},

		})
        res.status(200).json({
            msg : "Product Deleted"
        })
	} catch (error) {
		console.log(error)
	}
}

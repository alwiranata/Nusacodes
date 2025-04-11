import Cart from "../models/cart.js"
import Invoice from "../models/invoice.js"

// ✅ POST: Create invoice from cart
export const createInvoice = async (req, res) => {
	try {
		const email = req.user.email

		const cartItems = await Cart.findAll({where: {email}})
		if (cartItems.length === 0) {
			return res.status(400).json({msg: "Cart is empty, cannot checkout."})
		}

		const formattedItems = cartItems.map((item) => ({
			product_id: item.product_id,
			qty: item.qty,
			price: item.price,
		}))

		const total = formattedItems.reduce(
			(sum, item) => sum + item.price * item.qty,
			0
		)

		await Invoice.create({
			email,
			items: formattedItems,
			total,
			status: "pending",
		})

		await Cart.destroy({where: {email}})

		res.status(201).json({
			msg: "Invoice created successfully",
			total,
			items: formattedItems,
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({msg: "Checkout failed", error})
	}
}

// ✅ GET: Get invoice by ID (hanya untuk user tsb)
export const getInvoiceById = async (req, res) => {
	try {
		// Ambil invoice dari database dengan ID dari URL
		const invoice = await Invoice.findOne({
			where: {
				id_invoice: req.params.id_invoice,
			},
		})

		// Kalau tidak ditemukan, kirim response 404
		if (!invoice) {
			return res.status(404).json({message: "Invoice not found"})
		}

		// Kalau ditemukan, kirim datanya sebagai JSON
		res.json(invoice)
	} catch (error) {
		console.error(error)
		res.status(500).json({msg: "Failed to get invoice", error})
	}
}

// ✅ GET: All invoices by user email
export const getInvoicesByEmail = async (req, res) => {
	try {
		const email = req.user.email

		const invoices = await Invoice.findAll({where: {email}})

		if (!invoices || invoices.length === 0) {
			return res.status(404).json({msg: "No invoices found for this email."})
		}

		res.status(200).json(invoices)
	} catch (error) {
		console.error(error)
		res.status(500).json({msg: "Failed to get invoices", error})
	}
}

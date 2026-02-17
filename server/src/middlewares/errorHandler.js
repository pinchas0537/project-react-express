export function errorHandler(req, res, next) {
    const { category, message } = req.body
    if (!category || !message) return res.status(400).json({ message: "Missing requird fields" })
    if (category.trim() === "" || message.trim() === "") return res.status(400).json({ message: "category or message is invalid" })
    next()
}
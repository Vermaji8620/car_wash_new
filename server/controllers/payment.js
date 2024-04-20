import express from "express";
import Razorpay from "razorpay";
import process from "process";
import crypto from "crypto";
const router = express.Router();

router.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) return res.status(500).send("Error");
    res.status(200).send(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

router.post("/check", (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature)
    return res.status(400).json({
      msg: "Transaction is not legit",
    });
  res.status(200).json({
    msg: "success",
    order_id: razorpay_order_id,
    payment_id: razorpay_payment_id,
    sign: razorpay_signature,
  });
});

export default router;

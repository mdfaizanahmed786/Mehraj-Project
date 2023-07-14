const Payment = require("../../models/Payment");


// Controller function to add a payment
const makePayment = async (req, res) => {
  try {
    const { paymentMode, incomeCertificate, casteCertificate, organization, studentId, studentName, dateOfBirth, aadharNumber, caste, minority } = req.body;

    // Validate required fields
    if (!paymentMode || !studentId || !studentName || !dateOfBirth || !aadharNumber) {
      return res.status(400).json({ error: 'Payment mode, student ID, student name, date of birth, and Aadhar number are required fields' });
    }

    // Create a new payment document
    const payment = new Payment({
      paymentMode,
      incomeCertificate,
      casteCertificate,
      organization,
      studentId,
      studentName,
      dateOfBirth,
      aadharNumber,
      caste,
      minority
    });

    // Save the payment to the database
    await payment.save();

    res.json({ message: 'Payment added successfully', payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = makePayment

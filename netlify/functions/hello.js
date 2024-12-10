const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  try {
    // Parse the request body (if POST request)
    const { items, successUrl, cancelUrl } = JSON.parse(event.body);

    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Supported payment methods
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd', // Replace with your preferred currency
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Price in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment', // Other modes: 'subscription', 'setup'
      success_url: successUrl, // Redirect after successful payment
      cancel_url: cancelUrl, // Redirect after canceled payment
    });

    // Respond with the session ID
    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create Checkout Session' }),
    };
  }
};

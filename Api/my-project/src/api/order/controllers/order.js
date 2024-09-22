const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_KEY, { apiVersion: '2020-08-27' });

'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const { products } = ctx.request.body;

        const lineItems = await Promise.all(
            products.map(async (product) => {
                const item = await strapi.service('api::product.product').findOne(product.id);
                return {
                    price_data: {
                        currency: 'usd', // Ensure you're using a valid currency code
                        product_data: {
                            name: item.title,
                        },
                        unit_amount: item.price * 100, // Amount in cents
                    },
                    quantity: product.quantity,
                };
            })
        );

        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?success=false`,
                line_items: lineItems,
                shipping_address_collection: {
                    allowed_countries: ['TN', 'AL'], // Ensure these country codes are valid
                },
                payment_method_types: ['card'],
            });

            await strapi.service('api::order.order').create({
                data: {
                    products,
                    stripeId: session.id,
                },
            });

            ctx.send({ stripeSession: session });
        } catch (err) {
            ctx.response.status = 500;
            ctx.send({ error: err.message }); // Return error message for debugging
        }
    },
}));

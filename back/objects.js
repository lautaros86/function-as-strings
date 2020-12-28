exports.objects = [
    {
        cant: 7,
        price: 500,
        paymentMethod: 'MercadoPago',
        name: "helado de mascarpopne",
        validators: {
            customBetween: {
                static: { a: 5, b: 10 },
                variable: ['c']
            },
            customMax: {
                static: { max: 1000 },
                variable: ['current']
            },
            checkAllowPayemntType: {
                static: {allowedPayementTypes: ['Debito', 'Cheque']},
                variable: ['paymentType']
            }
        }
    },
    {
        cant: 9,
        price: 500,
        paymentMethod: 'MercadoPago',
        name: "retail de jujuy",
        validators: {
                customBetween: {
                    static: { a: 20, b: 30 },
                    variable: ['c']
                },
                checkAllowPayemntType: {
                    static: {allowedPayementTypes: ['MercadoPago', 'Cheque']},
                    variable: ['paymentType']
                }
            }
    }
];
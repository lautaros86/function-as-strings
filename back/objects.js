exports.objects = [
    {
        name: "helado de mascarpopne",
        validators: {
            customBetween: {
                static: { a: 5, b: 10 },
                variable: ['c']
            },
            customMax: {
                static: { max: 10 },
                variable: ['current']
            },
            customMatch: {
                static: {text1: 'jamon'},
                variable: ['text2']
            }
        }
    },
    {
        name: "retail de jujuy",
        validators: {
                customBetween: {
                    static: { a: 20, b: 30 },
                    variable: ['c']
                },
                customMatch: {
                    static: {text1: 'sandia'},
                    variable: ['text2']
                }
            }
    }
];
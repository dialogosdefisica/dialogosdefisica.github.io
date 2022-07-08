tailwind.config = {
    theme: {
        extend: {
            /* Paleta de cores da página web */
            colors: {
                /* Cores de background */
                background: {
                    primary: '#414D5C',/*Munsell 5PB 3/2*/
                    secondary: '#010B13',/*Rich Black FOGRA29*/
                },
                /* Cores textuais */
                content: {
                    primary: '#eceff1',/*materialize blue-grey lighten-5*/
                    secondary: '#90a4ae',/*materialize blue-grey lighten-2*/
                    alert: '#ffab00',/*materialize amber accent-4*/
                    warning: '#d50000',/*materialize red accent-4*/
                    sucess: '#00c853',/*materialize green accent-4*/
                },
                /* Cores de link */
                link: {
                    new: '#1e88e5',/*materialize blue darken-1*/
                    old: '#7e57c2',/*materialize deep-purple lighten-1*/
                },
                /* Cores de botões */
                button: {
                    primary: {
                        color: '#eceff1',/*materialize blue-grey lighten-5*/
                        hover: '#607d8b',/*materialize blue-grey*/
                    },
                    accept: {
                        color: '#eceff1',/*materialize blue-grey lighten-5*/
                        hover: '#4caf50',/*materialize green*/
                    },
                    refuse: {
                        color: '#eceff1',/*materialize blue-grey lighten-5*/
                        hover: '#f44336',/*materialize red*/
                    },
                },
                /* Elementos transparentes */
                transparent: "transparent",
            },
            /* Tipografia da página web */
            fontFamily: {
                title: ['Quicksand', 'sans-serif'],
                content: ['Montserrat', 'sans-serif'],
            },
        }
    }
}
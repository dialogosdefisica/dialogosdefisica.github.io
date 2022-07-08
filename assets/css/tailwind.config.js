tailwind.config = {
    theme: {
        extend: {
            /* Paleta de cores da página web */
            colors: {
                /* Cores de background */
                background: {
                    primary: '#1e293b',/*tailwind slate-800*/
                    secondary: '#212121',/*materialize grey darken-4*/
                },
                /* Cores textuais */
                content: {
                    primary: '#eceff1',/*materialize blue-gray lighten-5*/
                    secondary: '#b0bec5',/*materialize blue-grey lighten-3*/
                    alert: '#f59e0b',/*tailwind amber-500*/
                    warning: '#ef4444',/*tailwind red-500*/
                    sucess: '#84cc16',/*tailwind lime-500*/
                },
                /* Cores de link */
                link: {
                    new: '#0284c7',/*tailwind sky-600*/
                    old: '#9333ea',/*tailwind purple-600*/
                },
                /* Cores de botões */
                button: {
                    primary: {
                        color: '#eceff1',/*materialize blue-gray lighten-5*/
                        hover: '#334155',/*tailwind slate-700*/
                    },
                    accept: {
                        color: '#eceff1',/*materialize blue-gray lighten-5*/
                        hover: '#4d7c0f',/*tailwind lime-700*/
                    },
                    refuse: {
                        color: '#eceff1',/*materialize blue-gray lighten-5*/
                        hover: '#b91c1c',/*tailwind red-700*/
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
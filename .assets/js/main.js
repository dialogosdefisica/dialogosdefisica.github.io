// Detectar, caso exista, o elemento da navbar que representa a página atual
const navItens = {
    'Home': {
        mobile: 'mobile-nav-item__home',
        desktop: 'desktop-sidebar__nav-item__home',
    },
    'Artigos': {
        mobile: 'mobile-nav-item__articles',
        desktop: 'desktop-sidebar__nav-item__articles',
    },
    'Cursos': {
        mobile: 'mobile-nav-item__courses',
        desktop: 'desktop-sidebar__nav-item__courses',
    },
    'Sobre nós': {
        mobile: 'mobile-nav-item__about',
        desktop: 'desktop-sidebar__nav-item__about',
    },
};
for (const page in navItens) {
    if (Object.hasOwnProperty.call(navItens, page)) {
        const mobileIdQuery = navItens[page].mobile;
        const desktopIdQuery = navItens[page].desktop;
        if (page === document.title.split('Diálogos de Física | ')[1]) {
            document.getElementById(mobileIdQuery).classList.add('mobile-header__nav-item__active');
            document.getElementById(desktopIdQuery).classList.add('desktop-sidebar__header__nav-item__active');
        }
    }
}
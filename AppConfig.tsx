const appConfig = {
    locale: 'pt-BR',

    timeZone: 'America/Sao_Paulo',

    footerText: `
      <div class="flex items-center">
        © ${new Date().getFullYear()}
        - Developed by
        <a href="https://cape.sesp.parana" target="_blank" rel="noopener noreferrer" class="flex items-center hover:underline text-primary">
            <img class="ml-1 mr-1" src="/assets/images/cape.png" style="width: 20px;" alt="CAPE" />
            CAPE
        </a>
      </div>
    `,

    disableSocialLogin: true,
    disableRecoverPassword: true,
    loginImage: undefined,

    loginFullTitle: `
      <div class="flex items-center justify-center w-4/5 mx-auto">
        <img class="w-12 h-12 mr-2" src="/assets/images/cape.png" alt="CAPE" />
        <span class="text-4xl font-semibold">Cape Portal</span>
      </div>
    `,

    titleSuffix: ' | CAPE',

    systemName: 'CAPE PORTAL',

    menuLogo: '/logo-escrita-azul-transparente.png',

    homeLogo: '/assets/images/cape.png',

    authenticationProvider: ['ldap', 'expresso', 'local'],

    switchCompany: true,

    theme: {
        // light, dark, system
        theme: 'light',

        // vertical, collapsible-vertical, horizontal
        menu: 'vertical',

        // full, boxed-layout
        layout: 'full',

        // rtl, ltr
        rtlClass: 'ltr',

        // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight,
        // animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        animation: '',

        // navbar-sticky, navbar-floating, navbar-static
        navbar: 'navbar-sticky',

        semiDark: false,
    },
};

export default appConfig;

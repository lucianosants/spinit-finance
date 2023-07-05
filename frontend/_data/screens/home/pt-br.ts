const header = {
    title: 'Spinit Finance',
    description:
        'Spinit é uma plataforma de finanças pessoais projetada para ajudar você a girar o seu dinheiro com facilidade e controle.',
};

const body = {
    nav_links: [
        { source: '#', label: 'Inicio' },
        { source: '#', label: 'Sobre' },
        { source: '#', label: 'Depoimentos' },
        { source: '#', label: 'Contato' },
    ],

    auth_links: [
        { source: '/auth/login', label: 'Entrar' },
        { source: '/auth/register', label: 'Registre-se' },
    ],
};

export { header, body };

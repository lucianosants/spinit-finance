const body = {
    titles: ['Crie Sua Conta', 'Entre Com Sua Conta'],
    form: {
        first_name: {
            label: 'Nome',
            placeholder: 'ex. John',
        },
        last_name: {
            label: 'Sobrenome',
            placeholder: 'ex. Doe',
        },
        email: {
            label: 'Email',
            placeholder: 'ex. seuemail@mail.com',
        },
        username: {
            label: 'Username',
            placeholder: 'ex. john_doe',
        },
        password: {
            label: 'Senha',
            placeholder: 'ex. sua@senha123',
        },
        confirm_password: {
            label: 'Confirmar Senha',
            placeholder: 'ex. sua@senha123',
        },
        submit: ['Criar Conta', 'Entrar'],
    },
    links: ['Já tenho conta', 'Ainda não tem conta?'],
};

export { body };

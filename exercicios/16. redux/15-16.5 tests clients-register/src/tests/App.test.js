import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderWithRedux from "./helpers/renderWithRedux"

import App from '../App';

describe('Cadastro de cliente', () => {
    const renderAppWithRouter = (initialEntries = ['/']) => {
        return (
            <Router history={ createMemoryHistory({ initialEntries }) }>
                <App />
            </Router>
        );
    }

    it('deveria renderizar a tela corretamente', () => {
        renderWithRedux(renderAppWithRouter());

        const title = screen.getByText('Cadastro de Clientes');
        expect(title).toBeInTheDocument();

        const linkLogin = screen.getByText('Faça seu Login');
        expect(linkLogin).toBeInTheDocument();
    });

    it('deveria salvar os dados de login no estado global', () => {
        const { store } = renderWithRedux(renderAppWithRouter(['/login']));

        // store.dispatch()
        // store.getState()

        const inputUser = screen.getByTestId('input-email');
        expect(inputUser).toBeInTheDocument();

        const inputPassword = screen.getByTestId('input-password');
        expect(inputPassword).toBeInTheDocument();

        const btnLogin = screen.getByTestId('btn-login');
        expect(btnLogin).toBeInTheDocument();

        userEvent.type(inputUser, 'luanderson@betrybe.com');
        userEvent.type(inputPassword, '123');
        userEvent.click(btnLogin);

        const userInStore = store.getState().loginReducer.email;
        const passwordInStore = store.getState().loginReducer.password;

        console.log(store.getState());

        expect(userInStore).toBe('luanderson@betrybe.com');
        expect(passwordInStore).toBe('123');
    });

    it('deveria cadastrar cliente', () => {
        const { store } = renderWithRedux(renderAppWithRouter(['/register']),
         {
             initialState: {
                registerReducer: [],
                loginReducer: {
                    email: 'luanderson@betrybe.com',
                    password: '123',
                }
             }
         }
        );

        const titlePage = screen.getByText('Ver clientes cadastrados');
        expect(titlePage).toBeInTheDocument();

        const inputName = screen.getByTestId('input-register-nome');
        expect(inputName).toBeInTheDocument();

        const inputAge = screen.getByTestId('input-register-idade');
        expect(inputAge).toBeInTheDocument();
        
        const inputEmail = screen.getByTestId('input-register-email');
        expect(inputEmail).toBeInTheDocument();

        userEvent.type(inputName, 'Elon Musk');
        userEvent.type(inputAge, '90');
        userEvent.type(inputEmail, 'elozinho@yahoo.com');

        const btnRegister = screen.getByRole('button', { name: 'Registrar Cliente'});
        expect(btnRegister).toBeInTheDocument();

        userEvent.click(btnRegister);

        console.log(store.getState());

        const registerReducer = store.getState().registerReducer[0];

        const { name, age, email } = registerReducer;

        expect(name).toBe('Elon Musk');
        expect(age).toBe('90');
        expect(email).toBe('elozinho@yahoo.com');        
    });
})
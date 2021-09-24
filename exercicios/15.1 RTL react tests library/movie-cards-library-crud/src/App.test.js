import { render, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import App from './App';

// describe('Hello World', () => {
//   test('se hello world está na tela', () => {
//     expect('hello world').toBe('hello world');
//   })
// })

// Acessar os elmentos na tela - seletores
// Integir com eles - se necessário - manupilar eventos
// Fazer o teste - Matchers

describe('Testa a aplicação Movie Card', () => {
  test('se renderiza o texto "Carregando..." quando a aplicaçao inicia', () => {
    const { getByText } = render(<App />)
    
    const loadingElement = getByText('Carregando...');
    expect(loadingElement).toBeInTheDocument()
  });

  test('se renderiza os filmes após o carregamento', async () => {
    const { getByText } = render(<App />)

    await waitForElementToBeRemoved(() => getByText('Carregando...'),
     { timeout: 3000 }
    )

    const title = getByText('Kingsglaive')
    expect(title).toBeInTheDocument()
  });

  test('se a tela de detalhes exibe as informações do filme', async () => {
    const { getByText, getByTestId } = render(<App />)

    await waitForElementToBeRemoved(() => getByText('Carregando...'),
     { timeout: 3000 }
    );

    const buttonDetails = getByTestId('KingsglaiveDetails');
    fireEvent.click(buttonDetails);

    await waitForElementToBeRemoved(() => getByText('Carregando...'),
    { timeout: 3000 }
   );

    const subtitle = getByText('Subtitle: Final Fantasy XV')
    expect(subtitle).toBeInTheDocument();
  })
})
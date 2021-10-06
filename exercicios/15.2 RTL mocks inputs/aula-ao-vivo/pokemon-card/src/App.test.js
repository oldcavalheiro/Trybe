import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testa a aplicação pokemon', () => {
  it('deveria exibir uma logo e um titulo', () => {
    render(<App />);

    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 3, 
      name: 'Pesquise um Pokemon'
    });
    expect(title).toBeInTheDocument();
  });

  it('deveria exibir o botão e o input na tela', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'pikachu');
    expect(input).toHaveValue('pikachu');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('deveria exibir o pokemon pesquisado', async () => {
    const cardsPokemonsMock = {
      cards: [{
        "id": "xyp-XY174",
        "name": "Pikachu-EX",
        "nationalPokedexNumber": 25,
        "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
        "types": [
          "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "EX",
        "hp": "130",
        "retreatCost": [
          "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "XY174",
        "artist": "5ban Graphics",
        "rarity": "Common",
        "series": "XY",
        "set": "XY Black Star Promos",
        "setCode": "xyp",
        "text": [
          "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
        ],
        "attacks": [
          {
            "cost": [
              "Lightning",
              "Colorless"
            ],
            "name": "Thunder Shock",
            "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
            "damage": "30",
            "convertedEnergyCost": 2
          },
          {
            "cost": [
              "Lightning",
              "Lightning",
              "Colorless"
            ],
            "name": "Mega Thunderbolt",
            "text": "Discard all Energy attached to this Pokémon.",
            "damage": "160",
            "convertedEnergyCost": 3
          }
        ],
        "resistances": [
          {
            "type": "Metal",
            "value": "-20"
          }
        ],
        "weaknesses": [
          {
            "type": "Fighting",
            "value": "×2"
          }
        ]
      }]
    }
    // global.fetch = jest.fn(() => {
    //   return Promise.resolve({
    //     json: () => Promise.resolve(cardsPokemonsMock)
    //   });
    // })

    jest.spyOn(global, "fetch")
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(cardsPokemonsMock),
    });


    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'pikachu');
    expect(input).toHaveValue('pikachu');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const titlePokemon = await screen.findByRole('heading',
      { level: 3, name: 'Pikachu-EX'}
    )

    expect(titlePokemon).toBeInTheDocument();
  })
})


//////
// const funcaoA = (entrada) => {
//   // lógica
//   return algo;
// }

// const mockFuncaoA = (simularEntrada) => {

//   return simularASaida
// }

import {
  rickandmorthySlice,
  setItems,
  setItemsWhiteList,
  remoteWhiteList,
} from "../../../src/components/redux/store/slices/rickandmorthySlices";
import {
  demoDataCharacter,
  demoItems,
  initialState,
  setItemsState,
  setItemsStateAndWhiteList,
} from "../../fixtures/rickandmorthyFixtures";

describe("Pruebas de rickandmorthySlices", () => {
  test("Debe mostrar el estado inicial y el nombre", () => {
    expect(rickandmorthySlice.name).toBe("rickandmorthy");
    const state = rickandmorthySlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("Debe realizar la accion de traer items ", () => {
    const state = rickandmorthySlice.reducer(initialState, setItems(demoItems));

    expect(state).toEqual({
      items: [
        { id: 1, name: "ABC", status: "alive", gender: "male", img: "img" },
        {
          id: 2,
          name: "ANBA",
          status: "unkdown",
          gender: "female",
          img: "img",
        },
      ],
      isLoading: false,
      page: 0,
      whiteList: [],
      itemSelect: null,
      character: {},
    });
  });



  test('Enviar Items a Favoritos', () => { 

    const state = rickandmorthySlice.reducer(setItemsState, setItemsWhiteList(demoDataCharacter))

    expect( state ).toEqual( {
        items: [
          { id: 1, name: 'ABC', status: 'alive', gender: 'male', img: 'img' },
          {
            id: 2,
            name: 'ANBA',
            status: 'unkdown',
            gender: 'female',
            img: 'img'
          }
        ],
        isLoading: false,
        page: 0,
        whiteList: [ { name: 'ABC', status: 'alive', gender: 'male', img: 'img' } ],
        itemSelect: null,
        character: {}
      })

   })

   test('Remover de Favoritos', () => { 

    const state = rickandmorthySlice.reducer(setItemsStateAndWhiteList, remoteWhiteList('ABC'))

    expect( state ).toEqual(    {
        items: [
          { id: 1, name: 'ABC', status: 'alive', gender: 'male', img: 'img' },
          {
            id: 2,
            name: 'ANBA',
            status: 'unkdown',
            gender: 'female',
            img: 'img'
          }
        ],
        isLoading: false,
        page: 0,
        whiteList: [],
        itemSelect: null,
        character: {}
      })




    })

});

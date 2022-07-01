import { getOneCharacter, setItems, startLoading } from "./rickandmorthySlices"
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getCharacters = (  ) => {

    return async( dispatch ) => {


       

        try {

          dispatch( startLoading() );
            const authLink = setContext((_, { headers }) => {
              return {
                headers: {
                  ...headers,
                  authorization: `Bearer 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`,
                },
              };
            });
        
            const client = new ApolloClient({
              cache: new InMemoryCache(),
              link: authLink.concat(
                new HttpLink({
                  uri: "https://rickandmortyapi.com/graphql",
                })
              ),
            });
        
            const { data } = await client.query({
              query: gql`
              query getCharacters {
                characters {
                  results {
                    id
                    name
                    image
                  }
                }
              }
              `,
            });
        
            const { results } = data.characters;

            
            dispatch( setItems({items:results}) )

     

          } catch {
            throw `Error 404`;
          }



    }




}

export const getOnceCharacter = ( id = 0 ) => {

  return async( dispatch ) => {


     

      try {

        dispatch( startLoading() );
          const authLink = setContext((_, { headers }) => {
            return {
              headers: {
                ...headers,
                authorization: `Bearer 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`,
              },
            };
          });
      
          const client = new ApolloClient({
            cache: new InMemoryCache(),
            link: authLink.concat(
              new HttpLink({
                uri: "https://rickandmortyapi.com/graphql",
              })
            ),
          });
      
          const { data } = await client.query({
            query: gql`
            query getCharacter {
              character(id:${id}){
                name
                image
                gender
                status
                species
                
              }
            }
            
            `,
          });
      
          const dataCharacter = data.character 

      
           dispatch( getOneCharacter({data:dataCharacter})) 
      
   

        } catch {
          throw `Error 404`;
        }



  }




}



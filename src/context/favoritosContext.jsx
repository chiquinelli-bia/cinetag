import { createContext, useContext, useState } from "react";

export const favoritosContext = createContext();
favoritosContext.displayName = "favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  return (
    <favoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </favoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(favoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id,
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    const listaNova = favorito.filter((item) => item.id !== novoFavorito.id);
    setFavorito(listaNova);
  }
  return {
    favorito,
    adicionarFavorito,
  };
}

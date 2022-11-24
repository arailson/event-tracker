import { useRecoilValue } from "recoil";
import { listeDeEventosState } from "../atom";

const useListaDeEventos = () => {
    return useRecoilValue(listeDeEventosState)
}

export default useListaDeEventos;
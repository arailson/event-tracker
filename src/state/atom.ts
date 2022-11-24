import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listeDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2022-11-23T09:00"),
      fim: new Date("2022-11-23T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2022-11-22T09:00"),
      fim: new Date("2022-11-22T11:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: "filtroDeEventos",
  default: {},
});

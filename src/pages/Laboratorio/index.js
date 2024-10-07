import React from "react";
import { Container /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergePreloader from "../../components/VergePreloader";
import VergeLogo from "../../components/VergeLogo";
import Menu from "../../components/VergeMenu";
import IconButtons from "../../components/VergeAyudas";
import ModalObjetivos from "../../components/VergeModalObjetivos";
import ModalAyuda from "../../components/VergeModalAyuda";
import ModalAyudaMovil from "../../components/VergeModalAyudaMovil";
import ModalEquipo from "../../components/VergeModalEquipo";
import ModalInformacion from "../../components/VergeModalInformacion";
import VergeBotonRetroceso from "../../components/VergeBotonRetroceso";
import VergePantallaMobile from "../../components/VergePantallaMobile";

function Laboratorio() {
  const menuItems = [
    {
      id: "paso1",
      icon: "/images/icon3.png",
      ENdescription: "Free Movement",
      ESdescription: "Movimiento Libre",
    },
    {
      id: "paso2",
      icon: "/images/icon2.png",
      ENdescription: "SAG Mill Feed Transfer Conveyor",
      ESdescription: "Cinta Transportadora de Alimentación al Molino SAG",
    },
    {
      id: "paso3",
      icon: "/images/icon2.png",
      ENdescription: "SAG Mill Feed Conveyor",
      ESdescription: "Cinta Transportadora de Alimentación al Molino SAG",
    },
    {
      id: "paso4",
      icon: "/images/icon2.png",
      ENdescription: "Primary SAG Mill",
      ESdescription: "Molino SAG Primario",
    },
    {
      id: "paso5",
      icon: "/images/icon2.png",
      ENdescription: "Primary SAG Mill Discharge Screen",
      ESdescription: "Criba de Descarga del Molino SAG Primario",
    },
    {
      id: "paso6",
      icon: "/images/icon2.png",
      ENdescription: "Pebble Recycle Conveyor #1",
      ESdescription: "Cinta Transportadora de Reciclaje de Pebbles #1",
    },
    {
      id: "paso7",
      icon: "/images/icon2.png",
      ENdescription: "Pebble Crusher Feed Conveyor",
      ESdescription:
        "Cinta Transportadora de Alimentación a la Trituradora de Pebbles",
    },
    {
      id: "paso8",
      icon: "/images/icon2.png",
      ENdescription: "Pebble Crusher",
      ESdescription: "Trituradora de Pebbles",
    },
    {
      id: "paso9",
      icon: "/images/icon2.png",
      ENdescription: "SAG Mill Area Spillage Pump",
      ESdescription: "Bomba de Derrames del Área del Molino SAG",
    },
    {
      id: "paso10",
      icon: "/images/icon2.png",
      ENdescription: "Cyclone Feed Pump #1",
      ESdescription: "Bomba de Alimentación del Ciclón #1",
    },
    {
      id: "paso11",
      icon: "/images/icon2.png",
      ENdescription: "Cyclone Feed Pump #2",
      ESdescription: "Bomba de Alimentación del Ciclón #2",
    },
    {
      id: "paso12",
      icon: "/images/icon2.png",
      ENdescription: "Mill Cyclone Cluster",
      ESdescription: "Conjunto de Ciclones del Molino",
    },
    {
      id: "paso13",
      icon: "/images/icon2.png",
      ENdescription: "Pb Rougher Feed Primary Sampler",
      ESdescription: "Muestreador Primario de Alimentación Rougher de Plomo",
    },
    {
      id: "paso14",
      icon: "/images/icon2.png",
      ENdescription: "Pb Rougher Feed Secondary Sampler",
      ESdescription: "Muestreador Secundario de Alimentación Rougher de Plomo",
    },
    {
      id: "paso15",
      icon: "/images/icon2.png",
      ENdescription: "Flotation Feed Conditioner Tank #1",
      ESdescription: "Tanque Acondicionador de Alimentación de Flotación #1",
    },
    {
      id: "paso16",
      icon: "/images/icon2.png",
      ENdescription: "Flotation Feed Conditioner Tank #2",
      ESdescription: "Tanque Acondicionador de Alimentación de Flotación #2",
    },
    {
      id: "paso17",
      icon: "/images/icon2.png",
      ENdescription: "Flotation Feed Pump #1",
      ESdescription: "Bomba de Alimentación de Flotación #1",
    },
    {
      id: "paso18",
      icon: "/images/icon2.png",
      ENdescription: "Flotation Feed Pump #2",
      ESdescription: "Bomba de Alimentación de Flotación #2",
    },
    {
      id: "paso19",
      icon: "/images/icon2.png",
      ENdescription: "Particle Size Analyser",
      ESdescription: "Analizador de Tamaño de Partículas",
    },
    {
      id: "paso20",
      icon: "/images/icon2.png",
      ENdescription: "Pb Rougher Feed Sample Pump (in Mill)",
      ESdescription:
        "Bomba de Muestra de Alimentación Rougher de Plomo (en el Molino)",
    },
  ];

  return (
    <Container>
      <VergePreloader
        labName="Milling"
        imageUrl="/images/fondo.png"
        logoUrl="/images/logo-tecsup.png"
      />
      <VergeLogo logoUrl="/images/tecsup.png" />
      <Menu items={menuItems} menuIconImage="/images/icon1.png" />
      <IconButtons />
      <VergeViewer
        src="/applications/MoliendaWeb/MoliendaWeb.html"
        title="Milling"
      />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <VergePantallaMobile />
      <ModalAyuda />
      <ModalAyudaMovil />
      <ModalObjetivos />
      <ModalEquipo />
      <ModalInformacion />
      <VergeBotonRetroceso />
    </Container>
  );
}

export default Laboratorio;

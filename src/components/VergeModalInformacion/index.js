import React from "react";
import styled from "styled-components";

// Estilos para el contenedor centrado con animaciones
const CenteredContainer = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 30;
  opacity: 0; /* Inicialmente invisible */
  transition: opacity 0.5s ease; /* Transición suave de opacidad */
`;

// Estilos para el contenedor de los cuadros
const CardContainer = styled.div`
  background: rgb(0 0 0 / 66%);
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  position: relative;
  transition: opacity 0.5s ease;
`;

// Estilos para la imagen
const Image = styled.img`
  width: auto;
  height: 23rem;
  object-fit: cover;

  @media (max-width: 1050px) {
    width: auto;
    height: 15rem;
  }
`;

// Estilos para el botón de cierre personalizado
const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: #ffffff47;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    scale: 1.1;
  }
`;

// Componente principal
const ModalInformacion = () => {
  const handleCloseModal = () => {
    const modal = document.getElementById("contenedorModalInformacion");
    if (modal) {
      modal.style.opacity = "0"; // Animación para desaparecer
      setTimeout(() => {
        modal.style.display = "none"; // Ocultar después de la animación
      }, 500); // Duración de la animación
    }
  };

  return (
    <CenteredContainer id="contenedorModalInformacion">
      <CardContainer>
        <CloseButton onClick={handleCloseModal}>×</CloseButton>{" "}
        {/* Botón de cierre personalizado */}
        <Image id="ModalInformacion" src="/images/informacion.png" alt="Imagen 1" />
      </CardContainer>
    </CenteredContainer>
  );
};

export default ModalInformacion;

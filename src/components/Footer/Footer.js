import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SocialMedias from '../../components/SocialMedias/index';

import * as F from './styles';

export default function Footer() {
  return (
    <F.FooterWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <h3>Mapa do Site</h3>
            <F.FooterNav>
              <ul>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#restaurante">Restaurante</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </F.FooterNav>
          </Col>
          <Col xs="12" sm="4">
            <h3>Contatos</h3>
            <p>
              - contato@azeitededende.com
              <br />- (71) 99999 - 9999
            </p>
          </Col>
          <Col xs="12" sm="4">
            <h3>Azeite de Dendê</h3>
            <SocialMedias />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <F.Copy>
              Made by Matheusdoe-dev
              <br />
              Azeite de Dendê 2020 @ Todos os direitos reservados
              <sup>&copy;</sup>.
            </F.Copy>
          </Col>
        </Row>
      </Container>
    </F.FooterWrapper>
  );
}
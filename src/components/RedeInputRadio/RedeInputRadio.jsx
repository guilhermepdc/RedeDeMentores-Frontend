import React from 'react';
import { string, func } from 'prop-types';
import TextField from './StyledComponents';

const RedeInputRadio = ({
  descricao, tipo, nome, onChange, checked,
}) => (
  <TextField>
    <TextField.Label>{descricao}</TextField.Label>
    <div style={{ padding: '10px 0px' }}>
      <TextField.Radio type={tipo} id="online" name={nome} value="1" onChange={onChange} />
      <TextField.LabelRadio htmlFor="online">Online</TextField.LabelRadio>
      <TextField.Radio type={tipo} id="presencial" name={nome} value="2" onChange={onChange} />
      <TextField.LabelRadio htmlFor="presencial">Presencial</TextField.LabelRadio>
    </div>
  </TextField>
);

RedeInputRadio.propTypes = {
  descricao: string,
  tipo: string,
  nome: string,
  checked: string,
  onChange: func,
};

RedeInputRadio.defaultProps = {
  descricao: '',
  tipo: '',
  nome: '',
  checked: '',
  onChange: () => {},
};

export default RedeInputRadio;

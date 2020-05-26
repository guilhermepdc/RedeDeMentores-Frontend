import React from 'react';
import styled from 'styled-components';

import COLOR from '../../utils/colors.constants';

const Checkbox = (props) => <input type="checkbox" {...props} />;

const RedeCheckbox = styled(Checkbox)`
  width: 25px;
  height: 25px;
  display: flex;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  border-radius: 4px;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 3px solid ${COLOR.AZUL};

  &:focus {
    outline: none;
  }

  &:checked {
    &:after {
      position: absolute;
      content: '✔';
    }
  }
`;

export default RedeCheckbox;

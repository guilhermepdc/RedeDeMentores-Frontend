import React from 'react';
import { string, func, bool } from 'prop-types';
import Container from './StyledComponents';
import visibility from '../../assets/visibility-button.png';
import remove from '../../assets/rubbish-bin-delete-button.png';
import edition from '../../assets/create-new-pencil-button.png';
import RedeTimeSlot from '../RedeTimeSlot/RedeTimeSlot';
import RedeIcon from '../RedeIcon/RedeIcon';
import CardDescription from './StyledComponents/card-description';
import CardHeader from './StyledComponents/card-header';
import CardLogo from './StyledComponents/card-logo';
import CardFooter from './StyledComponents/card-footer';
import CardContent from './StyledComponents/card-content';
import IconsWrapper from './StyledComponents/icons-wrapper';
import TimeSlotWrapper from './StyledComponents/timeslot-wrapper';


const Card = ({
  title, description, image, visibleFunction, removeFunction, editFunction, isVisible, TimeSlots, mentorias
}) => (
  <Container visible={isVisible}>
    <CardLogo src={image} />
    <CardContent>
      <CardHeader>
        <CardHeader.Title>
          {title}
        </CardHeader.Title>
        <CardHeader.Button descricao="TODOS HORÁRIOS" onClick={() => { }} />
      </CardHeader>
      <CardDescription>
        {description}
      </CardDescription>
      <CardFooter>
        <CardFooter.SubTitle>
          Próximos horários
        </CardFooter.SubTitle>
        <CardFooter.Content>
          <TimeSlotWrapper>
            <RedeTimeSlot descricao="SEG - 12:00" />
            <RedeTimeSlot descricao="TER - 12:00" />
            <RedeTimeSlot descricao="QUA - 12:00" />
            {TimeSlots}
          </TimeSlotWrapper>
          <IconsWrapper>
            <CardHeader.Button descricao="TODOS HORÁRIOS" onClick={() => { alert('test'); }} />
            <div>
              {showIcons(mentorias, remove, edition, removeFunction, editFunction)}
              
            </div>
          </IconsWrapper>
        </CardFooter.Content>
      </CardFooter>
    </CardContent>
  </Container>
);

Card.propTypes = {
  description: string,
  title: string,
  isVisible: bool,
  visibleFunction: func,
  removeFunction: func,
  editFunction: func,
  mentorias: bool,

};

Card.defaultProps = {
  description: '',
  title: '',
  isVisible: true,
  visibleFunction: null,
  removeFunction: null,
  editFunction: null,
  mentorias: false,

};
    
  function showIcons(mentorias, remove, edition, removeFunction, editFunction){
    /* <RedeIcon imageUrl={visibility} onClick={visibleFunction} /> */
    if (mentorias)
      return [];
    else{
      return [<RedeIcon imageUrl={remove} onClick={removeFunction} />,
      <RedeIcon imageUrl={edition} onClick={editFunction} /> ];
    }
  }


export default Card;
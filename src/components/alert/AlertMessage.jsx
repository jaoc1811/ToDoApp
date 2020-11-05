import React from 'react';
import { Alert, Collapse } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const AlertMessage = () => {
  const alert = useSelector((state) => state.alertMessageReducer);
  const dispatch = useDispatch();

  return (
    <Collapse in={alert.show}>
      <div>
        <Alert variant={alert.variant} onClose={() => dispatch({ type: 'HIDE' })} dismissible>
          <Alert.Heading>{alert.head}</Alert.Heading>
          <p>
            {alert.body}
          </p>
        </Alert>
      </div>
    </Collapse>
  );
};

export default AlertMessage;

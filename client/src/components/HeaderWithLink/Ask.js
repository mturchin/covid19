import React from 'react';
import { withTranslation } from 'react-i18next';

import AskADoctor from '../../containers/AddQuestionForm';
import '../../styles/Ask.css';

const Ask = (props) => {
  return (
    <div className="ask-wrapper">
      <div>
        <p>{props.t('patientBoard:banner.cannotAnswer')}</p>
      </div>
      <div className="ask-button-wrapper">
        <AskADoctor buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
};

export default withTranslation()(Ask);

import styled from 'styled-components';
import React from 'react';

import { ApolloError } from '@apollo/client';
import { RedeemUserPasswordResetTokenResult, UserAuthenticationWithPasswordFailure } from '../types/generated-queries';

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

type DisplayErrorProps = {
  error: ApolloError | UserAuthenticationWithPasswordFailure | RedeemUserPasswordResetTokenResult
}

const DisplayError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;

  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

export default DisplayError;

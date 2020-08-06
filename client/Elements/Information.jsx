// @flow
import React, { useState } from 'react';
import { css } from 'emotion';

const classes = {
  wrapper: ({
    marginBottom,
  }) => css`
    width: 360px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${marginBottom};
    @media (max-width: 767px){
      width: 100%;
    }
  `,
  textStyle: css`
    width: 360px;
    height: 46px;
    padding: 9px 16px;

      ::placeholder {
        color: #a8a8a8;
        font-size: 16px;
        letter-spacing: 1px;
        text-align: justify;
      }
    @media (max-width: 767px){
      width: 100%;
    }  
  `,
};

export default function Information({
  placeholder,
  type,
  value,
  onChange,
  marginBottom,
}: {
  placeholder: string,
  type: string,
  value: string | null,
  onChange: Function,
  marginBottom: string,
}) {
  return (
    <div className={classes.wrapper({ marginBottom })}>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={classes.textStyle}
        placeholder={placeholder} />
    </div>
  );
}

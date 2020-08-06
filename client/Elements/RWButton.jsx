// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  wrapper: css`
      width: 100%;
      height: 46px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;

      @media (max-width: 767px) {
        width: 100%;
        display: flex;
    
      }
  `,
  buttonStyle: ({
    color,
    backgroundColor,
    border,
  }) => css`
    width: 360px;
    height: 46px;
    font-family: NotoSansCJKtc;
    color: ${color};
    background-color: ${backgroundColor};
    border: ${border};
    justify-content: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 16px;
    @media (max-width: 767px){
      width: 100%;
    }
  `,
};

function RWButton({
  title,
  color,
  backgroundColor,
  border,
  result,
}: {
  title: string,
  color: string,
  backgroundColor: string,
  border: string,
  result: Object,
}) {
  return (
    <div className={classes.wrapper}>
      <button
        type="button"
        onClick={() => console.log(result)}
        className={classes.buttonStyle({ color, backgroundColor, border })}>
        {title}
      </button>
    </div>
  );
}

export default RWButton;

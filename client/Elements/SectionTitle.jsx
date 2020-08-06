// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  headerWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    align-content：flex-start;
    margin: 0 0 40px;

    @media (max-width: 767px) {
      padding: 0;
      flex-direction: row;
      margin: 30px 0 40px 0;
      width: 100%;

    }
  `,
  chineseTitle: css`
    width: 182px;
    height: 34px;
    font-family: NotoSansCJKtc;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: 2px;
    text-align: justify;
    color: #1a1a1a;   
   
  `,
  bttnStyle: css`
    width: 48px;
    height: 30px;
    color:#cb333b;
    background-color: transparent;
    font-family: NotoSansCJKtc;
    border:transparent;
    font-size:18px;

  `,
};

function SectionTitle({
  title,
}: {
  title: string,
}) {
  return (
    <header className={classes.headerWrapper}>
      <text className={classes.chineseTitle}>歡迎加入兩廳院</text>
      <button type="button" className={classes.bttnStyle}>
        {title}
      </button>
    </header>
  );
}

export default SectionTitle;

// @flow
import React, { useState } from 'react';
import { css } from 'emotion';

import SectionTitle from '../Elements/SectionTitle';
import RWButton from '../Elements/RWButton';
import close from '../static/images/close-icon.png';
import Information from '../Elements/Information';
import Checkbox from '../Elements/Checkbox';

const classes = {
  wrapper: css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color:  rgba(26, 26, 26, 0.9);
    margin:0;
    @media (max-width: 767px){
      background-color: #ffffff;
      width:100%;
      height:100%;
    }
  `,
  space: css`
    width: 480px;
    height: 676px;
    display: flex;
    flex-flow: column;
    background-color: #ffffff;
    margin: 59px 400px;
    position: relative;
    padding: 80px 60px 40px;
    align-content:flex-start;
    @media (max-width: 767px) {
      padding: 72px 30px 39px 30px;
      margin: 0;
      width: 100%;
      height: 100vh;
    }
  `,
  annotation: css`
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 19px;
    color: #9b9b9b;
    white-space: pre-line;
    margin: 0;
  `,

  closeBtn: css`
    position: absolute;
    top: 24px;
    right: 24px;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
  `,
  closeIcon: css`
    width: 40px;
    height: 40px;
  `,
  separateLine: css`
    width: 50%;
    height: 1px;
    display: flex;
    flex-flow: column;
    background-color: #1a1a1a;
    align-content:flex-start;
`,
  textStyle: css`
    color: #1a1a1a;
    font-size: 13px;
    letter-spacing: 1px;
    padding: 0 4px;
    justify-content: center;
    align-items: center;
  `,
  line: css`
    width: 360px;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 24px;
    margin:20px 0;
    @media (max-width: 767px){
      width: 100%;
    }
  `,
  InputWrapper: css`
    width:360px;
    height:auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    @media (max-width: 767px){
      width: 100%;
    }
  `,
  notice: css`
    text-align: justify;
    color: #1a1a1a;
    font-size: 13px;
    letter-spacing: 1px;
    margin: 8px 0 12px;
  `,
  isAgreeTxt: css`
    text-align: justify;
    color: #1a1a1a;
    font-size: 13px;
    letter-spacing: 1px;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
  `,
  isAgreeGrayTxt: ({
    marginSpace,
  }) => css`
    text-align: justify;
    color: #a8a8a8;
    font-size: 13px;
    letter-spacing: 1px;
    text-decoration-line: underline;
    margin: ${marginSpace};
`,
  policyWrapper: css`
    width:250px;
    height:20px;    
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    @media (max-width: 767px){
      width: 100%;
    }
`,
  isAgreeWrapper: css`
    width:360px;
    height:20px;    
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    margin: 0 0 12px 0;
    @media (max-width: 767px){
      width: 100%;
    }
`,
  checkboxWrapper: css`
    width:360px;
    height:60px;    
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    @media (max-width: 767px){
      width: 100%;
    }
`,
  freeRegisterWrapper: css`

    display: flex;
    align-items: flex-end;
    justify-content:flex-end;
    @media (max-width: 767px){
      width: 100%;
      height:100%;
    }
`,
};

function MainBoard({
  marginSpace,
}: {
  marginSpace: string,
}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [epaper, setEpaper] = useState(false);
  const [policy, setPolicy] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.space}>
        <button type="button" className={classes.closeBtn}>
          <img src={close} alt="Background" className={classes.closeIcon} />
        </button>
        <SectionTitle title="登入" />

        <RWButton
          result={confirmPassword}
          title="兩廳院之友首次登入"
          color="#1a1a1a"
          backgroundColor="#ffffff"
          border="solid 1px #1a1a1a" />
        <div className={classes.line}>
          <div className={classes.separateLine} />
          <text className={classes.textStyle}>或</text>
          <div className={classes.separateLine} />
        </div>
        <div className={classes.InputWrapper}>
          <div>
            <Information
              marginBottom="28px"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="請輸入有效信箱*" />
          </div>
          <Information
            marginBottom="0"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="請輸入密碼*" />
          <text className={classes.notice}>最少 8 個字，含 1 個數字和 1 個英文字母。</text>
          <Information
            marginBottom="28px"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="再次輸入密碼*" />
        </div>
        <div className={classes.checkboxWrapper}>
          <div className={classes.isAgreeWrapper}>
            <Checkbox onClick={setEpaper} isAgree={epaper} />
            <text className={classes.isAgreeTxt}>我願意收到電子報</text>
          </div>
          <div className={classes.isAgreeWrapper}>
            <Checkbox onClick={setPolicy} isAgree={policy} />
            <div className={classes.policyWrapper}>
              <text className={classes.isAgreeTxt}>我已詳閱且同意</text>
              <text className={classes.isAgreeGrayTxt({ marginSpace })} marginSpace="0 3px 0">隱私政策</text>
              <text className={classes.isAgreeTxt}>和</text>
              <text className={classes.isAgreeGrayTxt({ marginSpace })} marginSpace="0 3px 0 0">會員條款</text>
            </div>
          </div>
        </div>
        <div className={classes.freeRegisterWrapper}>
          <RWButton
            result={{
              email,
              password,
              confirmPassword,
              epaper,
              policy,
            }}
            title="免費註冊"
            color="#ffffff"
            backgroundColor="#cb333b"
            border="transparent" />
        </div>
      </div>
    </div>
  );
}

export default MainBoard;

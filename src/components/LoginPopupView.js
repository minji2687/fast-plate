import React, { Component } from 'react';
import styles from './LoginPopupView.module.scss';
import classNames from 'classnames/bind';
import { withModal } from '../contexts/ModalContext';

const cx = classNames.bind(styles);
class LoginPopupView extends Component {
  componentWillUnmount() {
    this.props.clearAllBodyScrollLocks();
  }

  render() {
    const { popupOpen, hideTargetElement } = this.props;
    return (
      <React.Fragment>
        <div
          className={cx({ blackOverlay: popupOpen })}
          onClick={() => hideTargetElement('popupOpen')}
        />
        <section className={cx('loginPopup', { popup: !popupOpen })}>
          <h2 className={cx('title')}>로그인</h2>
          <p className={cx('description')}>
            로그인하면 가고싶은 식당을
            <br />
            저장할 수 있어요.
          </p>
          <a className={cx('loginFacebook')}>
            <span className={cx('btnTitle')}>페이스북으로 시작하기</span>
          </a>
          <a className={cx('loginKakao')}>
            <span className={cx('btnTitle')}>카카오톡으로 시작하기</span>
          </a>
          <button
            className={cx('closeBtn')}
            onClick={() => hideTargetElement('popupOpen')}
          >
            닫기
          </button>
        </section>
      </React.Fragment>
    );
  }
}

export default withModal(LoginPopupView);
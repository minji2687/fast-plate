import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './WritingReviewView.module.scss';
const cx = classNames.bind(styles);

export default class WritingReviewView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={cx('WritingReviewPage')}>
          <div className={cx('ReviewWritingPage__Row')}>
            <div className={cx('RestaurantSubMessage')}>
              <h2 className={cx('RestaurantName')}>카메스시/亀すし総</h2>
              <p className={cx('RestaurantMessage')}>
                에 대한 솔직한 리뷰를 써주세요.
              </p>
            </div>
            <div className={cx('RestaurantRecommendPicker')}>
              <ul className={cx('RestaurantRecommendPicker__List')}>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <button className={cx('recommend')}>맛있다</button>
                </li>
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <button className={cx('ok')}>괜찮다</button>
                </li>
                
                <li className={cx('RestaurantRecommendPicker__Item')}>
                  <button className={cx('not-recommend')}>별로</button>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('ReviewWritingPage__ContentWrap')}>
            <div className={cx('UserSimpleProfile')}>
              <img src="" alt="" />
              <span className={cx('username')}>Jominji</span>
            </div>
            <div className={cx('ReviewWritingPage__FormWrap')}>
              <div className={cx('ReviewWritingPage__EditorWrap')}>
                <textarea placeholder="Jominji님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!" />
                <p className={cx('ReviewEditor__TextLengthStateBox')}>
                  0 / 10,000
                </p>
              </div>
              <div className={cx('DraggablePictureContainer')}>
                <ul>
                  <li className={cx('DraggablePictureContainer__PictureList')}>
                    <button />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('ReviewWritingPage__Buttons')}>
            <button className={cx('ReviewWritingPage__CancelButton')}>
              취소
            </button>
            <button className={cx('ReviewWritingPage__SubmitButton')}>
              완료
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
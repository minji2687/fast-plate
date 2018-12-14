import React, { Component } from 'react';
import './PostDetailView.scss';
import { Redirect } from 'react-router-dom';
import GoogleMap from '../containers/GoogleMap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { withModal } from '../contexts/ModalContext';
import withLoading from '../hoc/withLoading';
import GalleryModal from '../containers/GalleryModal';
import ReviewList from '../containers/ReviewList';

class PostDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentModalPic: null,
      currentModalComment: null,
      writingReviewPage: false,
    };
  }

  async handleWritingReviewPage() {
    this.setState({
      writingReviewPage: true,
    });
  }

  static defaultProps = {
    // 서버로부터 받아온 레스토랑 목록 데이터
    // PostDetail에서 받아온 레스토랑 더미 사진 목록
    restaurants: [
      {
        // name:
        // address_detail:
        // phone_num:
        // food_type:
        // price_level:
        // parking:
        // Business_hour:
      },
    ],
  };

  render() {
    const {
      galleryOpen,
      showTargetElement,
      post_set,
      restaurants,
      handleCount,
      wannaGo,
      handleWannaGo,
      location,
      handleReviewfilter,
      container,
      allReview,
    } = this.props;

    // 상세 페이지 상단 이미지 바 출력을 위한 변수 선언
    // const imgSet = post_set
    //   .filter(item => item.postimage_posts.length > 0)
    //   .map(item =>
    //     item.postimage_posts.map(item => item.image).find(item => item)
    //   );
    const imgSet = post_set
      .filter(item => item.postimage_posts.length > 0)
      .map(item => item.postimage_posts.find(item => item));

    const imgList = imgSet.slice(0, 4);

    const { writingReviewPage } = this.state;

    if (writingReviewPage) {
      return <Redirect to={`/restaurantsReview/${restaurants.pk}`} />;
    }

    const wannaGoColor = wannaGo ? 'wannaGoOn' : 'wannaGoOff';

    return (
      <React.Fragment>
        <div className="photo-list">
          {imgList.length > 0 ? (
            imgList.map(item => (
              <div key={item.pk} className="photo-item">
                <img
                  src={item.image}
                  alt="detailRestaurantpics"
                  onClick={() => {
                    !galleryOpen && showTargetElement('galleryOpen');
                  }}
                />
              </div>
            ))
          ) : (
            <div className="no-photo-item">
              <p className="no-photo-msg">앱에서 사진을 올려주세요</p>
            </div>
          )}
        </div>
        <div className="detail-inner">
          <div className="restaurant-detail">
            <header>
              <div className="titleWrap">
                <h1 className="title">{restaurants.name}</h1>
                <span className="rate" />
                <div className="restaurants_action_button_wrap">
                  <button
                    className="review_writing_button"
                    onClick={() => this.handleWritingReviewPage()}
                  >
                    리뷰쓰기
                  </button>

                  <button
                    className={wannaGoColor}
                    onClick={() => {
                      handleCount(restaurants.pk, restaurants.want_num);
                      handleWannaGo();
                    }}
                  >
                    <span>가고싶다</span>
                  </button>
                </div>
              </div>
              {/* <div className="status">
                <span className="hit">{restaurants.view_num}</span>
                <span className="review">{restaurants.review_num}</span>
                <span className="favorite">{restaurants.want_num}</span>
              </div> */}
            </header>
            <div>
              <dl className="detail-list">
                <dt className="addressName">주소</dt>
                <dd className="address"> {restaurants.address_detail}</dd>
                <dt className="tel-label">전화번호</dt>
                <dd className="tel-number">{restaurants.phone_num}</dd>
                <dt>음식 종류</dt>
                <dd>{restaurants.food_type}</dd>
                <dt>가격대</dt>
                <dd>{restaurants.price_level}</dd>
                <dt>주차</dt>
                <dd>{restaurants.parking}</dd>
                <dt>영업시간</dt>
                <dd>{restaurants.Business_hour}</dd>
              </dl>
            </div>
            <ReviewList
              post_set={post_set}
              location={location}
              handleReviewfilter={n => handleReviewfilter(n)}
              container={container}
              allReview={allReview}
            />
          </div>
          <div className="map">
            <GoogleMap restaurants={restaurants} />
          </div>
        </div>
        {galleryOpen ? (
          <GalleryModal post_set={post_set} restaurants={restaurants} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default withLoading(withModal(PostDetailView));

// {
//   detailpics.map((pic, index) => (
//     <div key={index} className="photo-item">
//       {/* 레스토랑 디테일 정보 사진들 */}
//       <img
//         src={pic}
//         alt="detailRestaurantpics"
//         onClick={() => {
//           !galleryOpen && showTargetElement('galleryOpen');
//         }}
//       />
//     </div>
//   ));
// }

// {
//   /* 레스토랑 사진을 클릭하면 나오는 modal*/
// }
// {
//   /* <Modal show={this.state.show} handleClose={() => this.hideModal()}>
//             <div className="picCommentContainer">
//               <img
//                 src={this.state.currentModalPic}
//                 alt="restuarantDetailPicsWithComments"
//               />
//               <div className="commentBox">
//                 <p>{this.state.currentModalComment}</p>
//               </div>
//             </div>
//             <CarouselView />
//           </Modal> */
// }

// onClick={() => this.showModal(index)}

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>CLOSE</button>
//       </section>
//     </div>
//   );
// };

// showModal(index) {
//   const { detailpics, comments } = this.props;
//   this.setState({
//     show: true,
//     currentModalPic: detailpics[index],
//     currentModalComment: comments[index],
//   });
//   document.body.style.overflow = 'hidden';
// }

// hideModal() {
//   this.setState({
//     show: false,
//   });
//   document.body.style.overflow = 'scroll';
// }

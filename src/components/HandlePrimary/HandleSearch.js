import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './HandleSearch.module.scss';
import classNames from 'classnames/bind';
import { withPage } from '../../contexts/PageContext';

const cx = classNames.bind(styles);

class HandleSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: false,
    };
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleButton() {
    this.setState({
      search: true,
    });
  }

  render() {
    const { main } = this.props;
    if (this.state.search) {
      return <Redirect to={`/search?keyword=${this.state.value}&page=1`} />;
    }

    return (
      <React.Fragment>
        {main ? (
          <form className={cx('mainSearch')}>
            <fieldset>
              <legend>맛집검색</legend>
              <span className={cx('magnifyIcon')}>
                {/* <img src={magnifying} alt="magnifyingIcon" /> */}
              </span>
              <input
                type="text"
                value={this.state.value}
                name="searchInput"
                placeholder="지역, 식당 또는 음식"
                onChange={e => this.handleInput(e)}
              />
              <button onClick={() => this.handleButton()}>검색</button>
            </fieldset>
          </form>
        ) : (
          <form className={cx('searchBox')}>
            <fieldset>
              <legend>맛집검색</legend>
              <span className={cx('searchIcon')} />
              <input
                type="text"
                value={this.state.value}
                name="searchInput"
                placeholder="지역, 식당 또는 음식"
                onChange={e => this.handleInput(e)}
              />
              <button
                className={cx('searchBtn')}
                onClick={() => this.handleButton()}
              >
                검색
              </button>
            </fieldset>
          </form>
        )}
      </React.Fragment>
    );
  }
}

export default withPage(HandleSearch);

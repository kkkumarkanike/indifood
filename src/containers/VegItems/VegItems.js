import React, { Component } from 'react';
import './VegItems.css';
import { Link } from 'react-router-dom';
import Aux from './../../hoc/Auxilary';
import special from './../../images/special.jpg';
import { connect } from 'react-redux';
import { getItems, addItemToCart } from '../../store/actions/itemActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import CustomToast from '../../component/Toast/CutomToast';

class VegItems extends Component {
  state = {
    rice: false,
    roti: false,
    curry: false,
    tiffin: false,
    starter: false,
  };

  componentDidMount() {
    this.props.getItems();
    console.log(
      '************* Filtered Food Items ***************',
      this.props.foodItems
    );
  }

  notify = () => {
    return toast.success(<CustomToast authError='Item Added Successfully' />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 3000,
      closeButton: false,

      // color:#489E48
    });
  };

  onAddItemToCart = (item) => {
    this.props.onAddingItemToCart(item);
    this.notify();
  };

  handleFilters = (event, filters) => {
    // console.log(e.target.name);
    const name = event.target.name;
    const target = event.target;
    if (target.checked) {
      this.setState((prevState) => {
        return {
          [name]: !prevState.name,
        };
      });
    } else {
      this.setState({ [name]: false });
    }
  };
  handleMobileFilters = (name) => {
    if (document.querySelector('#' + name).classList.contains('filter-opt')) {
      document.querySelector('#' + name).classList.remove('filter-opt');
      document.querySelector('#' + name).classList.add('filter-active');
      this.setState((prevState) => {
        return {
          [name]: !prevState.name,
        };
      });
    } else {
      document.querySelector('#' + name).classList.remove('filter-active');
      document.querySelector('#' + name).classList.add('filter-opt');
      this.setState({ [name]: false });
    }
  };

  render() {
    // console.log("Our State",this.state);
    let items = null;
    let mobileItems = null;
    let allItems = {};
    const all = this.props.foodItems;
    const allIds = Object.keys(all);
    allIds.map((id) => {
      if (
        all[id].category === 'veg' ||
        all[id].category === 'tiffin' ||
        all[id].category === 'roti'
      ) {
        allItems[id] = all[id];
      }
    });

    let finalFilteredItems = {};
    const filteredTypes = this.state;
    console.log('Filtered Types', filteredTypes);
    const filteredItems = Object.keys(filteredTypes).filter(
      (item) => filteredTypes[item] === true
    );
    console.log('Filtered Items', filteredItems);

    if (filteredItems.length === 0) {
      finalFilteredItems = allItems;
    } else {
      filteredItems.map((sub_cat) => {
        Object.keys(allItems).map((id) => {
          if (allItems[id].sub_cat === sub_cat) {
            if (
              allItems[id].category === 'veg' ||
              allItems[id].category === 'tiffin' ||
              allItems[id].category === 'special'
            ) {
              finalFilteredItems[id] = allItems[id];
            }
          }
        });
      });
    }

    console.log('Final filtered Items', finalFilteredItems);
    const allItemsIds = Object.keys(finalFilteredItems);
    if (allItemsIds.length > 0) {
      items = allItemsIds.map((item) => {
        return (
          <div className='filtered-food-card'>
            <Link to={'/details/' + item}>
              <img
                src={finalFilteredItems[item].img}
                alt='image'
                className='food-image'
              />
            </Link>
            <div className='filtered-details'>
              <p style={{ margin: 0, color: '#000' }}>
                <b>{finalFilteredItems[item].title}</b>
                <br />
                <span className='filtered-desc'>
                  {finalFilteredItems[item].desc}
                </span>
              </p>
              <button className='left'>
                <i className='fa fa-rupee'></i>&nbsp;
                {finalFilteredItems[item].price}
              </button>
              <button
                className='right'
                onClick={() => this.onAddItemToCart(finalFilteredItems[item])}
              >
                <b>ADD</b>
              </button>
            </div>
          </div>
        );
      });
      mobileItems = allItemsIds.map((item) => {
        return (
          <div className='mobile-single-item'>
            <img
              src={finalFilteredItems[item].img}
              alt=''
              className='mobi-image'
            />
            <div className='mobi-item-details'>
              <h5 className='mobi-item-head'>
                {finalFilteredItems[item].title}
              </h5>
              <p className='mobi-item-para'>{finalFilteredItems[item].desc}</p>
              <div className='rate-add'>
                <div className='rate-flex'>
                  <div>
                    <button className='rate-btn'>
                      <i className='fa fa-rupee'></i>&nbsp;
                      {finalFilteredItems[item].price}
                    </button>
                  </div>
                </div>
                <div className='add-flex'>
                  <div>
                    <button
                      className='add-btn'
                      onClick={() =>
                        this.onAddItemToCart(finalFilteredItems[item])
                      }
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <Aux>
        {localStorage.getItem('signIn') ? (
          <Aux>
            <div className='container-fluid'>
              <div className='desktop'>
                <div className='main-veg-banner'>
                  <div>
                    <img src={special} alt='banner' className='banner-image' />
                  </div>
                  <div className='item-type-details'>
                    <p className='cui item-head'>Only Veg</p>
                    <p className='cui-lite item-type'>
                      <b>All types of Veg items are available here</b>
                    </p>
                    <br />
                    <p className='cui-lite item-type'>
                      <b>NTR Colony, Yemmiganur</b>
                    </p>
                    <div className='accomplishments'>
                      <div className='overall-rating'>
                        <p className='font-white'>
                          <b>
                            <i className='fa fa-star'></i>&nbsp;&nbsp;4.1
                          </b>
                        </p>
                        <p className='font-dim'>Rating</p>
                      </div>
                      <div className='vr'></div>
                      <div className='time'>
                        <p className='font-white'>
                          <b>
                            <i className='fa fa-clock-o'></i>&nbsp;&nbsp;31 mins
                          </b>
                        </p>
                        <p className='font-dim'>Delivery Time</p>
                      </div>
                      <div className='vr'></div>
                      <div className='cost'>
                        <p className='font-white'>
                          <b>
                            <i className='fa fa-rupee'></i>&nbsp;200
                          </b>
                        </p>
                        <p className='font-dim'>Cost of one</p>
                      </div>
                    </div>
                  </div>
                </div>
                <section style={{ margin: 0, padding: 0 }}>
                  <div className='filters-section'>
                    <div className='filter-block'>
                      <div className='filters'>
                        <div className='type-flex'>
                          <p>
                            <input
                              type='checkbox'
                              name='rice'
                              onChange={this.handleFilters}
                            />
                            <b>
                              <span className='txt hover' name='rice'>
                                Rice Items
                              </span>
                            </b>
                          </p>
                        </div>
                        <div className='type-flex'>
                          <p>
                            <input
                              type='checkbox'
                              name='tiffin'
                              onChange={this.handleFilters}
                            />
                            <b>
                              <span className='txt hover'>Breakfast</span>
                            </b>
                          </p>
                        </div>
                        <div className='type-flex'>
                          <p>
                            <input
                              type='checkbox'
                              name='curry'
                              onChange={this.handleFilters}
                            />
                            <b>
                              <span className='txt hover'>Curries</span>
                            </b>
                          </p>
                        </div>
                        <div className='type-flex'>
                          <p>
                            <input
                              type='checkbox'
                              name='roti'
                              onChange={this.handleFilters}
                            />
                            <b>
                              <span className='txt hover'>Roties</span>
                            </b>
                          </p>
                        </div>
                        <div className='type-flex'>
                          <p>
                            <input
                              type='checkbox'
                              name='starter'
                              onChange={this.handleFilters}
                            />
                            <b>
                              <span className='txt hover'>Starters</span>
                            </b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='vl'></div>
                    <div className='filtered-items-block'>
                      <p className='txt'>
                        {Object.keys(finalFilteredItems).length} ITEMS
                      </p>
                      <div className='filtered-items'>{items}</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className='mobile'>
              <div className='mobile-banner'>
                <p className='mobile-banner-head'>Only Veg</p>
                <p className='mobile-banner-sub'>
                  All types of veg items are available here
                </p>

                <div className='hr-lite'></div>

                <div className='all-filters'>
                  <p className='filter-text'>
                    Filters <FontAwesomeIcon icon={faFilter} />
                  </p>
                  <div className='mobile-banner-details'>
                    <div
                      className='each each-rate'
                      name='rice'
                      onClick={() => this.handleMobileFilters('rice')}
                    >
                      <div className='filter-opt' id='rice'>
                        <p>Rice Items</p>
                      </div>
                    </div>
                    <div
                      className='each each-rate'
                      onClick={() => this.handleMobileFilters('tiffin')}
                    >
                      <div className='filter-opt' id='tiffin'>
                        <p>Breakfast</p>
                      </div>
                    </div>
                    <div
                      className='each each-rate'
                      onClick={() => this.handleMobileFilters('curry')}
                    >
                      <div className='filter-opt' id='curry'>
                        <p>Curries</p>
                      </div>
                    </div>
                    <div
                      className='each each-rate'
                      onClick={() => this.handleMobileFilters('roti')}
                    >
                      <div className='filter-opt' id='roti'>
                        <p>Roti</p>
                      </div>
                    </div>
                    <div
                      className='each each-rate'
                      onClick={() => this.handleMobileFilters('starter')}
                    >
                      <div className='filter-opt' id='starter'>
                        <p>Starters</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='hr-lite'></div>
                <p className='font-dim mar'>
                  {Object.keys(this.props.foodItems).length
                    ? this.props.foodItems.length
                    : 'no'}{' '}
                  items found
                </p>
                <br />

                <div className='mobile-items'>{mobileItems}</div>
              </div>
            </div>
          </Aux>
        ) : null}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    foodItems: state.item.res,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItems()),
    onAddingItemToCart: (item) => dispatch(addItemToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VegItems);

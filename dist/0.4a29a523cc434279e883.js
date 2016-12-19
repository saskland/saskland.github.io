webpackJsonp([0],{

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(25);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(24);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(108);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(770);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(779);
  
  var _TransactionsTable = __webpack_require__(330);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsSearchService = __webpack_require__(311);
  
  var _TransactionsSearchService2 = _interopRequireDefault(_TransactionsSearchService);
  
  var _Property = __webpack_require__(318);
  
  var _Property2 = _interopRequireDefault(_Property);
  
  var _TransactionToPropertyMapper = __webpack_require__(312);
  
  var _TransactionToPropertyMapper2 = _interopRequireDefault(_TransactionToPropertyMapper);
  
  var _reactMdl = __webpack_require__(26);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var LandLocationPage = function (_React$Component) {
    (0, _inherits3.default)(LandLocationPage, _React$Component);
    (0, _createClass3.default)(LandLocationPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = this.landLocation + " - " + _index.title;
      }
    }, {
      key: 'repositoryCallback',
      value: function repositoryCallback(transactions) {
  
        var mapper = new _TransactionToPropertyMapper2.default();
        var property = mapper.mapToProperty(transactions[0]);
  
        this.setState({ transactions: transactions, property: property });
      }
    }, {
      key: '_renderPage',
      value: function _renderPage() {
        if (this.state.property) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Property2.default, { property: this.state.property }),
            _react2.default.createElement(_TransactionsTable2.default, { transactions: this.state.transactions })
          );
        } else {
          return _react2.default.createElement(_reactMdl.Spinner, null);
        };
      }
    }]);
  
    function LandLocationPage(props) {
      (0, _classCallCheck3.default)(this, LandLocationPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (LandLocationPage.__proto__ || (0, _getPrototypeOf2.default)(LandLocationPage)).call(this, props));
  
      _this.repositoryCallback = _this.repositoryCallback.bind(_this);
      _this.state = { transactions: [], property: null };
  
      _this.landLocation = _this.props.route.params.landLocation;
      _this.transactionsService = new _TransactionsSearchService2.default();
  
      _this.transactionsService.searchTransactions(_this.landLocation, _this.repositoryCallback);
      return _this;
    }
  
    (0, _createClass3.default)(LandLocationPage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          { className: _styles2.default.content },
          this._renderPage(),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        );
      }
    }]);
    return LandLocationPage;
  }(_react2.default.Component); /**
                                 * React Static Boilerplate
                                 * https://github.com/kriasoft/react-static-boilerplate
                                 *
                                 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE.txt file in the root directory of this source tree.
                                 */
  
  exports.default = LandLocationPage;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(25);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(24);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(108);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(771);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(780);
  
  var _RmTile = __webpack_require__(320);
  
  var _RmTile2 = _interopRequireDefault(_RmTile);
  
  var _RmTransactions = __webpack_require__(321);
  
  var _RmTransactions2 = _interopRequireDefault(_RmTransactions);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var RmPage = function (_React$Component) {
    (0, _inherits3.default)(RmPage, _React$Component);
  
    function RmPage() {
      (0, _classCallCheck3.default)(this, RmPage);
      return (0, _possibleConstructorReturn3.default)(this, (RmPage.__proto__ || (0, _getPrototypeOf2.default)(RmPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(RmPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _index.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          { className: _styles2.default.content },
          _react2.default.createElement(
            'h4',
            null,
            this.landLocation
          ),
          _react2.default.createElement(_RmTile2.default, null),
          _react2.default.createElement(_RmTransactions2.default, null),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        );
      }
    }]);
    return RmPage;
  }(_react2.default.Component);
  
  exports.default = RmPage;

/***/ },

/***/ 312:
/***/ function(module, exports) {

  module.exports = class TransactionToPropertyMapper {
  
  	mapToProperty(transaction) {
  
  		var property = {};
  
  		if (transaction) {
  			property.rm = transaction.rm;
  			property.landLocation = transaction.landLocation;
  			property.acres = transaction.acres;
  			property.owner = transaction.buyer;
  			property.lastSold = transaction.date;
  			property.lastPrice = transaction.price;
  		};
  
  		return property;
  	};
  };


/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Tile = __webpack_require__(323);
  
  var _Tile2 = _interopRequireDefault(_Tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Property(props) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Tile2.default, { property: props.property })
    );
  }
  
  exports.default = Property;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(26);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Detail(props) {
    return _react2.default.createElement(
      _reactMdl.Chip,
      null,
      _react2.default.createElement(_reactMdl.Icon, { name: props.icon }),
      props.label,
      ': ',
      props.value
    );
  }
  
  exports.default = Detail;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(25);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(24);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _RmRepository = __webpack_require__(776);
  
  var _RmRepository2 = _interopRequireDefault(_RmRepository);
  
  var _reactMdl = __webpack_require__(26);
  
  var _Detail = __webpack_require__(319);
  
  var _Detail2 = _interopRequireDefault(_Detail);
  
  var _rmTileStyles = __webpack_require__(761);
  
  var _rmTileStyles2 = _interopRequireDefault(_rmTileStyles);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var RmTransactions = function (_React$Component) {
    (0, _inherits3.default)(RmTransactions, _React$Component);
    (0, _createClass3.default)(RmTransactions, [{
      key: 'loadRm',
      value: function loadRm(rm) {
  
        this.setState({ rm: rm });
      }
    }]);
  
    function RmTransactions(props) {
      (0, _classCallCheck3.default)(this, RmTransactions);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RmTransactions.__proto__ || (0, _getPrototypeOf2.default)(RmTransactions)).call(this, props));
  
      _this.loadRm = _this.loadRm.bind(_this);
      _this.state = { rm: {} };
      _this.rmRepository = new _RmRepository2.default();
  
      _this.rmRepository.getRm(493, _this.loadRm);
      return _this;
    }
  
    (0, _createClass3.default)(RmTransactions, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactMdl.Card,
          { shadow: 0, className: _rmTileStyles2.default.card },
          _react2.default.createElement(
            _reactMdl.CardTitle,
            { className: _rmTileStyles2.default.cardTitle },
            'RM of ',
            this.state.rm.name,
            ' - ',
            this.state.rm.id
          ),
          _react2.default.createElement(
            _reactMdl.CardText,
            null,
            _react2.default.createElement(
              _reactMdl.Grid,
              null,
              _react2.default.createElement(
                _reactMdl.Cell,
                { col: 3 },
                _react2.default.createElement(_Detail2.default, {
                  icon: 'show_chart',
                  label: '# of transactions',
                  value: this.state.rm.transactionCount
                }),
                _react2.default.createElement(_Detail2.default, {
                  icon: 'monetization_on',
                  label: 'Max sale price',
                  value: this.state.rm.maxPrice
                })
              ),
              _react2.default.createElement(
                _reactMdl.Cell,
                { col: 3 },
                _react2.default.createElement(_Detail2.default, {
                  icon: 'today',
                  label: 'Most Recent transaction',
                  value: this.state.rm.newestTransaction
                }),
                _react2.default.createElement(_Detail2.default, {
                  icon: 'today',
                  label: 'Oldest transaction',
                  value: this.state.rm.oldestTransaction
                })
              )
            )
          )
        );
      }
    }]);
    return RmTransactions;
  }(_react2.default.Component); /**
                                 * React Static Boilerplate
                                 * https://github.com/kriasoft/react-static-boilerplate
                                 *
                                 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
                                 *
                                 * This source code is licensed under the MIT license found in the
                                 * LICENSE.txt file in the root directory of this source tree.
                                 */
  
  ;
  
  exports.default = RmTransactions;

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(25);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(24);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _TransactionsTable = __webpack_require__(207);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsRepository = __webpack_require__(310);
  
  var _TransactionsRepository2 = _interopRequireDefault(_TransactionsRepository);
  
  var _reactMdl = __webpack_require__(26);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var RmTransactions = function (_React$Component) {
    (0, _inherits3.default)(RmTransactions, _React$Component);
    (0, _createClass3.default)(RmTransactions, [{
      key: 'repositoryCallback',
      value: function repositoryCallback(transactions) {
        this.setState({ transactions: transactions, loading: false });
      }
    }]);
  
    function RmTransactions(props) {
      (0, _classCallCheck3.default)(this, RmTransactions);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RmTransactions.__proto__ || (0, _getPrototypeOf2.default)(RmTransactions)).call(this, props));
  
      _this.repositoryCallback = _this.repositoryCallback.bind(_this);
      _this.state = { transactions: [], loading: true };
      _this.transactionsRepository = new _TransactionsRepository2.default();
  
      _this.transactionsRepository.getTransactionsForRm(493, 25, _this.repositoryCallback);
      return _this;
    }
  
    (0, _createClass3.default)(RmTransactions, [{
      key: '_renderTable',
      value: function _renderTable() {
        if (this.state.loading) {
          return _react2.default.createElement(_reactMdl.Spinner, null);
        } else {
          return _react2.default.createElement(_TransactionsTable2.default, { transactions: this.state.transactions });
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Recent Transactions'
          ),
          this._renderTable()
        );
      }
    }]);
    return RmTransactions;
  }(_react2.default.Component);
  
  ;
  
  exports.default = RmTransactions;

/***/ },

/***/ 322:
319,

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(26);
  
  var _Detail = __webpack_require__(322);
  
  var _Detail2 = _interopRequireDefault(_Detail);
  
  var _tile = __webpack_require__(762);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function Tile(props) {
    return _react2.default.createElement(
      _reactMdl.Card,
      { shadow: 0, className: _tile2.default.card },
      _react2.default.createElement(
        _reactMdl.CardTitle,
        { className: _tile2.default.cardTitle },
        props.property.landLocation,
        ' - RM ',
        props.property.rm
      ),
      _react2.default.createElement(
        _reactMdl.CardText,
        null,
        _react2.default.createElement(
          _reactMdl.Grid,
          null,
          _react2.default.createElement(
            _reactMdl.Cell,
            { col: 3 },
            _react2.default.createElement(_Detail2.default, {
              icon: 'monetization_on',
              label: 'Possible owner',
              value: props.property.owner
            }),
            _react2.default.createElement(_Detail2.default, {
              icon: 'monetization_on',
              label: 'Last sold for',
              value: props.property.lastPrice
            }),
            _react2.default.createElement(_Detail2.default, {
              icon: 'monetization_on',
              label: 'Last sold on',
              value: props.property.lastSold
            })
          ),
          _react2.default.createElement(
            _reactMdl.Cell,
            { col: 3 },
            _react2.default.createElement(_Detail2.default, {
              icon: 'monetization_on',
              label: '# of Acres',
              value: props.property.acres
            })
          )
        )
      )
    );
  };
  
  exports.default = Tile;

/***/ },

/***/ 328:
[781, 765],

/***/ 329:
325,

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(21);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(22);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(25);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(23);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(24);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Transaction = __webpack_require__(329);
  
  var _Transaction2 = _interopRequireDefault(_Transaction);
  
  var _TableCell = __webpack_require__(328);
  
  var _TableCell2 = _interopRequireDefault(_TableCell);
  
  var _DetailsModal = __webpack_require__(206);
  
  var _DetailsModal2 = _interopRequireDefault(_DetailsModal);
  
  var _reactMdl = __webpack_require__(26);
  
  var _reactResponsive = __webpack_require__(299);
  
  var _reactResponsive2 = _interopRequireDefault(_reactResponsive);
  
  var _lodash = __webpack_require__(269);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _transactionsTable = __webpack_require__(766);
  
  var _transactionsTable2 = _interopRequireDefault(_transactionsTable);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var TransactionsList = function (_React$Component) {
    (0, _inherits3.default)(TransactionsList, _React$Component);
    (0, _createClass3.default)(TransactionsList, [{
      key: '_transactionDetails',
      value: function _transactionDetails() {
        if (this.state.showDetails) {
          return _react2.default.createElement(_DetailsModal2.default, {
            open: this.state.showDetails,
            transactionDetails: this.state.transactionDetails,
            closeModal: this.closeModal });
        };
      }
    }, {
      key: '_renderDetailsCell',
      value: function _renderDetailsCell(name) {
        return _react2.default.createElement(
          _reactMdl.TableHeader,
          {
            name: name,
            tooltip: '',
            cellFormatter: this.renderDisplayTransactionDetails },
          'Details'
        );
      }
    }, {
      key: '_renderCell',
      value: function _renderCell(name, label) {
        return _react2.default.createElement(
          _reactMdl.TableHeader,
          {
            name: name,
            tooltip: '' },
          label
        );
      }
    }, {
      key: '_renderMoneyCell',
      value: function _renderMoneyCell(name, label) {
        var formatter = new Intl.NumberFormat('en-US', {
          minimumFractionDigits: 2
        });
  
        return _react2.default.createElement(
          _reactMdl.TableHeader,
          {
            name: name,
            tooltip: '',
            cellFormatter: function cellFormatter(value) {
              return '$' + formatter.format(value);
            } },
          label
        );
      }
    }, {
      key: 'closeModal',
      value: function closeModal() {
  
        this.setState({ showDetails: false });
      }
    }]);
  
    function TransactionsList(props) {
      (0, _classCallCheck3.default)(this, TransactionsList);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (TransactionsList.__proto__ || (0, _getPrototypeOf2.default)(TransactionsList)).call(this, props));
  
      _this.displayDetailsModal = function (transactionId) {
  
        var transactionDetails = _lodash2.default.find(_this.props.transactions, function (x) {
          return x.id === transactionId;
        });
        _this.setState({ showDetails: true, transactionDetails: transactionDetails });
      };
  
      _this.renderDisplayTransactionDetails = function (transactionId) {
        return _react2.default.createElement(_TableCell2.default, { onClick: function onClick() {
            return _this.displayDetailsModal(transactionId);
          } });
      };
  
      _this.closeModal = _this.closeModal.bind(_this);
  
      _this.state = { showDetails: false };
      return _this;
    }
  
    (0, _createClass3.default)(TransactionsList, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _transactionsTable2.default.transactionsTable },
          this._transactionDetails(),
          _react2.default.createElement(
            _reactResponsive2.default,
            { maxWidth: 600 },
            _react2.default.createElement(
              _reactMdl.DataTable,
              {
                sortable: true,
                shadow: 0,
                rows: this.props.transactions
              },
              this._renderCell("landLocation", "Land Location"),
              this._renderMoneyCell("price", "Price"),
              this._renderDetailsCell("id")
            )
          ),
          _react2.default.createElement(
            _reactResponsive2.default,
            { minWidth: 600, maxWidth: 799 },
            _react2.default.createElement(
              _reactMdl.DataTable,
              {
                sortable: true,
                shadow: 0,
                rows: this.props.transactions
              },
              this._renderCell("landLocation", "Land Location"),
              this._renderMoneyCell("price", "Price"),
              this._renderCell("date", "Date"),
              this._renderDetailsCell("id")
            )
          ),
          _react2.default.createElement(
            _reactResponsive2.default,
            { minWidth: 800, maxWidth: 1199 },
            _react2.default.createElement(
              _reactMdl.DataTable,
              {
                sortable: true,
                shadow: 0,
                rows: this.props.transactions
              },
              this._renderCell("landLocation", "Land Location"),
              this._renderMoneyCell("price", "Price"),
              this._renderCell("date", "Date"),
              this._renderCell("soil", "Soil"),
              this._renderCell("acres", "Acres"),
              this._renderDetailsCell("id")
            )
          ),
          _react2.default.createElement(
            _reactResponsive2.default,
            { minWidth: 1200 },
            _react2.default.createElement(
              _reactMdl.DataTable,
              {
                sortable: true,
                shadow: 0,
                rows: this.props.transactions
              },
              this._renderCell("landLocation", "Land Location"),
              this._renderMoneyCell("price", "Price"),
              this._renderCell("date", "Date"),
              this._renderCell("soil", "Soil"),
              this._renderCell("acres", "Acres"),
              this._renderCell("seller", "Seller"),
              this._renderCell("buyer", "Buyer"),
              this._renderDetailsCell("id")
            )
          )
        );
      }
    }]);
    return TransactionsList;
  }(_react2.default.Component);
  
  exports.default = TransactionsList;

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports
  
  
  // module
  exports.push([module.id, "._38z3{width:100%;margin:auto}._1xG-{color:#fff;height:55px;background:#3e4eb8}", ""]);
  
  // exports
  exports.locals = {
  	"card": "_38z3",
  	"cardTitle": "_1xG-"
  };

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports
  
  
  // module
  exports.push([module.id, "._1sSG{width:100%;margin:auto}._3TTw{color:#fff;height:55px;background:#3e4eb8}", ""]);
  
  // exports
  exports.locals = {
  	"card": "_1sSG",
  	"cardTitle": "_3TTw"
  };

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports
  
  
  // module
  exports.push([module.id, "._3dJ9{cursor:pointer}", ""]);
  
  // exports
  exports.locals = {
  	"tableCell": "_3dJ9"
  };

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports
  
  
  // module
  exports.push([module.id, "._2b_X{margin-top:25px}", ""]);
  
  // exports
  exports.locals = {
  	"transactionsTable": "_2b_X"
  };

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){._7aiQ{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "_7aiQ"
  };

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(18)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){._16-N{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "_16-N"
  };

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(583);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(19)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../node_modules/postcss-loader/index.js!./rmTileStyles.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../node_modules/postcss-loader/index.js!./rmTileStyles.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(584);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(19)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../../node_modules/postcss-loader/index.js!./tile.css", function() {
  			var newContent = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../../node_modules/postcss-loader/index.js!./tile.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 765:
[845, 587],

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(588);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(19)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../../node_modules/postcss-loader/index.js!./transactionsTable.css", function() {
  			var newContent = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../../node_modules/postcss-loader/index.js!./transactionsTable.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 770:
[846, 592],

/***/ 771:
[846, 593],

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

  const sheetrock = __webpack_require__(309);
  
  module.exports = class RmRepository {
  
    getRm(rmId, callback) {
  
      var query = "select * where A = " + rmId;
      this.getTransactionsWithSheetRock(query, callback);
    };
  
  		getTransactionsWithSheetRock(query, callback) {
  
  		function mapRowToRm(row) {
  
        var cells = row.cellsArray;
        var rm = {};
  
        rm.id = cells[0]
        rm.name = cells[1];
        rm.transactionCount = cells[2];
        rm.maxPrice = cells[3];
        rm.newestTransaction = cells[4];
        rm.oldestTransaction = cells[5];
  
        return rm;
  		};
  
  		var customCallback = function(error, options, response) {
  
  			var rm = mapRowToRm(response.rows[1]);
  
  			callback(rm);
  		};
  
  		sheetrock({
  			url: "https://docs.google.com/spreadsheets/d/13GATSXOqc_PSbvXmeTeapPJM6wIpJMG-qLxMNrYMIdU/edit#gid=7",
  			query: query,
  			callback: customCallback.bind(this)
  		});
  
  	};
  }


/***/ },

/***/ 779:
778,

/***/ 780:
778

});
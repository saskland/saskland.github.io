webpackJsonp([0],{

/***/ 111:
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
  
  var _Layout = __webpack_require__(93);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(773);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(783);
  
  var _TransactionsTable = __webpack_require__(110);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsSearchService = __webpack_require__(209);
  
  var _TransactionsSearchService2 = _interopRequireDefault(_TransactionsSearchService);
  
  var _TransactionDetails = __webpack_require__(326);
  
  var _TransactionDetails2 = _interopRequireDefault(_TransactionDetails);
  
  var _TransactionToPropertyMapper = __webpack_require__(210);
  
  var _TransactionToPropertyMapper2 = _interopRequireDefault(_TransactionToPropertyMapper);
  
  var _reactMdl = __webpack_require__(29);
  
  var _lodash = __webpack_require__(130);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var TransactionsPage = function (_React$Component) {
    (0, _inherits3.default)(TransactionsPage, _React$Component);
    (0, _createClass3.default)(TransactionsPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = this.landLocation + " - " + _index.title;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
  
        if (this.saleDate !== this.props.route.params.saleDate) {
          this.loadTransactionDetails();
        };
      }
    }, {
      key: 'repositoryCallback',
      value: function repositoryCallback(transactions) {
  
        this.setState({
          transactions: transactions
        });
  
        this.loadTransactionDetails();
      }
    }, {
      key: 'loadTransactionDetails',
      value: function loadTransactionDetails() {
  
        this.saleDate = this.props.route.params.saleDate;
        var saleDate = this.saleDate;
        var transactionDetails = _lodash2.default.find(this.state.transactions, function (x) {
          return x.date === saleDate;
        });
  
        this.setState({
          transactionDetails: transactionDetails
        });
      }
    }, {
      key: '_renderPage',
      value: function _renderPage() {
        if (this.state.transactionDetails) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TransactionDetails2.default, { transactionDetails: this.state.transactionDetails }),
            _react2.default.createElement(_TransactionsTable2.default, { transactions: this.state.transactions })
          );
        } else {
          return _react2.default.createElement(_reactMdl.Spinner, null);
        };
      }
    }]);
  
    function TransactionsPage(props) {
      (0, _classCallCheck3.default)(this, TransactionsPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (TransactionsPage.__proto__ || (0, _getPrototypeOf2.default)(TransactionsPage)).call(this, props));
  
      _this.repositoryCallback = _this.repositoryCallback.bind(_this);
      _this.state = { transactions: [], property: null };
  
      _this.landLocation = _this.props.route.params.landLocation;
      _this.saleDate = _this.props.route.params.saleDate;
      _this.transactionsService = new _TransactionsSearchService2.default();
  
      _this.transactionsService.searchTransactions(_this.landLocation, _this.repositoryCallback);
      return _this;
    }
  
    (0, _createClass3.default)(TransactionsPage, [{
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
    return TransactionsPage;
  }(_react2.default.Component);
  
  exports.default = TransactionsPage;

/***/ },

/***/ 210:
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

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _detailListItem = __webpack_require__(764);
  
  var _detailListItem2 = _interopRequireDefault(_detailListItem);
  
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
  
  function DetailListItem(props) {
    return _react2.default.createElement(
      'li',
      { className: _detailListItem2.default.detailListItem },
      _react2.default.createElement(
        'strong',
        null,
        props.label,
        ':'
      ),
      ' ',
      props.value
    );
  }
  
  exports.default = DetailListItem;

/***/ },

/***/ 214:
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
  
  var _Layout = __webpack_require__(93);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(771);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(781);
  
  var _TransactionsTable = __webpack_require__(110);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsSearchService = __webpack_require__(209);
  
  var _TransactionsSearchService2 = _interopRequireDefault(_TransactionsSearchService);
  
  var _Property = __webpack_require__(320);
  
  var _Property2 = _interopRequireDefault(_Property);
  
  var _TransactionToPropertyMapper = __webpack_require__(210);
  
  var _TransactionToPropertyMapper2 = _interopRequireDefault(_TransactionToPropertyMapper);
  
  var _reactMdl = __webpack_require__(29);
  
  var _lodash = __webpack_require__(130);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var PropertiesPage = function (_React$Component) {
    (0, _inherits3.default)(PropertiesPage, _React$Component);
    (0, _createClass3.default)(PropertiesPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = this.landLocation + " - " + _index.title;
      }
    }, {
      key: 'repositoryCallback',
      value: function repositoryCallback(transactions) {
  
        var mapper = new _TransactionToPropertyMapper2.default();
        var property = mapper.mapToProperty(transactions[0]);
  
        var saleDate = this.props.route.params.saleDate;
  
        console.log(_lodash2.default.find(transactions, function (x) {
          return x.date === saleDate;
        }));
  
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
  
    function PropertiesPage(props) {
      (0, _classCallCheck3.default)(this, PropertiesPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (PropertiesPage.__proto__ || (0, _getPrototypeOf2.default)(PropertiesPage)).call(this, props));
  
      _this.repositoryCallback = _this.repositoryCallback.bind(_this);
      _this.state = { transactions: [], property: null };
  
      _this.landLocation = _this.props.route.params.landLocation;
      _this.transactionsService = new _TransactionsSearchService2.default();
  
      _this.transactionsService.searchTransactions(_this.landLocation, _this.repositoryCallback);
      return _this;
    }
  
    (0, _createClass3.default)(PropertiesPage, [{
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
    return PropertiesPage;
  }(_react2.default.Component);
  
  exports.default = PropertiesPage;

/***/ },

/***/ 215:
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
  
  var _Layout = __webpack_require__(93);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(772);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(782);
  
  var _RmTile = __webpack_require__(322);
  
  var _RmTile2 = _interopRequireDefault(_RmTile);
  
  var _RmTransactions = __webpack_require__(323);
  
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

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(585);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(17)(content, {});
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

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Tile = __webpack_require__(324);
  
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

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(29);
  
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

/***/ 322:
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
  
  var _RmRepository = __webpack_require__(778);
  
  var _RmRepository2 = _interopRequireDefault(_RmRepository);
  
  var _reactMdl = __webpack_require__(29);
  
  var _Detail = __webpack_require__(321);
  
  var _Detail2 = _interopRequireDefault(_Detail);
  
  var _rmTileStyles = __webpack_require__(763);
  
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

/***/ 323:
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
  
  var _TransactionsTable = __webpack_require__(110);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsRepository = __webpack_require__(314);
  
  var _TransactionsRepository2 = _interopRequireDefault(_TransactionsRepository);
  
  var _reactMdl = __webpack_require__(29);
  
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

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(29);
  
  var _DetailListItem = __webpack_require__(212);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _tile = __webpack_require__(313);
  
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
                  'ul',
                  { className: _tile2.default.detailList },
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: 'Possible owner',
                      value: props.property.owner
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: '# of Acres',
                      value: props.property.acres
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: 'Last sold for',
                      value: props.property.lastPrice
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: 'Last sold on',
                      value: props.property.lastSold
                  })
              )
          )
      );
  };
  
  exports.default = Tile;

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Link = __webpack_require__(94);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactMdl = __webpack_require__(29);
  
  var _DetailListItem = __webpack_require__(212);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _tile = __webpack_require__(313);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function TransactionTile(props) {
      return _react2.default.createElement(
          _reactMdl.Card,
          { shadow: 0, className: _tile2.default.card },
          _react2.default.createElement(
              _reactMdl.CardTitle,
              { className: _tile2.default.cardTitle },
              props.transactionDetails.landLocation,
              ' - RM ',
              props.transactionDetails.rm
          ),
          _react2.default.createElement(
              _reactMdl.CardText,
              null,
              _react2.default.createElement(
                  'ul',
                  { className: _tile2.default.detailList },
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: '# of Acres',
                      value: props.transactionDetails.acres
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: 'Assessed Value',
                      value: props.transactionDetails.assessedValue
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: 'Buyer',
                      value: props.transactionDetails.buyer
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      icon: 'monetization_on',
                      label: 'Seller',
                      value: props.transactionDetails.seller
                  })
              )
          )
      );
  } /**
     * React Static Boilerplate
     * https://github.com/kriasoft/react-static-boilerplate
     *
     * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ;
  
  exports.default = TransactionTile;

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _TransactionTile = __webpack_require__(325);
  
  var _TransactionTile2 = _interopRequireDefault(_TransactionTile);
  
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
  
  function TransactionDetails(props) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TransactionTile2.default, { transactionDetails: props.transactionDetails })
    );
  }
  
  exports.default = TransactionDetails;

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
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

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "", ""]);
  
  // exports
  exports.locals = {
  	"detailListItem": "bNJK"
  };

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "._1sSG{width:100%;margin:auto}._3TTw{color:#fff;height:55px;background:#3e4eb8}._3nTp{list-style:none;color:#000}", ""]);
  
  // exports
  exports.locals = {
  	"card": "_1sSG",
  	"cardTitle": "_3TTw",
  	"detailList": "_3nTp"
  };

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){.Da5C{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "Da5C"
  };

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){._16-N{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "_16-N"
  };

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){._1ZBp{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "_1ZBp"
  };

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(583);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(17)(content, {});
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

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(584);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(17)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../../node_modules/postcss-loader/index.js!./detailListItem.css", function() {
  			var newContent = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"modules\":true,\"localIdentName\":\"[hash:base64:4]\",\"minimize\":true}!./../../../node_modules/postcss-loader/index.js!./detailListItem.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 771:
[847, 592],

/***/ 772:
[847, 593],

/***/ 773:
[847, 594],

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

  const sheetrock = __webpack_require__(312);
  
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

/***/ 781:
/***/ function(module, exports) {

  module.exports = {"title":"Sask Land Transactions Search","html":""};

/***/ },

/***/ 782:
781,

/***/ 783:
781

});
webpackJsonp([0],{

/***/ 113:
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
  
  var _Layout = __webpack_require__(112);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(777);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(785);
  
  var _TransactionsTable = __webpack_require__(141);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsSearchService = __webpack_require__(315);
  
  var _TransactionsSearchService2 = _interopRequireDefault(_TransactionsSearchService);
  
  var _TransactionTile = __webpack_require__(329);
  
  var _TransactionTile2 = _interopRequireDefault(_TransactionTile);
  
  var _Tile = __webpack_require__(328);
  
  var _Tile2 = _interopRequireDefault(_Tile);
  
  var _TransactionToPropertyMapper = __webpack_require__(316);
  
  var _TransactionToPropertyMapper2 = _interopRequireDefault(_TransactionToPropertyMapper);
  
  var _lodash = __webpack_require__(187);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _DetailsTile = __webpack_require__(325);
  
  var _DetailsTile2 = _interopRequireDefault(_DetailsTile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var PropertiesPage = function (_React$Component) {
    (0, _inherits3.default)(PropertiesPage, _React$Component);
    (0, _createClass3.default)(PropertiesPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = this.state.landLocation + " - " + _index.title;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
  
        this.loadDetails();
      }
    }, {
      key: 'loadDetails',
      value: function loadDetails() {
  
        if (this.props.route.params.saleDate) {
          this.loadTransactionDetails();
        } else {
          this.loadPropertyDetails();
        }
      }
    }, {
      key: 'repositoryCallback',
      value: function repositoryCallback(transactions) {
  
        this.setState({ transactions: transactions });
        this.loadDetails();
      }
    }, {
      key: '_renderPage',
      value: function _renderPage() {
        if (this.state.transactionDetails) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TransactionTile2.default, { transactionDetails: this.state.transactionDetails }),
            _react2.default.createElement(
              'h4',
              null,
              'Transactions for this property'
            ),
            _react2.default.createElement(_TransactionsTable2.default, { transactions: this.state.transactions })
          );
        } else if (this.state.property) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Tile2.default, { property: this.state.property }),
            _react2.default.createElement(
              'h4',
              null,
              'Transactions for this property'
            ),
            _react2.default.createElement(_TransactionsTable2.default, { transactions: this.state.transactions })
          );
        } else {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_DetailsTile2.default, { rm: this.state.rm, landLocation: this.state.landLocation }),
            _react2.default.createElement(
              'h4',
              null,
              'Transactions for this property'
            ),
            _react2.default.createElement(_TransactionsTable2.default, { transactions: this.state.transactions })
          );
        };
      }
    }, {
      key: 'loadPropertyDetails',
      value: function loadPropertyDetails() {
  
        if (this.state.transactionDetails) {
          this.setState({
            transactionDetails: null
          });
        }
  
        if (!this.state.property) {
          var mapper = new _TransactionToPropertyMapper2.default();
          var property = mapper.mapToProperty(this.state.transactions[0]);
          this.setState({
            property: property
          });
        }
      }
    }, {
      key: 'loadTransactionDetails',
      value: function loadTransactionDetails() {
  
        if (this.saleDate !== this.props.route.params.saleDate) {
          this.saleDate = this.props.route.params.saleDate;
          var saleDate = this.saleDate;
          var transactionDetails = _lodash2.default.find(this.state.transactions, function (x) {
            return x.date === saleDate;
          });
  
          this.setState({
            transactionDetails: transactionDetails
          });
        }
      }
    }]);
  
    function PropertiesPage(props) {
      (0, _classCallCheck3.default)(this, PropertiesPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (PropertiesPage.__proto__ || (0, _getPrototypeOf2.default)(PropertiesPage)).call(this, props));
  
      _this.repositoryCallback = _this.repositoryCallback.bind(_this);
  
      var rm = _this.props.route.params.rm;
      var landLocation = _this.props.route.params.landLocation;
  
      _this.state = {
        rm: rm,
        landLocation: landLocation,
        transactions: null,
        property: null,
        transactionDetails: null
      };
  
      _this.transactionsService = new _TransactionsSearchService2.default();
  
      _this.transactionsService.searchTransactions(_this.state.landLocation, _this.repositoryCallback);
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

/***/ 213:
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
  
  var _Layout = __webpack_require__(112);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(778);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(786);
  
  var _RmInfo = __webpack_require__(323);
  
  var _RmInfo2 = _interopRequireDefault(_RmInfo);
  
  var _RmTransactions = __webpack_require__(324);
  
  var _RmTransactions2 = _interopRequireDefault(_RmTransactions);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
        this.rm = this.props.route.params.rm;
        return _react2.default.createElement(
          _Layout2.default,
          { className: _styles2.default.content },
          _react2.default.createElement(_RmInfo2.default, { rm: this.rm }),
          _react2.default.createElement(_RmTransactions2.default, { rm: this.rm }),
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

/***/ 316:
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
  
  var _RmRepository = __webpack_require__(311);
  
  var _RmRepository2 = _interopRequireDefault(_RmRepository);
  
  var _reactMdl = __webpack_require__(20);
  
  var _rmTileStyles = __webpack_require__(768);
  
  var _rmTileStyles2 = _interopRequireDefault(_rmTileStyles);
  
  var _RmTile = __webpack_require__(327);
  
  var _RmTile2 = _interopRequireDefault(_RmTile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var RmInfo = function (_React$Component) {
    (0, _inherits3.default)(RmInfo, _React$Component);
    (0, _createClass3.default)(RmInfo, [{
      key: 'loadRm',
      value: function loadRm(rm) {
  
        this.setState({ rm: rm });
      }
    }]);
  
    function RmInfo(props) {
      (0, _classCallCheck3.default)(this, RmInfo);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (RmInfo.__proto__ || (0, _getPrototypeOf2.default)(RmInfo)).call(this, props));
  
      _this.loadRm = _this.loadRm.bind(_this);
      _this.state = { rm: {} };
      _this.rmRepository = new _RmRepository2.default();
  
      _this.rmRepository.getRm(_this.props.rm, _this.loadRm);
      return _this;
    }
  
    (0, _createClass3.default)(RmInfo, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_RmTile2.default, { rm: this.state.rm });
      }
    }]);
    return RmInfo;
  }(_react2.default.Component);
  
  ;
  
  exports.default = RmInfo;

/***/ },

/***/ 324:
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
  
  var _TransactionsTable = __webpack_require__(141);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsRepository = __webpack_require__(312);
  
  var _TransactionsRepository2 = _interopRequireDefault(_TransactionsRepository);
  
  var _reactMdl = __webpack_require__(20);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
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
  
      _this.transactionsRepository.getTransactionsForRm(_this.props.rm, 25, _this.repositoryCallback);
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

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Link = __webpack_require__(62);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactMdl = __webpack_require__(20);
  
  var _DetailListItem = __webpack_require__(95);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _Header = __webpack_require__(96);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _tile = __webpack_require__(94);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function DetailsTile(props) {
    return _react2.default.createElement(
      _reactMdl.Card,
      { shadow: 0, className: _tile2.default.card },
      _react2.default.createElement(_Header2.default, { rm: props.rm, landLocation: props.landLocation }),
      _react2.default.createElement(
        _reactMdl.CardText,
        null,
        _react2.default.createElement(_reactMdl.Spinner, null)
      )
    );
  };
  
  exports.default = DetailsTile;

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(20);
  
  var _DetailListItem = __webpack_require__(95);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _Header = __webpack_require__(96);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _tile = __webpack_require__(94);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function RmTile(props) {
    var title = "Transactions for RM " + props.rm.id;
    return _react2.default.createElement(
      _reactMdl.Card,
      { shadow: 0, className: _tile2.default.card },
      _react2.default.createElement(_Header2.default, { title: title, rm: props.rm.id }),
      _react2.default.createElement(
        _reactMdl.CardText,
        null,
        _react2.default.createElement(
          'h4',
          null,
          'RM Information'
        ),
        _react2.default.createElement(
          'ul',
          { className: _tile2.default.detailList },
          _react2.default.createElement(_DetailListItem2.default, {
            label: '# of transactions',
            value: props.rm.transactionCount
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: _tile2.default.detailList },
          _react2.default.createElement(_DetailListItem2.default, {
            label: 'Highest sale price',
            value: props.rm.maxPrice
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: _tile2.default.detailList },
          _react2.default.createElement(_DetailListItem2.default, {
            label: 'Newest transaction',
            value: props.rm.newestTransaction
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: _tile2.default.detailList },
          _react2.default.createElement(_DetailListItem2.default, {
            label: 'Oldest transaction',
            value: props.rm.oldestTransaction
          })
        )
      )
    );
  };
  
  exports.default = RmTile;

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(20);
  
  var _DetailListItem = __webpack_require__(95);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _Header = __webpack_require__(96);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _tile = __webpack_require__(94);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Tile(props) {
      return _react2.default.createElement(
          _reactMdl.Card,
          { shadow: 0, className: _tile2.default.card },
          _react2.default.createElement(_Header2.default, { rm: props.property.rm, landLocation: props.property.landLocation }),
          _react2.default.createElement(
              _reactMdl.CardText,
              null,
              _react2.default.createElement(
                  'h4',
                  null,
                  'Current Property Information'
              ),
              _react2.default.createElement(
                  'ul',
                  { className: _tile2.default.detailList },
                  _react2.default.createElement(_DetailListItem2.default, {
                      label: 'Possible owner',
                      value: props.property.owner
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      label: '# of Acres',
                      value: props.property.acres
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      label: 'Last sold for',
                      value: props.property.lastPrice
                  }),
                  _react2.default.createElement(_DetailListItem2.default, {
                      label: 'Last sold on',
                      value: props.property.lastSold
                  })
              )
          )
      );
  };
  
  exports.default = Tile;

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Link = __webpack_require__(62);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactMdl = __webpack_require__(20);
  
  var _DetailListItem = __webpack_require__(95);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _Header = __webpack_require__(96);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _tile = __webpack_require__(94);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function TransactionTile(props) {
      return _react2.default.createElement(
          _reactMdl.Card,
          { shadow: 0, className: _tile2.default.card },
          _react2.default.createElement(_Header2.default, { rm: props.transactionDetails.rm, landLocation: props.transactionDetails.landLocation, saleDate: props.transactionDetails.date }),
          _react2.default.createElement(
              _reactMdl.CardText,
              null,
              _react2.default.createElement(
                  'h4',
                  null,
                  'Transaction Information'
              ),
              _react2.default.createElement(
                  _reactMdl.Grid,
                  null,
                  _react2.default.createElement(
                      _reactMdl.Cell,
                      { col: 5 },
                      _react2.default.createElement(
                          'ul',
                          { className: _tile2.default.detailList },
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: 'Transaction Date',
                              value: props.transactionDetails.date
                          }),
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: 'Price',
                              value: props.transactionDetails.price
                          }),
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: '# of Acres',
                              value: props.transactionDetails.acres
                          }),
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: 'Price/Acre',
                              value: props.transactionDetails.perAcre
                          })
                      )
                  ),
                  _react2.default.createElement(
                      _reactMdl.Cell,
                      { col: 7 },
                      _react2.default.createElement(
                          'ul',
                          { className: _tile2.default.detailList },
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: 'Assessed Value',
                              value: props.transactionDetails.assessedValue
                          }),
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: 'Buyer',
                              value: props.transactionDetails.buyer
                          }),
                          _react2.default.createElement(_DetailListItem2.default, {
                              label: 'Seller',
                              value: props.transactionDetails.seller
                          })
                      )
                  )
              )
          )
      );
  };
  
  exports.default = TransactionTile;

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(17)();
  // imports
  
  
  // module
  exports.push([module.id, "._38z3{width:100%;margin:auto}._1xG-{color:#fff;height:55px;background:#3e4eb8}", ""]);
  
  // exports
  exports.locals = {
  	"card": "_38z3",
  	"cardTitle": "_1xG-"
  };

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(17)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){.Da5C{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "Da5C"
  };

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(17)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){._16-N{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "_16-N"
  };

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(588);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(18)(content, {});
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

/***/ 777:
[851, 598],

/***/ 778:
[851, 599],

/***/ 785:
/***/ function(module, exports) {

  module.exports = {"title":"Sask Land Transactions Search","html":""};

/***/ },

/***/ 786:
785

});
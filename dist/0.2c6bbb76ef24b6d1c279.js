webpackJsonp([0],{

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(23);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(22);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(112);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(776);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(784);
  
  var _LocationTransactionsTable = __webpack_require__(336);
  
  var _LocationTransactionsTable2 = _interopRequireDefault(_LocationTransactionsTable);
  
  var _TransactionsSearchService = __webpack_require__(319);
  
  var _TransactionsSearchService2 = _interopRequireDefault(_TransactionsSearchService);
  
  var _TransactionTile = __webpack_require__(333);
  
  var _TransactionTile2 = _interopRequireDefault(_TransactionTile);
  
  var _Tile = __webpack_require__(332);
  
  var _Tile2 = _interopRequireDefault(_Tile);
  
  var _TransactionToPropertyMapper = __webpack_require__(320);
  
  var _TransactionToPropertyMapper2 = _interopRequireDefault(_TransactionToPropertyMapper);
  
  var _lodash = __webpack_require__(132);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _DetailsTile = __webpack_require__(329);
  
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
            _react2.default.createElement(_LocationTransactionsTable2.default, { transactions: this.state.transactions })
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
            _react2.default.createElement(_LocationTransactionsTable2.default, { transactions: this.state.transactions })
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
            _react2.default.createElement(_LocationTransactionsTable2.default, { transactions: this.state.transactions })
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

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(23);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(22);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(112);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(773);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(782);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var AboutPage = function (_React$Component) {
    (0, _inherits3.default)(AboutPage, _React$Component);
  
    function AboutPage() {
      (0, _classCallCheck3.default)(this, AboutPage);
      return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AboutPage, [{
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
            'h1',
            null,
            _index.title
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _index.html } })
        );
      }
    }]);
    return AboutPage;
  }(_react2.default.Component);
  
  exports.default = AboutPage;

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(23);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(22);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(112);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(777);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(785);
  
  var _RmInfo = __webpack_require__(327);
  
  var _RmInfo2 = _interopRequireDefault(_RmInfo);
  
  var _RmTransactions = __webpack_require__(328);
  
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

/***/ 320:
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

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(23);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(22);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _RmRepository = __webpack_require__(315);
  
  var _RmRepository2 = _interopRequireDefault(_RmRepository);
  
  var _reactMdl = __webpack_require__(17);
  
  var _rmTileStyles = __webpack_require__(768);
  
  var _rmTileStyles2 = _interopRequireDefault(_rmTileStyles);
  
  var _RmTile = __webpack_require__(331);
  
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

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(23);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(22);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _TransactionsTable = __webpack_require__(213);
  
  var _TransactionsTable2 = _interopRequireDefault(_TransactionsTable);
  
  var _TransactionsRepository = __webpack_require__(316);
  
  var _TransactionsRepository2 = _interopRequireDefault(_TransactionsRepository);
  
  var _reactMdl = __webpack_require__(17);
  
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
  
  var _reactMdl = __webpack_require__(17);
  
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

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(17);
  
  var _DetailListItem = __webpack_require__(95);
  
  var _DetailListItem2 = _interopRequireDefault(_DetailListItem);
  
  var _Header = __webpack_require__(96);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _tile = __webpack_require__(94);
  
  var _tile2 = _interopRequireDefault(_tile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function rmLogo(rmId) {
    if (rmId == 491) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: 'https://www.dropbox.com/s/yxmmjlc6fkgdob3/logo.png?dl=1' })
      );
    }
  }
  
  function rmDownloads(rmId) {
    if (rmId == 491) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'RM Files'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://www.dropbox.com/s/vj18k2591pcski3/November_14_2016_Minutes.pdf?dl=1' },
              'November 2016, Council Meeting Minutes'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://www.dropbox.com/s/yc8pou8a6wmx4gy/October_11_2016_Minutes.pdf?dl=1' },
              'October 2016, Council Meeting Minutes'
            )
          )
        )
      );
    }
  }
  
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
          _reactMdl.Grid,
          null,
          _react2.default.createElement(
            _reactMdl.Cell,
            { col: 5 },
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
          ),
          _react2.default.createElement(
            _reactMdl.Cell,
            { col: 5 },
            rmDownloads(props.rm.id)
          ),
          _react2.default.createElement(
            _reactMdl.Cell,
            { col: 2 },
            rmLogo(props.rm.id)
          )
        )
      )
    );
  };
  
  exports.default = RmTile;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactMdl = __webpack_require__(17);
  
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

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Link = __webpack_require__(62);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _reactMdl = __webpack_require__(17);
  
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

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(19);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(20);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(23);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _createClass2 = __webpack_require__(21);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _inherits2 = __webpack_require__(22);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _TableCell = __webpack_require__(212);
  
  var _TableCell2 = _interopRequireDefault(_TableCell);
  
  var _reactResponsive = __webpack_require__(303);
  
  var _reactResponsive2 = _interopRequireDefault(_reactResponsive);
  
  var _lodash = __webpack_require__(132);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _transactionsTable = __webpack_require__(314);
  
  var _transactionsTable2 = _interopRequireDefault(_transactionsTable);
  
  var _reactMdl = __webpack_require__(17);
  
  var _history = __webpack_require__(63);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var LocationTransactionsList = function (_React$Component) {
    (0, _inherits3.default)(LocationTransactionsList, _React$Component);
    (0, _createClass3.default)(LocationTransactionsList, [{
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
    }]);
  
    function LocationTransactionsList(props) {
      (0, _classCallCheck3.default)(this, LocationTransactionsList);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (LocationTransactionsList.__proto__ || (0, _getPrototypeOf2.default)(LocationTransactionsList)).call(this, props));
  
      _this.goToTransactionsPage = function (transactionId) {
  
        var transactionDetails = _lodash2.default.find(_this.props.transactions, function (x) {
          return x.id === transactionId;
        });
        _history2.default.push({ pathname: "/" + transactionDetails.rm + "/" + transactionDetails.landLocation + "/" + transactionDetails.date });
      };
  
      _this.renderDisplayTransactionDetails = function (transactionId) {
        return _react2.default.createElement(_TableCell2.default, { onClick: function onClick() {
            return _this.goToTransactionsPage(transactionId);
          } });
      };
  
      return _this;
    }
  
    (0, _createClass3.default)(LocationTransactionsList, [{
      key: '_renderTable',
      value: function _renderTable() {
        if (this.props.transactions) {
          return _react2.default.createElement(
            'div',
            { className: _transactionsTable2.default.transactionsTable },
            _react2.default.createElement(
              _reactResponsive2.default,
              { maxWidth: 899 },
              _react2.default.createElement(
                _reactMdl.DataTable,
                {
                  sortable: true,
                  shadow: 0,
                  rows: this.props.transactions,
                  className: _transactionsTable2.default.table
                },
                this._renderCell("price", "Price"),
                this._renderCell("date", "Date"),
                this._renderDetailsCell("id")
              )
            ),
            _react2.default.createElement(
              _reactResponsive2.default,
              { minWidth: 900 },
              _react2.default.createElement(
                _reactMdl.DataTable,
                {
                  sortable: true,
                  shadow: 0,
                  rows: this.props.transactions,
                  className: _transactionsTable2.default.table
                },
                this._renderCell("price", "Price"),
                this._renderCell("date", "Date"),
                this._renderCell("buyer", "Buyer"),
                this._renderCell("seller", "Seller"),
                this._renderDetailsCell("id")
              )
            )
          );
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this._renderTable()
        );
      }
    }]);
    return LocationTransactionsList;
  }(_react2.default.Component);
  
  exports.default = LocationTransactionsList;

/***/ },

/***/ 589:
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

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(16)();
  // imports
  
  
  // module
  exports.push([module.id, "@media screen and (max-width:1024px){._2JuB{padding:0 16px}}", ""]);
  
  // exports
  exports.locals = {
  	"content": "_2JuB"
  };

/***/ },

/***/ 599:
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

/***/ 600:
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

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(589);
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

/***/ 773:
[850, 596],

/***/ 776:
[850, 599],

/***/ 777:
[850, 600],

/***/ 782:
/***/ function(module, exports) {

  module.exports = {"title":"About Us","html":"<h2>Cadme comitum fecere</h2>\n<p>Lorem markdownum velis auras figuram spes solebat spectabat, cum alium,\nplenissima aratri visae herbarum in corpore silvas consumpta. Subito virgae nec\nparatae flexit et niveae repperit erat paratu cum albis steterat conclamat hic!</p>\n<p>Nocte suae ligat! <em>Si</em> nitidum pervia, illa tua, ab minimo pasci dabitur? In\nfictus concurreret pennis, illis cum accipe rogavi in et nostro cum lacertis\nhostibus ab saxo ne. Genibusque vixque; sine videt terribili lucos ipsum vobis\nresque, et suum pietatis fulvis, est velle. Semele oscula ferat frigidus mactata\nmontes, es me parari, piae.</p>\n<h2>Inflataque ait leves frigida</h2>\n<p>Letum per ipsa nostro animae, mari illuc in levi corpus aestibus excussam\ndeflentem sic cuius. Venere dedit illa cui in quo senecta artus bella inficit,\nAchaica. Videbatur crinem resonantia alto dea umida dicitur igne; meus signa\nhabet; est. Cognovit coepta: similes fugis: habuissem votivi liquida: ictus visi\nnostra me Adoni.</p>\n<h2>Laedar cum margine quoque</h2>\n<p>Quam dato ullis, acer venturi volantes! Tuam non non cursu acta hic, novem\nnutrit, in sidera viscera iam fontes tempora, omnes. Saturnius artus inquit,\nconatoque erectos lenius, carinae, ora est infamia elige per Medusaei induitur.\nQuem quem ab postquam tunc frondescere nodis capiam labique. Voluere luce\nSemeles.</p>\n<pre><code>    <span class=\"hljs-keyword\">if</span> (delete(digital, hibernateSoft, dynamicExcelVpn) &gt; io_secondary_led /\n            <span class=\"hljs-number\">84</span>) {\n        disk = load;\n        orientationPci.matrix_laptop(modelSsdTweet);\n    } <span class=\"hljs-keyword\">else</span> {\n        kdeEmoticonLed.mebibyte_algorithm_domain(<span class=\"hljs-number\">2</span>,\n                hackerCtr.rom_iso_desktop.scarewarePrimaryBankruptcy(station,\n                disk_mask_matrix, restore_crt));\n        cameraSpyware(<span class=\"hljs-number\">4</span>, multitasking(<span class=\"hljs-number\">-3</span>, log_dfs_controller));\n        menuCisc.swappable -= w(mount_vle_unicode, <span class=\"hljs-number\">5</span>);\n    }\n    <span class=\"hljs-keyword\">var</span> optic_spider = <span class=\"hljs-keyword\">new</span><span class=\"hljs-type\">bieFunctionThick</span>(<span class=\"hljs-number\">-3</span>, esportsKbpsUnix);\n    <span class=\"hljs-keyword\">var</span> dvd_ctp_resolution = dithering;\n</code></pre>\n<h2>Usus fixurus illi petunt</h2>\n<p>Domosque tune amas mihi adhuc et <em>alter per</em> suasque versavitque iners\ncrescentemque nomen verba nunc. Acervos hinc natus si habet. Et cervix imago\nquod! Arduus dolet!</p>\n<pre><code>    cpcDdrCommand.window(moodleAlpha, im, server_alpha.doubleVrmlMonochrome(\n            iosBar - -<span class=\"hljs-number\">2</span>, white_dual, ad(<span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">94</span>, <span class=\"hljs-number\">83</span>)));\n    mbps_typeface_publishing.bit.host_flash_capacity(click(<span class=\"hljs-number\">90</span>,\n            cyberspace_srgb_pup - mpeg, marketing_trackback +\n            table_plagiarism_domain));\n    syn_e = powerExtension * defragmentNntpOsd(alertOutputNode(pop,\n            pageResponsiveDrive));\n    <span class=\"hljs-function\"><span class=\"hljs-keyword\">method</span> -= <span class=\"hljs-title\">switch_newsgroup_flaming</span>;</span>\n</code></pre>\n<p>Aliquid mansura arida altismunera <strong>in illi</strong>. Dignus vir pontum <em>crimen\nversabat</em> carpunt omnes rotis Canentem erant in Oebalio, et manu senecta\niungere. Prima diurnis!</p>\n"};

/***/ },

/***/ 784:
/***/ function(module, exports) {

  module.exports = {"title":"Sask Land Transactions Search","html":""};

/***/ },

/***/ 785:
784

});
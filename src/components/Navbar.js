class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'home',
            dateJson: null,
            navs: [
                {id: 1, key: 'home', label: 'Home'},
                {id: 2, key: 'page1', label: 'Page 1'},
                {id: 3, key: 'page2', label: 'Page 2'}
            ],
            isCollapsed: true
        };

        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        if(navigator.onLine) {
            $.ajax('http://date.jsontest.com')
            .then(response => {
                this.setState({
                    dateJson: response
                });
            }).catch(() => { });
        }

        $(window).on('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        $(window).off('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        if(!this.state.isCollapsed && (window.innerWidth >= 768)) {
            this.setState({isCollapsed: true});
        }
    }

    handleNavClick(e) {
        this.setState({
            activePage: e.target.dataset.key
        });
    }

    handleNavbarToggleCollapse(e) {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {
        const { activePage, dateJson, navs, isCollapsed } = this.state;

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className={"navbar-toggle " + (isCollapsed ? "collapsed" : "")} aria-expanded={isCollapsed ? "false": "true"} onClick={this.handleNavbarToggleCollapse.bind(this)}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="javascript:void(0);">React</a>
                    </div>
                    <div className={"navbar-collapse collapse " + (isCollapsed ? "" : "in")}>
                        <ul className="nav navbar-nav">
                            {
                                navs.map(n => {
                                    return (
                                        <li key={n.key} className={(activePage == n.key ? "active" : "")}><a href="javascript:void(0);" data-key={n.key} onClick={this.handleNavClick.bind(this)}>{n.label}</a></li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="javascript:void(0);"><b>Last Opened Time:</b> {dateJson ? (dateJson.date + ' ' + dateJson.time) : null}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
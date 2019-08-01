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
            ]
        };
    }

    componentDidMount() {
        $.ajax('http://date.jsontest.com')
        .then(response => {
            this.setState({
                dateJson: response
            });
        }).catch(() => {
            
        });
    }

    handleNavClick(e) {
        this.setState({
            activePage: e.target.dataset.key
        });
    }

    render() {
        const { activePage, dateJson, navs } = this.state;

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="javascript:void(0);">React</a>
                    </div>
                    <ul className="nav navbar-nav">
                        {
                            navs.map(n => {
                                return (
                                    <li key={n.key} className={(activePage == n.key ? "active" : "") + " blabla"}><a href="javascript:void(0);" data-key={n.key} onClick={this.handleNavClick.bind(this)}>{n.label}</a></li>
                                )
                            })
                        }
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="javascript:void(0);"><b>Last Opened Time:</b> {dateJson ? (dateJson.date + ' ' + dateJson.time) : null}</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
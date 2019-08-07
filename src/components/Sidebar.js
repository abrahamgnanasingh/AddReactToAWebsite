class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    id: 1, key: 'home', label: 'Home', isCollapsed: true, isCollapsing: false, offsetHeight: 0, subMenus: [
                        { id: 1.1, key: 'page1', label: 'Page 1' },
                        { id: 1.2, key: 'page2', label: 'Page 2' }
                    ]
                },
                {
                    id: 2, key: 'settings', label: 'Settings', isCollapsed: true, isCollapsing: false, offsetHeight: 0, subMenus: [
                        { id: 2.1, key: 'general', label: 'General' },
                        { id: 2.2, key: 'personal', label: 'Personal' }
                    ]
                },
                { id: 3, key: 'about', label: 'About', isCollapsed: true, isCollapsing: false, offsetHeight: 0, subMenus: [] }
            ]
        };
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    dimension($el) {
        var hasWidth = $el.hasClass('width');
        return hasWidth ? 'width' : 'height';
    }

    handleDropdownToggle(e, menu, index) {
        if(menu.subMenus.length) {
            var collapseMenuEl = this.refs['collapseMenu' + menu.id];
            var menus = JSON.parse(JSON.stringify(this.state.menus));
            var isCollapsed = false;
            for(var i in menus) {
                if(menus[i].key == menu.key) {
                    isCollapsed = menus[i].isCollapsed;
                    menus[i].isCollapsed = !isCollapsed;
                    menus[i].isCollapsing = true;
                    var $collapseMenuEl = $(collapseMenuEl);
                    var dimension = this.dimension($collapseMenuEl);
                    // var offsetHeight = $collapseMenuEl[dimension]($collapseMenuEl[dimension]())[0].offsetHeight;
                    menus[i].offsetHeight = $collapseMenuEl[dimension]();
                }
            }
            this.setState({
                menus
            });
            if(this.collapseTimeout) { clearTimeout(this.collapseTimeout); }
            this.collapseTimeout = setTimeout(() => {
                var menus = JSON.parse(JSON.stringify(this.state.menus));
                for(var i in menus) {
                    if(menus[i].key == menu.key) {
                        menus[i].isCollapsing = false;
                        menus[i].offsetHeight = 0;
                    }
                }
                this.setState({
                    menus
                });
            }, 300);
        }
    }

    render() {
        const { menus } = this.state;

        return (
            <aside className="sidebar pull-left">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    {
                        menus.map((menu, index) => {
                            return (
                                <li key={menu.id} className={menu.id == '1' ? "active" : ""}>
                                    <a href="javascript:void(0)" aria-expanded={menu.isCollapsed ? "false" : "true"} className="dropdown-toggle" onClick={e => this.handleDropdownToggle(e, menu, index)}>{menu.label}</a>
                                    {
                                        menu.subMenus.length ?
                                        <ul ref={'collapseMenu' + menu.id} className={"list-unstyled " + (menu.isCollapsing ? "collapsing" : ("collapse " + (menu.isCollapsed ? "" : "in")))} style={{height: (menu.isCollapsed ? 0 : '80px')}}>
                                            {
                                                menu.subMenus.map(subMenu => {
                                                    return (
                                                        <li key={subMenu.id}>
                                                            <a href="javascript:void(0)">{subMenu.label}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul> : null
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        )
    }
}
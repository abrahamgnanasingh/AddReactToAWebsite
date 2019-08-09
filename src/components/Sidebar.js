class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menus: [
                {
                    id: 1, key: 'home', label: 'Home', isCollapsed: true, isCollapsing: false, offsetHeight: '', subMenus: [
                        { id: 1.1, key: 'page1', label: 'Page 1' },
                        { id: 1.2, key: 'page2', label: 'Page 2' }
                    ]
                },
                {
                    id: 2, key: 'settings', label: 'Settings', isCollapsed: true, isCollapsing: false, offsetHeight: '', subMenus: [
                        { id: 2.1, key: 'general', label: 'General' },
                        { id: 2.2, key: 'personal', label: 'Personal' }
                    ]
                },
                { id: 3, key: 'about', label: 'About', isCollapsed: true, isCollapsing: false, offsetHeight: '', subMenus: [] }
            ]
        };
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    // dimension($el) {
    //     var hasWidth = $el.hasClass('width');
    //     return hasWidth ? 'width' : 'height';
    // }

    handleDropdownToggle(e, menu, currIndex) {
        if(menu.subMenus.length) {
            var menus = JSON.parse(JSON.stringify(this.state.menus));
            var isCurrMenuCollapsed = false;
            var currentMenu = menus[currIndex];
            isCurrMenuCollapsed = !(currentMenu.isCollapsed);
            currentMenu.offsetHeight = '';
            // currentMenu.offsetHeight = collapseMenuEl.offsetHeight; //clientHeight: Height including padding, offsetHeight: Height including padding and border

            this.setState({
                menus
            }, () => {
                var menus = JSON.parse(JSON.stringify(this.state.menus));
                var currentMenu = menus[currIndex];
                currentMenu.isCollapsed = isCurrMenuCollapsed;
                currentMenu.isCollapsing = true;
                if(isCurrMenuCollapsed) {
                    currentMenu.offsetHeight = 0;
                } else {
                    var collapseMenuEl = this.refs['collapseMenu' + menu.id];
                    var cMElstyle = collapseMenuEl.style;
                    cMElstyle.display = 'block';
                    cMElstyle.opacity = 0;
                    cMElstyle.position = 'absolute';
                    debugger;
                    currentMenu.offsetHeight = collapseMenuEl.offsetHeight; //clientHeight: Height including padding, offsetHeight: Height including padding and border
                    cMElstyle.display = '';
                    cMElstyle.opacity = '';
                    cMElstyle.position = '';
                }
                this.setState({
                    menus
                });

                if(this.collapseTimeout) { clearTimeout(this.collapseTimeout); }
                this.collapseTimeout = setTimeout(() => {
                    var menus = JSON.parse(JSON.stringify(this.state.menus));
                    var currentMenu = menus[currIndex];
                    currentMenu.isCollapsing = false;
                    currentMenu.offsetHeight = isCurrMenuCollapsed ? 0 : '';
                    this.setState({
                        menus
                    });
                }, 300);
            });
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
                                    <a href="javascript:void(0)" aria-expanded={menu.isCollapsed ? "false" : "true"} className="dropdown-toggle" onClick={e => this.handleDropdownToggle(e, menu, index)}>{menu.label + menu.offsetHeight}</a>
                                    {
                                        menu.subMenus.length ?
                                        <ul ref={'collapseMenu' + menu.id} className={"list-unstyled " + (menu.isCollapsing ? "collapsing" : ("collapse " + (menu.isCollapsed ? "" : "in")))} style={{height: menu.offsetHeight}}>
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
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
            currentMenu.isCollapsed = isCurrMenuCollapsed;
            currentMenu.isCollapsing = true;

            var collapseMenuEl = this.refs['collapseMenu' + menu.id];
            var cMElstyle = collapseMenuEl.style;
            var cMHeight = cMElstyle.height = '';

            if(isCurrMenuCollapsed) {
                cMHeight = 0;
            } else {
                cMElstyle.display = 'block';
                cMElstyle.opacity = 0;
                cMElstyle.position = 'absolute';
                // debugger;
                cMHeight = collapseMenuEl.offsetHeight; //clientHeight: Height including padding, offsetHeight: Height including padding and border
                cMElstyle.display = '';
                cMElstyle.opacity = '';
                cMElstyle.position = '';
            }

            this.setState({
                menus
            }, () => {
                setTimeout(() => cMElstyle.height = cMHeight + 'px', 10);

                if(this.collapseTimeout) { clearTimeout(this.collapseTimeout); }
                this.collapseTimeout = setTimeout(() => {
                    this.collapseTimeout = null;
                    var menus = JSON.parse(JSON.stringify(this.state.menus));
                    var currentMenu = menus[currIndex];
                    currentMenu.isCollapsing = false;
                    cMElstyle.height = isCurrMenuCollapsed ? 0 : '';
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
                                    <a href="javascript:void(0)" aria-expanded={menu.isCollapsed ? "false" : "true"} className="dropdown-toggle" onClick={e => this.handleDropdownToggle(e, menu, index)}>{menu.label}</a>
                                    {
                                        menu.subMenus.length ?
                                        <ul ref={'collapseMenu' + menu.id} className={"list-unstyled " + (menu.isCollapsing ? "collapsing" : ("collapse " + (menu.isCollapsed ? "" : "in")))}>
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
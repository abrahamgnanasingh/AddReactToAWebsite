class Menu extends React.Component {
    static Item = ({children}) => <li>{children}</li>;

    render() {
        return <ul>{this.props.children}</ul>
    }
}
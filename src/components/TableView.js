class TableView extends React.Component {
    render() {
        return (
            <div>
                <table border="1" style={{borderCollapse: 'collapse'}}>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TableView;
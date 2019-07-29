class TableView extends React.Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TableView;
class TableView extends React.Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead></thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TableView;
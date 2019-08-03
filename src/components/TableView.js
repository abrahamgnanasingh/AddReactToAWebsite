class TableView extends React.Component {
    render() {
        const { tableHeaderRow, tableBodyRow } = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        {tableHeaderRow}
                    </thead>
                    <tbody>
                        {tableBodyRow}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TableView;
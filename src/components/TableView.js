class TableView extends React.Component {
    render() {
        const { headerRow, bodyRow } = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        {headerRow}
                    </thead>
                    <tbody>
                        {bodyRow}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TableView;
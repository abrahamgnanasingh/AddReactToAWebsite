class TableView extends React.Component {
    render() {
        return (
            <div class="table-responsive">
                <table class="table table-bordered">
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default TableView;
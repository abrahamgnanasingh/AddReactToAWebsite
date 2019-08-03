class TableHeader extends React.Component {
    render() {
        return (
            <tr>
                {
                    this.props.data.map(h => <th key={h.id}>{h.label}</th>)
                }
            </tr>
        )
    }
}

// export default TableView;
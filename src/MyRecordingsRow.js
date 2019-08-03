class MyRecordingsRow extends React.Component {
    static defaultProps = {
        name: 'My Recordings'
    }
    render() {
        // if(true) {
        //     throw new Error("dsa");
        // }
        const { data, onRecordingDelete } = this.props;

        if(!data.length) return <tr><td className="text-center" colSpan={4}>No recordings found</td></tr>

        return data.map((r, index) => {
            return (
                <tr key={r.id}>
                    <td>{r.title}</td>
                    <td>{r.startTime}</td>
                    <td>{r.duration}</td>
                    <td>
                        <button className="btn btn-danger" onClick={e => onRecordingDelete(e, r, index)}>Delete</button>
                    </td>
                </tr>
            )
        });
    }
}
class MyRecordingsRow extends React.Component {
    static defaultProps = {
        name: 'My Recordings'
    }
    // constructor(props) {
    //     super(props);

        
    // }
    handleRecordingDelete(r) {
        alert(r.id);
    }
    render() {
        // if(true) {
        //     throw new Error("dsa");
        // }
        return this.props.data.map(r => {
            return (
                <tr key={r.id}>
                    <td>{r.title}</td>
                    <td>{r.startTime}</td>
                    <td>{r.duration}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.handleRecordingDelete(r)}>Delete</button>
                    </td>
                </tr>
            )
        });
    }
}
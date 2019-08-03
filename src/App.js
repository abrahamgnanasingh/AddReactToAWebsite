// import TableView from './TableView';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myRecordingsHeader: [
                { id: 1, label: 'Topic' },
                { id: 2, label: 'Start Time' },
                { id: 3, label: 'Duration' },
                { id: 4, label: 'Actions' }
            ],
            myRecordings: [
                { id: 1, title: 'My Meeting (1)', duration: '30 mins', startTime: '25th Jan 2019' },
                { id: 2, title: 'My Meeting (2)', duration: '20 mins', startTime: '26th Jan 2019' },
                { id: 3, title: 'My Meeting (3)', duration: '10 mins', startTime: '27th Jan 2019' }
            ]
        };

        this.handleRecordingDelete = this.handleRecordingDelete.bind(this);
    }

    componentDidMount() {
        console.log('Mounted!');
    }

    componentDidUpdate() {
        //update changes come here
        console.log('Updated!!');
    }

    componentWillUnmount() {
        console.log('Unmounting.');
    }

    handleRecordingDelete(e, r, index) {
        // alert(r.id);
        var mR = JSON.parse(JSON.stringify(this.state.myRecordings));
        mR.splice(index, 1);
        this.setState({
            myRecordings: mR
        });
    }

    render() {
        const { myRecordingsHeader, myRecordings } = this.state;

        return (
            <ErrorBoundary>
                <Navbar />

                <div className="container" style={{marginTop: 50}}>
                    <h3>{this.props.title}</h3>

                    <div className="row">
                        <div className="col-md-12">
                            <TableView headerRow={<TableHeader data={myRecordingsHeader} />} bodyRow={<MyRecordingsRow data={myRecordings} onRecordingDelete={this.handleRecordingDelete} />}>
                            </TableView>
                        </div>

                        {/* <div className="col-md-12">
                            <Hooks />
                        </div> */}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

// export default App;
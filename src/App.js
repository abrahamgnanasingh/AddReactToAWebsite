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

    // static getDerivedStateFromProps(props, state) {
    //     // Store prevId in state so we can compare when props change.
    //     // Clear out previously-loaded data (so we don't render stale stuff).
    //     if (props.id !== state.prevId) {
    //         return {
    //             externalData: null,
    //             prevId: props.id
    //         };
    //     }
    //     // No state update necessary
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // Are we adding new items to the list?
    //     // Capture the scroll position so we can adjust scroll later.
    //     if (prevProps.list.length < this.props.list.length) {
    //       return (
    //         this.listRef.scrollHeight - this.listRef.scrollTop
    //       );
    //     }
    //     return null;
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //update changes come here
        console.log('Updated!!');
        // if (this.state.externalData === null) {
        //     this._loadAsyncData(this.props.id);
        // }

        // // If we have a snapshot value, we've just added new items.
        // // Adjust scroll so these new items don't push the old ones out of view.
        // // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        // if(snapshot !== null) {
        //     this.listRef.scrollTop = this.listRef.scrollHeight - snapshot;
        // }
    }

    componentWillUnmount() {
        console.log('Unmounting.');
    }

    handleRecordingDelete(e, r, index) {
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

                <Sidebar />

                <div className="main-container" style={{marginTop: 50, marginLeft: 250}}>
                    <div className="container">
                        <h3>{this.props.title}</h3>

                        <div className="row">
                            <div className="col-md-12">
                                <TableView headerRow={<TableHeaderRow data={myRecordingsHeader} />} bodyRow={<MyRecordingsRow data={myRecordings} onRecordingDelete={this.handleRecordingDelete} />}>
                                </TableView>
                            </div>

                            {/* <div className="col-md-12">
                                <Hooks />
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </ErrorBoundary>
        )
    }
}

// export default App;
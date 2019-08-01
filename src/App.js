// import TableView from './TableView';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myRecordings: [
                { id: 1, title: 'My Meeting (1)', duration: '30 mins', startTime: '25th Jan 2019' },
                { id: 2, title: 'My Meeting (2)', duration: '20 mins', startTime: '26th Jan 2019' },
                { id: 3, title: 'My Meeting (3)', duration: '10 mins', startTime: '27th Jan 2019' }
            ]
        };
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

    render() {
        // const { blabla } = this.state;

        return (
            <ErrorBoundary>
                <Navbar />

                <div className="container" style={{marginTop: 50}}>
                    <h3>{this.props.title}</h3>

                    <div className="row">
                        <div className="col-md-12">
                            <TableView>

                                <MyRecordingsRow data={this.state.myRecordings} />
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
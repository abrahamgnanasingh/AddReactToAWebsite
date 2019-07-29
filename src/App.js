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

    render() {
        return (
            <ErrorBoundary>
                <div class="container">
                    <h3>
                        <svg viewBox="0 0 24 24" style={{width: 16, height: 16, fill: 'red'}}>
                            <g>
                                <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
                            </g>
                        </svg>
                        My Recordings
                    </h3>

                    <Hooks />

                    <TableView>

                        <MyRecordingsRow data={this.state.myRecordings} />
                    </TableView>
                </div>
            </ErrorBoundary>
        )
    }
}

// export default App;
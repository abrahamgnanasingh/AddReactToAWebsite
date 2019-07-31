// import TableView from './TableView';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateJson: null,
            myRecordings: [
                { id: 1, title: 'My Meeting (1)', duration: '30 mins', startTime: '25th Jan 2019' },
                { id: 2, title: 'My Meeting (2)', duration: '20 mins', startTime: '26th Jan 2019' },
                { id: 3, title: 'My Meeting (3)', duration: '10 mins', startTime: '27th Jan 2019' }
            ]
        };
    }

    componentDidMount() {
        console.log('Mounted!');
        $.ajax('http://date.jsontest.com')
        .then(response => {
            this.setState({
                dateJson: response
            });
        }).catch(() => {
            
        })
    }

    componentDidUpdate() {
        //update changes come here
        console.log('Updated!!');
    }

    componentWillUnmount() {
        console.log('Unmounting.');
    }

    render() {
        const { dateJson } = this.state;

        return (
            <ErrorBoundary>
                <div className="container">
                    <h3>
                        {this.props.title}
                    </h3>

                    <p>Current Time: {dateJson ? (dateJson.date + ' ' + dateJson.time) : null}</p>

                    <TableView>

                        <MyRecordingsRow data={this.state.myRecordings} />
                    </TableView>

                    <Hooks />
                </div>
            </ErrorBoundary>
        )
    }
}

// export default App;
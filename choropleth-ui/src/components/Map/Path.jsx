import React from "react"

class Path extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fill: '#f7fbff'};
        //colors from ColorBrewer: https://colorbrewer2.org/
        this.colors = [
            '#f7fbff',
            '#deebf7',
            '#c6dbef',
            '#9ecae1',
            '#6baed6',
            '#4292c6',
            '#2171b5',
            '#08519c',
            '#08306b'
        ]
    }

    componentDidMount() {
        this.tick()
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const recolor = Math.floor(Math.random() * 5)
        if(recolor === 0) {
            const colorIndex = Math.floor(Math.random() * 9)
            this.setState({
                fill: this.colors[colorIndex]
            });
        }
    }

    render() {
        return (
            <path
                d={this.props.pathGenerator(this.props.shape)}
                //fill={this.props.fill}
                fill={this.state.fill}
                stroke={this.props.stroke}
            >
                <title>
                    {this.props.shape.properties.name}
                </title>
            </path>
        )
    }
}

export default Path;
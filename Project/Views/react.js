'use strict';

const e = React.createElement;
var badvalue = false;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

class BadVal extends React.Component {
    render() {
        return (
            e(
                "div",
                {
                    className: "weather"
                },
                e("h1", null, "Weather app"),
                e(
                    "p",
                    null,
                    'Please provide a valid ZIP code below or click the "Use my location" service'
                ),
                e("input", {
                    type: "text",
                    placeholder: "ZIP code",
                    id: "zipcode"
                }),
                e("br", null),
                e(
                    "button",
                    {
                        id: "next",
                        onClick: () => { doSomething(); }
                    },
                    "Next"
                ),
                e("br", null),
                e(
                    "button",
                    {
                        id: "location",
                        onClick: () => { doElse() }
                    },
                    "Use my location!"
                ),
                e(
                    "p",
                    {
                        id: "bads",
                    },
                    "Invalid input found!"
    
                )
            )
        )
    }
}

class weatherInput extends React.Component {
    render() {
        return (
            e(
                "div",
                {
                    className: "weather"
                },
                e("h1", null, "Weather app"),
                e(
                    "p",
                    null,
                    'Please provide a valid ZIP code below or click the "Use my location" service'
                ),
                e("input", {
                    type: "text",
                    placeholder: "ZIP code",
                    id: "zipcode"
                }),
                e("br", null),
                e(
                    "button",
                    {
                        id: "next",
                        onClick: () => { doSomething(); }
                    },
                    "Next"
                ),
                e("br", null),
                e(
                    "button",
                    {
                        id: "location",
                        onClick: () => { doElse() }
                    },
                    "Use my location!"
                )
            )
        )
    }
}

function doSomething() {

    let zip = document.getElementById("zipcode").value;
    console.log(zip);
    /*
    //gets the input from 
    if (zip == 1234) {
        badvalue = true;
    }
*/
}
function doElse() {
    console.log("it works too");

}
ReactDOM.render(React.createElement(weatherInput), document.getElementById('root'))